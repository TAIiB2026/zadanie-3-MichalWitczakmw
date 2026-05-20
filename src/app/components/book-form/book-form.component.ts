import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookRepoService } from '../../services/book-repo.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  standalone: false
})
export class BookFormComponent {
  @Output() bookAdded = new EventEmitter<void>();

  newBook: Book = new Book(0, 0, new Date(), '');
  idTaken: boolean = false;

  constructor(private bookRepoService: BookRepoService) {}

  checkId(): void {
    this.idTaken = this.bookRepoService.existsById(this.newBook.id);
  }

  addBook(): void {
    this.checkId();

    if (this.idTaken) {
      return;
    }

    this.bookRepoService.add(
      new Book(
        this.newBook.id,
        this.newBook.pages,
        new Date(this.newBook.releaseDate),
        this.newBook.title
      )
    );

    this.newBook = new Book(0, 0, new Date(), '');
    this.idTaken = false;
    this.bookAdded.emit();
  }
}