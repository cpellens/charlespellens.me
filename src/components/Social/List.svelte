<script>
    import Account from "./Account.svelte";

    export let socials = [];
    export let config  = {};
</script>

<div class="socials">
    <h2>Social Media Accounts</h2>

    {#each socials as account}
        <Account bind:account bind:config/>
    {/each}
</div>

<style lang="scss">
    div.socials {
        background-color: rgba(white, var(--glass-opacity));
        backdrop-filter: blur(var(--glass-blur));
        padding: 2em calc(var(--big-spacing) * 0.5);
        box-sizing: border-box;
        margin: 0 auto;
        width: var(--width);

        h2 {
            color: var(--tertiary-color);
            text-align: center;
            padding: 0;
            line-height: 1em;
            user-select: none;
            font-weight: bolder;
            font-size: 2em;
            margin: 0 0 1em;
        }
    }
</style>