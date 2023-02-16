import init, { run_sim } from './pkg/wasm_coop_vis.js';
import { setup_controls, params } from './controls.js';
import { fill_blocks, round_to } from './formatting.js';

init().then(() => {
  setup();
});

const explain_button = document.getElementById("show-explanation");
const explanation = document.getElementById("explanation");
const solver_button = document.getElementById("show-solver");
const solver = document.getElementById("solver");
const run_button = document.getElementById("run");

function setup() {
  setup_controls();

  explain_button.addEventListener(
    "click",
    () => {
      explain_button.className = "button-depressed";
      solver_button.classList = [];
      explanation.style.display = "block";
      solver.style.display = "none";
    }
  );

  solver_button.addEventListener(
    "click",
    () => {
      solver_button.className = "button-depressed";
      explain_button.classList = [];
      solver.style.display = "block";
      explanation.style.display = "none";
    }
  );
  
  run_button.addEventListener(
    "click",
    run
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key == "Enter") {
        run();
      }
    }
  );
}

function run() {
  let pr = Array(parseInt(params.num_players)).fill(1);
  let ps = params.penalty.map(x => 1 - x);
  let qs = params.base_r.map((qr, i) => qr * (1 - params.reduce_r[i]));
  let returnObj = run_sim(
    params.num_players,
    pr, ps,
    params.base_r, qs,
    params.d, params.scaling,
  );
  view_result(returnObj);
}

function view_result(returnObj) {
  document.getElementById("values").innerHTML = returnObj.values().map(x => round_to(x, 2));
  fill_blocks(returnObj.probas(), document.getElementById("probas"));
  document.getElementById("proba_d").innerHTML = round_to(returnObj.proba_d(), 2);
}
