<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import TextContent from "$lib/components/TextContent.svelte";
    import ContactBar from "$lib/components/ContactBar.svelte";
    import Beautiful from "$lib/components/Beautiful.svelte";
</script>

<NavBar current="about" />

<TextContent>
    <h1>About</h1>
    <p>I'm Mckay Jensen, currently a research scholar at the Centre for the Governance of AI and an economics PhD student at the University of Chicago. This is my site for posting some of my writing and updates on my projects. I'm interested in a lot of things, but most recently I've been focusing on problems in AI governance, so that will make up a lot of what you see here.</p>
    <p>You can view my resume <a href="./resume">here</a>.</p>

    <h2>What does "Que vivas bien" mean?</h2>
    <p>"Que vivas bien" means, roughly, "may you live well" in Spanish. A lot of my writing is related to the project of figuring out how to help us all live well into the far future. You can also take the title of this site as a friendly wish from me to you: "May you live well!"</p>

    <h2>Reaching out</h2>
    <p>Feel free to contact me or check out my work elsewhere using the links at the bottom of the page.</p>
</TextContent>

<ContactBar />
<Beautiful />