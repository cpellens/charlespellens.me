<script lang="ts">
  import List from "$lib/components/Social/List.svelte";
  import type { PageData } from "./$types";
  import Name from "$lib/components/Header/Name.svelte";

  import {asHTML} from "@prismicio/client"
  import type { Profile } from "$lib/types/profile";

  export let data: PageData;

  let profile: Profile;
  $: profile = data.profile;
</script>

{#if profile}
  <div class="grid grid-cols-4 gap-4 mt-4">
    <!-- Row 1: Headings -->
    <div class="col-span-1">
      <Name text={data.profile.name} />
    </div>
    <div class="col-span-2 select-none">
      <h2 class="font-heading font-bold text-2xl text-cyan-700 subpixel-antialiased">About {profile.name.split(' ')[0]}</h2>
    </div>
    <div class="col-span-1 select-none">
      <h2 class="text-cyan-700 font-heading text-2xl font-bold subpixel-antialiased">Links &amp; Accounts</h2>
    </div>

    <!-- Row 2: Content -->
    <div class="aspect-square flex items-start select-none pointer-events-none col-span-1">
        <img src="{profile.profilePic}" alt="Photo of {profile.name}" class="rounded max-h-[25vh]"/>
    </div>
    <div class="col-span-2 flex flex-col gap-4 indent-2">
      {@html asHTML(profile.bio)}
    </div>
    <div class="col-span-1">
      <List socials={data.profile.accounts} />
    </div>
  </div>
{/if}
