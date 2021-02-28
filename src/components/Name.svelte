<script>
    export let name = 'Untitled';

    document.title = name + ' - Socials';
</script>

<header>
    <h1>
        {#each name.split(' ') as word}
            <span>{word}</span>
        {/each}
    </h1>
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

        h1 {
            color: var(--primary-color);
            font-size: 2.5em;
            opacity: 1;
            text-shadow: 0 0.25rem 0.75rem rgba(black, 0.4);
            user-select: none;
            margin: 0;

            span:nth-of-type(odd) {
                color: white;
            }

            span {
                margin: 0 0.5rem;
            }
        }
    }
</style>