import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router , Route }    from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteGuardService implements CanActivate{

    constructor(private router: Router){   
        
    }

    setRouteGuard(newModule){
        let isAdded = false;
        var moduleObjArr = this.getStorageItems();

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
        var moduleObjArr = this.getStorageItems();
        var newModuleObjArr = moduleObjArr.filter(item => item.module !== newModule);
        localStorage.setItem("modules",JSON.stringify(newModuleObjArr));
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        var moduleObjArr = this.getStorageItems();
        console.log(next.data["module"]);
        let canActivate = false;
        for (let module of moduleObjArr) {
            if(module.module === next.data["module"]){
                canActivate = true ; 
            } 
        };
        return canActivate;
    }

    getStorageItems(){
        let moduleObjArr = eval('(' + localStorage.getItem("modules") + ')');
        return moduleObjArr === null ? [{}] : moduleObjArr;
    }

}
