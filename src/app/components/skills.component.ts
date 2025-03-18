import { Component } from '@angular/core';
import { skills } from '../config/skill.config';

@Component({
  selector: 'nas-skills',
  template: `
    <section
      class="md:text-left md:items-start md:justify-start md:pt-[3.8rem] md:pr-[2rem] md:pb-[2rem] md:pl-[2rem] md:overflow-hidden
             lg:max-w-[1062px] lg:mx-auto lg:pt-[6rem] lg:pb-[2rem]"
    >
      <ul
        class="flex flex-col items-center text-center gap-6 md:grid md:grid-cols-2 md:text-left md:gap-[3.25rem] lg:grid-cols-3"
      >
        @for(skill of skills; track skill) {
        <li class="flex flex-col gap-4 md:flex md:gap-[0.875rem]">
          <h3
            class="text-[2rem] leading-[40px] font-semibold md:tracking-[-1px] md:text-[3rem] md:leading-[3.25rem] tracking-[-1.5px]"
          >
            {{ skill.label }}
          </h3>
          <p
            class="text-base text-[#D9D9D9] leading-[26px] md:text-[1.125rem] md:leading-[1.75rem]"
          >
            {{ skill.experience }} Years Experience
          </p>
        </li>
        }
      </ul>
    </section>
  `
})
export class SkillsComponent {
  readonly skills = skills;
}
