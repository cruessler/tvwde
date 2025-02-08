<script lang="ts">
  import { formatStartTime, getEventStartDateTimeParts } from '$lib/date-times';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<h1 class="mx-6 mb-2 text-2xl">{data.monthReadable}</h1>

{#each data.events as event}
  {@const { weekday, day } = getEventStartDateTimeParts(event.start_date, event.start_time)}

  <div class="mx-6 mb-2 flex flex-row">
    <div class="flex flex-col items-center text-lg">
      <div>{weekday}</div>
      <div class="text-xl font-bold">{day}</div>
    </div>

    <div class="ml-auto self-center text-2xl">
      {formatStartTime(event.start_date, event.start_time)}
      {event.production_id.title_de}
    </div>
  </div>

  <div class="mx-6 mb-2 flex flex-row space-x-2">
    <span class="rounded-sm border-red-200 bg-red-800 px-2 py-1 text-slate-100">Premiere</span>
    <span class="rounded-sm border-green-200 bg-green-800 px-2 py-1 text-slate-100"
      >Performance</span
    >
  </div>

  <div class="mx-6 mb-2 flex flex-row">Hier wird die Beschreibung des Stückes stehen.</div>

  <div class="mx-6 mb-8 flex flex-row items-center">
    <div class="text-xl font-bold">10 €–15 €</div>

    <a
      href="#"
      class="ml-auto rounded-sm border-red-200 bg-red-800 px-4 py-2 text-lg text-slate-100"
      >Tickets</a
    >
  </div>
{/each}
