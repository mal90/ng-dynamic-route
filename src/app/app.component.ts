import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
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

  constructor(private router: Router) {}

  ngOnInit(){
    console.log("inside on init");
    console.log(this.router.config);
  }

  addRoute(){
    let r: Route = {
      path: 'module3',
      component: Module3Component
    };
    this.router.resetConfig([r, ...this.router.config]);
    //let routes = this.router.config;
    //routes.push({ path: 'module3', component: Module3Component });
    //this.router.resetConfig(routes)
    console.log(this.router.config);
  }

  removeRoute(){
    let routes = this.router.config;
    routes = routes.filter(myObj => myObj.path != "module3");
    this.router.resetConfig(routes)
    console.log(this.router.config);
  }
}
