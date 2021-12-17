import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
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
  @Output() sideNavEmitter = new EventEmitter<boolean>();
  @Input() opened: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private breakpoint: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile$ = this.breakpoint
      .observe(`(max-width: 991px)`)
      .pipe(pluck('matches'), takeUntil(this.unsubscribe$));
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
