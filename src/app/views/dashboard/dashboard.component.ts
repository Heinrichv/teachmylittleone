import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  /**
   *
   */
  constructor(readonly auth: AuthService) {

  }
  ngOnInit(): void {
    if (this.auth.loggedIn) {
      this.auth.getUser$().subscribe((response: any) => {

      });
    }
  }
}
