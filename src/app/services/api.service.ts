import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
//services classes are globally available
  constructor(private http:HttpClient) {

  }
  getHello() {
    // alert("Hello from Services")
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  public getTodo(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
