<script lang="ts">
    import type { Account } from "$lib/types/account";
    import type { Services } from "$lib/types/services";
    import { getMixpanel } from "../mixpanel";


    export let account: Account;
    export let config: Services;

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

    const onClick = async () => {
        const service = config[account.service.toLowerCase()];

        if (!service) {
            console.warn("Invalid Service", {
              account,
              config
            });
            return;
        }

        const mixpanel = await getMixpanel();
        mixpanel?.track("social-click", account);

        open(service + account.value);
    };

    const onKeyUp = async(e: KeyboardEvent): Promise<boolean> => {
      if (e.key === "return") {
        await onClick();
        return true;
      }

      return false;
    }
</script>

<figure on:click={onClick} on:keyup={onKeyUp}>
    <aside>
        <span>
            <box-icon name="{getIconName()}" size="md" type="{getIconType()}"></box-icon>
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
    margin: var(--half-big-spacing) 0;
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