<script lang="ts">
    import Skill from "./Skill.svelte";
</script>

<div class="p-4 bg-white rounded-lg space-y-4">
    <h2>Technical proficiency</h2>
    <div class="flex flex-col sm:flex-row sm:space-x-4">
        <div class="flex-auto sm:w-1/2">
            <div class="m-2 pl-2 border-l border-zinc-500">
                <Skill name="Python" details="numpy, pandas, SciPy, scikit-learn, PyTorch, Django" />
                <Skill name="Julia" />
            </div>
        </div>
        <div class="flex-auto sm:w-1/2">
            <div class="m-2 pl-2 border-l border-zinc-500">
                <Skill name="C++" details="including modern standards" />
                <Skill name="Rust" />
                <Skill name="Front-end web" details="JS, TS, React, Svelte" />
            </div>
        </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:space-x-4">
        <div class="flex-auto sm:w-1/2">
            <div class="m-2 pl-2 border-l border-zinc-500">
                <Skill name="Probability &amp; statistics" />
            </div>
        </div>
        <div class="flex-auto sm:w-1/2">
            <div class="m-2 pl-2 border-l border-zinc-500">
                <Skill name="Numerical analysis" />
            </div>
        </div>
    </div>
</div>