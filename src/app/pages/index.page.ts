import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ``,
  styles: ``
})
export default class HomePage {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
