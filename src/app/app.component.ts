import { Component } from '@angular/core';
import { CordovaService } from './cordova.service';

@Component({
  selector: 'cal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  device: any;
  constructor(private cordova: CordovaService) {
    this.cordova.device.getDevice()
      .then(device => {
        this.device = device;
      });
  }
}
