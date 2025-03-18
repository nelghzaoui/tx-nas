export const skills: Skill[] = [
  { label: 'HTML', experience: 4 },
  { label: 'CSS', experience: 4 },
  { label: 'Javascript', experience: 4 },
  { label: 'Accessibility', experience: 4 },
  { label: 'React', experience: 3 },
  { label: 'Sass', experience: 3 }
];

interface Skill {
  label: string;
  experience: number;
  color?: string;
}
