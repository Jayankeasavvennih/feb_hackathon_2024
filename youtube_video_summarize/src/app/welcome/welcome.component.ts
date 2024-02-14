import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

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
    ) { }

  submitForm() {
    // Simulate a delay for demonstration purposes
    this.loading = true;
    this.appService.submitUrl(this.youtubeUrl).subscribe(
      (response) => {
        this.appService.setFormSubmitted();
        this.router.navigate(['/download']);
        this.loading = false;
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
    setTimeout(() => {
      this.loading = false;
      this.appService.setFormSubmitted();
      this.router.navigate(['/download']);
    }, 2000); // Simulated delay of 2 seconds
  }
}
