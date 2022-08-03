/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  users=[];
  obj = [];
  userEmail: string;
  userPwd: string;
  exists = false;
  isChecked = false;

  constructor(private http: HttpClient) {}


  ngOnInit() {

  this.signupForm = new FormGroup({

  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('', Validators.compose([
	Validators.minLength(8),Validators.maxLength(12),
	Validators.required,
	Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
	])),
  fName: new FormControl(''),
  lName: new FormControl(''),
  phone: new FormControl('', Validators.compose([
    Validators.minLength(10),Validators.maxLength(10),
    Validators.required, Validators.pattern('^[0-9]+$')
  ])),
  });
  this.users = JSON.parse(localStorage.getItem('user')) || [];
  document.getElementById('check').innerHTML = '';
}

  onSubmit(){
  if(!this.userexists()){
    this.users.push(this.signupForm.value);
    localStorage.setItem('user', JSON.stringify(this.users));
    this.signupForm.reset();
  }
  }

  userexists()
  {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.signupForm.value.email) {
          document.getElementById('check').innerHTML = 'User already exists';
          return true;
        }
        else{
        document.getElementById('check').innerHTML = '';
        return false;
          }
      }
  }

  shareEmail(email, password) {
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userPwd', password);

  }

}



