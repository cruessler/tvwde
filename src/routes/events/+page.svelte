<script lang="ts">
  import { categoryChip, characteristicChip } from '$lib/chips.svelte';
  import { formatCurrency } from '$lib/currency';
  import { formatStartDate, formatStartTime } from '$lib/date-times';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="relative mb-2 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 bg-red-900/85 py-4 pr-15 pl-6 text-2xl font-bold text-zinc-50"
  >
    Spielplan bis<br />
    {data.dateReadable}
  </div>

  <enhanced:img
    src="$lib/assets/main-image.jpeg"
    alt="Szene auf der Bühne des Theaters Verlängertes Wohnzimmer: Ein Mann sitzt auf einer dunklen Bühne in einem Sessel im Scheinwerferlicht und wird im Hintergrund von einer Frau auf einer Chaiselongue beobachtet"
    class="h-full w-full object-cover"
  />
</div>

{#each data.events as event}
  <div
    class="mb-2 border-b-2 border-t-neutral-700 border-b-neutral-700 px-6 pt-2 text-lg text-neutral-700"
  >
    {formatStartDate(event.start_date, event.start_time)}
  </div>
  <h1 class="mx-6 mb-2 text-2xl font-bold text-neutral-700">
    {formatStartTime(event.start_date, event.start_time)}

    <a href="/productions/{event.production_id.id}" class="mx-2">{event.production_id.title_de}</a>
  </h1>

  <div class="mx-6 mb-2 flex flex-row flex-wrap space-y-1 space-x-2 text-sm">
    {#each event.characteristics as characteristic}
      {@render characteristicChip(characteristic)}
    {/each}

    {#each event.production_id.categories as category}
      {@render categoryChip(category)}
    {/each}
  </div>

  <div class="mx-6 mb-3 line-clamp-3 whitespace-pre-line">{event.production_id.description_de}</div>

  <div class="mx-6 flex flex-row items-center">
    <div class="space-x-1 text-lg font-bold text-neutral-700">
      {formatCurrency(event.production_id.price_till)}
      <span class="font-light">|</span>
      {formatCurrency(event.production_id.price_from)}
    </div>

    <a
      href={event.tickets_website}
      class="ml-auto block w-40 rounded-sm bg-red-900 px-4 py-1 text-center text-xl text-zinc-50"
      >Tickets</a
    >
  </div>
{/each}
