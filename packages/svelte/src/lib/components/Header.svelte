<script lang="ts">

  import { page } from "$app/stores";

  import ConnectButton from "$lib/components/scaffold-eth/connect-button/ConnectButton.svelte";

  import { derived } from "svelte/store";


  type HeaderMenuLink = {

    label: string;

    href: string;

  };


  export const menuLinks: HeaderMenuLink[] = [
    { label: "Home", href: "/" },
	{ label: "Stake", href: "/stake" }, // Added Stake link
    { label: "About", href: "/about" },
  ];

  const isCurrentPage = derived(page, $page => {

    return (href: string) => href === $page.url.pathname;
  });
</script>


<header class="header">
  <div class="header-top">
    <ConnectButton />
    <div class="brand title_font svelte-bioemj">BANK OF BASED</div>
  </div>
  <div class="nav">
    {#each menuLinks as link}
      <a href={link.href} class:active={$isCurrentPage(link.href)}>{link.label.toUpperCase()}</a>
    {/each}
  </div>
</header>

<style>

 .header {
	display: flex;
	flex-direction: column;

    position: relative;

    padding: 1rem;
    background-color: var(--bg-color);
	margin-bottom: 2rem;

  }

  .header-top{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	border-bottom: 2px solid rgb(90, 90, 90);
  }

  .header-top > div{
		width: 100%;
	}

  .nav{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
  }

	div.brand{
		max-width: fit-content;
		width: 100%;
		font-size: xx-large;
		text-align: center;
		color: rgb(49, 49, 49);
		padding-bottom: 0.5em;
		margin-top: 1rem;

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
	.nav a:nth-child(even) {
		margin: 0 1em;
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

  .svelte-bioemj {

    font-size: xx-large;

    text-align: right;

    color: #313131;

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
		.header-top > div{
			width: unset;
		}
		.header-top{
			flex-wrap: nowrap;
			justify-content: space-between;
		}
  }
</style>