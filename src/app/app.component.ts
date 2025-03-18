import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { IntroComponent } from './components/intro.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <header class="p-6">
      <nas-header />
    </header>

    <main class="p-6 pb-20">
      <nas-intro />

      <div
        class="h-px border border-white mt-20 mb-12
               md:w-[calc(100%-2rem)] md:mt-[27px] md:mx-auto md:mb-[1px]
               lg:max-w-[1050px] lg:mt-[6px] lg:mx-auto lg:mb-[8px]"
      ></div>
      <nas-skills />
      <div
        class="h-px border border-white mt-20 mb-10 md:hidden lg:hidden"
      ></div>
      <nas-projects />
      <router-outlet />
    </main>

    <footer class="bg-[#242424] pb-8">
      <nas-contact />
      <div
        class="h-px border border-white mt-20 mx-6 mb-10
               md:w-[calc(100%-2rem)] md:mt-[27px] md:mx-auto md:mb-[1px]
               lg:max-w-[1050px] lg:mt-[6px] lg:mx-auto lg:mb-[8px]"
      ></div>
      <nas-header />
    </footer>
  `,
  styles: `

  `
})
export class AppComponent {}
