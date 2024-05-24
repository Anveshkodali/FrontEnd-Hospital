import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrl: './update-schedule.component.css'
})
export class UpdateScheduleComponent {
  scheduleForm = this.fb.group({
    dayOfWeek: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required]
  });

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
    
      this.http.put('http://localhost:5223/update-schedule', this.scheduleForm.value)
        .subscribe(response => {
          alert(response);
          // Display the response message to the user
        });
    }
  }
}
