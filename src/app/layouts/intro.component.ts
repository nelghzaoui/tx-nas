import { Component } from '@angular/core';
import { ContactButtonComponent } from '../components/contact.component';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

@Component({
  selector: 'nas-intro',
  imports: [ContactButtonComponent, RevealOnScrollDirective],
  template: `
    <section
      class="flex flex-col items-center text-center color-white
             md:text-left md:items-start md:justify-start md:pt-11 md:pb-[2rem] md:overflow-hidden
             lg:max-w-[1062px] lg:mx-auto lg:pt-[5rem] lg:pb-[6rem] lg:px-0"
    >
      <div
        class="relative md:static lg:max-w-[445px] lg:top-0 lg:right-[50px] min-[1070px]:left-[53.1%] min-[1070px]:right-auto min-[1450px]:left-[60.5%]"
      >
        <picture>
          <source
            media="(min-width: 992px)"
            srcset="assets/images/profile-desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcset="assets/images/profile-tablet.webp"
            type="image/webp"
          />
          <img
            src="assets/images/profile-mobile.webp"
            alt=""
            class="max-w-[174px] relative top-[-10rem] mb-[-120px] z-[-1] 
                   md:max-w-[322px] md:absolute md:top-0 md:right-0
                   lg:absolute lg:max-w-[400px] lg:top-0 lg:right-0 min-[1070px]:left-[60%] min-[1070px]:right-auto min-[1450px]:left-[58%]
                   px-[2px] pb-[2px] md: rounded-bl-lg lg:rounded-b-lg  md:bg-gradient-to-b from-[#4EE1A0] to-[#E5E5E5]
                   "
          />
        </picture>
        <picture>
          <source
            media="(min-width: 992px)"
            srcset="assets/images/pattern-circle.svg"
            type="image/webp"
            class=""
          />
        </picture>
      </div>

      <div
        revealOnScroll
        class="
        flex flex-col gap-6 md:max-w-[480px] md:gap-12 lg:gap-[2.688rem] lg:max-w-full md:text-center lg:text-start
        transition-all duration-700 ease-out will-change-transform group-hover:text-[#4EE1A0]"
      >
        <h1
          class="
            text-[2.5rem] tracking-[-1.14px] leading-[40px] font-semibold 
            md:text-[5.2rem] md:tracking-[-2.05px] md:leading-[5rem]
            lg:text-[5.5rem] lg:leading-[5.5rem] lg:max-w-[14ch]
          "
        >
          I turn
          <span
            class="
              cursor-hover relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#4EE1A0] inline-block
              md:pt-6 transition-all hover:text-[#4EE1A0]
              "
          >
            ideas
          </span>
          into

          <span
            class="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#4EE1A0] inline-block
                   md:pt-6 transition-all cursor-hover hover:text-[#4EE1A0]"
          >
            solid apps.
          </span>
        </h1>

        <p class="text-zinc-400 mt-2 text-sm uppercase tracking-wide">
          Angular Developer | Available for Remote/Hybrid Freelance Projects |
          6+ YOE
        </p>

        <p
          class="text-[#D9D9D9] md:text-[#D9D9D9] md:text-xl md:max-w-[460px] md:leading-[1.75rem] lg:w-[40ch]"
        >
          I help teams build web applications that are fast, reliable, and easy
          to maintain. With over 6 years of experience in Angular, I handle
          everything from UI implementation to full project architecture.
        </p>

        <nas-contact
          label="Let’s work together"
          anchor="contact"
          class="md:translate-y-[-10px]"
        />
      </div>
    </section>
  `
})
export class IntroComponent {}
