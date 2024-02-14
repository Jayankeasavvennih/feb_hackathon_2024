// download.component.ts
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  loading: boolean = false;
  partyPapersVisible: boolean = false;
  partyPaperIndexes: number[] = Array.from({ length: 20 }, (_, index) => index);

  constructor(
    private appService: AppService, 
    private toastr: ToastrService,
  ) {}

  startDownload() {
    this.loading = true;
    this.partyPapersVisible = true;
    this.appService.startDownload()
      .subscribe(
        (response: any) => {
          console.log('Download Started:', response);
          this.toastr.success('Download Started!', 'Success');
        },
        (error: any) => {
          console.error('Download Error:', error);
          this.toastr.error('Failed to start download', 'Error');
        }
      )
      // .add(() => {
      //   // Simulate a delay for demonstration purposes
      //   setTimeout(() => {
      //     this.loading = false;
      //     // this.partyPapersVisible = false; // Start party papers animation after download completion
      //   }, 5000); // Simulated delay of 2 seconds
      // });
  }

  getRandomTopValue(): string {
    return `${Math.random() * 100}vh`;
  }

  getTranslateXValue(): string {
    return `${Math.random()}`;
  }
}
