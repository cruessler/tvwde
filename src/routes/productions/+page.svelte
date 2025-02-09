<script lang="ts">
  import { mainImage } from '$lib/images.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

{#each data.productions as production}
  <div class="relative mb-8 h-40 w-full bg-slate-200">
    <div
      class="absolute bottom-0 left-0 bg-red-600 px-2 py-1 text-lg font-bold text-slate-100 opacity-80"
    >
      Performance
    </div>

    {@render mainImage(production.images?.[0])}
  </div>

  <h2 class="mx-6 mb-2 text-xl">
    <a href="/productions/{production.id}">{production.title_de}</a>
  </h2>

  <div class="mx-6 mb-8 line-clamp-3 whitespace-pre-line">{production.description_de}</div>

  <a
    href="/productions/{production.id}"
    class="mx-6 mb-6 block rounded-sm border-red-200 bg-red-800 px-4 py-2 text-lg text-slate-100"
    >Infos & Termine</a
  >
{/each}
