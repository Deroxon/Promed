import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

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
    this.authService.forgotPassword(this.email)
    this.email =''
  }

}
