import { createDirectus, rest, staticToken, readItem } from '@directus/sdk';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const directus = createDirectus(env.API_URL).with(staticToken(env.API_TOKEN)).with(rest());

  const page = await directus.request(
    readItem('pages', params.page, {
      filter: { status: { _eq: 'published' } },
      fields: ['title', 'content', 'image']
    })
  );

  return {
    page
  };
};
