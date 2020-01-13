import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notePad v1.02';

  constructor(public authService: AuthService) {}

  onClick() {
    this.authService.logOut();
  }
}
