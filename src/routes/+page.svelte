<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartDate, formatStartTime, getEventStartDateTimeParts } from '$lib/date-times';
  import { mainImage } from '$lib/images.svelte';
  import { formatCurrency } from '$lib/currency';

  let { data }: PageProps = $props();

  const nextProduction = data.productions[0];

  const nextEvent = nextProduction.events[0];
</script>

<div class="relative mb-8 h-80 w-full bg-slate-200">
  <div
    class="absolute top-40 left-0 line-clamp-2 max-w-86 bg-red-900/85 px-5 py-4 text-lg font-bold text-white"
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

<h2 class="mx-6 mb-4 text-2xl font-bold text-neutral-700">Unsere nächste Veranstaltung</h2>

<div class="mx-6 mb-4 text-xl text-neutral-700">
  {formatStartDate(nextEvent.start_date, nextEvent.start_time)}
</div>

<h1 class="mx-6 mb-4 text-4xl font-bold text-neutral-700">
  {formatStartTime(nextEvent.start_date, nextEvent.start_time)}

  <a href="/productions/{nextProduction.id}">{nextProduction.title_de}</a>
</h1>

<div class="mx-6 mb-6 flex flex-row space-x-2">
  <span class="w-32 rounded-md bg-green-600 py-1 text-center text-zinc-50">Performance</span>
  <span class="w-32 rounded-md bg-yellow-500 py-1 text-center text-zinc-50">Premiere</span>
</div>

<div class="mx-6 mb-8 line-clamp-3 whitespace-pre-line">{nextProduction.description_de}</div>

<div class="mx-6 mb-8 flex flex-row items-center">
  <div class="text-2xl font-bold text-neutral-700">
    {formatCurrency(nextProduction.price_till)} | {formatCurrency(nextProduction.price_from)}
  </div>

  <a
    href="https://example.com/tickets"
    class="ml-auto block w-40 rounded-sm bg-red-900 px-4 py-1 text-center text-2xl text-zinc-50"
    >Tickets</a
  >
</div>

<h2 class="mx-6 mb-4 text-2xl">Produktionen im Fokus</h2>

{#each data.productions as production}
  <div class="relative mb-8 h-50 w-full bg-slate-200">
    <div
      class="absolute bottom-0 left-0 bg-red-900/85 px-8 py-2 text-lg font-bold text-slate-100 opacity-80"
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
    class="mx-6 mb-6 block rounded-sm bg-red-900 px-4 py-2 text-center text-2xl text-zinc-50"
    >Infos & Termine</a
  >
{/each}
