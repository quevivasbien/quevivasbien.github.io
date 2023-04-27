<script lang="ts">
    import Skill from "./Skill.svelte";
</script>

<div class="p-4 bg-white rounded-lg space-y-4">
    <h2>Technical proficiency</h2>
    <h3>Confident with</h3>
    <div class="flex flex-col sm:flex-row sm:space-x-4">
        <div class="flex-auto sm:w-1/2">
            <div class="m-2 pl-2 border-l border-zinc-500">
                <Skill name="Python" details="incl. standard data science, ML, &amp; numeric packages" />
                <Skill name="Julia" />
            </div>
        </div>
        <div class="flex-auto sm:w-1/2">
            <div class="m-2 pl-2 border-l border-zinc-500">
                <Skill name="Rust" details="incl. wasm-pack &amp; pymc3"/>
                <Skill name="C++" />
                <Skill name="Front-end web" details="incl. JS, TS, React, &amp; Svelte" />
            </div>
        </div>
    </div>
    <div class="flex flex-row space-x-4">
        <div class="font-bold">Familar with</div>
        <div class="pl-2 border-l border-zinc-500 italic"><em>many others!</em></div>
    </div>
</div>