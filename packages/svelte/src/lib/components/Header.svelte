<script lang="ts">
  import { page } from "$app/stores";
  import ConnectButton from "$lib/components/scaffold-eth/connect-button/ConnectButton.svelte";
  import { derived } from "svelte/store";

  type HeaderMenuLink = {
    label: string;
    href: string;
  };

  export const menuLinks: HeaderMenuLink[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  const isCurrentPage = derived(page, $page => (href: string) => {
    return href === $page.url.pathname;
  });
</script>

<header class="header">
  <div class="wallet-section">
    <ConnectButton />
  </div>
<div class="brand title_font">BANK OF BASED</div>
</header>

<style>
  @font-face {
    font-family: 'CloisterBlack';
    src: url('/fonts/CloisterBlack.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--background-color);
  }

  .brand {
    font-family: 'CloisterBlack', sans-serif;
    font-size: 1.5rem;
  }

  .nav {
    display: flex;
    gap: 1rem;
  }

  .nav a {
    text-decoration: none;
    color: var(--text-color);
  }

  .nav a.active {
    font-weight: bold;
  }

  .wallet-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .balance {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-color);
  }
</style>