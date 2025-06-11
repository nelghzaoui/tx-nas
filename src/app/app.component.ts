import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomCursorComponent } from './components/cursor.component';
import { HeaderComponent } from './layouts/header.component';
import { IntroComponent } from './layouts/intro.component';
import { ProjectsComponent } from './layouts/projects.component';
import { ContactComponent } from './layouts/contact.component';
import { OffersComponent } from './layouts/offers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContactComponent,
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

    <main class="p-6 pb-20">
      <nas-intro />

      <nas-offers />

      <nas-projects />

      <!-- Not needed for the moment -->
      <router-outlet />
    </main>

    <footer class="bg-[#242424] pb-8 lg:pb-[6rem] ">
      <nas-contact />
      <div
        class="h-px border border-white mt-20 mx-6 mb-10
               md:w-[calc(100%-2rem)] md:mt-[27px] md:mx-auto md:mb-[1px]
               lg:max-w-[1050px] lg:mt-[6px] lg:mx-auto lg:mb-[8px]"
      ></div>

      <div class="md:px-8 md:pt-8">
        <nas-header />
      </div>
    </footer>
  `
})
export class AppComponent {}
