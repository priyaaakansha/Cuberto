/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from './createprofile.model';
import { UserService } from './createprofile.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.page.html',
  styleUrls: ['./createprofile.page.scss'],
})
export class CreateprofilePage implements OnInit {
  profileForm: FormGroup;
  userEmail: string;
  userPwd: string;

  users = [];

  constructor(private http: HttpClient, private userService: UserService) {
          this.userEmail = sessionStorage.getItem('userEmail');
          this.userPwd = sessionStorage.getItem('userPwd');
  }
ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8), Validators.maxLength(12),
        Validators.required,

      ])),

      fName: new FormControl(''),
      lName: new FormControl(''),
      phone: new FormControl('', Validators.compose([
    Validators.minLength(10),Validators.maxLength(10),
    Validators.required, Validators.pattern('^[0-9]+$')
  ])),
    });


  }

  onSubmit() {
    this.users = JSON.parse(localStorage.getItem('user')) || [];
      if (!this.userexists()) {
      this.users.splice(this.users.length-1,1);
      this.profileForm.value.email = this.userEmail;
      this.profileForm.value.password = this.userPwd;
      this.users.push(this.profileForm.value);
      localStorage.setItem('user', JSON.stringify(this.users));
      console.log(this.users);
      this.profileForm.reset();
    }
    else
    {
      document.getElementById('check').innerHTML = 'Mobile Number already in use.';
    }
  }
  userexists()
  {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].phone === this.profileForm.value.phone) {
        return true;
      }
    }
    document.getElementById('check').innerHTML = '';
    return false;
    }
}
