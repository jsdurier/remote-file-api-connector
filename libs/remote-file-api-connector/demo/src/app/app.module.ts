import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RemoteFileApiConnectorModule } from 'remote-file-api-connector';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RemoteFileApiConnectorModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
