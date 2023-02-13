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
      this.router.navigate(['/login'])
      this.snackBarAlert(err)
    })
  }

  register(email: string, password: string) {
    this.AngularFireAuth.createUserWithEmailAndPassword(email,password).then( () => {

      this.snackBarAlert("Registration Succesful")
      this.router.navigate(['/login'])
    }, err=> {
      this.snackBarAlert(err)
      this.router.navigate(['/register'])
    })
  }

  logout() {
    this.AngularFireAuth.signOut().then( () => {
      localStorage.removeItem('token')
      this.router.navigate(['/dashboard'])
    }, err => {
      this.snackBarAlert(err)
    })
  }

  forgotPassword(email:string) {
    this.AngularFireAuth.sendPasswordResetEmail(email).then( () => {
      this.router.navigate(['/verify-email'])

    }, err => {
      this.snackBarAlert('Something went wrong')
    })
  }

  snackBarAlert(message:any) {
    this._matSnackBar.open(message, 'Dismiss',  {duration: 3500} )
  }

}
