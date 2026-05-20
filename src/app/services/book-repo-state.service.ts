import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookRepoStateService {
  private lastFetchDateSubject = new BehaviorSubject<Date | null>(null);
  private lastServiceCreationDateSubject = new BehaviorSubject<Date | null>(null);

  lastFetchDate$: Observable<Date | null> = this.lastFetchDateSubject.asObservable();
  lastServiceCreationDate$: Observable<Date | null> = this.lastServiceCreationDateSubject.asObservable();

  updateLastFetchDate(date: Date): void {
    this.lastFetchDateSubject.next(date);
  }

  updateLastServiceCreationDate(date: Date): void {
    this.lastServiceCreationDateSubject.next(date);
  }
}