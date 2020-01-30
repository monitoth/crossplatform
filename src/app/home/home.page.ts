import { Component, OnInit  } from '@angular/core';
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

  ngOnInit(): void {
    // Call electron updater
    desktopUpdater();
  }

  closeNotificationBox() {
    closeNotification();
  }

  restartDesktopApp() {
    restartApp();
  }
}
