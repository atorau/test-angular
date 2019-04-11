import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }


  private _capitalizeComponentName(): void {
    this.name = this.name ? this._capitalizeName(this.name) : 'NONAME';
  }

  private _capitalizeName(name: string): string {
    return name ? name.toUpperCase() : null;
  }

  public getCharCount(name: string): number {
    return 0;
  }

}
