<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<nav class="bg-tvw-accent text-tvw-primary p-2">
  <menu class="flex flex-row space-x-4">
    <li>Start</li>
    <li>Nachwuchsförderung</li>
  </menu>
</nav>

<main class="p-2">
  {@render children()}
</main>
