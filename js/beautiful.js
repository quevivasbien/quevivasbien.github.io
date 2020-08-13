function beautiful() {
  const beautifulThings = [
    "Euler's number",
    "alpine mornings",
    "Julia sets",
    "mushrooms",
    "Becca la bella",
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
    "Natalia Lafourcade songs"
  ]
  var randomIndex = Math.floor(Math.random() * beautifulThings.length);
  var tagline = document.getElementById("tagline");
  tagline.innerHTML = "goodness, truth, and " + beautifulThings[randomIndex];
}
