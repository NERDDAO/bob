<script lang="ts">
  import { Address } from "$lib/components/scaffold-eth";
  import Farm from "$lib/components/nerd-labs/Farm.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { BugAnt, Icon, MagnifyingGlass } from "svelte-hero-icons";

  const { address } = $derived.by(createAccount());
  const treasury = "0x8B2ABC599dF495016dd5a43d4acFffaaB5666c75";
</script>

<div class="border">
	<h1 >
		<u>Flawless Staking Policy</u>
	</h1>
	<hr>
	<Farm />
</div>





<style>
	h1{
		margin: 1rem 0;
	}
	.border{
		border: 1px dashed rgb(211, 211, 211);
		border-radius: 0;
		padding: 20px;
	}

</style>
