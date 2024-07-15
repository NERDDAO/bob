<script lang="ts">
  import { Address } from "$lib/components/scaffold-eth";
  import Farm from "$lib/components/nerd-labs/Farm.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { BugAnt, Icon, MagnifyingGlass } from "svelte-hero-icons";

  const { address } = $derived.by(createAccount());
  const treasury = "0x8B2ABC599dF495016dd5a43d4acFffaaB5666c75";
</script>

<div class="flex w-full flex-col items-center pt-10">
  <div class="px-5">
    <h1 class="text-center">
      <span class="block text-4xl font-bold">Bank of Based</span>

      <span class="mb-2 block text-sm">burn the state</span>
    </h1>
    <div class="flex flex-col items-center justify-center space-x-2">
      <p class="my-2 font-medium">Connected Address:</p>
      <Farm />
    </div>
  </div>
</div>
