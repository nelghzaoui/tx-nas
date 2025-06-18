function asset(path: string): string {
  return new URL(`/assets/images/${path}`, import.meta.url).href;
}

export const fullPath = (name: string): string => {
  return `/assets/images/${name}`;
};

export const assetMap: Record<string, string> = {
  desktop: asset('profile-desktop.webp'),
  tablet: asset('profile-tablet.webp'),
  mobile: asset('profile-mobile.webp'),
  circle: asset('pattern-circle.svg'),
  github: asset('icon-github.svg'),
  linkedin: asset('icon-linkedin.svg')
};
