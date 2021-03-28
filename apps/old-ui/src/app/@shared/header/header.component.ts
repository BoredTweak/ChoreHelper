import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Chore Helper';
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}