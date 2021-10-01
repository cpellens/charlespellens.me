<script>
    import Account from "./Account.svelte";

    export let socials = [];    // Imported from Prismic, Bound in App.svelte
    export let config = {};     // Bound in App.svelte
</script>

<div class="socials">
    <h2>Social Media Accounts</h2>

    {#if socials.length}

        {#each socials as account}
            <Account bind:account bind:config/>
        {/each}

    {:else}

        <p>
            Please wait... we're loading this user's accounts!
        </p>

    {/if}
</div>

<style lang="scss">
  div.socials {
    background-color: rgba(white, var(--glass-opacity));
    backdrop-filter: blur(var(--glass-blur));
    padding: var(--half-big-spacing) var(--half-big-spacing);
    box-sizing: border-box;
    margin: var(--half-big-spacing) auto;
    width: var(--width);

    h2 {
      color: var(--tertiary-color);
      text-align: center;
      padding: 0;
      line-height: 1.5em;
      user-select: none;
      font-weight: bolder;
      font-size: 2em;
      margin: 0;
      letter-spacing: 0.05em;
    }

    p {
      color: white;
    }
  }
</style>