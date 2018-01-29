import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router , Route }    from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteGuardService implements CanActivate{
    modules : any = eval('(' + localStorage.getItem("modules") + ')');    

    constructor(private router: Router){   
        
    }

    setRouteGuard(newModule){
        let isAdded = false;
        var moduleObjArr = eval('(' + localStorage.getItem("modules") + ')');

        for (let moduleObj of moduleObjArr) {
            if(moduleObj.module === newModule){
                isAdded = true;
            } 
        }

        if(!isAdded){
            moduleObjArr.push({module:newModule});
            localStorage.setItem("modules",JSON.stringify(moduleObjArr));
        }
    }

    removeRouteGuard(newModule){
        var moduleObjArr = eval('(' + localStorage.getItem("modules") + ')');
        var newModuleObjArr = moduleObjArr.filter(item => item.module !== newModule);
        localStorage.setItem("modules",JSON.stringify(newModuleObjArr));
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        var moduleObjArr = eval('(' + localStorage.getItem("modules") + ')');
        console.log(next.data["module"]);
        let canActivate = false;
        for (let module of moduleObjArr) {
            if(module.module === next.data["module"]){
                canActivate = true ; 
            } 
        };
        return canActivate;
    }

    // getStorageItems(){

    // }

}
