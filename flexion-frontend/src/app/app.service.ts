import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = "http://localhost:8080/conversion";
  header = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  // returns an observable for the post request
  getStudentResult(body) {
    return this.http.post(this.url, body, { headers: this.header});
  }
}
