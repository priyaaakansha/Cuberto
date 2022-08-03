import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart} from 'chart.js';
import { registerables} from 'chart.js';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { CreateuserPage } from '../createuser/createuser.page';
Chart.register(...registerables);
import { ToastController } from '@ionic/angular';
import { NotificationsPage} from '../notifications/notifications.page';
import { notifications } from '../notifications/notifications';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user=JSON.parse(sessionStorage.getItem('user'));
  counter = notifications.length;

  myRand: number;
  myRand1: number;
  myRand2: number;
  myRand3: number;

  // eslint-disable-next-line max-len
  constructor(private popover: PopoverController,public alertController: AlertController, public toastCtrl: ToastController,private modalCtrl: ModalController, public nav: NavController,) { }

  ngOnInit() {
  }
  admin()
  {
    if(this.user.email==='Admin@hsc')
    {
      return true;
    }
    return false;
  }

  ionViewDidEnter() {
    this.myRand=this.random();
    this.myRand1=this.random();
    this.myRand2=this.random();
    this.myRand3=this.random();

  }

random(): number {
  const rand = Math.floor(Math.random()*750)+1;
  return rand;
}

async openForm() {
  const modal = await this.modalCtrl.create({
    component: CreateuserPage
  });
  await modal.present();
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

async notifications() {
  const modal = await this.modalCtrl.create({
    component: NotificationsPage
  });
  await modal.present();
  this.popover.dismiss();
}

logout()
  {
    const localuser=JSON.parse(localStorage.getItem('user'));
    const sessionuser=JSON.parse(sessionStorage.getItem('user'));
    for(let i=0;i<localuser.length;i++)
    {
      if(localuser[i].email===sessionuser.email)
      {
        localuser[i]=sessionuser;
      }
    }
    localStorage.setItem('user', JSON.stringify(localuser));
    sessionStorage.clear();
  }


}


