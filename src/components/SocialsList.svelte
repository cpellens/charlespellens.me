<script>
    export let socials = [];
</script>

{#each socials as account}
    <figure>
        <aside><span>{account.service}</span></aside>
        <aside>{account.value}</aside>
    </figure>
{/each}

<style lang="scss">
    $buttonColor: white;

    figure {
        display: flex;
        flex-direction: row;
        margin: calc(var(--spacing) * 2);
        background-color: rgba($buttonColor, 0.3);
        cursor: pointer;
        transition: var(--anim-time) background-color, var(--anim-time) box-shadow;

        &:hover {
            background-color: rgba($buttonColor, 0.5);
            box-shadow: inset 0 0 var(--spacing) rgba($buttonColor, 0.2);
        }

        aside {
            flex: 1;

            &:first-of-type {
                background-color: rgba($buttonColor, 0.1);

                max-width: var(--tile-size);
                height: var(--tile-size);

                span {
                    display: none;
                }
            }

            &:last-of-type {
                line-height: var(--tile-size);
                text-align: center;
                color: white;
                text-shadow: 0 2px 4px rgba(black, 0.2);
                user-select: none;
            }
        }
    }
</style>