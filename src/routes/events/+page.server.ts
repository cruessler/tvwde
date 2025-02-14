import type { PageServerLoad } from './$types';
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async () => {
  const directus = createDirectus(env.API_URL).with(staticToken(env.API_TOKEN)).with(rest());

  const now = new Date();

  const sixWeeksFromNow = new Date();
  sixWeeksFromNow.setDate(sixWeeksFromNow.getDate() + 6 * 7);

  const dateReadable = new Intl.DateTimeFormat(['de-DE'], {
    dateStyle: 'long'
  }).format(sixWeeksFromNow);

  const events = await directus.request(
    readItems('events', {
      filter: {
        start_date: { _between: [now.toDateString(), sixWeeksFromNow.toDateString()] },
        // 2025-02-08
        // I expected this to be `production`, but apparently Directus does not
        // automatically map column names to objects that way.
        production_id: {
          status: {
            _eq: 'published'
          }
        }
      },
      sort: ['start_date'],
      fields: [
        'start_date',
        'start_time',
        'characteristics',
        'tickets_website',
        {
          production_id: [
            'id',
            'title_de',
            'description_de',
            'price_from',
            'price_till',
            'categories'
          ]
        }
      ]
    })
  );

  return { events, dateReadable };
};
