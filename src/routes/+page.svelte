<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartDate, formatStartTime, getCurrentYearAndMonth } from '$lib/date-times';
  import { mainImage } from '$lib/images.svelte';
  import { formatCurrency } from '$lib/currency';
  import { categoryCaption, categoryChip, characteristicChip } from '$lib/chips.svelte';

  let { data }: PageProps = $props();

  const nextProduction = data.productions[0];

  const nextEvent = nextProduction.events[0];

  const { year, month } = getCurrentYearAndMonth();
</script>

<div class="relative mb-6 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 w-86 bg-red-900/85 px-6 py-4 text-xl font-bold text-zinc-50"
  >
    Theater<br />
    Verlängertes Wohnzimmer
  </div>

  <enhanced:img
    src="$lib/assets/main-image.jpeg"
    alt="Szene auf der Bühne des Theaters Verlängertes Wohnzimmer: Ein Mann sitzt auf einer dunklen Bühne in einem Sessel im Scheinwerferlicht und wird im Hintergrund von einer Frau auf einer Chaiselongue beobachtet"
    class="h-full w-full object-cover"
  />
</div>

<h2 class="mx-6 mb-4 text-xl font-bold text-neutral-700">Unsere nächste Veranstaltung</h2>

<div class="mx-6 mb-1 text-base text-neutral-700">
  {formatStartDate(nextEvent.start_date, nextEvent.start_time)}
</div>

<h1 class="mx-6 mb-2 text-2xl font-bold text-neutral-700">
  {formatStartTime(nextEvent.start_date, nextEvent.start_time)}

  <a href="/productions/{nextProduction.id}" class="mx-2">{nextProduction.title_de}</a>
</h1>

<div class="mx-6 mb-2 flex flex-row space-x-2 text-sm">
  {#each nextEvent.characteristics as characteristic}
    {@render characteristicChip(characteristic)}
  {/each}

  {#each nextProduction.categories as category}
    {@render categoryChip(category)}
  {/each}
</div>

<div class="mx-6 mb-2 line-clamp-3 text-base whitespace-pre-line">
  {nextProduction.subtitle_de}
</div>

<div class="mx-6 mb-8 flex flex-row items-center">
  <div class="text-lg font-bold text-neutral-700">
    {formatCurrency(nextProduction.price_till)} | {formatCurrency(nextProduction.price_from)}
  </div>

  <a
    href={nextEvent.tickets_website}
    class="ml-auto block w-50 rounded-sm bg-red-900 px-4 py-1 text-center text-xl text-zinc-50"
    >Tickets</a
  >
</div>

<a
  href="/events/{year}/{month}"
  class="mx-6 mb-6 block rounded-sm border border-red-900 py-1 text-center text-lg text-red-900"
  >Spielplan</a
>

<h2 class="mx-6 mb-4 text-2xl">Produktionen im Fokus</h2>

{#each data.productions as production}
  <div class="relative mb-4 h-50 w-full bg-slate-200">
    {@render categoryCaption(production.categories[0])}

    {@render mainImage(production.images?.[0])}
  </div>

  <h2 class="mx-6 mb-2 text-2xl font-bold text-neutral-700">
    <a href="/productions/{production.id}">{production.title_de}</a>
  </h2>

  <div class="mx-6 mb-6 line-clamp-3 whitespace-pre-line">{production.description_de}</div>

  <a
    href="/productions/{production.id}"
    class="mx-6 mb-6 block rounded-sm bg-red-900 px-4 py-2 text-center text-xl text-zinc-50"
    >Infos & Termine</a
  >
{/each}
