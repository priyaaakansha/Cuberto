import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {
  profileForm: FormGroup;
  users = [];
  userEmail: string;
  userPwd: string;


  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8), Validators.maxLength(12),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
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
      this.users = JSON.parse(localStorage.getItem('user')) || [];
      this.users.push(this.profileForm.value);
      console.log(this.profileForm.value);
      console.log(this.users);
      localStorage.setItem('user', JSON.stringify(this.users));
      location.reload();
  }

}
