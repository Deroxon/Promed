import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() email: string = ''
  @Input() password: string = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register()  {
    this.authService.register(this.email,this.password)
    this.email =''
    this.password = ''
  }

}
