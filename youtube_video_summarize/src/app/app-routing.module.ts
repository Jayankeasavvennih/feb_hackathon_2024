import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DownloadComponent } from './download/download.component';
import { CanActivateGuard } from './guards/can-route.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'download', component: DownloadComponent, canActivate: [CanActivateGuard] } ,
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
