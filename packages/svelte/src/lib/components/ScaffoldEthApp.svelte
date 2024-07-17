<script lang="ts">
  import { setNativeCurrencyPrice } from "$lib/runes/global.svelte";
  import { createNativeCurrencyPrice } from "$lib/runes/nativeCurrencyPrice.svelte";
  import { createScaffoldContract } from "$lib/runes/scaffoldContract.svelte";
  import Header from "./Header.svelte";

  import { reconnect } from "@wagmi/core";
  import { wagmiConfig } from "$lib/wagmi";
  import { untrack } from "svelte";
  import { createDarkMode } from "$lib/runes/darkMode.svelte";
  import { modal } from "$lib/modal";

  import WarpedCast from "./WarpedCast.svelte";
  import UniswapIcon from "./UniswapIcon.svelte";
  import DexScannerIcon from "./DexScannerIcon.svelte";
  import TelegramIcon from "./TelegramIcon.svelte";

  
  	const { data: cbdcContract, isLoading: cbdcLoaded } = $derived.by(() => createScaffoldContract({ contractName: "CBDC" }));

	let tokenAddress = $derived.by(() => {
		return cbdcContract?.address
	})

	let uniswap_link = $derived.by(() => {
		return `https://app.uniswap.org/explore/tokens/base/${tokenAddress}`
	})

	let chart_link = $derived.by(() => {
		return `https://dexscreener.com/base/${tokenAddress}`
	})

  const price = createNativeCurrencyPrice();

  $effect(() => {
    setNativeCurrencyPrice(price.nativeCurrencyPrice);
  });

  $effect(() => {
    untrack(() => {
      reconnect(wagmiConfig);
    });
  });

  const { isDarkMode } = $derived.by(createDarkMode());

  $effect(() => {
    modal.setThemeMode(isDarkMode ? "dark" : "light");
  });
</script>

<div class="container">
  <Header />

  <main><slot /></main>

  <footer>
	<div class="right">
		<div class="social_bar">
			<!--
			<a href="https://x.com/x_based_god_x" target="_blank" rel="noopener noreferrer"><Fa icon={faSquareXTwitter} /></a> 
			
			-->
			<a href="https://t.me/bankofbased" target="_blank" rel="noopener noreferrer"><TelegramIcon /></a> 
			<a href="https://warpcast.com/bankofbased" target="_blank" rel="noopener noreferrer"><WarpedCast /></a> 
			<a href="{uniswap_link}" target="_blank" rel="noopener noreferrer"><UniswapIcon /></a> 
			<a href="{chart_link}" target="_blank" rel="noopener noreferrer"><DexScannerIcon /></a> 

		</div>
		<a class="twitter_handle" href="https://x.com/burn_the_state" target="_blank" rel="noopener noreferrer">@burn_the_state</a> 
		
	</div>
	<div class="left">

	</div>
</footer>
</div>

<style>
	footer{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}

	.right{
		text-align: center;
	}

	.social_bar{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 1rem;
	}
	.social_bar > a{
		font-size: 2em;
		margin: 0 0.5em 0 0;
		width: 1em;
		height: 1em;
		color: #000;
	}
	a:visited{
		color: #000;
	}
	a:hover{
		filter: contrast(0.1);
	}
	a.twitter_handle{
		font-size: large;
	}

	@media (min-width: 768px) {
		footer{
			padding: 3em;
			flex-direction: row;
			align-items: right;
		}

		.right{
			text-align: left;
		}
	}
</style>