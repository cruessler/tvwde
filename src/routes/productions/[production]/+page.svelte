<script lang="ts">
  import type { PageProps } from './$types';
  import { formatStartDateTime } from '$lib/date-times';

  let { data }: PageProps = $props();
</script>

<h1 class="mb-2 text-xl">{data.production.title_de}</h1>

{#each data.production.events as event}
  <h3>{formatStartDateTime(event.start_date, event.start_time)}</h3>
{/each}
