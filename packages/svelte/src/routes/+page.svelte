<script lang="ts">
  import { Address } from "$lib/components/scaffold-eth";
  import Farm from "$lib/components/nerd-labs/Farm.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { BugAnt, Icon, MagnifyingGlass } from "svelte-hero-icons";
  

  const { address } = $derived.by(createAccount());
</script>

<div class="flex flex-grow flex-col items-center pt-10">
  <div class="px-5">
    <h1 class="text-center">
      <span class="mb-2 block text-2xl">Welcome to</span>
      <span class="block text-4xl font-bold">Bank of Svelte</span>
    </h1>
    <div class="flex flex-col items-center justify-center space-x-2">
      <p class="my-2 font-medium">Connected Address:</p>
      <Farm />
    </div>
  </div>
</div>
