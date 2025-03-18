import { Component } from '@angular/core';
import { projects } from '../config/project-config';
import { ButtonComponent } from './button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'nas-projects',
  imports: [ButtonComponent, NgClass],
  template: `
    <section class="flex flex-col text-white p-6 gap-10">
      <div class="flex items-center justify-between">
        <h4 class="text-4xl font-bold leading-[2.5rem]">Projects</h4>
        <nas-button label="Contact me" anchor="contact" />
      </div>
    </section>

    <ul class="flex flex-col flex-wrap gap-10 p-4">
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
            <li class="text-[1.125rem] leading-[1.75rem]">
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
