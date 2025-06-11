import { NgStyle, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'nas-cursor',
  standalone: true,
  imports: [NgStyle, NgClass],
  template: `
    <div
      [ngStyle]="style"
      [ngClass]="{ hovered: isHovering }"
      class="cursor-dot"
    ></div>
  `,
  styles: [
    `
      .cursor-dot {
        position: fixed;
        width: 24px;
        height: 24px;
        border: 2px solid #4ee1a0;
        background-color: transparent;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease,
          background-color 0.3s ease, border-color 0.3s ease,
          transform 0.1s ease;
        opacity: 0;

        z-index: 9999;
      }

      .cursor-dot.hovered {
        width: 120px;
        height: 120px;
        background-color: #4ee1a0;
        border-color: transparent;
        mix-blend-mode: difference;
        opacity: 1;
      }
    `
  ]
})
export class CustomCursorComponent {
  style = { left: '0px', top: '0px' };
  isHovering = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.style = {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    };
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;

    this.isHovering = !!(
      target.closest('a') ||
      target.closest('button') ||
      target.classList.contains('cursor-hover')
    );
  }

  @HostListener('document:mouseout')
  onMouseOut() {
    this.isHovering = false;
  }
}
