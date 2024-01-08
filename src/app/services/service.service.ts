import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../model/Annonce';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL=" http://localhost:3000/annonce"
  URL2=" http://localhost:3000/article"
  httpOPtions={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getAllAnnonce(){
    return this.http.get<Annonce[]>(this.URL);
  }
  getAll(){
    return this.http.get<Article[]>(this.URL2);
  }
}
