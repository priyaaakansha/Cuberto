/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/quotes */


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


 @Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
  })
  export class HomePage implements OnInit  {
  loginEmailForm: FormGroup;
  obj = [];
  isChecked=false;

  constructor() { }

  ngOnInit() {
    this.loginEmailForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8), Validators.maxLength(12),
        Validators.required,
      ])),
      gender: new FormControl(''),
      fName: new FormControl(''),
      lName: new FormControl(''),
      phone: new FormControl(''),
    });

  }

  onSubmit() {
    this.obj = JSON.parse(localStorage.getItem('user'))
    this.userexists()
  }
  userexists() {

      if (this.obj) {
        document.getElementById('check').innerHTML = ''
        for (let i = 0; i < this.obj.length; i++) {
          if ((this.obj[i].email !== this.loginEmailForm.value.email)) {
            console.log('user doesnt exist')
            document.getElementById('check').innerHTML = "User does not exist"
            continue;
          }
          else if (this.obj[i].email === this.loginEmailForm.value.email) {
            if (this.obj[i].password === this.loginEmailForm.value.password) {
              document.getElementById('check').innerHTML = ''
              sessionStorage.setItem('user', JSON.stringify(this.obj[i]))
              return true;
            }
            else {
              document.getElementById('check').innerHTML = 'Incorrect Password';
              return false;
            }
          }
        }
    }
    else{
      document.getElementById('check').innerHTML = ''
    }

  }


}








