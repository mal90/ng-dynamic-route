import { Module2Component } from './module2/module2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { Module1Component } from './module1/module1.component';
import { Module3Component } from './module3/module3.component';
import { module2Loader, module3Loader } from './routeloader.service';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: Module1Component
  },
  {
    path: 'module2',
    component: Module2Component,
    canActivate: [module2Loader]
  },
  {
    path: 'module3',
    component: Module3Component,
    canActivate: [module3Loader]
  }
  // {
  //   path: '**',
  //   canActivate: [RouteLoader]
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes)
  ],
  providers: [module2Loader,module3Loader],
  bootstrap: [AppComponent],
  entryComponents: [Module3Component]

})
export class AppModule { }
