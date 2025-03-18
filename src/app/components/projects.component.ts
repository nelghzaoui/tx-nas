import { Component } from '@angular/core';
import { projects } from '../config/project-config';
import { ButtonComponent } from './button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'nas-projects',
  imports: [ButtonComponent, NgClass],
  template: `
    <section
      class="flex flex-col text-white gap-10
            md:gap-[3.75rem] md:pt-[4.5rem] md:pr-[1.5rem] md:pb-[2rem] md:pl-[1.5rem]
            lg:pt-[8rem] lg:pb-[6.25rem] lg:max-w-[1062px] lg:mx-auto"
    >
      <div class="flex items-center justify-between">
        <h4 class="text-4xl font-bold leading-[2.5rem] md:text-7xl lg:text-7xl">
          Projects
        </h4>
        <nas-button label="Contact me" anchor="contact" />
      </div>

      <ul
        class="flex flex-col flex-wrap gap-10 md:p-0 md:grid md:grid-cols-2 md:gap-y-[5rem] md:gap-x-[2rem]"
      >
        @for(project of projects; track project; let i = $index) {
        <li class="flex flex-col gap-5">
          <picture>
            <source
              [srcset]="project.images.large"
              media="(min-width: 600px)"
              type="image/webp"
            />
            <img [src]="project.images.small" alt="" class="w-full" />
          </picture>
          <div class="flex flex-col gap-2">
            <h5 class="text-[1.5rem] leading-[2rem] uppercase font-semibold">
              {{ project.name }}
            </h5>
            <ul class="flex items-center gap-5">
              @for(tech of project.techs; track tech) {
              <li class="text-[1.125rem] leading-[1.75rem] uppercase">
                {{ tech }}
              </li>
              }
            </ul>
          </div>
          <div
            class="flex gap-6"
            [ngClass]="{ hover: projectHovered === i }"
            (mouseenter)="onMouseEnter(i)"
            (mouseleave)="onMouseLeave()"
          >
            <nas-button label="View Project" [link]="project.website" />
            <nas-button label="View Code" [link]="project.repo" />
          </div>
        </li>
        }
      </ul>
    </section>
  `,
  styles: ``
})
export class ProjectsComponent {
  readonly projects = projects;
  projectHovered: number | null = null;

  onMouseEnter(projectHoveredIndex: number) {
    this.projectHovered = projectHoveredIndex;
  }

  onMouseLeave() {
    this.projectHovered = null;
  }
}
