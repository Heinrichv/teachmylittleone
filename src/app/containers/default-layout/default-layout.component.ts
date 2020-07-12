import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  public user: any;

  constructor(readonly auth: AuthService) {

  }

  ngOnInit(): void {
    if (this.auth.loggedIn) {
      this.auth.getUser$().subscribe((response: any) => {
        console.log(response);
        this.user = response;
      });
    }
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.auth.logout();
  }
}
