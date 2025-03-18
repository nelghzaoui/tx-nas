import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { IntroComponent } from './components/intro.component';
import { SkillsComponent } from './components/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IntroComponent, SkillsComponent],
  template: `
    <header>
      <nas-header />
    </header>

    <main>
      <nas-intro />

      <div class="h-px border border-white mt-20 mx-6 mb-10"></div>
      <nas-skills />
      <div class="h-px border border-white mt-20 mx-6 mb-10"></div>

      <router-outlet />
    </main>

    <footer></footer>
  `,
  styles: `
    :host {
      padding: 1.5rem;
    }
  `
})
export class AppComponent {}
