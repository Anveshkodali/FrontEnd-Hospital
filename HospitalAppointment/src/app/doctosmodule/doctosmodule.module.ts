import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AddSchedulesofDoctorComponent } from './add-schedulesof-doctor/add-schedulesof-doctor.component';
import { authInterceptor } from '../authInterceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { ApproveorRejectAppointmentsComponent } from './approveor-reject-appointments/approveor-reject-appointments.component';
import { DoctorhomepostloginComponent } from './doctorhomepostlogin/doctorhomepostlogin.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PastappointmentsofdoctorComponent } from './pastappointmentsofdoctor/pastappointmentsofdoctor.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorhomeheaderComponent } from './doctorhomeheader/doctorhomeheader.component';
@NgModule({
  declarations: [
    DoctorloginComponent,
    DoctorregisterComponent,
    DoctorhomeComponent,
    AddSchedulesofDoctorComponent,
    DoctorAppointmentsComponent,
    ApproveorRejectAppointmentsComponent,
    DoctorhomepostloginComponent,
    UpdateScheduleComponent,
    PastappointmentsofdoctorComponent,
    FooterComponent,
    DoctorhomeheaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    DoctorRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true}
  ]
})
export class DoctosmoduleModule { }
