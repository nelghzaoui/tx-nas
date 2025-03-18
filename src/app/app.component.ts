import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { IntroComponent } from './components/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IntroComponent],
  template: `
    <header>
      <nas-header />
    </header>

    <main>
      <nas-intro />
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
