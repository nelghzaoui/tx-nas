export const assetMap: Record<string, string> = {
  desktop: new URL('/assets/images/profile-desktop.webp', import.meta.url).href,
  tablet: new URL('/assets/images/profile-tablet.webp', import.meta.url).href,
  mobile: new URL('/assets/images/profile-mobile.webp', import.meta.url).href,
  circle: new URL('/assets/images/pattern-circle.svg', import.meta.url).href,
  github: new URL('/assets/images/icon-github.svg', import.meta.url).href,
  linkedin: new URL('/assets/images/icon-linkedin.svg', import.meta.url).href
};
