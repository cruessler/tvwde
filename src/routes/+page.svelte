<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartDateTime } from '$lib/date-times';

  let { data }: PageProps = $props();
</script>

<h1 class="mb-2 text-xl">Theater Verlängertes Wohnzimmer</h1>

{#each data.productions as production}
  <h2 class="mb-2 text-xl"><a href="/productions/{production.id}">{production.title_de}</a></h2>

  {#each production.events as event}
    <h3>{formatStartDateTime(event.start_date, event.start_time)}</h3>
  {/each}
{/each}
