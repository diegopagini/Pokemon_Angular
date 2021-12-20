import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    if (value) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    } else {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2eewI0uAizr2mMaNeNJwUk0y69bFDMjrYU47vUd31YHnnjS6Rsiufbdjdkb9kpXsi9Y&usqp=CAU';
    }
  }
}
