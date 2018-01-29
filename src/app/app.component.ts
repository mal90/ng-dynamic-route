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

    /**Todo : put the logic of route guard inside in a single service
     * So that no need to put conditions here for each module
     */
    localStorage.setItem(module,"true")
    if(module==='module2')
      this.module2Loader.enableModuleRouting(true);
    if(module==='module3')
      this.module3Loader.enableModuleRouting(true);
    console.log(this.router.config);
  }

  removeRoute(module:string){
    /**Todo : put the logic of route guard inside in a single service
     * So that no need to put conditions here for each module
     */
    localStorage.removeItem(module)
    if(module==='module2')
      this.module2Loader.enableModuleRouting(false);
    if(module==='module3')
      this.module3Loader.enableModuleRouting(false);
    console.log(this.router.config);
  }
}
