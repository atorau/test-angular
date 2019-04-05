import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxComponentComponent } from './aux-component.component';

describe('AuxComponentComponent', () => {
  let component: AuxComponentComponent;
  let fixture: ComponentFixture<AuxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
