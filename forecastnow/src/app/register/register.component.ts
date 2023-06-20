// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\s]+')]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')])
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Perform registration logic
      console.log('Form submitted');
    } else {
      // Handle invalid form
      console.log('Invalid form');
    }
  }


  // register() {
  //   // Here you can add code to handle the registration logic
  //   // For example, send the registration data to a server
  //   // or perform any other necessary actions
  // }

  
}
