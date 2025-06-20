import { Component, input } from '@angular/core';

@Component({
  selector: 'nas-contact',
  template: `
    <a
      href="mailto:tx.nas@outlook.be"
      class="
        text-xl md:text-2xl font-medium tracking-[2.29px] leading-[1.625rem] uppercase 
        border-b-2 border-b-primary w-fit m-auto pb-2.5 no-underline bg-transparent cursor-hover
        text-white duration-200 ease cursor-pointer md:font-bold hover:text-primary hover:text-2xl hover:border-b-[4px]"
      target="_blank"
    >
      {{ label() }}
    </a>
  `
})
export class ContactButtonComponent {
  label = input<string>();
}
