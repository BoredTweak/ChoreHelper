import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chore } from '../entities/chore';
import { ChoreEvent } from '../entities/chore-event';
import { RequestOptions, Request, RequestMethod, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  httpService;
  error = '';
  overdueChoreCount = 0;
  latestChore = '';

  constructor(http: HttpClient) {
    this.httpService = http;
  }

  ngOnInit(): void {
    this.GetOverDue();
    this.GetLatest();
  }

  GetOverDue(): void {
    var options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Access-Control-Allow-Origin', 'http://localhost');
    options.headers.append('Access-Control-Allow-Credentials', 'true');
    // options.headers.
    this.httpService.get('http://tweak-desktop/WebAPI/api/chore?usecase=OverDue')
      .subscribe(res => {
        let results = res.json();
        this.overdueChoreCount = results.length;
      }, err => this.error = err);
  }

  GetLatest(): void {
    var options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Access-Control-Allow-Origin', 'http://localhost');
    options.headers.append('Access-Control-Allow-Credentials', 'true');
    // options.headers.
    this.httpService.get('http://tweak-desktop/WebAPI/api/chore?usecase=LatestChore')
      .subscribe(res => {
        let result = res.json();
        this.latestChore = result;
      }, err => this.error = err);
  }
}
