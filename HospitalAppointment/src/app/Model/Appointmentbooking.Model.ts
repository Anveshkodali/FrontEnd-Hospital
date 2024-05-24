import { AppointmentType } from "./Enums.Model";
import { Speciality } from "./Enums.Model";
  export interface AppointmentDtoforbooking {
    appointmentType: string;
    selectDepartment: string;
    doctorName: string;
    appointmentDate: Date;
    appointmentStartTime: string;
    appointmentEndTime: string;
    disease: string;
    description: string;
  
  }
  