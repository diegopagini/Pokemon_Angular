import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { map, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[pokResponsiveSidenav]',
})
export class ResponsiveSidenavDirective implements OnInit, OnDestroy {
  @Input() permanentAt: number;
  private destroy$ = new Subject<void>();

  constructor(
    private breakpoint: BreakpointObserver,
    private sidenav: MatDrawer
  ) {}

  ngOnInit(): void {
    const permanent$ = this.breakpoint
      .observe(`(min-width: ${this.permanentAt}px)`)
      .pipe(
        takeUntil(this.destroy$),
        map(({ matches }) => matches)
      );

    permanent$.subscribe((permanent) => {
      this.sidenav.mode = permanent ? 'side' : 'over';
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
