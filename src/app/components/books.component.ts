import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookRepoService } from '../services/book-repo.service';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  showForm: boolean = false;

  constructor(private bookRepoService: BookRepoService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookRepoService.getAll();
  }

  deleteBook(id: number): void {
    this.bookRepoService.delete(id);
    this.loadBooks();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onBookAdded(): void {
    this.loadBooks();
    this.showForm = false;
  }
}