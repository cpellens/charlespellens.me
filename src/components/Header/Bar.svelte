<script>
    import Name from "./Name.svelte";
    export let text = 'Untitled';
</script>

<header>
    <Name bind:text/>
</header>

<style lang="scss">
    header {
        background-color: var(--secondary-color);
        height: var(--header-height);
        line-height: var(--header-height);
        padding: 0 1em;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
        box-shadow: 0 0 var(--glass-blur) rgba(black, var(--glass-opacity));
    }
</style>