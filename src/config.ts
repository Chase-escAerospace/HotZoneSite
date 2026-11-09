// Single place to edit studio and game details.
// Leave a value empty ('') if unknown; the site shows a safe fallback instead of inventing data.
export const config = {
  studioName: 'Swell Studios',
  studioLogo: '/images/swell-studios.jpg',
  gameName: 'HOTZONE: LAST STAND',
  tagline: 'Survive the horde. Build your base. Hold the line.',
  siteUrl: '', // e.g. https://www.example.com

  // Leave empty to show "Coming soon" instead of a download button.
  appStoreUrl: '',

  // Leave empty to hide email-based support routes.
  supportEmail: '',

  // Add { label, url } entries; empty list hides the social section.
  socials: [] as { label: string; url: string }[],

  // Form endpoints come from env vars (see .env.example). Empty = submission disabled.
  supportFormEndpoint: import.meta.env.PUBLIC_SUPPORT_FORM_ENDPOINT ?? '',
  feedbackFormEndpoint: import.meta.env.PUBLIC_FEEDBACK_FORM_ENDPOINT ?? '',

  // Artwork lives in public/images. Only use art you have approved for publication.
  heroImage: '/images/keyart-portrait.webp',
  heroImageAlt: 'HOTZONE: LAST STAND key art: soldiers and turrets defending a base from zombies',
  bannerImage: '/images/keyart-landscape.webp',
  ogImage: '/images/og-card.jpg',
  screenshots: [
    { src: '/images/shot-main-menu.webp', alt: 'Main menu with deploy button, loadout and upgrades' },
    { src: '/images/shot-base-build.webp', alt: 'Base build mode with walls, turrets and traps on a grid' },
    { src: '/images/shot-locker.webp', alt: 'Locker showing armor and helmets by rarity' },
    { src: '/images/shot-battle-pass.webp', alt: 'Battle pass reward track with free and premium rewards' },
    { src: '/images/shot-battle-pass-gear.webp', alt: 'Battle pass premium gear' },
  ] as { src: string; alt: string }[],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/game/', label: 'Game' },
  { href: '/support/', label: 'Support' },
  { href: '/feedback/', label: 'Feedback' },
  { href: '/privacy/', label: 'Privacy' },
];
