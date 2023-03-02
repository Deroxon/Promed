import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {

  private currentUrl: string = ''

  private currentUrl$ = new Subject()

  constructor(private router: Router, private authService:AuthService, private angularFireAuth: AngularFireAuth) { }


  getUrl() {
    this.currentUrl = this.router.url
    this.currentUrl$.next(this.currentUrl)
  }



  subCurrentUrl():Observable<any> {
    return this.currentUrl$.asObservable()
  }



}
