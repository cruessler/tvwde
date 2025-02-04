<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<h1>Theater Verlängertes Wohnzimmer</h1>

<h2>Die nächsten Produktionen</h2>

{#each data.posts as post}
  <h2>{post.title_de}</h2>
{/each}
