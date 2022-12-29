import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = "http://127.0.0.1:8000/api/"
  httpFormDataHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) {
  }

}
