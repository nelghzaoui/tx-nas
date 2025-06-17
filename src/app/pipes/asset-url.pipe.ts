import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetUrl',
  standalone: true
})
export class AssetUrlPipe implements PipeTransform {
  transform(fileName: string): string {
    if (!fileName) return '';
    return new URL(`/assets/images/${fileName}`, import.meta.url).href;
  }
}
