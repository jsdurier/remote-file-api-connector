import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RemoteFileApiConnectorModule } from '@jsdurier/remote-file-api-connector';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		RemoteFileApiConnectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
