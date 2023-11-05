<script>
    import Name from "./Name.svelte";

    export let text = 'Untitled';
</script>

<header class="mt-6">
    <Name bind:text/>
</header>
