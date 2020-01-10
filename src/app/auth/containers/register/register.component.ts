import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../auth.service';
import { Error } from '../../interface/error.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: Error;

  constructor(
    private authService: AuthService
  ) { }

  onSubmit(data: FormGroup) {
    this.authService.signUp(data.get('email').value, data.get('password').value, data.get('firstName').value)
    .catch(err => this.error = err);
  }

  ngOnInit() {
  }
}
