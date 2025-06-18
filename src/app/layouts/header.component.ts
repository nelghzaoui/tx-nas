import { Component, input } from '@angular/core';

@Component({
  selector: 'nas-header',
  template: `
    <nav
      class="flex flex-col items-center gap-6 
             md:flex-row md:justify-between
             lg:max-w-[1062px] lg:mx-auto"
    >
      <span class="text-2xl md:text-[2.5rem] md:font-semibold">txnas</span>

      @if(isFooter()) {
      <p class="text-center md:text-left flex items-center gap-2">
        Built with
        <span class="text-[#4EE1A0] animate-pulse">❤️</span>
        by <span class="font-semibold">Nasreddine</span>
      </p>
      }

      <ul class="flex gap-6 md:gap-12 pr-8">
        @for(social of socials; track social) {
        <li>
          <a
            [href]="social.link"
            target="_blank"
            [attr.aria-label]="social.label"
          >
            <img
              class="w-5 md:w-10"
              src="/assets/images/{{ social.icon }}"
              [alt]="social.label"
            />
          </a>
        </li>
        }
      </ul>
    </nav>
  `
})
export class HeaderComponent {
  isFooter = input<boolean>(false);

  readonly socials: SocialMedia[] = [
    {
      label: 'Check my Github profile',
      icon: 'icon-github.svg',
      link: 'https://github.com/nelghzaoui'
    },
    {
      label: 'Check my LinkedIn profile',
      icon: 'icon-linkedin.svg',
      link: 'https://www.linkedin.com/in/nasreddine1994/'
    }
  ];
}

interface SocialMedia {
  label: string;
  icon: string;
  link: string;
}
