<script lang="ts">
    import AboutMe from "$lib/components/Profile/AboutMe.svelte";
    import List from "$lib/components/Social/List.svelte";
    import type { PageData } from "./$types";
    import type { ProfilePageData } from "./+layout.server";

    export let data: PageData & ProfilePageData;

    $: profile = data.profile;
</script>

<main>
    {#if profile}
        <AboutMe {profile}/>

        {#if profile.accounts.length}
            <List socials={data.profile.accounts} config={data.services}/>
        {:else}
            <p>I do not have any accounts configured!</p>
        {/if}
    {:else}
        <p>Loading profile...</p>
    {/if}
</main>

<style lang="scss">
    @import '$lib/main';

    main {
        margin-top: calc(var(--header-height) + var(--half-big-spacing));
    }
</style>