import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
export class CameraService {

  camera: any;
  private readonly defaultOption: CameraOptions =  {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI, // FILE_URI
    cameraDirection: Camera.Direction.FRONT, // front camera
  };

  constructor(@Inject(DOCUMENT) private document: any) {
    this.camera = this.document.navigator.camera;
  }

  getPicture(option: CameraOptions = this.defaultOption): Promise<string> {
    return new Promise((resolve: (data: string) => void, reject: (message: string) => void) => {
      this.camera.getPicture(resolve, reject, option);
    });
  }
}
