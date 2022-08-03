/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PopoverController, ToastController } from '@ionic/angular';
import { ModalController, NavController } from '@ionic/angular';
import { AdduserPage } from '../../app/adduser/adduser.page';
import { UpdateuserPage } from '../updateuser/updateuser.page';
import { AlertController } from '@ionic/angular';
import { NotificationsPage} from '../notifications/notifications.page';
import { notifications } from '../notifications/notifications';

const USER_SCHEMA = {
  fName: 'string',
  lName: 'string',
  email: 'string',
  role: 'string',
  phone: 'string',
  delete: 'string'
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, AfterViewInit  {
  // @ViewChild(MatPaginatorModule,{static: true}) paginator: MatPaginatorModule;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  user=JSON.parse(sessionStorage.getItem('user'));
  displayedColumns: string[] = ['fName', 'lName', 'email', 'phone','role','delete', 'update'];
  users = JSON.parse(localStorage.getItem('user')) || [];
  notadmin=[];
  dataSchema = USER_SCHEMA;
  dataSource: any;
  counter = notifications.length;


  // eslint-disable-next-line max-len
  constructor(private popover: PopoverController,private modalCtrl: ModalController,public alertController: AlertController, public nav: NavController, public toastCtrl: ToastController) {

  }
  ngOnInit() {

    let j=0;
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i].email!=='Admin@hsc')
      {
        this.notadmin[j]=this.users[i];
        j++;
      }
    }
    this.dataSource = new MatTableDataSource(this.notadmin);
    this.dataSource.sort = this.sort;

    //  this.dataSource.paginator = this.paginator;

    // document.getElementById('check').innerHTML = '';
  }

  ngAfterViewInit(){

    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  doFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  async notifications() {
    const modal = await this.modalCtrl.create({
      component: NotificationsPage
    });
    await modal.present();
    this.popover.dismiss();
  }

  delete(currentUser)
  {
    this.users = JSON.parse(localStorage.getItem('user'));
    const arr=this.users;
    for(let i=0;i<arr.length;i++)
    {
      if(JSON.stringify(this.users[i])===JSON.stringify(currentUser))
      {
        this.users.splice(i,1);
        break;
      }
    }
    localStorage.setItem('user',JSON.stringify(this.users));
    location.reload();
  }

  admin()
  {
    if(this.user.email==='Admin@hsc')
    {
      return true;
    }
    return false;
  }


  async presentAlertMultipleButtons(user) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Do you confirm to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
        },
        {
          text: 'Ok',
          role:'Ok',
          cssClass:'icon-color',
            handler: () =>{
               this.delete(user);
            }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Data Refresh',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '5 Mins',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '10 mins',
          value: 'value2',
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Half an hour',
          value: 'value3',
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Hourly',
          value: 'value4',
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'A day',
          value: 'value5',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  async openForm() {
    const modal = await this.modalCtrl.create({
      component: AdduserPage
    });
    await modal.present();
  }

  async updateForm(user) {
    const modal = await this.modalCtrl.create({
      component: UpdateuserPage
    });
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    await modal.present();
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
