import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private formSubmitted = false;
  private youtubeLinkUrl = 'YOUR_API_ENDPOINT';
  private downloadUrl = 'YOUR_DOWNLOAD_API_ENDPOINT';

  submitUrl(url: string): Observable<any> {
    const requestBody = { youtubeUrl: url };
    return this.http.post<any>(this.youtubeLinkUrl, requestBody);
  }

  startDownload(): Observable<any> {
    return this.http.get<any>(this.downloadUrl);
  }

  setFormSubmitted() {
    this.formSubmitted = true;
  }

  isFormSubmitted() {
    return this.formSubmitted;
  }
}
