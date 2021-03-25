import { Component, OnInit } from '@angular/core';
import { WidgetModel } from '../../types/widget.model';
import { Store } from '@ngrx/store';
import { selectWidgetStateIsLoading, selectWidgetStateWidgets, WidgetState } from '../../state/widget.reducer';
import { Observable } from 'rxjs';
import { GetAllWidgets } from '../../state/widget.actions';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss'],
})
export class WidgetPageComponent implements OnInit {
  widgets$: Observable<WidgetModel[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<WidgetState>) {}

  ngOnInit(): void {
    this.widgets$ = this.store.select(selectWidgetStateWidgets());
    this.loading$ = this.store.select(selectWidgetStateIsLoading());
    this.store.dispatch(new GetAllWidgets());
  }
}
