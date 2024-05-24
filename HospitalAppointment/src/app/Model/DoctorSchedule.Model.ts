import { DayOfWeek } from "./Enums.Model";

export interface DoctorScheduleDto{
    DayOfWeek:DayOfWeek,
    StartTime:string,
    EndTime:string
}