import { Component } from '@angular/core';
import { RemoteFileApiConnectorService } from 'remote-file-api-connector';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private readonly _remoteFileApiConnectorService: RemoteFileApiConnectorService) {
	}

	writeFile(): void {
		const filePath = '/Users/j-sdurier/Documents/development/jsdurier/remote-file-api/toto2.txt';
		const content = 'hello world';
		this._remoteFileApiConnectorService.writeFile(
			filePath,
			content
		);
	}
}
