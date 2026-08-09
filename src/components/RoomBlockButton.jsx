import { ROOM_BLOCK, ROOM_BLOCK_URL } from '../data/site';

const Arrow = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
    <path
      d="M0 4h12M9 1l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Renders a live booking button once ROOM_BLOCK_URL is filled in (see data/site.js),
// and an honest "coming soon" placeholder until then.
const RoomBlockButton = ({ variant = 'primary', label = ROOM_BLOCK.cta }) => {
  if (!ROOM_BLOCK_URL) {
    return (
      <span className="btn btn--disabled" role="note">
        {ROOM_BLOCK.placeholder}
      </span>
    );
  }

  return (
    <a
      className={`btn btn--${variant}`}
      href={ROOM_BLOCK_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <Arrow />
    </a>
  );
};

export default RoomBlockButton;
