import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {

  currentUrl: string = ''



  currentUrl$ = new Subject()

  constructor(private router: Router) { }


  getUrl() {
    this.currentUrl = this.router.url
    this.currentUrl$.next(this.currentUrl)
  }


  subCurrentUrl():Observable<any> {
    return this.currentUrl$.asObservable()
  }
}
