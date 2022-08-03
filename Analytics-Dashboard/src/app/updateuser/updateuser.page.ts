/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
const USER_SCHEMA = {
  fName: 'string',
  lName: 'string',
  email: 'string',
  phone: 'string',
  delete: 'string'
};
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.page.html',
  styleUrls: ['./updateuser.page.scss'],
})

export class UpdateuserPage implements OnInit {
  users = JSON.parse(localStorage.getItem('user')) || [];
  currentUser: any;
  constructor() {
    this.currentUser= JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

  onSubmit(){

    sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i].email===this.currentUser.email)
      {
        this.users[i]=this.currentUser;
      }
    }
    localStorage.setItem('user', JSON.stringify(this.users));
    location.reload();
}

  edit1()
  {
    document.getElementById('fName').setAttribute('readonly','false');
    document.getElementById('fName').setAttribute('value','');
  };
  edit2()
  {
    document.getElementById('lName').setAttribute('readonly','false');
    document.getElementById('lName').setAttribute('value','');
  }
}
