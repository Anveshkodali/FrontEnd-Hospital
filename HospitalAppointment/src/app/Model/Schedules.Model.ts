import { DayOfWeek } from "./Enums.Model";

export interface DoctorSchedules {
    scheduleId: number; 
    doctorId: number; 
    dayOfWeek: DayOfWeek; 
    startTime: string; 
    endTime: string; 
  }
