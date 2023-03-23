import { Injectable, OnInit} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGuardService implements CanActivate{

  constructor(private authService: AuthService, private router:Router) { }

    isLoggedIn: boolean = false

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.authService.isUserLogged()


    this.authService.subUserLogged$().subscribe( data => {
      console.log(data)
      if(data) {
        this.router.navigate(['/dashboard'])
        this.isLoggedIn = true
      }
      else {
        this.router.navigate(['/login'])
        this.isLoggedIn = false
      }
    })

    return this.isLoggedIn



  }
}
