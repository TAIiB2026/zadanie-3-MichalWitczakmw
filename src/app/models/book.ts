export class Book {
  id: number;
  pages: number;
  releaseDate: Date;
  title: string;

  constructor(id: number, pages: number, releaseDate: Date, title: string) {
    this.id = id;
    this.pages = pages;
    this.releaseDate = releaseDate;
    this.title = title;
  }
}