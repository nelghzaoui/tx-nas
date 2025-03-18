import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <header>
      <nas-header />
    </header>

    <main>
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
