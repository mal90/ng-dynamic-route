import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router , Route }    from '@angular/router';


@Injectable()
export class module2Loader implements CanActivate{
    enableRoute : any ;


    constructor(private router: Router){   
        this.enableRoute = JSON.parse(localStorage.getItem("module2"));
    }

    enableModuleRouting(value){
        this.enableRoute = value ;
    }

    canActivate(){
        return this.enableRoute;
    }

}

@Injectable()
export class module3Loader implements CanActivate{
    enableRoute : any ;


    constructor(private router: Router){   
        this.enableRoute = JSON.parse(localStorage.getItem("module3"));
    }

    enableModuleRouting(value){
        this.enableRoute = value ;
    }

    canActivate(){
        return this.enableRoute;
    }
}

// export class GenericRouteLoader implements CanActivate{
//     enableRoute : any ;


//     constructor(private router: Router){   
//         this.enableRoute = JSON.parse(localStorage.getItem("module2"));
//     }

//     enableModuleRouting(value){
//         this.enableRoute = value ;
//     }

//     canActivate(){
//         return this.enableRoute;
//     }

// }
