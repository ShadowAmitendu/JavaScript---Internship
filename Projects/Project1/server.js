const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { mergePdfs } = require("./merge");

const app = express();
const PORT = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));

const upload = multer({
	dest: path.join(__dirname, "uploads/"),
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res) => {
	try {
		if (!req.files || req.files.length < 2) {
			return res.status(400).send("Please upload exactly 2 PDF files.");
		}

		const file1Path = req.files[0].path;
		const file2Path = req.files[1].path;

		const mergedFilename = await mergePdfs(file1Path, file2Path);

		req.files.forEach(file => {
			fs.unlink(file.path, err => {
				if (err) console.error(`Failed to delete ${file.path}:`, err);
			});
		});

		res.redirect(`/static/${mergedFilename}.pdf`);
	} catch (err) {
		console.error("Error merging PDFs:", err);
		res.status(500).send("An error occurred while merging the PDFs.");
	}
});

app.listen(PORT, () => {
	console.log(`Server running at: http://localhost:${PORT}`);
});
