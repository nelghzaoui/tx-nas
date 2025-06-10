import { Component } from '@angular/core';
import { socials } from '../config/social-media.config';

@Component({
  selector: 'nas-header',
  template: `
    <nav
      class="flex flex-col items-center gap-6 
             md:flex-row md:justify-between
             lg:max-w-[1062px] lg:mx-auto"
    >
      <span class="text-2xl md:text-[2rem] md:font-semibold">txnas</span>
      <ul class="flex gap-6 md:gap-8">
        @for(social of socials; track social) {
        <li>
          <a
            [href]="social.link"
            target="_blank"
            [attr.aria-label]="social.label"
          >
            <img src="/assets/images/{{ social.icon }}" [alt]="social.label" />
          </a>
        </li>

        }
      </ul>
    </nav>
  `
})
export class HeaderComponent {
  readonly socials = socials;
}
