import { expand_scalar } from "./utils.js";

// defines initial param values
const DEFAULT_PARAMS = {
    num_players: 2,
    penalty: 0.1,
    base_r: 0.2,
    reduce_r: 1.,
    d: 1.,
    scaling: 0.,
};

export class Params {
    constructor(num_players, base_r, reduce_r, penalty, d, scaling) {
        this.num_players = num_players;
        this.base_r = expand_scalar(base_r, num_players);
        this.reduce_r = expand_scalar(reduce_r, num_players);
        this.penalty = expand_scalar(penalty, num_players);
        this.d = expand_scalar(d, num_players);
        this.scaling = scaling;
    }

    set_from(other) {
        this.num_players = other.num_players;
        this.base_r = other.base_r.slice();
        this.reduce_r = other.reduce_r.slice();
        this.penalty = other.penalty.slice();
        this.d = other.d.slice();
        this.scaling = other.scaling;
    }
}

// param object is used to store current param values
// values are modified by sliders
export const params = new Params(
    DEFAULT_PARAMS.num_players,
    DEFAULT_PARAMS.base_r,
    DEFAULT_PARAMS.reduce_r,
    DEFAULT_PARAMS.penalty,
    DEFAULT_PARAMS.d,
    DEFAULT_PARAMS.scaling
);

const SLIDER_ATTRS = {
    num_players: {
        name: "Number of players",
        description: "Number of competing innovators",
        min: 2,
        max: 10,
        step: 1,
    },
    penalty: {
        name: "Performance penalty",
        description: "Reduction in performance for playing safe strategy",
        min: 0,
        max: 0.95,
        step: 0.05,
    },
    base_r: {
        name: "Base risk",
        description: "Probability of disaster if player wins when not playing safe strategy",
        min: 0,
        max: 1,
        step: 0.05,
    },
    reduce_r: {
        name: "Risk reduction",
        description: "Reduction in base risk for playing safe strategy",
        min: 0,
        max: 1,
        step: 0.05,
    },
    d: {
        name: "Disaster cost",
        description: "Cost of disaster for player",
        min: 0,
        max: 4,
        step: 0.1,
    },
    scaling: {
        name: "Coalition scaling",
        description: "Performance multiplier for each additional player who plays the safe strategy",
        min: 0,
        max: 1,
        step: 0.05,
    },
};

const toggle_states = {
    penalty: false,
    qs: false,
    qr: false,
    d: false,
};

function create_slider(id, min, max, step, init_val) {
    let slider = document.createElement("input");
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.id = id;
    slider.value = init_val;
    return slider;
}

function create_display(id, init_val) {
    let display = document.createElement("label");
    display.id = "display_" + id;
    display.htmlFor = id;
    display.className = "slider-label";
    display.innerHTML = init_val;
    return display;
}

function create_single_control(parent, id, min, max, step) {
    let slider = create_slider(id, min, max, step, params[id]);
    parent.appendChild(slider);

    let display = create_display(id, params[id]);
    parent.appendChild(display);

    if (id == "num_players") {
        slider.addEventListener(
            "input",
            () => {
                params[id] = slider.value;
                display.innerHTML = params[id];
                update_multi_controls();
            }
        );
    }
    else {
        // don't force multi controls to update
        slider.addEventListener(
            "input",
            () => {
                params[id] = slider.value;
                display.innerHTML = params[id];
            }
        );
    }
}

function create_multi_control(parent, id, min, max, step) {
    let toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.id = "toggle_" + id;
    toggle.checked = toggle_states[id];
    parent.appendChild(toggle);
    // create toggle for showing individual controls
    let toggle_label = document.createElement("label");
    toggle_label.htmlFor = "toggle_" + id;
    toggle_label.innerHTML = "toggle individual sliders";
    parent.appendChild(toggle_label);
    // first create sliders for individual players
    // these sliders will be hidden or shown depending on toggle state
    let mult_div = document.createElement("div");
    mult_div.id = "mult_" + id;
    mult_div.style.display = toggle_states[id] ? "block" : "none";
    const mult_sliders = [];
    const mult_displays = [];
    for (let i = 0; i < params[id].length; i++) {
        // put slider and label in a no-break span
        let box = document.createElement("span");
        box.className = "no-break";
        mult_div.appendChild(box);
        let slider = create_slider(id + "_" + i, min, max, step, params[id][i]);
        box.appendChild(slider);
        mult_sliders.push(slider);
        let display = create_display(id + "_" + i, params[id][i]);
        box.appendChild(display);
        mult_displays.push(display);
        slider.addEventListener(
            "input",
            () => {
                params[id][i] = slider.value;
                display.innerHTML = slider.value;
            }
        );
        // add space between sliders
        if (i < params[id].length - 1) {
            mult_div.appendChild(document.createTextNode(" "));
        }
    }
    parent.appendChild(mult_div);

    // now create slider that controls all sliders at once
    let single_div = document.createElement("div");
    single_div.id = "single_" + id;
    single_div.style.display = toggle_states[id] ? "none" : "block";
    parent.appendChild(single_div);
    let slider = create_slider("master_" + id, min, max, step, params[id][0]);
    let display = create_display("master_" + id, params[id][0]);
    slider.addEventListener(
        "input",
        () => {
            for (let i = 0; i < params[id].length; i++) {
                params[id][i] = slider.value;
                display.innerHTML = slider.value;
                mult_sliders[i].value = slider.value;
                mult_displays[i].innerHTML = slider.value;
            }
        }
    );
    single_div.appendChild(slider);
    single_div.appendChild(display);

    toggle.addEventListener(
        "change",
        () => {
            toggle_states[id] = toggle.checked;
            if (toggle.checked) {
                mult_div.style.display = "block";
                single_div.style.display = "none";
            }
            else {
                slider.value = params[id][0];
                display.innerHTML = params[id][0];
                for (let i = 1; i < params[id].length; i++) {
                    params[id][i] = slider.value;
                    mult_sliders[i].value = slider.value;
                    mult_displays[i].innerHTML = slider.value;
                }
                mult_div.style.display = "none";
                single_div.style.display = "block";
            }
        }
    );
}

function resize_params() {
    const num_players = params.num_players;
    for (let id in params) {
        if (!Array.isArray(params[id])) {
            continue;
        }
        while (params[id].length < num_players) {
            params[id].push(params[id][params[id].length - 1]);
        }
        while (params[id].length > num_players) {
            params[id].pop();
        }
    }
}

function create_help(description) {
    let elem = document.createElement("abbr");
    elem.className = "help";
    elem.innerHTML = "?";
    elem.title = description;
    return elem;
}

function setup_control(id, multicontrol = false) {
    let attrs = SLIDER_ATTRS[id];
    let ctrl_div = document.getElementById("control_" + id);
    if (ctrl_div) {
        ctrl_div.replaceChildren();
    }
    else {
        ctrl_div = document.createElement("div");
        ctrl_div.id = "control_" + id;
        ctrl_div.className = "control-box";
        document.getElementById("controls").appendChild(ctrl_div);
    }

    let label_div = document.createElement("div");
    label_div.innerHTML = attrs.name + ":";
    let help_elem = create_help(attrs.description);
    label_div.appendChild(help_elem);
    ctrl_div.appendChild(label_div);

    let slider_div = document.createElement("div");
    slider_div.id = "slider_" + id;
    if (multicontrol) {
        create_multi_control(slider_div, id, attrs.min, attrs.max, attrs.step);
    }
    else {
        create_single_control(slider_div, id, attrs.min, attrs.max, attrs.step);
    }
    ctrl_div.appendChild(slider_div);
}

export function update_multi_controls() {
    // create or update sliders with option to control players individually
    resize_params();
    for (let id of ["base_r", "reduce_r", "penalty", "d"]) {
        setup_control(id, true);
    }
}

export function setup_controls() {
    setup_control("num_players");
    update_multi_controls();
    setup_control("scaling");
}
