<script lang="ts">
  import { mainImage } from '$lib/images.svelte';
  import type { PageProps } from './$types';
  import { categoryCaption } from '$lib/chips.svelte';

  let { data }: PageProps = $props();
</script>

<div class="relative mb-8 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 bg-red-900/85 py-4 pr-15 pl-6 text-2xl font-bold text-zinc-50"
  >
    Produktionen<br />
    im Überblick
  </div>

  <enhanced:img
    src="$lib/assets/main-image.jpeg"
    alt="Szene auf der Bühne des Theaters Verlängertes Wohnzimmer: Ein Mann sitzt auf einer dunklen Bühne in einem Sessel im Scheinwerferlicht und wird im Hintergrund von einer Frau auf einer Chaiselongue beobachtet"
    class="h-full w-full object-cover"
  />
</div>

{#each data.productions as production}
  <div class="relative mr-6 mb-4 ml-6 h-60 bg-slate-200">
    {@render categoryCaption(production.categories[0])}

    {@render mainImage(production.images?.[0])}
  </div>

  <h2 class="mx-6 mb-2 text-2xl font-bold">
    <a href="/productions/{production.id}">{production.title_de}</a>
  </h2>

  <div class="mx-6 mb-4 line-clamp-3 whitespace-pre-line">{production.description_de}</div>

  <a
    href="/productions/{production.id}"
    class="mx-6 mb-10 block rounded-sm border-red-200 bg-red-800 px-4 py-2 text-lg text-slate-100"
    >Infos & Termine</a
  >
{/each}
