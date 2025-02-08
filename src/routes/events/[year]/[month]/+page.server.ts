import type { PageServerLoad } from './$types';
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ params }) => {
  const directus = createDirectus(env.API_URL).with(staticToken(env.API_TOKEN)).with(rest());

  const year = Number(params.year);
  const month = Number(params.month) - 1;

  const startOfMonth = new Date();
  startOfMonth.setFullYear(year, month, 1);
  const endOfMonth = new Date();
  endOfMonth.setFullYear(year, month + 1, 0);

  const monthReadable = new Intl.DateTimeFormat(['de-DE'], {
    year: 'numeric',
    month: 'long'
  }).format(startOfMonth);

  const events = await directus.request(
    readItems('events', {
      filter: {
        start_date: { _between: [startOfMonth.toDateString(), endOfMonth.toDateString()] },
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
      fields: ['start_date', 'start_time', { production_id: ['id', 'title_de'] }]
    })
  );

  return { events, monthReadable };
};
