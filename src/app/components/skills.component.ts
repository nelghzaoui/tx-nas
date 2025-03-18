import { Component } from '@angular/core';
import { skills } from '../config/skill.config';

@Component({
  selector: 'nas-skills',
  template: `
    <section>
      <ul class="flex flex-col items-center text-center gap-6">
        @for(skill of skills; track skill) {
        <li class="flex flex-col gap-4">
          <h3 class="text-[2rem] leading-[40px] font-semibold tracking-[-1px]">
            {{ skill.label }}
          </h3>
          <p class="text-base text-[#D9D9D9] leading-[26px]">
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
