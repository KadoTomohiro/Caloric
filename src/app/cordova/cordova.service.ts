import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

declare var device: any;

@Injectable()
export class CordovaService {

  onDeviceReady: Observable<any>;
  device: any;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.onDeviceReady = Observable.fromEvent(this.document, 'deviceready');
  }

  getDevice(): any {
      return device;
  }


}
