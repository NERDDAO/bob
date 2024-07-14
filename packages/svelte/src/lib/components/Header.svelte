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
  <div class="brand title_font">BANK OF BASED</div>
  <div class="nav">
    {#each menuLinks as { label, href } (href)}
      <a href={href} class:active={$isCurrentPage(href)}>{label}</a>
    {/each}
  </div>
  <ConnectButton />
</header>

<style>
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

  .nav a {
    margin: 0 1rem;
    text-decoration: none;
    color: var(--text-color);
  }

  .nav a.active {
    font-weight: bold;
  }
</style>