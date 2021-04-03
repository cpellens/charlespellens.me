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
            console.warn("Invalid Service", account);
            return;
        }

        window.mixpanel.track("social-click", account);
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
    @import '../../styles/animations/fade-in.scss';

    $buttonColor: white;
    figure {
        @include fadeIn;

        display: flex;
        flex-direction: row;
        margin: calc(var(--spacing) * 2) 0;
        cursor: pointer;
        transition: var(--anim-time) background-color;
        border: solid rgba(white, var(--glass-opacity)) calc(var(--spacing) * 0.25);
        box-sizing: border-box;

        &:hover {
            background-color: rgba($buttonColor, var(--glass-opacity));

            aside:first-of-type {
                span > * {
                    transform: rotate(-11.25deg) scale(1.1);
                }
            }
        }

        &:last-of-type {
            margin-bottom: 0;
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
                        transition: transform var(--anim-time);
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