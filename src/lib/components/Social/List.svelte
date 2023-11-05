<script lang="ts">
  import AccountComponent from "./Account.svelte";
  import type { Account } from "$lib/types/account";

  export let socials: Account[] = [];
</script>

{#if socials.length}
  <div class="flex flex-col gap-2">
    {#each socials as account}
      <AccountComponent bind:account />
    {/each}
  </div>
{/if}
