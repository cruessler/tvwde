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

<main>
  {@render children()}
</main>

<footer class="fixed bottom-0 w-[100vw] bg-slate-700 p-2 text-slate-50">
  <menu class="flex flex-row space-x-4">
    <li><a href="/">Start</a></li>
    <li>Nachwuchsförderung</li>
  </menu>
</footer>
