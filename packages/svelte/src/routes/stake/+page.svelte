<script lang="ts">
  import { Address } from "$lib/components/scaffold-eth";
  import Farm from "$lib/components/nerd-labs/Farm.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { BugAnt, Icon, MagnifyingGlass } from "svelte-hero-icons";

  const { address } = $derived.by(createAccount());
  const treasury = "0x8B2ABC599dF495016dd5a43d4acFffaaB5666c75";
</script>


<h1 class="text-center">
	<span class="">Bank of Based</span>
	<br>
	<span class="">burn the state</span>
</h1>

<p class="my-2 font-medium">Connected Address:</p>
<Farm />



<style>

</style>
