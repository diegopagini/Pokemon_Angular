import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
