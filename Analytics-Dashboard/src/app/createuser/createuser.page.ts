import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage implements OnInit {

  updateprofileForm: FormGroup;
  users = [];
  userEmail: string;
  userPwd: string;
  currentUser= JSON.parse(sessionStorage.getItem('user'));


  constructor() {
  }
  ngOnInit() {
    this.updateprofileForm = new FormGroup({
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
    onSubmit(){
      console.log(this.currentUser);
      sessionStorage.setItem('user', JSON.stringify(this.currentUser));
      location.reload();
  }

  edit1()
  {
    document.getElementById('fName').setAttribute('readonly','false');
    document.getElementById('fName').setAttribute('value','');
  }
  edit2()
  {
    document.getElementById('lName').setAttribute('readonly','false');
    document.getElementById('lName').setAttribute('value','');
  }


}
