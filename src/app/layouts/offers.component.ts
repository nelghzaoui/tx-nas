import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';
import {
  LucideAngularModule,
  LucideIconData,
  RefreshCcwIcon,
  LinkIcon,
  ShieldCheckIcon,
  HandshakeIcon,
  LayoutDashboardIcon,
  CodeIcon
} from 'lucide-angular';

@Component({
  selector: 'nas-offers',
  imports: [RevealOnScrollDirective, LucideAngularModule],
  template: `
    <section
      revealOnScroll
      class="p-6 lg:p-0 md:text-left md:items-start md:justify-start md:pb-[2rem] pt-[5rem] md:overflow-hidden
             lg:max-w-[1062px] lg:mx-auto lg:pb-[2rem] transition-all duration-700 delay-200 ease-out"
    >
      <h2 class="text-4xl font-bold leading-[2.5rem] md:text-7xl lg:text-7xl">
        What I offer
      </h2>

      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[3rem] px-2"
      >
        @for(offer of offers; track offer) {
        <li
          class="flex flex-col bg-zinc-900 p-6 pl-8 rounded-2xl border-b-2 border-transparent transition-all duration-300
         hover:-translate-y-1 group cursor-pointer hover:scale-[1.05] hover:bg-gradient-to-br hover:from-zinc-900 hover:to-[#132e26]"
        >
          <span
            class="absolute left-0 top-0 h-full w-[4px] bg-primary rounded-l scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
          ></span>

          <div class="flex flex-col items-center gap-4 mb-2 text-primary">
            <!-- Icône "code" -->
            <i-lucide
              [img]="offer.icon"
              class="group-hover:hidden"
              size="50"
            ></i-lucide>

            <h3 class="text-xl font-semibold text-white">
              {{ offer.title }}
            </h3>
          </div>
          <p
            class="text-md text-zinc-300 hidden group-hover:block transition-all duration-300"
          >
            {{ offer.description }}
          </p>
        </li>
        }
      </ul>
    </section>
  `
})
export class OffersComponent {
  offers: Offer[] = [
    {
      title: 'End-to-end app creation',
      description:
        'I build complete web applications from idea to delivery — optimized for performance, maintainability, and long-term scalability.',
      icon: CodeIcon
    },
    {
      title: 'Reliable UI delivery',
      description:
        'I translate your ideas or designs into pixel-perfect, responsive interfaces — fast, accessible, and fully consistent with your brand.',
      icon: LayoutDashboardIcon
    },
    {
      title: 'Migrate existing apps',
      description:
        'I refactor existing Angular apps to make them faster, cleaner, and easier to maintain — without breaking what already works.',
      icon: RefreshCcwIcon
    },
    {
      title: 'API & Feature integration',
      description:
        'I handle API integrations (Firebase, Auth, REST...) to deliver complete, secure, and fully functional applications.',
      icon: LinkIcon
    },
    {
      title: 'Long-term stability',
      description:
        'I add robust testing and CI/CD workflows to avoid regressions and ensure long-term code stability.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Collaboration & guidance',
      description:
        'I work transparently with teams, document everything clearly, and help onboard juniors when needed.',
      icon: HandshakeIcon
    }
  ];
}

type Offer = {
  title: string;
  description: string;
  icon?: LucideIconData;
};
