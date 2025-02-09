<script module lang="ts">
  import { env } from '$env/dynamic/public';

  export { mainImage };
</script>

{#snippet mainImage(image: { image: string; title_de: string })}
  {#if image}
    <img
      src="{env.PUBLIC_ASSETS_URL}/{image.image}"
      alt={image.title_de}
      class="h-40 w-full object-cover"
    />
  {:else}{/if}
{/snippet}
