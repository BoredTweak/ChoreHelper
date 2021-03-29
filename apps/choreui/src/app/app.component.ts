import { Component } from '@angular/core';
import { ApiProxyService } from './@shared/api-proxy/api-proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private proxyService: ApiProxyService) { }
  selectedChore: string = '';

  ChoreMe(): void {
    this.proxyService.fetchRandomChore().subscribe(chore =>
      this.selectedChore = chore.name
    );
  }
}
