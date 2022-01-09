import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RemoteFileApiConnectorService } from './remote-file-api-connector.service';

@NgModule({
	declarations: [
	],
	exports: [
	],
	imports: [
		HttpClientModule
	],
	providers: [
		RemoteFileApiConnectorService
	]
})
export class RemoteFileApiConnectorModule { }
