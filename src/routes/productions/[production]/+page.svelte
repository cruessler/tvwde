<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartTime, formatStartDate } from '$lib/date-times';
  import { formatCurrency } from '$lib/currency';
  import { mainImage } from '$lib/images.svelte';
  import { categoryChip } from '$lib/chips.svelte';

  let { data }: PageProps = $props();
</script>

<div class="relative mb-8 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 w-86 bg-red-900/85 px-6 py-4 text-lg font-bold text-zinc-50"
  >
    {data.production.title_de}
  </div>

  {@render mainImage(data.production.images?.[0])}
</div>

<h2 class="mx-6 mb-2 text-3xl font-bold text-neutral-700">
  <a href="/productions/{data.production.id}">{data.production.title_de}</a>
</h2>

<h3 class="mx-6 mb-4 line-clamp-3 text-lg font-bold text-neutral-700">
  {data.production.subtitle_de}
</h3>

<div class="mx-6 mb-6 text-sm">
  {#each data.production.categories as category}
    {@render categoryChip(category)}
  {/each}
</div>

<div class="mx-6 mb-4 whitespace-pre-line text-neutral-700">{data.production.description_de}</div>

<div class="mx-6 mb-8 text-lg font-bold text-neutral-700">
  {formatCurrency(data.production.price_till)} | {formatCurrency(data.production.price_from)}
</div>

<h2 class="mx-6 mb-3 border-b-1 border-b-neutral-700 text-xl text-neutral-700">Termine</h2>

<div
  class="mx-6 mb-8 grid grid-cols-[1fr_min-content_min-content] gap-x-10 gap-y-2 text-neutral-700"
>
  {#each data.production.events as event}
    <div>
      {formatStartDate(event.start_date, event.start_time)}
    </div>

    <div>
      {formatStartTime(event.start_date, event.start_time)}
    </div>

    <a href={event.tickets_website} class="underline">Tickets</a>
  {/each}
</div>

<h2 class="mx-6 mb-3 border-b-1 border-b-neutral-700 text-xl text-neutral-700">Ensemble</h2>

<div class="mx-6 mb-10 grid grid-cols-[1fr_max-content] gap-x-8 gap-y-1 text-neutral-700">
  <div>Regie</div>
  <div>Bianca Beispiel</div>

  <div>Dramaturgie</div>
  <div>Max Mustermann</div>

  <div>Schauspiel</div>
  <div>Benjamin Blümchen</div>

  <div></div>
  <div>Carla Columna</div>
</div>

<a
  href="/productions"
  class="mx-6 block rounded-sm bg-red-900 px-4 py-2 text-center text-2xl text-zinc-50"
  >Weitere Produktionen</a
>
