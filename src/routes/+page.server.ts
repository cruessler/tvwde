import type { PageServerLoad } from './$types';
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async () => {
  const directus = createDirectus(env.API_URL).with(staticToken(env.API_TOKEN)).with(rest());

  const newestThreeProductions = await directus.request(
    readItems('productions', {
      filter: { status: { _eq: 'published' } },
      sort: ['events.start_date'],
      fields: [
        'id',
        'title_de',
        'description_de',
        'date_created',
        { events: ['start_date', 'start_time'] }
      ],
      limit: 3
    })
  );

  return {
    productions: newestThreeProductions
  };
};
