import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: string = ''
  @Input() password: string = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login()  {
    this.authService.login(this.email,this.password)
    this.email =''
    this.password = ''
  }

  signInWithGoogle(){

  }

}
