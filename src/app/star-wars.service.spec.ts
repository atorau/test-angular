import { TestBed, getTestBed } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StarWarsService', () => {
  let injector: TestBed;
  let service: StarWarsService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarWarsService]
    });
    injector = getTestBed();
    service = injector.get(StarWarsService);
    httpMock = injector.get(HttpTestingController);


  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Skywalker object>', () => {
    const mockLuke = { name: 'Mock Skywalker' };

    service.getLukeSkywalkerInfo().subscribe(luke => {
      expect(luke).toBe(mockLuke);
    });

    const req = httpMock.expectOne(`${service.STAR_WARS_URL}people/1/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockLuke);
  });
});
