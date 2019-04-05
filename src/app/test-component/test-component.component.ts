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

  }

  private _capitalizeName(name: string): string {
    return null;
  }

  public getCharCount(name: string): number {
    return 0;
  }

}
