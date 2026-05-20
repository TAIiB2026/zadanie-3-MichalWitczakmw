import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BookRepository } from '../interfaces/book-repository';
import { BookRepoStateService } from './book-repo-state.service';

@Injectable({
  providedIn: 'root'
})
export class BookRepoService implements BookRepository {
  private books: Book[] = [
    new Book(1, 300, new Date('2024-01-10'), 'Angular Basics'),
    new Book(2, 250, new Date('2024-02-15'), 'TypeScript Fundamentals'),
    new Book(3, 420, new Date('2024-03-20'), 'Web Development Guide'),
    new Book(4, 180, new Date('2024-04-05'), 'Frontend Practice'),
    new Book(5, 510, new Date('2024-05-12'), 'Programming Patterns')
  ];

  constructor(private bookRepoStateService: BookRepoStateService) {
    this.bookRepoStateService.updateLastServiceCreationDate(new Date());
  }

  getAll(): Book[] {
    this.bookRepoStateService.updateLastFetchDate(new Date());
    return [...this.books];
  }

  add(book: Book): void {
    this.books.push(book);
  }

  delete(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  existsById(id: number): boolean {
    return this.books.some(book => book.id === id);
  }
}