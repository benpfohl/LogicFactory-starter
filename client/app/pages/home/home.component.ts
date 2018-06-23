import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isAdmin: Boolean;
  loggedIn: Boolean;

  constructor(public auth: AuthService) {
    console.log(auth.isAdmin);
    this.isAdmin = auth.isAdmin;
    this.loggedIn = auth.loggedIn;
  }

}
