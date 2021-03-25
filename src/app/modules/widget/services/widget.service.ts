import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WidgetModel } from '../types/widget.model';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'any' })
export class WidgetService {
  getAll(): Observable<WidgetModel[]> {
    return of([
      { id: '1', name: 'Test 01', value: 1234.5 },
      { id: '2', name: 'Test 02', value: 678.9 },
    ]).pipe(delay(1000));
  }
}
