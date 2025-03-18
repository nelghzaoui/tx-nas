import { Component } from '@angular/core';
import { socials } from '../config/social-media.config';

@Component({
  selector: 'nas-header',
  template: `
    <nav class="flex flex-col items-center gap-4">
      <span class="text-2xl">adamkeyes</span>
      <ul class="flex gap-6">
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
  `,
  styles: ``
})
export class HeaderComponent {
  readonly socials = socials;
}
