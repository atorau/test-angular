import { Injectable } from '@angular/core';
import { Animal } from './shared/models/animal.interface';
import { Cat } from './shared/models/cat.model';
import { Dog } from './shared/models/dog.model';
import { Observable, of, from } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  animals: Animal[] = [
    new Cat('cat1'), new Cat('cat2'), new Cat('cat3'), new Cat('cat4'),
    new Dog('dog1'), new Dog('dog2'), new Dog('dog3'), new Dog('dog4')
  ];

  constructor() { }

  public getAllAnimals(): Observable<Animal[]> {
    return of(this.animals);
  }

  public getAllAnimalsByClassName(className: string): Observable<Animal> {
    return from(this.animals).pipe(
      filter(a => a.constructor.name === className)
    );
  }

  public getDogs(): Observable<Animal[]> {
    return of(this.animals).pipe(
      map(animals => {
        return animals.filter(d => d.constructor.name === 'Dog');
      })
    );
  }
}
