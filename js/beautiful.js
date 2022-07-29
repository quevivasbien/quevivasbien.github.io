const beautiful_things = [
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
  "math on a whiteboard",
  "my lobster geezerfriend",
  "clicky keyboards",
  "the eye of the beekeeper"
];

function run_beautiful() {
  let randomIndex = Math.floor(Math.random() * beautiful_things.length);
  let tagline = document.getElementById("tagline");
  tagline.innerHTML = "goodness, truth, and " + beautiful_things[randomIndex];
}

run_beautiful();
