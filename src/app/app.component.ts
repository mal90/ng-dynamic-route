import { RouteGuardService } from './routeloader.service';
import { Component, OnInit } from '@angular/core';
import { Router , Route }    from '@angular/router';
import { Module1Component } from './module1/module1.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private router: Router,private routeGuardService : RouteGuardService) {}

  ngOnInit(){
    console.log("inside on init");
    console.log(this.router.config);
  }

  addRoute(module:string){
    this.routeGuardService.setRouteGuard(module);
  }

  removeRoute(module:string){
    this.routeGuardService.removeRouteGuard(module);
  }
}
