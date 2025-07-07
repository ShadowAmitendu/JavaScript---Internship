const { default: PDFMerger } = require("pdf-merger-js");
const path = require("path");

const mergePdfs = async (p1, p2) => {
	const merger = new PDFMerger();

	try {
		console.log("Adding PDF 1:", p1);
		await merger.add(p1);

		console.log("Adding PDF 2:", p2);
		await merger.add(p2);

		const timestamp = Date.now();
		const outputPath = path.join(__dirname, "public", `${timestamp}.pdf`);

		console.log("Saving merged PDF to:", outputPath);
		await merger.save(outputPath);

		return timestamp;
	} catch (err) {
		console.error("❌ Merge function failed:", err);
		throw err;
	}
};

module.exports = { mergePdfs };
