import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'pok-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('input') input: ElementRef;

  @Output() emitSearch = new EventEmitter<string>();
  searchValue: string;
  private unsubscribe$ = new Subject<void>();

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.search()),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  search(): void {
    this.emitSearch.emit(this.searchValue);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
