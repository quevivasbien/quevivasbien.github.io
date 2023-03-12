<script lang="ts">
    import Beautiful from "$lib/components/Beautiful.svelte";
import ContactBar from "$lib/components/ContactBar.svelte";
import NavBar from "$lib/components/NavBar.svelte";
    import TextContent from "$lib/components/TextContent.svelte";

</script>

<NavBar />
<TextContent>
    <slot />
</TextContent>
<ContactBar />
<Beautiful />