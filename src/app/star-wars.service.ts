import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  STAR_WARS_URL = 'https://swapi.co/api/';

  constructor(private httpClient: HttpClient) { }

  public getLukeSkywalkerInfo(): Observable<any> {
    return this.httpClient.get(this.STAR_WARS_URL + 'people/2/');
  }
}
