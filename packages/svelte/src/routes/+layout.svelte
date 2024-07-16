<script lang="ts">
	import { WagmiProvider } from "@byteatatime/wagmi-svelte";
	import "../app.pcss";
	import ScaffoldEthApp from "$lib/components/ScaffoldEthApp.svelte";
	import { wagmiConfig } from "$lib/wagmi";
	import { Toaster } from "@leodog896/svelte-french-toast";
	import { currentContract } from '$lib/stores.js'
	import Fa from 'svelte-fa'
	import { faSquareXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
	import UniswapIcon from "./UniswapIcon.svelte";
	import DexScannerIcon from "./DexScannerIcon.svelte";
	import WarpedCast from "./WarpedCast.svelte"

	const { data }: { data: { vercelUrl?: string } } = $props();

	const baseUrl = $derived(data.vercelUrl ? `https://${data.vercelUrl}` : `http://localhost:5173`);
	const uniswap_link = $derived(`https://app.uniswap.org/explore/tokens/base/${$currentContract.token_address}`);
	const chart_link = $derived(`https://dexscreener.com/base/${$currentContract.token_address}`);

	const metadata = $derived({
		title: "Bank Of Based (CBDC)",
		description: "Bank of Based",
		thumbnail: `${baseUrl}/thumbnail.jpg`,
		favicon: "/favicon.png",
	});
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image:url" content={metadata.thumbnail} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:image" content={metadata.thumbnail} />
  <meta property="twitter:title" content={metadata.title} />
  <meta property="twitter:description" content={metadata.description} />
  <link rel="icon" type="image/png" href={metadata.favicon} sizes="32x32" />
</svelte:head>

<Toaster />

<div class="container" >
	<WagmiProvider config={wagmiConfig}>
		<ScaffoldEthApp>
		  <slot />
		</ScaffoldEthApp>
	  </WagmiProvider>
	<footer>
		<div class="right">
			<div class="social_bar">
				<!--
				<a href="https://x.com/x_based_god_x" target="_blank" rel="noopener noreferrer"><Fa icon={faSquareXTwitter} /></a> 
				-->
				<a href="https://warpcast.com/bankofbased" target="_blank" rel="noopener noreferrer"><WarpedCast /></a> 
				<a href="https://t.me/bankofbased" target="_blank" rel="noopener noreferrer"><Fa icon={faTelegram} /></a> 
				<a href="{uniswap_link}" target="_blank" rel="noopener noreferrer"><UniswapIcon /></a> 
				<a href="{chart_link}" target="_blank" rel="noopener noreferrer"><DexScannerIcon /></a> 
			</div>
			<a class="twitter_handle" href="https://x.com/burn_the_state" target="_blank" rel="noopener noreferrer">@burn_the_state</a> 
			
		</div>
		<div class="left">
	
		</div>
	</footer>
</div>


