<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartDateTime, getEventStartDateTimeParts } from '$lib/date-times';

  let { data }: PageProps = $props();

  const nextProduction = data.productions[0];

  const nextEvent = getEventStartDateTimeParts(
    nextProduction.events[0].start_date,
    nextProduction.events[0].start_time
  );
</script>

<div class="relative mb-8 h-40 w-full bg-slate-200">
  <div
    class="absolute bottom-5 bg-red-600 py-4 pr-4 pl-2 text-lg font-bold text-slate-100 opacity-80"
  >
    Theater Verlängertes Wohnzimmer
  </div>

  Dies ist ein Platzhalter für ein Bild
</div>

<div class="mx-6 mb-4 flex flex-row">
  <div class="flex flex-col items-center text-lg">
    <div>{nextEvent.weekday}</div>
    <div class="font-bold">{nextEvent.day}</div>
    <div>{nextEvent.month}</div>
  </div>

  <div class="ml-auto self-center text-2xl">
    {nextEvent.hour}:{nextEvent.minute}
    {nextProduction.title_de}
  </div>
</div>

<div class="mx-6 mb-8 flex flex-row space-x-2">
  <span class="rounded-sm border-green-200 bg-green-800 px-2 py-1 text-slate-100">Performance</span>
  <span class="rounded-sm border-red-200 bg-red-800 px-2 py-1 text-slate-100">Premiere</span>
</div>

<div class="mx-6 mb-8 flex flex-row">Hier wird die Beschreibung des Stückes stehen.</div>

{#each data.productions as production}
  <h2 class="mb-2 text-xl"><a href="/productions/{production.id}">{production.title_de}</a></h2>

  {#each production.events as event}
    <h3>{formatStartDateTime(event.start_date, event.start_time)}</h3>
  {/each}
{/each}
