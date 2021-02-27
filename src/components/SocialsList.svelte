<script>
    import Account from "./Social/Account.svelte";

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
        backdrop-filter: blur(6px);
        padding: 2em;
        box-sizing: border-box;
        margin: var(--big-spacing) auto 0;
        width: var(--width);

        h2 {
            color: var(--secondary-color);
            text-align: center;
            padding: 0;
            line-height: 1em;
            user-select: none;
            font-weight: bolder;
            font-size: 2em;
            margin: 0 0 1em;
            text-shadow: 0 0.2rem 0.5rem rgba(white, var(--glass-opacity));
        }
    }
</style>