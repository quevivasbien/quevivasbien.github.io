<script lang="ts">
    import ContactBar from "$lib/components/ContactBar.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import TextContent from "$lib/components/TextContent.svelte";

    import posts from "$lib/data/posts.json";

    import { base } from "$app/paths";
    import { slide } from "svelte/transition";
    import Beautiful from "$lib/components/Beautiful.svelte";

    let showNumPosts = 4;
</script>

<NavBar current="home" />

<TextContent>
    <div class="space-y-10">
        {#each posts.slice(0, showNumPosts) as post}
            <div class="space-y-3" in:slide>
                <a class="text-gray-800" href="{base}/posts/{post.slug}/"><h1>{@html post.title}</h1></a>
                <div class="space-y-3">{@html post.preview}</div>
                
                <div class="relative h-6">
                    <a class="absolute left-0" href="{base}/posts/{post.slug}/">Read more</a>
                    <div class="absolute right-0 text-gray-400 italic">tags: {post.tags.join(', ')}</div>
                </div>
            </div>
        {/each}
    </div>
    {#if showNumPosts < posts.length}
        <div class="flex flex-col items-center">
            <button class="mt-8 p-3 bg-red-400 text-white rounded-md" on:click={() => showNumPosts += 4}>Load more</button>
        </div>
    {/if}
    
</TextContent>

<ContactBar />
<Beautiful />