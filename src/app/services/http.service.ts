import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './../entities/person';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(@Inject('apiUrl') private apiUrl, private http: HttpClient) {}

  getPersons() {
    return this.http.get<any>(`${this.apiUrl}persons`);
  }
  postPerson(person?:Person) {
    return this.http.post<JSON>(`${this.apiUrl}persons`, person);
  }
}
