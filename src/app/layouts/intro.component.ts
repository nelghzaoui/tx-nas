import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button.component';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

@Component({
  selector: 'nas-intro',
  imports: [ButtonComponent, RevealOnScrollDirective],
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
            srcset="/assets/images/image-profile-desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/image-profile-tablet.webp"
            type="image/webp"
          />
          <img
            src="/assets/images/image-profile-mobile.webp"
            alt=""
            class="max-w-[174px] relative top-[-10rem] mb-[-120px] z-[-1] 
                   md:max-w-[322px] md:absolute md:top-0 md:right-0
                   lg:absolute lg:max-w-[400px] lg:top-0 lg:right-0 min-[1070px]:left-[60%] min-[1070px]:right-auto min-[1450px]:left-[58%]"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 992px)"
            srcset="/assets/images/pattern-circle.svg"
            type="image/webp"
            class=""
          />
        </picture>
      </div>

      <div
        class="flex flex-col gap-6 md:max-w-[510px] md:gap-16 lg:gap-[2.688rem] lg:max-w-full"
      >
        <h1
          revealOnScroll
          class="text-[2.5rem] tracking-[-1.14px] leading-[40px] font-semibold 
          md:text-[5.2rem] md:tracking-[-2.05px] md:leading-[5rem]
          lg:text-[5.5rem] lg:leading-[5.5rem] lg:max-w-[14ch]
          transition-all duration-700 ease-out will-change-transform group-hover:text-[#4EE1A0]
         "
        >
          I turn
          <span
            class="cursor-hover relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#4EE1A0] inline-block
                   md:pt-6  transition-all hover:text-[#4EE1A0]"
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

        <p
          revealOnScroll
          class="text-zinc-400 mt-2 text-sm uppercase tracking-wide transition-all duration-700 delay-100 ease-out"
        >
          Angular Developer | Available for Remote/Hybrid Freelance Projects |
          6+ YOE
        </p>

        <p
          revealOnScroll
          class="text-[#D9D9D9] md:text-[#D9D9D9] md:text-xl md:max-w-[460px] md:leading-[1.75rem] lg:w-[40ch]
                 transition-all duration-700 delay-100 ease-out"
        >
          I help teams build web applications that are fast, reliable, and easy
          to maintain. With over 6 years of experience in Angular, I handle
          everything from UI implementation to full project architecture.
        </p>

        <nas-button
          revealOnScroll
          label="Let’s work together"
          anchor="contact"
          class="md:translate-y-[-10px] transition-all duration-700 delay-1000 ease-out"
        />
      </div>
    </section>
  `
})
export class IntroComponent {}
