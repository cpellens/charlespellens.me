<script lang="ts">
    import Header from "$lib/components/Header/Bar.svelte";
    import type { PageData } from './$types';
    import Footer from "$lib/components/Footer/Bar.svelte";
    import type { ProfilePageData } from './+layout.server';
    import { onMount } from 'svelte';
    import { getMixpanel } from '$lib/components/mixpanel';

    export let data: PageData & ProfilePageData

    onMount(async () => {
        const mixpanel = await getMixpanel();
        mixpanel?.track('load');

        // @ts-ignore
        await import('boxicons');
    });
</script>

<svelte:head>
    <title>{data.profile.name} - Socials</title>
</svelte:head>

<Header text="{data.profile.name}"/>
<slot/>
<Footer/>