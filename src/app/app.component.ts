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
    <header class="pt-6">
      <nas-header />
    </header>

    <main class="pb-20">
      <nas-intro />

      <div class="h-px border border-white mt-20 mx-6 mb-10"></div>
      <nas-skills />
      <div class="h-px border border-white mt-20 mx-6 mb-10"></div>
      <nas-projects />
      <router-outlet />
    </main>

    <footer class="bg-[#242424] pb-10">
      <nas-contact />
      <div class="h-px border border-white mt-20 mx-6 mb-10"></div>
      <nas-header />
    </footer>
  `,
  styles: ``
})
export class AppComponent {}
