import {
  Directive,
  inject,
  effect,
  signal,
  Injector,
  ElementRef,
  PLATFORM_ID,
  runInInjectionContext
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective {
  private visible = signal(false);

  constructor() {
    const injector = inject(Injector);
    const el = inject(ElementRef<HTMLElement>).nativeElement;
    const platformId = inject(PLATFORM_ID);

    if (isPlatformBrowser(platformId) && 'IntersectionObserver' in window) {
      new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      ).observe(el);
    }

    runInInjectionContext(injector, () =>
      effect(() => {
        const isVisible = this.visible();
        el.classList.toggle('opacity-0', !isVisible);
        el.classList.toggle('translate-y-4', !isVisible);
        el.classList.toggle('opacity-100', isVisible);
        el.classList.toggle('translate-y-0', isVisible);
      })
    );
  }
}
