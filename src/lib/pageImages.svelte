<script module lang="ts">
  import { env } from '$env/dynamic/public';

  export { mainImage };
</script>

{#snippet mainImage(image: string)}
  {#if image}
    <img
      src="{env.PUBLIC_ASSETS_URL}/{image}"
      alt="Ein Bild"
      class="h-full w-full object-cover"
    />
  {:else}{/if}
{/snippet}
