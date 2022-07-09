import { Component, OnInit, OnDestroy } from '@angular/core';
import { bufferToggle, reduce, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sort: string;
  constructor() {}

  ngOnInit(): void {}

  

  books: Book[] = bookData;


}
