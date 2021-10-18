import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink='/welcome'>Home</a></li> <!-- If additional info has to be passed into the route then the syntax becomes [routerLink]="['/my/path']" -->
        <li><a class="nav-link" routerLink='/products'>Product List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet> <!-- This is where the view gotten from any route will be displayed lol angular doesnt refresh the page-->
    </div>
  `
})
export class AppComponent{
  pageTitle: string = "Acme Product Management";
}