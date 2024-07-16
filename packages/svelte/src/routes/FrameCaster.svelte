
<script>
	export let useLink;
	export let uniswap_link;
	
</script>

<svelte:head>
	<meta name="fc:frame" content="vNext" />
	<meta name="fc:frame:image" content="{`${useLink}/images/fc-start.png`}" />
	<meta name="fc:frame:image:aspect_ratio" content="1:1">
	<meta name="fc:frame:button:1" content="Buy CBDC" />
	<meta name="fc:frame:button:1:action" content="link" />
	<meta name="fc:frame:button:1:target" content="{uniswap_link}"/>
	<meta name="fc:frame:button:2" content="MAKE IT GO UP" />
	<meta name="fc:frame:button:2:action" content="tx" />
	<meta name="fc:frame:button:2:target" content="{`${useLink}/fc_rebase`}" />
	<meta name="fc:frame:button:2:post_url" content="{`${useLink}/fc_callback`}" />
</svelte:head>