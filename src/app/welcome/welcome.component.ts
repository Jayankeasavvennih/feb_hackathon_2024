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
  redirect: string = "";

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
        let redirect: any;
        response.video_file ? this.redirect = "https://video-summarizer-backend-1.onrender.com/static/" + response.video_file : '';
        // this.redirect ? window.location.href = this.redirect : this.toastr.error('Failed to sumarrize', 'Error');
        // localStorage.setItem("responce", JSON.stringify(response))
      },
      (error) => {
        this.loading = false;
        console.error('API Error:', error.detail);
        this.toastr.error(error.detail, 'Error');
      }
    );
    // setTimeout(() => {
    //   this.loading = false;
    //   this.appService.setFormSubmitted();
    //   this.router.navigate(['/download']);
    // }, 2000); // Simulated delay of 2 seconds
  }
}
