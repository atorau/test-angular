import { Component, OnInit } from '@angular/core';
import { Cat } from '../shared/models/cat.model';
import { Dog } from '../shared/models/dog.model';
import { Animal } from '../shared/models/animal.interface';
import { AuxClass } from '../shared/utils/aux-class.utils';

@Component({
  selector: 'app-aux-component',
  templateUrl: './aux-component.component.html',
  styleUrls: ['./aux-component.component.scss']
})
export class AuxComponentComponent implements OnInit {

  constructor() { }

  private _aux = new AuxClass();

  cat: Cat = new Cat('minino');
  dog: Dog = new Dog('rufus');

  animals: Animal[] = [
    new Cat('cat1'), new Cat('cat2'), new Cat('cat3'), new Cat('cat4'),
    new Dog('dog1'), new Dog('dog2'), new Dog('dog3'), new Dog('dog4')
  ];

  ngOnInit() {

  }

  get myCats(): string[] {
    const myCats = this._aux.getAnimalsByClassName(this.animals, 'Cat');
    return this._aux.getAnimalsName(myCats);
  }

  get myDogs(): string[] {
    const myDogs = this._aux.getAnimalsByClassName(this.animals, 'Dog');
    return this._aux.getAnimalsName(myDogs);
  }

}
