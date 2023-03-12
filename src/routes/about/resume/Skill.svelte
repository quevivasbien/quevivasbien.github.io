<script lang="ts">
    export let name: string;
    export let details: string | undefined = undefined;
</script>

<div class="flex flex-row">
    <div class="font-bold pr-8">
        {name}
    </div>
    {#if details}
        <div class="flex-auto text-right text-zinc-500">
            {details}
        </div>
    {/if}
</div>