import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import * as Raven from 'raven-js';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CordovaService } from './cordova/cordova.service';
import { CameraService } from './cordova/camera.service';

Raven
  .config('http://8a995f1f408b4cd99cd9162d83d47ed3@sentry.sidev.ssg.fujitsu.com/51')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CordovaService,
    CameraService,
    {provide: ErrorHandler, useClass: RavenErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
