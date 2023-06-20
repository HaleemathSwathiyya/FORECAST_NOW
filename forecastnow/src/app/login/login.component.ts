import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic
      console.log('Form submitted');
    } else {
      // Handle invalid form
      console.log('Invalid form');
    }
  }

}
