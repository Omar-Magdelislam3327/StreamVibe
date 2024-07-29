import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { genres } from '../modules/genres';
import { ApifunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class GenresApiService extends ApifunctionService<genres> {
  constructor(public override http:HttpClient) {
    super('http://localhost:3000/genres' , http)
  }
}
