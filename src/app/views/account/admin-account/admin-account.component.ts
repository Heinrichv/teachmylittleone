import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {
  user: any;
  constructor(readonly auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUser$().subscribe((response) => this.user = response);
  }

}
