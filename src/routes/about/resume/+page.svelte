<script>
    import Position from "./Position.svelte";
    import Skill from "./Skill.svelte";

</script>
<div class="mx-8 sm:max-w-3xl sm:mx-auto">
    <h1 class="m-8">Mckay Jensen</h1>

    <div class="space-y-4 pb-8">
        <div class="flex flex-col sm:flex-row p-4 bg-white rounded-lg">
            <div class="flex-auto sm:w-1/2">
                <div class="m-3">
                    <span class="font-bold">LinkedIn</span>: <a class="block sm:inline-block" href="https://linkedin.com/in/mckaydjensen">linkedin.com/in/mckaydjensen</a>
                </div>
                <div class="m-3">
                    <span class="font-bold">GitHub</span>: <a class="block sm:inline-block"  href="https://github.com/quevivasbien">github.com/quevivasbien</a>
                </div>
                <div class="m-3">
                    <span class="font-bold">Website</span>: <a class="block sm:inline-block"  href="https://quevivasbien.github.io">quevivasbien.github.io</a>
                </div>
            </div>
            <div class="flex-auto sm:w-1/2 sm:text-right">
                <div class="m-3">
                    Chicago, IL 60615
                </div>
                <div class="m-3">
                    (312) 248 3184
                </div>
                <div class="m-3">
                    <a href="mailto:mckaydjensen@gmail.com">mckaydjensen@gmail.com</a>
                </div>
            </div>
        </div>

        <!-- education -->
        <div class="p-4 bg-white rounded-lg space-y-4">
            <h2>
                Education
            </h2>
            <Position title="PhD in Economics" org="University of Chicago" dates="2020 - current">
            </Position>
            <Position title="BS in Computational Mathematics &amp; Economics" org="University of Utah" dates="2015 - 2020">
                Graduated with 4.0 GPA
            </Position>
        </div>

        <!-- list of employment -->
        <div class="p-4 bg-white rounded-lg space-y-4">
            <h2>Prior experience</h2>
            <Position title="Research scholar" org="Centre for the Governance of AI" dates="2022 - current">
                Created and analyzed simulations of game-theoretic competition in AI innovation, mainly using the <em>Julia</em> programming language (started as summer research fellow)
            </Position>
            <Position title="Research assistant" org="Booth School of Business - University of Chicago" dates="2019 - 2020">
                Programmed <em>image processing</em>, <em>web scraping</em>, and <em>record-linking</em> tools for use in labor/education economics
            </Position>
            <Position title="Research assistant" org="Department of Economics - University of Utah" dates="2018 - 2020">
                Developed <em>machine learning</em> models for <em>sentiment analysis</em> on Twitter and used econometric tools to explore relationships between Twitter content and economic disparities; did <em>Python</em> data analysis for research in experimental/behavioral economics and created <em>web apps</em> for experiments
            </Position>
            <div class="italic">
                Older roles on <a href="https://www.linkedin.com/in/mckaydjensen/">LinkedIn</a>
            </div>
        </div>

        <!-- skills -->
        <div class="p-4 bg-white rounded-lg space-y-4">
            <h2>Technical proficiency</h2>
            <div class="flex flex-col sm:flex-row sm:space-x-4">
                <div class="flex-auto sm:w-1/2">
                    <h3>Well-versed in</h3>
                    <div class="m-2 pl-2 border-l border-zinc-500">
                        <Skill name="Python" details="incl. standard data science, ML, &amp; numeric packages" />
                        <Skill name="Julia" />
                    </div>
                </div>
                <div class="flex-auto sm:w-1/2">
                    <h3>Confident with</h3>
                    <div class="m-2 pl-2 border-l border-zinc-500">
                        <Skill name="Rust" details="incl. wasm-pack &amp; pymc3"/>
                        <Skill name="C++" />
                        <Skill name="Front-end web" details="incl. JS, TS, &amp; Svelte" />
                    </div>
                </div>
            </div>
            <div class="flex flex-row space-x-4">
                <div class="font-bold">Familar with</div>
                <div class="pl-2 border-l border-zinc-500 italic"><em>many others!</em></div>
            </div>
        </div>
    </div>
</div>


<style>
    em {
        @apply not-italic;
        @apply text-zinc-500;
    }
</style>