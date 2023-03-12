<script lang="ts">
    import type { PlotlyHTMLElement, Data } from 'plotly.js-basic-dist';

    import { onMount } from 'svelte';

    export let data: Data[] = [{
        x: [1, 2, 3],
        y: [2, 1, 3],
        type: 'scatter'
    }];
    export let title: string | undefined;
    export let xlabel: string | undefined;
    export let ylabel: string | undefined;

    let metaData = {
        title: title,
        xaxis: {
            title: xlabel
        },
        yaxis: {
            title: ylabel
        },
        responsive: true
    }

    let plotDiv: HTMLDivElement;
    let plot: PlotlyHTMLElement;

    onMount(async () => {
        import('plotly.js-basic-dist').then(async (Plotly) => {
            plot = await Plotly.newPlot(plotDiv, data, metaData);
        });
    });

</script>


<div bind:this={plotDiv}><!-- Plotly chart will be drawn inside this DIV --></div>

{#if plot === undefined}
    <div>Plot is loading...</div>
{/if}