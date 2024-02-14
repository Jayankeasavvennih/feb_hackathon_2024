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

  constructor(
    private appService: AppService, 
    private toastr: ToastrService,
    ) {}

  startDownload() {
    this.loading = true;
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
      .add(() => {
        // Simulate a delay for demonstration purposes
        setTimeout(() => {
          this.loading = false;
        }, 2000); // Simulated delay of 2 seconds
      });
  }

}
