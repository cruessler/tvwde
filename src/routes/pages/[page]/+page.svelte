<script lang="ts">
  import { mainImage } from '$lib/images.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="relative mb-8 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 bg-red-900/85 py-4 pr-15 pl-6 text-lg font-bold text-zinc-50"
  >
    {data.page.title}
  </div>

  {@render mainImage(data.page.image)}
</div>

<div class="mx-6 mb-4 whitespace-pre-line text-neutral-700">{data.page.content}</div>

<a href="/" class="mx-6 block rounded-sm bg-red-900 px-4 py-2 text-center text-xl text-zinc-50"
  >Home</a
>
