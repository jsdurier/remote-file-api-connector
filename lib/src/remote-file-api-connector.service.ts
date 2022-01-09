import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpErrorResponse
} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { CONFIG } from './config';

const ROUTE = 'write-file';
const SERVER_NAME = 'remoteFileApi';
const SERVER_NOT_RUNNING_ERROR = `Server ${SERVER_NAME} not running on port ${CONFIG.port}`;
const LOCALHOST = 'localhost';
const HTTP = 'http';
const URL = `${HTTP}://${LOCALHOST}:${CONFIG.port}/${ROUTE}`;

@Injectable()
export class RemoteFileApiConnectorService {

	constructor(private readonly _http: HttpClient) { }

	async writeFile(
		filePath: string,
		content: string
	): Promise<void> {
		const body = {
			filePath,
			content
		};
		try {
			await firstValueFrom(this._http.post(
				URL,
				body
			));
		} catch (err) {
			handleError(err as HttpErrorResponse);
		}
	}
}

function handleError(error: HttpErrorResponse): void {
	if (error.status === 0) {
		console.error(SERVER_NOT_RUNNING_ERROR);
		return;
	}
	console.error(error.error);
}
