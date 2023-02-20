import init, { run_sim } from './pkg/wasm_coop_vis.js';
import { setup_controls, params } from './controls.js';
import { fill_blocks, round_to } from './utils.js';
import { setup_scenarios } from './scenarios.js';

init().then(() => {
  setup();
});

const run_button = document.getElementById("run");

const pages = {
  explanation: {
    button: document.getElementById("show-explanation"),
    div: document.getElementById("explanation")
  },
  solver: {
    button: document.getElementById("show-solver"),
    div: document.getElementById("solver")
  },
  scenarios: {
    button: document.getElementById("show-scenarios"),
    div: document.getElementById("scenarios")
  },
};

export function set_page(page) {
  for (let p in pages) {
    if (p == page) {
      pages[p].button.className = "button-depressed";
      pages[p].div.style.display = "block";
    }
    else {
      pages[p].button.className = "";
      pages[p].div.style.display = "none";
    }
  }
}

function setup() {
  setup_controls();

  for (let p in pages) {
    pages[p].button.addEventListener(
      "click",
      () => set_page(p)
    );
  }
  
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

  setup_scenarios();
}

export function run() {
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
