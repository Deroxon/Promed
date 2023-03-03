import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

    count: number = 5

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.redirectToMainWebsite()
  }

  redirectToMainWebsite() {
    setInterval( () => {
      this.count--
      if(this.count  <= 0)  { this.router.navigate(['/login'])}
    }, 1000)
  }

}
