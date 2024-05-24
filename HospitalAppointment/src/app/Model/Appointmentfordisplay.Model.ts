import { AppointmentType } from "./Enums.Model";
import { Speciality } from "./Enums.Model";
import { AppointmentStatus } from "./Enums.Model";
  export interface AppointmentDto {
    appointmentId: number;
    appointmentType: AppointmentType;
    patientId: number;
    doctorId: number;
    disease: string;
    description: string;
    selectDepartment: Speciality;
    doctorName: string;
    appointmentDate: Date;
    appointmentStartTime: string;
    appointmentEndTime: string;
    totalBill: number;
    appointmentStatus: AppointmentStatus;
  }
  