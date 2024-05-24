
import { Gender } from "./Enums.Model";
import { Speciality } from "./Enums.Model";
import { DayOfWeek } from "./Enums.Model";
  export interface DoctorDetailsDisplayDto {
    firstName: string;
    lastName: string;
    qualification: string;
    age: number;
    genderName: Gender;
    specialityname: Speciality;
    availableDays: DayOfWeek;
    experience: number;
    description: string;
    imagepath: string;
  }
  