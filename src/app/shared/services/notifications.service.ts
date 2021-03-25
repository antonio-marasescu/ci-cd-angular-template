import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'any' })
export class NotificationsService {
  constructor() {}

  display(message: string): void {
    console.error('NotificationsService', message);
  }
}
