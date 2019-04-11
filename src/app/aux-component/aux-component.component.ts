import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';
import { Cat } from '../shared/models/cat.model';
import { Observable } from 'rxjs';
import { Dog } from '../shared/models/dog.model';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-aux-component',
  templateUrl: './aux-component.component.html',
  styleUrls: ['./aux-component.component.scss']
})
export class AuxComponentComponent implements OnInit {

  constructor(private _zooService: ZooService,
    private _starWarsService: StarWarsService) { }

  myCats: Cat[] = [];

  luke: any;

  myDogs$: Observable<Dog[]>;

  ngOnInit() {
    this._zooService.getAllAnimalsByClassName('Cat')
      .subscribe(
        (cat) => {
          this.myCats.push(cat);
        }
      );
    this.myDogs$ = this._zooService.getDogs();

    this._getLuke();
  }

  private _getLuke(): void {
    this._starWarsService.getLukeSkywalkerInfo()
      .subscribe(
        (luke) => {
          console.log(luke.height);
          this.luke = luke;
        }
      );
  }



}
