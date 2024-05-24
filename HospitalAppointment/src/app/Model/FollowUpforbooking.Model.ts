import { AppointmentType } from "./Enums.Model";
import { Speciality } from "./Enums.Model";
  export interface FollowUp {
    appointmentType: string;
    doctorName: string;
    selectDepartment: string;
    appointmentDate: Date;
    previousAppointmentDate: Date;
    appointmentStartTime: string;
    appointmentEndTime: string;
    disease: string;
    description: string;
  }
  
  