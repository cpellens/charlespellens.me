<script>
    export let name = 'Untitled';

    document.title = name + ' - Socials';
</script>

<section>
    <h1>
        {#each name.split(' ') as word}
            <span>{word}</span>
        {/each}
    </h1>
</section>

<style lang="scss">
    h1 {
        color: var(--primary-color);
        display: inline-block;
        font-size: 8em;
        opacity: 1;
        text-align: center;
        text-shadow: 0 0.25rem 0.75rem rgba(black, 0.4);
        user-select: none;
        white-space: nowrap;
        margin: 0;

        position: absolute;
        bottom: 0;
        left: 1em;
        transform-origin: top left;
        transform: rotate(-90deg);

        span:nth-of-type(odd) {
            color: white;
        }

        span {
            margin: 0 12px;
        }
    }
</style>