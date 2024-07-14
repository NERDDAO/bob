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

  <div class="header-content">

    <ConnectButton />

    <div class="brand title_font svelte-bioemj">BANK OF BASED</div>

  </div>

</header>

<style>

  @font-face {

    font-family: 'CloisterBlack';

    src: url('/fonts/CloisterBlack.ttf') format('truetype');

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

  .brand {

    margin-left: auto; /* Pushes the brand to the right */

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

    background-color: rgb(90, 90, 90); /* Border color */

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
