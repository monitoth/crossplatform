import { Component, OnInit  } from '@angular/core';
declare var desktopUpdater: any;
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
}
