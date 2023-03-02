import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { MainLogicService } from 'src/app/shared/main-logic.service';


@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  isUserLoggedIn:any;

  navTable = [
  {
    url: '',
    name: 'PRO-MED',
    icon: ''
  },
  {
    url: 'medical-documentation',
    name: 'Medical Documentation',
    icon: ''
  },
  {
    url: 'patients',
    name: 'Patients',
    icon: '',
  },
  {
    url: 'wiki',
    name: 'Pro-wiki',
    icon: '',
  },
  {
    url: 'mail',
    name: 'MailBox',
    icon: '',
  },
 ]

  constructor(private router: Router, private mainLogicService: MainLogicService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLogged()
    this.authService.subUserLogged().subscribe( data => {
      this.isUserLoggedIn = data
    })
  }
  logout() {
    this.authService.logout()
  }

  changeUrl(url: any) {
    console.log(url)

    // checking if the values are in navSection
    if((this.navTable.filter(x =>  Object.values(x).indexOf(url) !== -1 )).length >  0 ) {
      console.log('yes')
      if(url !== '') {
        this.router.navigateByUrl('/dashboard/'+ url)
      } else { this.router.navigateByUrl('/dashboard') }
    }
    //login
    else  {
      this.router.navigateByUrl(url)
    }

    this.mainLogicService.getUrl()
  }

}
