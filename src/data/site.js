// Single source of truth for the details that change most often.

export const COUPLE = 'Abbey & Aly';

export const VENUE = {
  name: 'Fairmont Nile City',
  fullName: 'Fairmont Nile City Hotel',
  address: '2005B Corniche El Nil, Ramlet Beaulac, Cairo',
  coords: [31.2264, 30.0728], // [lng, lat]
};

export const WEDDING_DATE = 'May 3, 2027';
export const WEEKEND = 'May 2 – 4, 2027';

// ---------------------------------------------------------------------------
// ROOM BLOCK
// Paste the Fairmont room block booking link between the quotes below and the
// "Book your room" buttons across the site turn into live links automatically.
// Leave it empty and they render as a "link coming soon" placeholder instead.
// ---------------------------------------------------------------------------
export const ROOM_BLOCK_URL = '';

export const ROOM_BLOCK = {
  title: 'Our room block',
  hotel: VENUE.fullName,
  blurb:
    'We have held a block of rooms at the Fairmont Nile City at a reduced rate for our guests. Booking through the block keeps you in the same hotel as the wedding — no travel on the night.',
  cta: 'Book your room',
  placeholder: 'Booking link coming soon',
};
