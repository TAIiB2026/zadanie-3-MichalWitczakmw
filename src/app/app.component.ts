import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRepoStateService } from './services/book-repo-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  lastFetchDate$: Observable<Date | null>;
  lastServiceCreationDate$: Observable<Date | null>;

  constructor(private bookRepoStateService: BookRepoStateService) {
    this.lastFetchDate$ = this.bookRepoStateService.lastFetchDate$;
    this.lastServiceCreationDate$ = this.bookRepoStateService.lastServiceCreationDate$;
  }
}