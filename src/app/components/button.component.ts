import { Component, input } from '@angular/core';

@Component({
  selector: 'nas-button',
  template: `
    <a
      class="
        text-xl font-medium tracking-[2.29px] leading-[1.625rem] uppercase 
        border-b-2 border-b-[#4EE1A0] w-fit m-auto pb-2.5 no-underline bg-transparent 
        text-white duration-200 ease cursor-pointer md:font-bold hover:text-[#4EE1A0] hover:text-xl hover:border-b-[4px]"
      (click)="scrollToTarget($event)"
      [href]="link()"
      target="_blank"
    >
      {{ label() }}
    </a>
  `
})
export class ButtonComponent {
  label = input<string>();
  anchor = input<string>();
  hasLink = input<boolean | false>();
  link = input<string | null>();

  scrollToTarget(evento: Event) {
    if (!this.hasLink) {
      evento.preventDefault();
      const targetElement = document.querySelector(`#${this.anchor()}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
