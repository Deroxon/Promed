import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainLogicService } from 'src/app/shared/main-logic.service';


@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

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

  constructor(private router: Router, private mainLogicService: MainLogicService) { }

  ngOnInit(): void {

  }

  changeUrl(url: any) {
    console.log(url)

    // checking if the values are in navSection
    if((this.navTable.filter(x =>  Object.values(x).indexOf(url) !== -1 )).length >  0 ) {
      if(url !== '') {
        this.router.navigateByUrl('/dashboard/'+ url)
      } else { this.router.navigateByUrl('/dashboard') }
    }
    //login
    else  {
      this.router.navigate([url])
    }

    this.mainLogicService.getUrl()
  }

}
