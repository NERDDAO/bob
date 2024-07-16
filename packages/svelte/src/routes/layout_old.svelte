<script>
	import { page } from '$app/stores';
	console.log($page.route.id)
	console.log($page.route.id == '/about')
	import { inject } from '@vercel/analytics'
	inject();
	
	import { onMount } from "svelte";
	import { currentContract } from '$lib/stores.js'
	import Fa from 'svelte-fa'
	import { faSquareXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
	import UniswapIcon from "./UniswapIcon.svelte";
	import DexScannerIcon from "./DexScannerIcon.svelte";
	import WarpedCast from "./WarpedCast.svelte"

	import * as crypto from '$lib/crypto.js'
    import FrameCaster from "./FrameCaster.svelte";

	const localLink = "http://localhost:5174"
	const devLink = "https://bankofbased-git-dev-jeffscotts-projects.vercel.app"
	const prodLink = "https://www.bankofbased.com"
	

	let useLink = prodLink

	const DESCRIPTION = "Bank of Based (CBDC) - Flawless monetary policy."

	$: uniswap_link = `https://app.uniswap.org/explore/tokens/base/${$currentContract.token_address}`
	$: chart_link = `https://dexscreener.com/base/${$currentContract.token_address}`

	onMount(crypto.checkWallet)
</script>


<svelte:head>
	<link rel="stylesheet" href="/global.css?v=3.0">
	
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

<FrameCaster {useLink} {uniswap_link}/>

<div class="container" >
	<header>
		<div class="brand title_font">BANK OF BASED</div>
		<div class="nav">
			<a class:active={$page.route.id == '/'} href="/">HOME</a>
			<a class:active={$page.route.id == '/about'} href="/about">ABOUT</a>
		</div>
	</header>
	<main>
		<slot></slot>
	</main>
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

<style>
	div.brand{
		width: 100%;
		font-size: xx-large;
		text-align: center;
		color: rgb(49, 49, 49);
		margin-bottom: 0.5rem;
		padding-bottom: 0.5em;
		border-bottom: 2px solid rgb(90, 90, 90);;
	}
	.nav{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.nav a{
		font-size: large;
		cursor: pointer;
		text-decoration: none;

		color: gray;
		font-weight: bold;
	}
	.nav a:nth-child(odd) {
		margin-right: 1em;
	}
	.nav a:visited{
		color: gray;
	}
	.nav a.active{
		color: #000;
	}
	.nav a:hover{
			color: #000;
			filter: unset;
		}

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
		div.brand{
			text-align: right;
		}
		.nav{
			justify-content: right;
		}
		.nav a{
			font-size: x-large;
		}

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