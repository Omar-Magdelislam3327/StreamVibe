import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { films } from '../modules/films';
import { ApifunctionService } from './apifunction.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmsApiService extends ApifunctionService<films> {
  constructor(public override http: HttpClient) {
    super('http://localhost:3000/films', http);
  }

  getAllFilms(): Observable<films[]> {
    return this.getAll();
  }
}
