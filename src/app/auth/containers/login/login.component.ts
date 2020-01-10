import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../auth.service';
// import { Error } from 'src/app/interfaces/error.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: Error;

  constructor(
    private authService: AuthService
  ) { }

  onSubmit(data: FormGroup) {
    this.authService.signIn(data.get('email').value, data.get('password').value)
    .catch(err => this.error = err);
  }

  ngOnInit() {
  }
}
