import { Component, OnInit } from '@angular/core';
import bookData from '../books.json';
interface Book {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  price: number
}
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  public sort: string;
  constructor() { }

  ngOnInit(): void {
  }
  books: Book[] = bookData;
}
