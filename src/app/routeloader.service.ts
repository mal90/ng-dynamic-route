import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router , Route }    from '@angular/router';
import { Module3Component } from './module3/module3.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RouteLoader implements CanActivate{

    module3Access : boolean = false ;

    constructor(private router: Router,){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise((resolve, reject) => {
            let DynamicRoutes: Route[] = [{
                path: 'module3',
                component: Module3Component
            }];

            this.router.config.splice(this.router.config.length - 1, 0, ...DynamicRoutes);
            this.router.resetConfig(this.router.config);

            if(DynamicRoutes.some(route => state.url.slice(-route.path.length) === route.path)) {
                this.router.navigateByUrl(state.url);
            }

            resolve(true);
        })
    }

}

export interface MyObject{
    id: number;
    text: string;
}