import {
  Directive,
  ElementRef,
  HostBinding,
  AfterViewInit,
  Inject,
  inject,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);

  @HostBinding('class.opacity-0') hidden = true;
  @HostBinding('class.translate-y-4') offset = true;
  @HostBinding('class.opacity-100') show = false;
  @HostBinding('class.translate-y-0') noOffset = false;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.hidden = false;
            this.offset = false;
            this.show = true;
            this.noOffset = true;
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(this.el.nativeElement);
    }
  }
}
