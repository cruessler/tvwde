<script lang="ts">
  import { categoryChip, characteristicChip } from '$lib/chips.svelte';
  import { formatCurrency } from '$lib/currency';
  import { formatStartDate, formatStartTime } from '$lib/date-times';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="relative mb-0 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 w-86 bg-red-900/85 px-6 py-4 text-2xl font-bold text-zinc-50"
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
  <div class="mb-2 mr-3 ml-3  border-t-neutral-700 px-3 py-2  text-lg  text-neutral-700">
    {formatStartDate(event.start_date, event.start_time)}
  </div>

  <h1 class="mx-6 mb-4 text-2xl font-bold text-neutral-700">
    {formatStartTime(event.start_date, event.start_time)}

    <a href="/productions/{event.production_id.id}" class="mx-2" >{event.production_id.title_de}</a>
  </h1>

  <div class="mx-6 mb-4 text-sm flex flex-row flex-wrap space-y-1 space-x-2">
    {#each event.characteristics as characteristic}
      {@render characteristicChip(characteristic)}
    {/each}

    {#each event.production_id.categories as category}
      {@render categoryChip(category)}
    {/each}
  </div>

  <div class="mx-6 mb-6 line-clamp-3 whitespace-pre-line">{event.production_id.description_de}</div>

  <div class="mx-6  flex flex-row items-center ">
    <div class="text-lg font-bold text-neutral-700">
      {formatCurrency(event.production_id.price_till)} </div> <div class="font-light text-lg text-neutral-700 mx-1" > | </div>
    <div class="font-bold text-lg text-neutral-700"> {formatCurrency(
        event.production_id.price_from
      )}
    </div>

    <a
      href={event.tickets_website}
      class="ml-auto block w-50 rounded-sm bg-red-900 px-4 py-1 text-center text-xl text-zinc-50"
      >Tickets</a
    >
  </div>
  <div class="mb-3 border-b-2 border-b-neutral-700 pb-6 ml-3 mr-3"></div>
{/each}
