<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<header class="h-20 bg-slate-700 p-4">
  <enhanced:img
    src="$lib/assets/tvw-logo-1536x384.png"
    alt="Logo des Theaters Verlängertes Wohnzimmer"
    class="aspect-auto w-[192px]"
  />
</header>

<main class="mb-8">
  {@render children()}
</main>

<footer class="w-[100vw] bg-slate-700 p-2 text-slate-50">
  <menu class="mb-4 grid grid-cols-2 space-y-1">
    <li class="row-start-1"><a href="/">Home</a></li>
    <li class="row-start-2">Spielplan</li>
    <li class="row-start-3">Produktionen</li>
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
