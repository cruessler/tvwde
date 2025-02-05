<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const formatStartDateTime = (startDate: string, startTime: string) => {
    const startDateTime = new Date(`${startDate}T${startTime}`);

    return new Intl.DateTimeFormat(['de-DE'], {
      dateStyle: 'full',
      timeStyle: 'short'
    }).format(startDateTime);
  };
</script>

<h1 class="text-lg">Theater Verlängertes Wohnzimmer</h1>

<h2>Die nächsten Produktionen</h2>

{#each data.productions as production}
  <h2>{production.title_de}</h2>

  {#each production.events as event}
    <h3>{formatStartDateTime(event.start_date, event.start_time)}</h3>
  {/each}
{/each}
