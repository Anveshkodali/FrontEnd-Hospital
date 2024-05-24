import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AvailabilityofdoctorcalenderComponent } from './availabilityofdoctorcalender/availabilityofdoctorcalender.component';
import { BookCheckUpComponent } from './book-check-up/book-check-up.component';
import { BookFollowUpComponent } from './book-follow-up/book-follow-up.component';
import { DisplayDoctorComponent } from './display-doctor/display-doctor.component';
import { AuthGuardService as AuthGuard} from './Services/AuthGaurdService.Service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientsAppointmentsComponent } from './patients-appointments/patients-appointments.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './Services/LoginGuard.Service';
const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] },
  { path: 'doctor', loadChildren: () => import('./doctosmodule/doctosmodule.module').then(m => m.DoctosmoduleModule) },
  {path:'display-doctor',component:DisplayDoctorComponent},
  {path:'patient-appointments',component:PatientsAppointmentsComponent},
  {path:'book-FollowUp',component:BookFollowUpComponent},
  {path:'book-checkup',component:BookCheckUpComponent},
  {path:'doctor-availability',component:AvailabilityofdoctorcalenderComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
