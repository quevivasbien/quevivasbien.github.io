<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import TextContent from "$lib/components/TextContent.svelte";
    import ContactBar from "$lib/components/ContactBar.svelte";

    import posts from "$lib/data/posts.json";

    import { base } from "$app/paths";
    import Beautiful from "$lib/components/Beautiful.svelte";

    function formatDate(date: string) {
        // date should have format YYYY-MM-DD or just YYYY-MM
        // lop off day if present
        const [year, month] = date.split('-');
        return `${year}-${month}`;
    }
</script>

<NavBar current="archive" />

<TextContent>
    <h1>Archive</h1>

    {#each posts as post}
        <a class="text-gray-900" href="{base}/posts/{post.slug}/"><h3>{@html post.title}</h3></a>
        <div class="flex relative pb-8">
            <div class="flex absolute left-0 text-gray-400 italic">{formatDate(post.date)}</div>
            <div class="flex absolute right-0 text-gray-400 italic">tags: {post.tags.join(', ')}</div>
        </div>
    {/each}
</TextContent>

<ContactBar />
<Beautiful />