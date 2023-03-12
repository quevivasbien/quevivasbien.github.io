<script lang="ts">
    export let src: string;
    export let caption: string = "";
    export let id: string = "";
</script>

<figure class="p-4 items-center border-x-2 rounded-lg">
    <img class="mx-auto" src={src} alt={caption} id={id} />
    {#if caption}
        <figcaption class="text-sm text-gray-600 text-center" aria-hidden="true">{caption}</figcaption>
    {/if}
</figure>