import { Component } from '@angular/core';

@Component({
  selector: 'nas-intro',
  template: `
    <section class="flex flex-col items-center text-center color-white p-4">
      <div class="relative">
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
            class="max-w-[174px] relative -top-32 mb-[-90px] z-[-1]"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 992px)"
            srcset="/assets/images/pattern-circle.svg"
            type="image/webp"
          />
        </picture>
      </div>

      <div class="flex flex-col gap-6">
        <h1
          class="text-[2.5rem] tracking-[-1.14px] leading-[40px] font-semibold
"
        >
          <span>Nice to</span> meet you! I'm
          <span
            class="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#4EE1A0]"
          >
            Adam Keyes
          </span>
          .
        </h1>
        <p class="text-[#D9D9D9]">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <!-- <app-button-with-border-bottom
          class="btn"
          buttonText="Contact me"
          targetComponent="contact-form"
        ></app-button-with-border-bottom> -->
      </div>
    </section>
  `,
  styles: ``
})
export class IntroComponent {}
