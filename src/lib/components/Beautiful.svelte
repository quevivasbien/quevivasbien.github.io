<script lang="ts">
    import { fade } from "svelte/transition";


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
        "poetry",
        "clever proofs",
        "clean code",
        "neat handwriting",
        "humankind",
        "galaxies",
        "desert skies at night",
        "mountain vistas",
        "quiet, snowy mornings",
        "math on a whiteboard",
        "my lobster geezerfriend",
        "clicky keyboards",
        "the eye of the beekeeper",
    ];

    function get_thing() {
        return beautiful_things[Math.floor(Math.random() * beautiful_things.length)];
    }
    let thing = get_thing();
    setInterval(() => {
        thing = get_thing();
    }, 10000);
</script>

<div class="flex flex-col items-center justify-center pb-3">
    {#key thing}
    <div>
        goodness, truth, and <span in:fade|local>
            {thing}
        </span>
    </div>
    {/key}
</div>