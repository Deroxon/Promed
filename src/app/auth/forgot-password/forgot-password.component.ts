import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  @Input() email: string = ''


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword()  {
    if(this.email) {
      this.authService.forgotPassword(this.email)
      this.email =''
    }
    else {
      this.authService.snackBarAlert('Please, fill email input')
    }

  }

}
