<script lang="ts">
  import type { PageProps } from './$types';

  import { mainImage } from '$lib/pageImages.svelte';


  let { data }: PageProps = $props();
</script>

<div class="relative mb-8 h-80 w-full bg-slate-200">
  <div
    class="absolute bottom-15 left-0 line-clamp-2 pr-15 bg-red-900/85 px-6 py-4 text-lg font-bold text-zinc-50"
  >
    {data.type.title}
  </div>

  {@render mainImage(data.type.image)}
</div>




<div class="mx-6 mb-4 whitespace-pre-line text-neutral-700">{data.type.content}</div>


<a
  href="/productions"
  class="mx-6 block rounded-sm bg-red-900 px-4 py-2 text-center text-2xl text-zinc-50"
  >Weitere Produktionen</a
>
