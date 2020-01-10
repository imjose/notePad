import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Error } from '../../interface/error.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() newUser: boolean;
  @Input() error: (Error | null);
  @Output() Submit = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  authForm: FormGroup;
  formName: string;

  ngOnInit() {
    if (this.newUser) {
      this.formName = 'Sign Up';
      this.authForm = this.fb.group({
        firstName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(5), Validators.required]]
      });
    } else {
      this.formName = 'Sign In';
      this.authForm = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.minLength(5)]
      });
    }
  }

  onSave() {
    if (this.authForm.valid) { this.Submit.emit(this.authForm); }
  }

  onClick() {
    if (this.newUser) { this.router.navigate(['auth/login']);
    } else { this.router.navigate(['auth/register']); }
  }
}
