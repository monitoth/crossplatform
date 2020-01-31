import { Component, OnInit  } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;
declare var desktopUpdater: any;
declare var closeNotification: any;
declare var restartApp: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  async ngOnInit() {
    const info = await Device.getInfo();
    if (info && info.platform == 'electron') {
      // Call electron updater
      desktopUpdater();
    }
  }

  closeNotificationBox() {
    closeNotification();
  }

  restartDesktopApp() {
    restartApp();
  }
}
