import { Injectable } from '@angular/core';
import { User } from './createprofile.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  createAccount(user: User){
        console.log(JSON.stringify(user));
        this.http
        .post(
            'https://analytics-dashboard-88861-default-rtdb.firebaseio.com/posts.json',
            user
        ).subscribe(responseData => {
            console.log(responseData);
        });
        }

}



