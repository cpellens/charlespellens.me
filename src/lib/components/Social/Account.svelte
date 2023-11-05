<script lang="ts">
  import type { Account } from "$lib/types/account";
  import { getMixpanel } from "../mixpanel";

  export let account: Account;

  const getIconName = () => {
    switch (account.type) {
      default:
        return account.service.toLowerCase();
    }
  };

  const getIconType = () => {
    switch (account.type) {
      case "service":
        return "logo";
      default:
        return "solid";
    }
  };

  const onClick = async () => {
    const mixpanel = await getMixpanel();
    mixpanel?.track("social-click", account);

    open(account.value);
  };

  const onKeyUp = async (e: KeyboardEvent): Promise<boolean> => {
    if (e.key === "return") {
      await onClick();
      return true;
    }

    return false;
  };
</script>

<a class="flex flex-row gap-2 rounded p-2 transition hover:bg-slate-50 focus:bg-slate-400"
  href="{account.value}" on:click|preventDefault={onClick} on:keyup|once|preventDefault={onKeyUp} target="_blank" role="button" aria-roledescription="Button to {account.label}">
  <aside class="fill-cyan-700 p-1 bg-white rounded shadow flex aspect-square">
    <box-icon name={getIconName()} size="md" type={getIconType()} />
  </aside>
  <div class="font-heading font-bold text-lg text-slate-600 self-center">
    {account.label || account.value}
  </div>
</a>
