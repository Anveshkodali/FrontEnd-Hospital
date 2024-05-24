import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ Router, RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {authInterceptor} from './authInterceptor.interceptor';
import { DisplayDoctorComponent } from './display-doctor/display-doctor.component';
import { BookFollowUpComponent } from './book-follow-up/book-follow-up.component';
import { BookCheckUpComponent } from './book-check-up/book-check-up.component';
import { PatientsAppointmentsComponent } from './patients-appointments/patients-appointments.component';
import { AvailabilityofdoctorcalenderComponent } from './availabilityofdoctorcalender/availabilityofdoctorcalender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LogoutComponent } from './logout/logout.component';
import { DoctorlogoutComponent } from './doctors/doctorlogout/doctorlogout.component';
import { HeaderpostloginComponent } from './headerpostlogin/headerpostlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AppointmentComponent,
    HeaderComponent,
    FooterComponent,
    DoctorsComponent,
    DisplayDoctorComponent,
    BookFollowUpComponent,
    BookCheckUpComponent,
    PatientsAppointmentsComponent,
    AvailabilityofdoctorcalenderComponent,
    LogoutComponent,
    DoctorlogoutComponent,
    HeaderpostloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
