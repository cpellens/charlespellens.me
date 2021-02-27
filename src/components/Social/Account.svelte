<script>
    export let account = {};
    export let config  = {};

    const getIconName = () => {
        switch (account.type) {
            default:
                return account.service.toLowerCase();
        }
    };

    const getIconType = () => {
        switch (account.type) {
            case 'service':
                return 'logo';
            default:
                return 'icon';
        }
    };

    const onClick = () => {
        const service = config[account.service.toLowerCase()];

        if (typeof service === 'undefined') {
            return;
        }

        window.open(service + account.value);
    };
</script>

<figure on:click={onClick}>
    <aside>
        <span>
            <box-icon type="{getIconType()}" size="md" name="{getIconName()}"></box-icon>
        </span>
    </aside>
    <aside>{account.label || account.value}</aside>
</figure>

<style lang="scss">
    $buttonColor: white;
    figure {
        display: flex;
        flex-direction: row;
        margin: calc(var(--spacing) * 2);
        background-color: rgba($buttonColor, var(--glass-opacity));
        cursor: pointer;
        transition: var(--anim-time) background-color, var(--anim-time) box-shadow;

        &:hover {
            background-color: rgba($buttonColor, calc(var(--glass-opacity) + 0.2));
            box-shadow: inset 0 0 var(--spacing) rgba($buttonColor, 0.2);
        }

        aside {
            flex: 1;

            &:first-of-type {
                background-color: rgba($buttonColor, var(--glass-opacity));

                max-width: var(--tile-size);
                height: var(--tile-size);
                display: flex;

                span {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    align-items: center;

                    > * {
                        flex: 1;
                        fill: var(--tertiary-color);
                    }
                }
            }

            &:last-of-type {
                line-height: var(--tile-size);
                text-align: center;
                color: var(--tile-text-color);
                text-shadow: 0 1px 4px rgba(black, 0.3);
                user-select: none;
            }
        }
    }
</style>