import { Component } from '@angular/core';
import { RemoteFileApiConnectorService } from '@jsdurier/remote-file-api-connector';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private readonly _remoteFileApiConnectorService: RemoteFileApiConnectorService) {
	}

	writeFile(): void {
		const filePath = ''; // Path of the file to define
		const content = 'hello world';
		this._remoteFileApiConnectorService.writeFile(
			filePath,
			content
		);
	}
}
