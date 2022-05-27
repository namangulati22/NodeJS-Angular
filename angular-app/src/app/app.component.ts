import { Component, OnInit } from '@angular/core';

import { ApiService } from './app-service.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      NodeJS+Angular
    </h1>
  </div>
      <h2>{{ items?.message }}</h2>
  {{ error?.message }}
  `
})

export class AppComponent implements OnInit {

  items:any;
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getMain().subscribe(
      (items: any) => this.items = items,
      (error: any) => this.error = error
    );
  }
}