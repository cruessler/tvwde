import { createDirectus, rest, staticToken, readItem } from '@directus/sdk';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const directus = createDirectus(env.API_URL).with(staticToken(env.API_TOKEN)).with(rest());

  const production = await directus.request(
    readItem('productions', params.production, {
      filter: { status: { _eq: 'published' } },
      fields: ['id', 'title_de', 'date_created', { events: ['start_date', 'start_time'] }]
    })
  );

  return {
    production
  };
};
