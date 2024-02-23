import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private formSubmitted = false;
  // private baseUrl = window.location.href.split('/').slice(0, 3).join('/');
  private devApiUrl = "https://video-summarizer-backend-1.onrender.com/process_video";
  private mainApiUrl = "https://video-summarizer-backend.onrender.com/process_video";
  private downloadUrl = 'YOUR_DOWNLOAD_API_ENDPOINT';

  submitUrl(url: string): Observable<any> {
    const params = new HttpParams().set('video_url', url).append('num_frames', '5');
    return this.http.get<any>(this.devApiUrl, { params });
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
