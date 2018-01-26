import { RouteLoader } from './routeloader.service';
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

  constructor(private router: Router, private routeLoaderService:RouteLoader) {}

  ngOnInit(){
    console.log("inside on init");
    console.log(this.router.config);
  }

  addRoute(){
    // let r: Route = {
    //   path: 'module3',
    //   component: Module3Component
    // };
    //this.router.resetConfig([r, ...this.router.config]);
    //*************************************************************
    //let routes = this.router.config;
    //routes.push({ path: 'module3', component: Module3Component });
    //this.router.resetConfig(routes)
    //this.routeLoaderService.makeModule3Accessible(true);
    // this.router.config.splice(this.router.config.length - 1, 0, r);
    // this.router.resetConfig(this.router.config);
    console.log(this.router.config);
  }

  removeRoute(){
    let routes = this.router.config;
    routes = routes.filter(myObj => myObj.path != "module3");
    this.router.resetConfig(routes);
    //this.routeLoaderService.makeModule3Accessible(false);
    console.log(this.router.config);
  }
}
