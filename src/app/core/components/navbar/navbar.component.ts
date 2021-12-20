import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, pluck, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'pok-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobile$: Observable<boolean>;
  installEvent: any;
  @Output() sideNavEmitter = new EventEmitter<boolean>();
  @Input() opened: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private breakpoint: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile$ = this.breakpoint
      .observe(`(max-width: 991px)`)
      .pipe(pluck('matches'), takeUntil(this.unsubscribe$));
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(): void {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta: any) => {
        console.log(rta);
      });
    }
  }

  handleClick(): void {
    this.opened = !this.opened;
    this.sideNavEmitter.emit(this.opened);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
