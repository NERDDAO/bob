<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";

  import LPStaking from "./LPStaking.svelte";
  import diagram from "$lib/assets/diagram.jpg";

  import XwCBDCWrapper from "./XwCBDCWrapper.svelte";

  // import BankOfBased from "./BankOfBased.svelte";

  import WrapCBDC from "./WrapCBDC.svelte";
</script>

<div class="farm-container">
  <div class="collapse w-full">
    <input type="radio" name="my-accordion-1" checked />

    <h2 class="collapse-title cursor-pointer">CBDC Wrapper</h2>
    <div class="collapse-content flex w-full flex-col justify-center space-x-2">
      <WrapCBDC />
    </div>
  </div>

  <div class="collapse w-full">
    <input type="radio" name="my-accordion-1" />

    <h2 class="collapse-title cursor-pointer">wCBDC Yield</h2>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2">
      <XwCBDCWrapper />
    </div>
  </div>
  <div class="collapse w-full">
    <input type="radio" name="my-accordion-1" />

    <h2 class="collapse-title cursor-pointer">Liquidity Mining</h2>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2">
      <LPStaking />
    </div>
  </div>

  <div class="collapse w-full">
    <input type="radio" name="my-accordion-1" />

    <h2 class="collapse-title cursor-pointer">INFO</h2>

    <div class="collapse-content w-full">
      <img class="flow-diagram" alt="The project logo" src={diagram} />
    </div>
  </div>
</div>

<style>
  .farm-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .farm-container > div {
    margin-bottom: 1rem;
    border-radius: 0;
    background-color: var(--light-gray);
  }
  .flow-diagram{
 	width: 100%;
	height: auto; 
  }
</style>
