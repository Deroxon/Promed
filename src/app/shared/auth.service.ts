import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import{ AngularFireAuth} from "@angular/fire/compat/auth"
import { Observable, Subject } from 'rxjs';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isUserLoggedIn: boolean = false

  private isUserLoggedIn$ = new Subject()

  constructor(private AngularFireAuth: AngularFireAuth, private router: Router, private _matSnackBar:  MatSnackBar, ) { }


  login(email: string, password: string) {
    this.AngularFireAuth.signInWithEmailAndPassword(email,password).then( (res) => {
      if(res.user?.emailVerified == true) {
        localStorage.setItem('token', 'true')
        this.router.navigate([''])
      } else {
        this.router.navigate(['/verify-email'])
      }

    }, err=> {
      this.router.navigate(['/login'])
      this.snackBarAlert(err)
    })
  }

  register(email: string, password: string) {
    this.AngularFireAuth.createUserWithEmailAndPassword(email,password).then( res => {
      this.snackBarAlert("Registration Succesful")
      this.router.navigate(['/login'])

      this.sendEmailForVerification(res.user)
    }, err=> {
        // validation
        if(this.checkEmailFormat(email)) {
          if(password) {
            this.snackBarAlert(err)
          } else {
            this.snackBarAlert('Please fill the \'password\' field ')
          }

        }
        else {
          this.snackBarAlert('The email is formatted incorrectly, please try again')
        }

      this.router.navigate(['/register'])
    })
  }

  logout() {
    this.AngularFireAuth.signOut().then( () => {

      localStorage.removeItem('token')
      this.router.navigate(['/dashboard'])
      this.snackBarAlert('Logout Succesfull')
      this.isUserLogged()
    }, err => {
      this.snackBarAlert(err)
    })
  }

  forgotPassword(email:string) {
    this.AngularFireAuth.sendPasswordResetEmail(email).then( () => {
      this.router.navigate(['/verify-email'])

    }, err => {
      this.snackBarAlert(err)
    })
  }

   // email verification
  sendEmailForVerification(user:any) {
    user.sendEmailVerification().then((res:any)=> {
      this.router.navigate(['/verify-email'])
    }, (err:any) => {
      this.snackBarAlert(err)
    })
  }

  isUserLogged() {
    console.log('init')
    console.log(this.AngularFireAuth.currentUser)
    if(this.AngularFireAuth.user) {
      this.isUserLoggedIn = true
    } else {
      this.isUserLoggedIn = false
    }
    this.isUserLoggedIn$.next(this.isUserLoggedIn)

  }

  snackBarAlert(message:any) {
    this._matSnackBar.open(message, 'Dismiss',  {duration: 3500} )
  }


  //validation email
  checkEmailFormat(email:string) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  subUserLogged():Observable<any> {
    return this.isUserLoggedIn$.asObservable()
  }



}
