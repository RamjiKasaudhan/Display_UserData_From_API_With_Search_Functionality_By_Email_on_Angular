import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, pipe } from 'rxjs';
// import { data } from './user-cards/users.interface';
// import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {



  constructor(private http: HttpClient) { }

  getUserData1() {
    let apiUrl = "https://reqres.in/api/users?page=1";
    return this.http.get(apiUrl);
  }

  getUserData2() {
    let apiUrl = "https://reqres.in/api/users?page=2";
    return this.http.get(apiUrl);
  }


}
