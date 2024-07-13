<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { Address, Balance } from "$lib/components/scaffold-eth";

  const { address: connectedAddress } = $derived.by(createAccount());
</script>

<div class="mx-auto mt-6 max-w-md rounded-lg bg-base-300 p-6">
  <h2 class="mb-4 text-2xl font-bold">Your Ethereum Balance</h2>

  <div class="mb-2 text-sm font-semibold">
    Address: <Address address={connectedAddress} />
  </div>

  <div class="mb-2 text-sm font-semibold">
    Balance: <Balance address={connectedAddress} />
  </div>
</div>
