const cynoJokes = [
	"Why did the General bring a ladder?<br>To reach new heights of seriousness.",
	"I told Albedo a joke.<br>He stared. I think he’s still buffering.",
	"Why don’t secrets hide in Fontaine?<br>Because even whispers drown.",
	"I asked Paimon if she flies after eating a fall‑berry.<br>She said, 'I prefer a lift.'",
	"What did the lamp say to the lantern?<br>You light up my night.",
	"Why is overdue a deadline?<br>Because time flies, unlike me.",
	"I tried to grow a pun farm.<br>All I harvested were groans.",
	"Why don’t I play hide‑and‑seek?<br>I take things too seriously.",
	"What’s my battle cry?<br>'Groan incoming!'",
	"Why did the scroll blush?<br>It saw Cyno’s seriousness.",
	"What does a general eat for breakfast?<br>Discipline‑flakes.",
	"Why did I polish my polearm?<br>Reflection is important.",
	"Why did I build a shrine?<br>To honor solemnity.",
	"Why did I stare at the sky?<br>I was seeking serious clouds.",
	"Why don’t I sing?<br>My voice is on solemn hold.",
	"How do I charge enemies?<br>With puns, not electricity.",
	"Why did I climb the tower?<br>To get a better pun vantage point.",
	"How does a stoic party?<br>With reserved celebration.",
	"Why did I hold a scroll?<br>To display my seriousness.",
	"Why did I build a desk?<br>To pen serious notes.",
];

const randomIndex = Math.floor(Math.random() * cynoJokes.length);
const jokeBox = document.getElementById("jokeBox");
jokeBox.innerHTML = cynoJokes[randomIndex];
