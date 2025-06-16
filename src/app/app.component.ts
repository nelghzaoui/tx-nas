import { Component } from '@angular/core';
import { CustomCursorComponent } from './components/cursor.component';
import { HeaderComponent } from './layouts/header.component';
import { IntroComponent } from './layouts/intro.component';
import { ProjectsComponent } from './layouts/projects.component';
import { OffersComponent } from './layouts/offers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroComponent,
    HeaderComponent,
    OffersComponent,
    ProjectsComponent,
    CustomCursorComponent
  ],
  template: `
    <nas-cursor />

    <header class="p-6">
      <nas-header />
    </header>

    <main class="pb-20 md:pb-5">
      <nas-intro />

      <nas-offers />

      <nas-projects />
    </main>

    <footer class=" pb-8 lg:pb-[2rem] ">
      <div class="md:px-8 md:pt-8">
        <nas-header [isFooter]="true" />
      </div>
    </footer>
  `
})
export class AppComponent {}
