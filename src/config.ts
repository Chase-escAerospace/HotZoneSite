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

  // Artwork: put approved files in public/images and list them here.
  // Leave empty until you supply approved artwork; placeholders are shown.
  heroImage: '/images/hero.jpg', // from the game's splash art (Assets/HotZone/Art/Splash/SplashPage6NOV2026.png)
  heroImageAlt: 'HOTZONE: LAST STAND key art',
  screenshots: [] as { src: string; alt: string }[],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/game/', label: 'Game' },
  { href: '/support/', label: 'Support' },
  { href: '/feedback/', label: 'Feedback' },
  { href: '/privacy/', label: 'Privacy' },
];
