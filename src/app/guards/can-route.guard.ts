// can-activate.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.appService.isFormSubmitted()) {
      return true;
    } else {
      // Redirect to the welcome page if the form is not submitted
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}
