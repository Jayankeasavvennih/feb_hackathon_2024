import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  youtubeUrl: string = '';
  loading: boolean = false;

  constructor(
    private appService: AppService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  submitForm() {
    // Simulate a delay for demonstration purposes
    this.loading = true;
    this.appService.submitUrl(this.youtubeUrl).subscribe(
      (response) => {
        this.appService.setFormSubmitted();
        // this.router.navigate(['/download']);
        this.loading = false;
        let redirect: any = "http://65.2.170.186:8000/static/" + response.video_file
        window.location.href = redirect
        localStorage.setItem("responce", JSON.stringify(response))
      },
      (error) => {
        this.loading = false;
        console.error('API Error:', error);
        this.toastr.error('Failed to start download', 'Error');
      }
    );
    // setTimeout(() => {
    //   this.loading = false;
    //   this.appService.setFormSubmitted();
    //   this.router.navigate(['/download']);
    // }, 2000); // Simulated delay of 2 seconds
  }
}
