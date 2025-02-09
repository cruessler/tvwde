<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartTime, getEventStartDateTimeParts } from '$lib/date-times';
  import { mainImage } from '$lib/images.svelte';

  let { data }: PageProps = $props();
</script>

<div class="relative mb-8 h-40 w-full bg-slate-200">
  <div
    class="absolute bottom-0 left-0 bg-red-600 px-2 py-1 text-lg font-bold text-slate-100 opacity-80"
  >
    Performance
  </div>

  {@render mainImage(data.production.images?.[0])}
</div>

<h2 class="mx-6 mb-2 text-xl">
  <a href="/productions/{data.production.id}">{data.production.title_de}</a>
</h2>

<div class="mx-6 mb-8 whitespace-pre-line">{data.production.description_de}</div>

{#each data.production.events as event}
  {@const { weekday, day } = getEventStartDateTimeParts(event.start_date, event.start_time)}

  <div class="mx-6 mb-2 flex flex-row">
    <div class="flex flex-col items-center text-lg">
      <div>{weekday}</div>
      <div class="text-xl font-bold">{day}</div>
    </div>

    <div class="ml-auto self-center text-2xl">
      {formatStartTime(event.start_date, event.start_time)}
    </div>
  </div>
{/each}
