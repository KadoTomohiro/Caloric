import { Component } from '@angular/core';
import { CordovaService } from './cordova/cordova.service';
import { CameraService } from './cordova/camera.service';

@Component({
  selector: 'cal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  device: any;
  uri: string;

  constructor(private cordova: CordovaService, private camera: CameraService) {
    this.cordova.onDeviceReady.subscribe(() => {
      console.log('device is leady');
    });
    this.device = this.cordova.getDevice();
  }

  takePicture(): void {
    this.camera.getPicture().then(uri => {
      this.uri = uri;
    });
  }
}
