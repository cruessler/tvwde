<script lang="ts">
  import type { PageProps } from './$types';
  import { getEventStartDateTimeParts } from '$lib/date-times';

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

<div class="mx-6 mb-8 flex flex-row items-center">
  <div class="text-xl font-bold">10 €–15 €</div>

  <a href="#" class="ml-auto rounded-sm border-red-200 bg-red-800 px-4 py-2 text-lg text-slate-100"
    >Tickets</a
  >
</div>

<h2 class="mx-6 mb-4 text-2xl">Produktionen im Fokus</h2>

{#each data.productions as production}
  <div class="relative mb-8 h-40 w-full bg-slate-200">
    <div
      class="absolute bottom-0 left-0 bg-red-600 px-2 py-1 text-lg font-bold text-slate-100 opacity-80"
    >
      Performance
    </div>

    Dies ist ein Platzhalter für ein Bild
  </div>

  <h2 class="mx-6 mb-2 text-xl">
    <a href="/productions/{production.id}">{production.title_de}</a>
  </h2>

  <div class="mx-6 mb-8 flex flex-row">Hier wird die Beschreibung des Stückes stehen.</div>

  <a
    href="/productions/{production.id}"
    class="mx-6 mb-6 block rounded-sm border-red-200 bg-red-800 px-4 py-2 text-lg text-slate-100"
    >Infos & Termine</a
  >
{/each}
