<script lang="ts">
  import Footer from "$lib/components/Footer/Bar.svelte";
  import { onMount } from "svelte";
  import { getMixpanel } from "$lib/components/mixpanel";

  import "../app.css"

  onMount(async () => {
    // @ts-ignore
    import('boxicons');

    const mixpanel = await getMixpanel();
    mixpanel?.track("load");
  });
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png"/>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100;300;400;500;700&family=Open+Sans:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="container mx-auto">
  <slot />
</main>

<Footer />
