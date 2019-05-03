import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Person {
  id = 0;
  first = '';
  second = '';
  paid='0';
  nickname = '';
  city = '';
  male=false;
  birthday:Date;

  constructor (id: number, first: string) {
    this.id = id
    this.first = first
  }

  guiRep () {
    return this.first
  }
}
