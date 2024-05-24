import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchedulesofDoctorComponent } from './add-schedulesof-doctor/add-schedulesof-doctor.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { DoctorhomepostloginComponent } from './doctorhomepostlogin/doctorhomepostlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { DoctorAuthGuardService as DoctorAuthGuard} from '../Services/DoctorAuthGuard.Service';
import { DoctorlogoutComponent } from '../doctors/doctorlogout/doctorlogout.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { PastappointmentsofdoctorComponent } from './pastappointmentsofdoctor/pastappointmentsofdoctor.component';


const doctorroutes: Routes = [
    { path: 'doctor-login', component: DoctorloginComponent },
    { path: 'doctorhome', component: DoctorhomeComponent },
    { path: 'doctorhome/doctorregister', component: DoctorregisterComponent },
    { path: 'doctoraddschedule', component: AddSchedulesofDoctorComponent, canActivate: [DoctorAuthGuard] },
    { path: 'doctor-appointments', component: DoctorAppointmentsComponent, canActivate: [DoctorAuthGuard] },
    { path: 'doctor-postlogin', component: DoctorhomepostloginComponent, canActivate: [DoctorAuthGuard] },
    { path: 'update-schedule', component: UpdateScheduleComponent, canActivate: [DoctorAuthGuard] },
    { path: 'pastappointments', component: PastappointmentsofdoctorComponent, canActivate: [DoctorAuthGuard] },
    { path: 'doctor-logout', component: DoctorlogoutComponent }
];


@NgModule({
    imports: [RouterModule.forChild(doctorroutes)], // Use forChild() since this is a feature module
    exports: [RouterModule]
})
export class DoctorRoutingModule { }
