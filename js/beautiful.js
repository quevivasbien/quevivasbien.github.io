const beautifulThings = [
  "summer rainstorms",
  "Euler's number",
  "alpine mornings",
  "Julia sets",
  "mushrooms",
  "waves on a lake",
  "wordless music",
  "bicycles",
  "small plants",
  "butterflies",
  "Sufi poetry",
  "clever proofs",
  "clean code",
  "neat handwriting",
  "iambic meter",
  "humankind",
  "galaxies",
  "desert skies at night",
  "mountain vistas",
  "quiet, snowy mornings",
  "la lengua hispana",
  "math on a whiteboard",
  "mi amorcita"
];
var randomIndex = Math.floor(Math.random() * beautifulThings.length);
var tagline = document.getElementById("tagline");
tagline.innerHTML = "goodness, truth, and " + beautifulThings[randomIndex];
