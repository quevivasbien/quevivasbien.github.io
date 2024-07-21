<script lang="ts">
    export let title: string;
    export let org: string | undefined = undefined;
    export let dates: string;
</script>

<div class="flex flex-col">
    <div class="flex flex-row">
        <div class="font-bold pr-8">
            {title}
        </div>
        <div class="flex-auto text-right text-zinc-500">
            {dates}
        </div>
    </div>
    {#if org}
        <div class="text-zinc-500 pb-2">
            {org}
        </div>
    {/if}
    <div>
        <slot />
    </div>
</div>

