import { Book } from '../models/book';

export interface BookRepository {
  getAll(): Book[];
  add(book: Book): void;
  delete(id: number): void;
}