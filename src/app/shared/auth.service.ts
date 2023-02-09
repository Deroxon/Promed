import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import{ AngularFireAuth} from "@angular/fire/compat/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AngularFireAuth: AngularFireAuth, private router: Router, private _matSnackBar:  MatSnackBar) { }


  login(email: string, password: string) {
    this.AngularFireAuth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token', 'true')
      this.router.navigate([''])
    }, err=> {
      alert("Something went wrong!" +err)
      this.router.navigate(['/login'])
    })
  }

  register(email: string, password: string) {
    this.AngularFireAuth.createUserWithEmailAndPassword(email,password).then( () => {

      alert("Registration Succesful")
      this.router.navigate(['/login'])
    }, err=> {
      alert('Something wen wrong, pls try again')
      this.router.navigate(['/register'])
    })
  }

  logout() {
    this.AngularFireAuth.signOut().then( () => {
      localStorage.removeItem('token')
      this.router.navigate(['/dashboard'])
    }, err => {
      alert('Somethin went wrong')
    })
  }

}
