import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxComponentComponent } from './aux-component.component';
import { StarWarsService } from '../star-wars.service';
import { of } from 'rxjs';

describe('AuxComponentComponent', () => {


  let component: AuxComponentComponent;
  let fixture: ComponentFixture<AuxComponentComponent>;
  let dogsElements: any;
  let getLukeSpy;

  beforeEach(() => {
    const lukeMock = { name: 'Luke Mock' };
    const lukeService = jasmine.createSpyObj('StarWarsService', ['getLukeSkywalkerInfo']);
    getLukeSpy = lukeService.getLukeSkywalkerInfo.and.returnValue(of(lukeMock));
    TestBed.configureTestingModule({
      declarations: [AuxComponentComponent],
      providers: [
        {
          provide: StarWarsService, useValue: lukeService
        }
      ]
    });
    fixture = TestBed.createComponent(AuxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show 4 dogs', () => {
    fixture.detectChanges();
    dogsElements = fixture.nativeElement.querySelectorAll('.dog');
    expect(dogsElements.length).toBe(4);
  });

  it('should fill the cats array', () => {
    fixture.detectChanges();
    expect(component.myCats.length).toBe(4);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show quote after component initialized', () => {
    fixture.detectChanges(); // onInit()
    const lukeName = fixture.nativeElement.querySelector('#luke-name');
    expect(lukeName.textContent).toBe('Name: Luke Mock');
    expect(getLukeSpy.calls.any()).toBe(true, 'getLukeSkywalkerInfo called');
  });
});
