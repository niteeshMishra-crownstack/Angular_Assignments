import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of, empty } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  public baseUrl = 'https://api.github.com/search/repositories';
  public searchResults: any;

  //make HTTP call to the api
}
