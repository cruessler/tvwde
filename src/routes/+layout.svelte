<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { getCurrentYearAndMonth } from '$lib/date-times';
  import '../app.css';

  let { children } = $props();

  const { year, month } = getCurrentYearAndMonth();
</script>

<header class="sticky top-0 z-50 h-16 bg-neutral-800 px-6 py-3">
  <a href="/"
    ><img
      src="{env.PUBLIC_ASSETS_URL}/c9ff1219-9821-4303-9340-39d39d15d089"
      alt="Logo des Theaters Verlängertes Wohnzimmer"
      class="aspect-auto w-[150px]"
    />
  </a>
</header>

<main class="mb-8">
  {@render children()}
</main>

<footer class="w-[100vw] bg-neutral-800 px-6 py-2 text-zinc-50">
  <menu class="mb-4 grid grid-cols-2 space-y-1">
    <li class="row-start-1"><a href="/">Home</a></li>
    <li class="row-start-2"><a href="/events/{year}/{month}">Spielplan</a></li>
    <li class="row-start-3"><a href="/productions">Produktionen</a></li>
    <li class="row-start-4">Nachwuchsförderung</li>
    <li class="row-start-5">Über uns</li>

    <li class="row-start-1">Impressum</li>
    <li class="row-start-2">Datenschutz</li>
    <li class="row-start-3">Kontakt</li>
  </menu>

  <address>
    Theater Verlängertes Wohnzimmer e.V.<br />
    Frankfurter Allee 91<br />
    10247 Berlin
  </address>
</footer>
