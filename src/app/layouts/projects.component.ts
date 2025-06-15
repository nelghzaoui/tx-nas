import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button.component';

@Component({
  selector: 'nas-projects',
  imports: [ButtonComponent],
  template: `
    <section
      class="flex flex-col text-white gap-10
         md:gap-[3.75rem] md:pt-[4.5rem] md:pb-[2rem]
         lg:pt-[5rem] lg:pb-[6.25rem]"
    >
      <div
        class="flex items-center justify-between max-w-[1062px] w-full mx-auto"
      >
        <h4 class="text-4xl font-bold leading-[2.5rem] md:text-7xl lg:text-7xl">
          What I did
        </h4>
        <nas-button label="Contact me" anchor="contact" />
      </div>

      <ul class=" divide-zinc-800">
        @for(job of jobs; track job) {
        <li
          class="relative group overflow-hidden px-6 py-5 border-t border-zinc-800 md:border-none transition-transform duration-300 hover:scale-[1.03]"
        >
          <div
            class="absolute inset-0 bg-[#4EE1A0] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-105 z-0"
          ></div>

          <div
            class="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-[1062px] w-full mx-auto"
          >
            <div class="text-white text-4xl md:w-1/4">
              {{ job.year }}
            </div>
            <div class="md:w-3/4 flex flex-col gap-2">
              <div>
                <h3 class="text-4xl font-bold text-white">
                  {{ job.title }}
                </h3>
              </div>

              <!-- <p class="text-zinc-400 text-md">
                {{ job.description }}
              </p> -->

              <ul
                class="flex flex-wrap gap-2 mt-2 text-xs font-mono text-zinc-400"
              >
                @for(skill of job.skills; track skill) {
                <li
                  class="bg-[#4EE1A0] text-white px-3 py-2 rounded group-hover:bg-black transition transform hover:scale-105 hover:brightness-110"
                >
                  {{ skill }}
                </li>
                }
              </ul>
            </div>
          </div>
        </li>
        }
      </ul>
    </section>
  `,
  styles: ``
})
export class ProjectsComponent {
  readonly jobs: Job[] = [
    {
      year: 2024,
      title: 'Senior Angular Developer @ CESI',
      description:
        'Delivered a web app from scratch for CESI clients to manage occupational health, including appointments, medical forms, documents, and employee tracking.',
      client: ' CESI',
      skills: ['Angular', 'Standalone', 'NgRx', 'Firebase', 'Azure DevOps']
    },
    {
      year: 2020,
      title: 'Angular Developer @ Proximus',
      description:
        'Shipped self-service tools at Proximus to help enterprise clients manage employee mobile subscriptions, reducing reliance on support teams.',
      client: 'Proximus',
      skills: ['Angular', 'Akita', 'Jest', 'Cypress', 'SonarQube', 'GraphQL']
    },
    {
      year: 2019,
      title: 'Full Stack Developer @ Mainsys',
      description:
        'Delivered a shared mobile banking framework after migrating a legacy app, cutting development time and improving maintainability across clients like Rothschild & Nagelmackers.',
      client: 'MainSys',
      skills: ['Angular', 'Ionic', 'Cordova', 'Java']
    },
    {
      year: 2018,
      title: 'Full Stack Developer @ Addvals',
      description: '',
      client: 'Addvals',
      skills: ['Angular', 'Ionic', 'Node.Js', 'Cordova']
    }
  ];
  projectHovered: number | null = null;

  onMouseEnter(projectHoveredIndex: number) {
    this.projectHovered = projectHoveredIndex;
  }

  onMouseLeave() {
    this.projectHovered = null;
  }
}

type Job = {
  year: number;
  title: string;
  client: string;
  description: string;
  skills: string[];
};
