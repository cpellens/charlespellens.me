<script lang="ts">
    export let text: string;
</script>

<h1 class="text-2xl font-heading flex gap-1 pointer-events-none select-none subpixel-antialiased">
    {#each text.split(' ') as word}
        <span class="first-of-type:text-cyan-700 first-of-type:font-bold">{word}</span>
    {/each}
</h1>