import { module2Loader, module3Loader } from './routeloader.service';
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

  constructor(private router: Router, 
    private module2Loader : module2Loader,private module3Loader : module3Loader) {}

  ngOnInit(){
    console.log("inside on init");
    console.log(this.router.config);
  }

  addRoute(module:string){
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

    localStorage.setItem(module,"true")
    if(module==='module2')
      this.module2Loader.enableModuleRouting(true);
    if(module==='module3')
      this.module2Loader.enableModuleRouting(true);
    console.log(this.router.config);
  }

  removeRoute(module:string){
    // let routes = this.router.config;
    // routes = routes.filter(myObj => myObj.path != "module3");
    // this.router.resetConfig(routes);
    // //this.routeLoaderService.makeModule3Accessible(false);
    localStorage.removeItem(module)
    if(module==='module2')
      this.module2Loader.enableModuleRouting(false);
    if(module==='module3')
      this.module2Loader.enableModuleRouting(false);
    console.log(this.router.config);
  }
}
