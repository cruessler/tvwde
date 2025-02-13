<script module lang="ts">
  type Characteristic =
    | 'premiere'
    | 'vorauffuehrung'
    | 'zum-letzten-mal-dieser-spielzeit'
    | 'zum-letzten-mal';

  const characteristics = {
    premiere: 'Premiere',
    vorauffuehrung: 'Voraufführung',
    'zum-letzten-mal-dieser-spielzeit': 'zum letzten Mal in dieser Spielzeit',
    'zum-letzten-mal': 'zum letzten Mal'
  } satisfies Record<Characteristic, string>;

  const characteristicStyles = {
    premiere: 'bg-yellow-500',
    vorauffuehrung: 'bg-yellow-500',
    'zum-letzten-mal-dieser-spielzeit': 'bg-yellow-500',
    'zum-letzten-mal': 'bg-yellow-500'
  } satisfies Record<Characteristic, string>;

  type Category = '1' | '3' | '4' | '2' | '6' | '18' | '5' | '7' | '62' | '86' | '83' | '87';

  const categories = {
    1: 'Theater',
    3: 'Tanz',
    4: 'Performance',
    2: 'Musiktheater',
    6: 'Musical & Show',
    18: 'Musical',
    5: 'Konzert',
    7: 'Comedy & Kabarett',
    62: 'Figuren & Objekttheater',
    86: 'Dialog & Lesung',
    83: 'Talk',
    87: 'Poetry Slam'
  } satisfies Record<Category, string>;

  const categoryStyles = {
    1: 'bg-fuchsia-800',
    3: 'bg-lime-500',
    4: 'bg-green-600',
    2: 'bg-blue-700',
    6: 'bg-blue-700',
    18: 'bg-blue-700',
    5: 'bg-green-600',
    7: 'bg-pink-400',
    62: 'bg-fuchsia-800',
    86: 'bg-orange-600',
    83: 'bg-orange-600',
    87: 'bg-orange-600'
  } satisfies Record<Category, string>;

  const categoryCaptionStyles = {
    1: 'bg-fuchsia-800/85',
    3: 'bg-lime-500/85',
    4: 'bg-green-600/85',
    2: 'bg-blue-700/85',
    6: 'bg-blue-700/85',
    18: 'bg-blue-700/85',
    5: 'bg-green-600/85',
    7: 'bg-pink-400/85',
    62: 'bg-fuchsia-800/85',
    86: 'bg-orange-600/85',
    83: 'bg-orange-600/85',
    87: 'bg-orange-600/85'
  } satisfies Record<Category, string>;

  export { characteristicChip, categoryChip, categoryCaption };
</script>

{#snippet characteristicChip(characteristic: Characteristic)}
  <div class="w-32 rounded-full {characteristicStyles[characteristic]} py-1 text-center text-zinc-50">
    {characteristics[characteristic]}
  </div>
{/snippet}

{#snippet categoryChip(category: Category)}
  <div class="w-32 rounded-full {categoryStyles[category]} py-1 text-center text-zinc-50">
    {categories[category]}
  </div>
{/snippet}

{#snippet categoryCaption(category: Category)}
  <div
    class="absolute bottom-0 left-0 {categoryCaptionStyles[
      category
    ]} px-8 py-2 text-lg font-bold text-slate-100 opacity-80"
  >
    {categories[category]}
  </div>
{/snippet}
