import { params, Params, update_multi_controls } from "./controls.js";
import { set_page, run } from "./index.js";

const scenarios = {
    "1.1": new Params(
        2,
        0.2,
        1,
        0.5,
        [1.5, 1.5],
        0,
    ),
    "1.2": new Params(
        2,
        0.2,
        1,
        0.5,
        [1.2, 1.5],
        0,
    ),

    "2.1": new Params(
        4,
        0.4,
        1,
        0.5,
        [2., 2., 1., 0.5],
        0,
    ),
    "2.2": new Params(
        4,
        0.4,
        1,
        0.5,
        [2., 2., 1., 0.5],
        0.2,
    ),
    "2.3": new Params(
        4,
        0.4,
        1,
        0.5,
        [2., 2., 1., 0.5],
        0.35,
    ),
};

const to_scenarios_button = document.getElementById("to-scenarios");

function refresh_param_ui() {
    document.getElementById("num_players").value = params.num_players;
    document.getElementById("display_num_players").innerHTML = params.num_players;

    update_multi_controls();
    for (let id of ["penalty", "base_r", "reduce_r", "d"]) {
        // check if all values are the same
        let all_same = true;
        for (let i = 1; i < params[id].length; i++) {
            if (params[id][i] != params[id][i - 1]) {
                all_same = false;
                break;
            }
        }
        // toggle individual controls if needed
        let toggle = document.getElementById("toggle_" + id);
        if (all_same && toggle.checked) {
            toggle.click();
        }
        else if (!all_same && !toggle.checked) {
            toggle.click();
        }
    }

    document.getElementById("scaling").value = params.scaling;
    document.getElementById("display_scaling").innerHTML = params.scaling;
}

function view_scenario(scen_params) {
    params.set_from(scen_params);
    refresh_param_ui();
    to_scenarios_button.style.display = "block";
    set_page("solver");
    run();
}

export function setup_scenarios() {
    for (let scen in scenarios) {
        let button = document.getElementById("scenario" + scen);
        button.addEventListener(
            "click",
            () => view_scenario(scenarios[scen])
        );
    }
    to_scenarios_button.addEventListener(
        "click",
        () => {
            set_page("scenarios"),
            to_scenarios_button.style.display = "none";
        }
    );
}