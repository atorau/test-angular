import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should capitalize the name from the component, if name is defined', () => {
    component.name = 'Adrian';
    // fixture.detectChanges();
    const capitalizedName = 'ADRIAN';
    component['_capitalizeComponentName']();
    // fixture.detectChanges();
    expect(component.name).toBe(capitalizedName);
  });

  it('should set name as NONAME if name input is not defined', () => {
    component.name = undefined;
    component['_capitalizeComponentName']();
    expect(component.name).toBe('NONAME');
  });

  it('should return a capitalized string', () => {
    expect(component['_capitalizeName']('Ruben')).toBe('RUBEN');
  });

  it('should return null if name param is not defined', () => {
    expect(component['_capitalizeName'](null)).toBe(null);
  });
});
