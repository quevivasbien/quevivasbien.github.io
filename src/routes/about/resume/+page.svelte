<script>
    import Skills from "./Skills.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";

</script>
<div class="mx-8 sm:max-w-3xl sm:mx-auto">
    <h1 class="mx-8 my-6">Mckay Jensen</h1>

    <div class="space-y-4 pb-8">
        <div class="flex flex-col sm:flex-row p-4 bg-white rounded-lg">
            <div class="flex-auto sm:w-1/2">
                <div class="m-3">
                    <span class="font-bold">LinkedIn</span>: <a class="block sm:inline-block" href="https://linkedin.com/in/mckaydjensen">linkedin.com/in/mckaydjensen</a>
                </div>
                <div class="m-3">
                    <span class="font-bold">GitHub</span>: <a class="block sm:inline-block"  href="https://github.com/quevivasbien">github.com/quevivasbien</a>
                </div>
            </div>
            <div class="flex-auto sm:w-1/2 sm:text-right">
                <div class="m-3">
                    Pittsburgh, PA
                </div>
                <div class="m-3">
                    <a href="mailto:mckaydjensen@gmail.com">mckaydjensen@gmail.com</a>
                </div>
            </div>
        </div>

        <div class="p-4 bg-white rounded-lg space-y-4">
            <h2>
                Summary
            </h2>
            I am a data scientist working at the intersection of machine learning, applied statistics, and software engineering
        </div>

        <Skills />

        <Experience />

        <Education />
        
    </div>
</div>


<style>
    :global(em) {
        @apply not-italic;
        @apply text-zinc-500;
    }
</style>