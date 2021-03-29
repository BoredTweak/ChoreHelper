import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chore } from '../chore';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiProxyService {
  constructor(private http: HttpClient) {
    console.log(AppConfig.settings);
  }

  fetchRandomChore(): Observable<Chore> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Chore>(AppConfig.settings.chore_api.target + "/chores", options);
  }
}
