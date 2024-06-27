<script lang="ts">
    import RandomBox from "./RandomBox.svelte";

    let verb_bank = `λυω
πεμπω
παυω
παιδευω
κελευω
θσω
γραφω
φυλαττω
θαπτω
εθελω
διδασκω
ταττω
βλαπτω
πραττω
αρχω
πειθω
δουλευω
πολιτευω
χορευω
κωλυω
κλεπτω
λειπω
ηκω
σωζω
αγω
αδικεω
νικαω
ποιεω
τιμαω`;

    let verbs = verb_bank.split("\n");

    const TENSES = [
        "present",
        "future",
        "aorist",
        "perfect",
    ];

    const VOICES = [
        "active",
        "middle",
        "passive",
    ];
    
    const NUMBER = [
        "singular",
        "plural",
    ];

    const GENDER = [
        "masculine",
        "feminine",
        "neuter",
    ];

    const CASE = [
        "nominative",
        "genitive",
        "dative",
        "accusative",
    ];

    let verb: string;
    let tense: string;
    let voice: string;
    let number: string;
    let gender: string;
    let case_: string;

    function get_random_option(options: string[]) {
        return options[Math.floor(Math.random() * options.length)];
    }

    function randomize() {
        verb = get_random_option(verbs);
        tense = get_random_option(TENSES);
        voice = get_random_option(VOICES);
        number = get_random_option(NUMBER);
        gender = get_random_option(GENDER);
        case_ = get_random_option(CASE);
    }

    randomize();

    $: {
        verbs = verb_bank.split("\n");
        randomize();
    }
</script>

<h1 class="text-4xl font-bold">The Verbinator</h1>

<div class="max-w-xl mx-auto m-2 p-4 bg-white rounded-lg flex flex-col text-center space-y-4">
    <h2>{verb}</h2>
    <div>
        <RandomBox title="Tense" option={tense} />
        <RandomBox title="Voice" option={voice} />
        <RandomBox title="Number" option={number} />
        <RandomBox title="Gender" option={gender} />
        <RandomBox title="Case" option={case_} />
    </div>

</div>
<div class="flex flex-col text-center max-w-xs mx-auto my-8">
    <button on:click={randomize} class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 text-center max-w-xl">Randomize</button>
</div>

<div class="max-w-lg mx-auto mt-16 py-8 bg-white rounded-lg flex flex-col text-center items-center">
    <h3 class="border-b-2 border-red-500 w-2/3">Verb bank</h3>
    <textarea class="w-2/3 p-2 border-x-2 border-b-2 border-red-100" rows="10" bind:value={verb_bank} />
</div>
