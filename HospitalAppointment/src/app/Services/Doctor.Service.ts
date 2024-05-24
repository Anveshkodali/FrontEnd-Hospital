import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Speciality } from '../Model/Enums.Model';
import { DoctorDisplayDtoLogin } from '../Model/DoctorDisplayForLogin.Model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:5223'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(doctor: DoctorDisplayDtoLogin): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, doctor);
  }

  approveAppointment(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/approveAppointment/`+`?id=${id}`, {});
  }

  disapproveAppointment(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/disapproveAppointment/`+`?id=${id}`, {});
  }

  
  getDoctorsBasedOnCategory(department: Speciality): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/controller/GetDoctorslist?department=${department}`);
  }
   getDoctorsBasedOnCategorynames(department:string):Observable<any>{
      return this.http.get(`http://localhost:5223/getDoctorsByDepartmentnames`+`?department=${department}
      `,{}
      );
  }
  

}
