import { Pipe, PipeTransform } from '@angular/core';
import bookData from './component/books.json';

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
  price: number;
  type: string
}


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, filterid:string) {
    if (filterid === '') {
      return value;
    }
   const categories = [];
   for(const category of value){
    if(category['type'] === filterid){
      categories.push(category)
    }
   }
   return categories;
}
}
