import { Gender } from "./Enums.Model";
import { Speciality } from "./Enums.Model";

  
  export interface DoctorDisplayDtoLogin {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    qualification: string;
    age: number;
    genderName: Gender;
    specialityname: Speciality;
    consultationFee: number;
    experience: number;
    description: string;
    imagefile: File; // This is a placeholder. In Angular, you would handle file uploads separately.
  }
  