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
    backdrop-filter: blur(var(--glass-blur));
    height: var(--header-height);
    line-height: var(--header-height);
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    letter-spacing: 0.2rem;
  }
</style>