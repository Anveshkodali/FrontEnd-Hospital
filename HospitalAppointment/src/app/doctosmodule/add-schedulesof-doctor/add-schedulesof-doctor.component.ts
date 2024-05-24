import { Component, OnInit } from '@angular/core';
import { DoctorScheduleDto } from '../../Model/DoctorSchedule.Model';
import { DayOfWeek } from '../../Model/Enums.Model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-schedulesof-doctor',
  templateUrl: './add-schedulesof-doctor.component.html',
  styleUrls: ['./add-schedulesof-doctor.component.css']
})
export class AddSchedulesofDoctorComponent implements OnInit {
 
  public schedules = Object.values(DayOfWeek);
  form: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      DayOfWeek: new FormControl(DayOfWeek.Monday, Validators.required), // default value
      StartTime: new FormControl('', Validators.required),
      EndTime: new FormControl('', Validators.required),
    });
  }
  
  addSchedule() { 
    if (this.form.valid) {
      const url = `http://localhost:5223/AddSchedules`;
      this.http.post(url, this.form.value).subscribe(response => {
        window.alert('Schedule added successfully');
      })
    } else {
      console.log('Form is not valid');
    }
  }
}
