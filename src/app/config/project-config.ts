export const projects: Project[] = [
  {
    images: {
      small: '/assets/images/thumbnail-project-1-small.webp',
      large: '/assets/images/thumbnail-project-1-large.webp'
    },
    name: 'Design Portfolio',
    techs: ['HTML', 'CSS']
  },
  {
    images: {
      small: '/assets/images/thumbnail-project-2-small.webp',
      large: '/assets/images/thumbnail-project-2-large.webp'
    },
    name: 'E-Learning Landing Page',
    techs: ['HTML', 'CSS']
  },
  {
    images: {
      small: '/assets/images/thumbnail-project-3-small.webp',
      large: '/assets/images/thumbnail-project-3-large.webp'
    },
    name: 'Todo Web App',
    techs: ['HTML', 'CSS', 'Javascript']
  },
  {
    images: {
      small: '/assets/images/thumbnail-project-4-small.webp',
      large: '/assets/images/thumbnail-project-4-large.webp'
    },
    name: 'Entertainment Web App',
    techs: ['HTML', 'CSS', 'Javascript']
  },
  {
    images: {
      small: '/assets/images/thumbnail-project-5-small.webp',
      large: '/assets/images/thumbnail-project-5-large.webp'
    },
    name: 'Memory Game',
    techs: ['HTML', 'CSS', 'Javascript']
  },
  {
    images: {
      small: '/assets/images/thumbnail-project-6-small.webp',
      large: '/assets/images/thumbnail-project-6-large.webp'
    },
    name: 'Art Gallery Showcase',
    techs: ['HTML', 'CSS', 'Javascript']
  }
];

type Project = {
  name: string;
  images: {
    small: string;
    large: string;
  };
  techs: string[];
  website?: string;
  repo?: string;
};
