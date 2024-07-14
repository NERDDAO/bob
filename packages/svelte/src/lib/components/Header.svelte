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

    { label: "About", href: "/about" },

    { label: "Stake", href: "/stake" }, // Added Stake link

  ];

  const isCurrentPage = derived(page, $page => {

    return (href: string) => href === $page.url.pathname;
  });
</script>


<header class="header">
  <div class="header-content">
    <ConnectButton />

    <div class="brand title_font svelte-bioemj">BANK OF BASED</div>

  </div>
 
</header>
 <div class="nav svelte-bioemj">

    {#each menuLinks as link}

      <a href={link.href} class:active={$isCurrentPage(link.href)}>{link.label.toUpperCase()}</a>

    {/each}

  </div>

<style>

  @font-face {

    font-family: 'CloisterBlack';

    src: url('CloisterBlack.ttf') format('truetype');

    font-weight: normal;

    font-style: normal;

  }

 .header {

    position: relative;

    padding: 1rem;
    background-color: var(--background-color);

  }

  .header-content {

    display: flex;

    justify-content: space-between;

    align-items: center;
  }

  .nav {
    display: flex;

    gap: 1rem;

    margin-left: auto; 

  }


  .nav a {

    text-decoration: none;

    color: var(--text-color);
     font-size: 1.5rem;
  }

  .nav a.active {
    font-weight: bold;

  }


  .brand {

    margin-left: 1rem;

    font-family: 'CloisterBlack', sans-serif;

    font-size: 1.5rem;

  }

  .header::after {

    content: "";

    position: absolute;

    bottom: 0;

    left: 0;

    width: 100%;

    height: 2px;

    background-color: rgb(90, 90, 90);

  }

  .balance {

    margin-top: 0.5rem;
    font-size: 0.875rem;

    color: var(--text-color);
  }


  .svelte-bioemj {

    font-size: xx-large;

    text-align: right;

    color: #313131;

  }
</style>