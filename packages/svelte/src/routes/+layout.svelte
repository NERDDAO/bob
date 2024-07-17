<script lang="ts">
  import { WagmiProvider } from "@byteatatime/wagmi-svelte";
  import "../app.pcss";
  import ScaffoldEthApp from "$lib/components/ScaffoldEthApp.svelte";
  import { wagmiConfig } from "$lib/wagmi";
  import { Toaster } from "@leodog896/svelte-french-toast";

  const { data }: { data: { vercelUrl?: string } } = $props();

  const baseUrl = $derived(data.vercelUrl ? `https://${data.vercelUrl}` : `http://localhost:5173`);

  const DESCRIPTION = "Bank of Based (CBDC) - Flawless monetary policy."
  const useLink = "https://www.bankofbased.com"
</script>

<svelte:head>
	<link rel="stylesheet" href="/global.css?v=4.0">
	
    <title>Bank of Based (CBDC)</title>
    <meta name="description" content={DESCRIPTION}>
    <link rel="icon" href="/images/logo-large.png">
	<meta property="og:site_name" content="Bank of Based (CBDC)">
    <meta property="og:title" content="Bank of Based (CBDC)">
    <meta property="og:description" content={DESCRIPTION}>
    <meta property="og:image" content={`${useLink}/images/logo-large.png`}>
    <meta property="og:url" content={useLink}>
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Bank of Based (CBDC)">
    <meta name="twitter:description" content={DESCRIPTION}>
    <meta name="twitter:image" content={`${useLink}/images/logo-large.png`}>
	
</svelte:head>

<Toaster />


<WagmiProvider config={wagmiConfig}>
	<ScaffoldEthApp>
		<slot />
	</ScaffoldEthApp>
</WagmiProvider>

