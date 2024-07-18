
<script>
	import { createScaffoldContract } from "$lib/runes/scaffoldContract.svelte";
	import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";
	import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
	import { createAccount } from "@byteatatime/wagmi-svelte";
	import * as utils from '$lib/utils.js'
	import * as crypto from '$lib/crypto_v2.svelte.js'
	import mainnet from '$lib/mainnet.js'
	import toast from "@leodog896/svelte-french-toast";

	
	let interval = null
	let hasBalance = $state(false)

	function addTokenToWallet(event) {
        event.preventDefault();
		crypto.addTokenToWallet(tokenAddress)
    }

	const { data: rebaseContract, isLoading: rebaseLoaded } = $derived.by(() => createScaffoldContract({ contractName: "rebaseContract" }));
	const { data: cbdcContract, isLoading: cbdcLoaded } = $derived.by(() => createScaffoldContract({ contractName: "CBDC" }));
	const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract("rebaseContract"));


	let uniswap_link = $derived.by(() => {
		return `https://app.uniswap.org/explore/tokens/base/${cbdcContract?.address}`
	})

	let tokenAddress = $derived.by(() => {
		return cbdcContract?.address
	})

	const { address: connectedAddress } = $derived.by(createAccount());

	const walletAddress = $derived.by(() => {
		return connectedAddress
	});

	let secondsToNextRebase = $state(0)
	const sending_tx = $state(false)

	
	const { data: currentEPOCH } = $derived.by(
		createScaffoldReadContract(() => ({
		  contractName: "rebaseContract",
		  functionName: "EPOCH"
		}))
	);

	let { data: lastRebaseDateTime, refetch: refetchLastRebaseDateTime } = $derived.by(
		createScaffoldReadContract(() => ({
		  contractName: "rebaseContract",
		  functionName: "LAST_REBASE_BLOCK"
		}))
	);

	const percentDestroyed = $derived.by(() => {
		if (!currentEPOCH) return "0"

		const originalSupply = mainnet.original_supply
		const newSupply = utils.calculateNewSupply(originalSupply, currentEPOCH)

		const percentage = utils.calculatePercentageRemoved(newSupply, originalSupply)
		
		return percentage.toString();
	})

	const nextRebaseDelaySec = $derived.by(() => {
		if (!lastRebaseDateTime) return null

		const rebaseAvailable = utils.getNextRebaseAvailable(lastRebaseDateTime, mainnet.rebase_delay_sec)
		const delay = utils.calculateDelay(rebaseAvailable)

		if (delay > 0){
			return delay / 1000
		}else{
			return null
		}
	})

	const disableButton = $derived.by(() => {
		return nextRebaseDelaySec ? true : false;
	})

	$effect(() => {
		if (nextRebaseDelaySec > 0) {
			if (interval) {
				clearInterval(interval)
			}
			startCountdown(nextRebaseDelaySec)
		}else{
			refetchLastRebaseDateTime()
		}

	})

	function startCountdown(seconds) {
		interval = setInterval(() => {
			if (seconds > 0) {
				seconds--;
				secondsToNextRebase = seconds
			} else {
				console.log("CLEARING INTEVAL")
				clearInterval(interval);
				secondsToNextRebase = 0
				refetchLastRebaseDateTime()
			}
		}, 1000);
	}

	async function handleRebase() {
		const variables = {
			functionName: "rebase"
		};

		if (writeContractAsync) {
			await writeContractAsync(variables);

			setTimeout(() => {
				refetchLastRebaseDateTime()
			}, 5000);
		}
	}
</script>

<div class="dialogue">
	<h1><u>Memorandum on the State of the Market</u></h1>
	<div class="details">
		{#if walletAddress}<p class="add_token"><a href="#" on:click={addTokenToWallet}>{`>> ADD CBDC TOKEN TO WALLET <<`}</a></p>{/if}
		<p class="truncate-address">Token: <a href="{uniswap_link}" target="_blank" rel="noopener noreferrer">{tokenAddress}</a></p>
		<p>Chart: <a href="{`https://dexscreener.com/base/${tokenAddress}`}" target="_blank" rel="noopener noreferrer">www.dexscreener.com</a></p>
		<p>Warpcast: <a href="https://warpcast.com/bankofbased" target="_blank" rel="noopener noreferrer">warpcast.com/bankofbased</a></p>
		<p>Telegram: <a href="https://t.me/bankofbased" target="_blank" rel="noopener noreferrer">t.me/bankofbased</a></p>
		<p>Created By: <a href="https://x.com/burn_the_state" target="_blank" rel="noopener noreferrer">@burn_the_state</a></p>
	</div>

	<hr>
	<div class="text" >
		<p class="name" >AGENT B</p>
		<p>Mr. Powell, a situation has occured. The market has dipped.</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">What are our options?</p>
	</div>

	<div class="text">
		<p class="name">AGENT B</p>
		<p>We could let the market correct itself, or...</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">Impossible. It must always go up.</p>
	</div>

	<div class="text">
		<p class="name">AGENT B</p>
		<p>Or... We can initiate plan B.</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">Plan B?</p>
	</div>

	<div class="text">
		<p class="name">AGENT B</p>
		<p>Our expert economists have figured out a way with our new CBDC how to make the market go up forever.</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">Oh?</p>
	</div>
</div>

	<div class="buttons">
		<div class="button_row"> 
			<button class="buy_token secondary" on:click={() => utils.openSite(uniswap_link)}>
				<span class="token_spin"></span>
				<span class="button_text">BUY CBDC TOKEN</span>
			</button>
			
			<button class="rebase primary" disabled={!walletAddress || disableButton} on:click={handleRebase}>
				{#if disableButton}
					<span class="clock_loader loader"></span>
					<div class="button_text unavailable">
						UPPIFIER UNAVAILABLE
						{#if secondsToNextRebase > 0}
							<span class="seconds">{utils.formatTime(parseInt(secondsToNextRebase))}</span>
						{/if}
					</div>
				{:else}
					{#if sending_tx}
						<span class="circle_loader loader"></span>
					{:else}
						<span class="arrow_loader loader"></span> 
					{/if}
					<div class="button_text">MAKE CBDC GO UP</div>
				{/if}
			</button>
			
		</div>

		<div class="info_row">
			<div class="contract_info">
				<span class="need_token_text">CBDC Token Balance required to Use UPPIFIER Button</span>
				{#if percentDestroyed}
					<span class="supply">{`The supply has been reduced by ${percentDestroyed}%`}</span>
				{/if}
			</div>
		</div>
		
	</div>

	
<div class="dialogue">
	<div class="text">
		<p class="name">AGENT B</p>
		<p>Yes. With a press of this button, 1% of the circulating tokens are removed from the supply, causing each CBDC to be worth a larger percent of the market share.</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">Which makes each token worth more...?</p>
	</div>

	<div class="text">
		<p class="name">AGENT B</p>
		<p>Precisely. There's just one catch.</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">What's that?</p>
	</div>

	<div class="text">
		<p class="name">AGENT B</p>
		<p>You can only press the button once every 60 minutes.</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">I guess you can't win them all.</p>
	</div>

	<div class="text">
		<p class="name">AGENT B</p>
		<p>You never can, sir. What will you do?</p>
	</div>

	<div class="text grey">
		<p class="name response">POWELL</p>
		<p class="response">Well, what's the worse that could happen?</p>
	</div>
</div>

<style>

	h1{
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	p.add_token{
		font-weight: 400;
		margin: 0.5rem 0!important;
	}
	.buttons{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.rebase{ 
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 0;
		margin-top: 1rem;
	} 
	.rebase > span.loader{
		margin-right: 0.25em;
	}
	.button_row{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.info_row{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	span.loader{
		margin: 0;
	}
	.unavailable{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	span.seconds{
		font-size: smaller;
	}
	.contract_info{
		font-family: "Courier New", sans-serif;
		display: flex;
		flex-direction: column;
		color: rgb(114, 114, 114);
		padding: 0 2em;
	}
	span.need_token_text{
		margin-top: 1rem;
	}
	div.buttons{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1em;
		text-align: center;
	}

	.details{
		font-weight: bold;
		margin-bottom: 1rem;
		line-height: 1.2;
		max-width: 100%; 
	}
	.details > p{
		margin: 0;
		overflow: hidden;
	}
	.truncate-address {
		word-wrap: break-word;
		word-break: break-all;
	}
	p > a {
		text-decoration: none;
		color: #000;
		text-decoration: underline;
		text-decoration-color: #dbdbdb;
	}
	p > a:hover {
		text-decoration: underline;
	}
	p > a:visited, a:hover {
		color: rgb(90, 90, 90);
	}
	.dialogue {
		border: 1px dashed rgb(211, 211, 211);
		padding: 20px;
		background-color: var(--bg-color);
		font-family: "Courier New", sans-serif;
		text-align: left;
		font-weight: bold;
	}

	.grey {
		background-color: #f2f2f2;
	}

	.text > p {
		margin: 0;
		padding: 0;
	}

	.text {
		line-height: 1.2;
		padding: 0.3em 0;
	}

	.dialogue p.name {
		text-align: left;
	}

	.dialogue p.response {
		text-align: right;
		background-color: #f2f2f2;
	}
	.buttons{
		margin-bottom: 1rem;
	}


	@media (min-width: 768px) {
		p.add_token{
			font-size: medium;
			text-align: left;
		}
		.button_row{
			flex-direction: row;
		}
		.rebase{
			margin-left: 2em;
			margin-top: 0;
		}
		.contract_info{
    		padding: 0;
		}
	}
	
</style>