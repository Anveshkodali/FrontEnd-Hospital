import { Component, OnInit } from '@angular/core';
import { FollowUpAndCheckUpService } from '../Services/FollowUp.Service';
import { FollowUp } from '../Model/FollowUpforbooking.Model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import moment from 'moment';


@Component({
  selector: 'app-book-follow-up',
  templateUrl: './book-follow-up.component.html',
  styleUrls: ['./book-follow-up.component.css']
})
export class BookFollowUpComponent implements OnInit {
 
  followUpForm: FormGroup;
  message: string;

  constructor(private followUpService: FollowUpAndCheckUpService) { }

  ngOnInit(): void {
    this.followUpForm = new FormGroup({
      'appointmentType': new FormControl(null, Validators.required),
      'doctorName': new FormControl(null, Validators.required),
      'appointmentDate': new FormControl(null, Validators.required),
      'previousAppointmentDate': new FormControl(null, [Validators.required, this.pastDateValidator.bind(this)]),
      'appointmentStartTime': new FormControl(null, Validators.required),
      'appointmentEndTime': new FormControl(null, [Validators.required, this.timeDifferenceValidator.bind(this)]),
      'disease': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  bookFollowUp(): void {
    if (this.followUpForm.valid) {
      const followUpData: FollowUp = this.followUpForm.value;
    
      this.followUpService.bookFollowUp(followUpData).subscribe(
        res => this.message = res.message,
        err => this.message = err.error.message
      );
    }
  }

  pastDateValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value) {
      const oneMonthAgo = moment().subtract(1, 'months');
      if (moment(control.value).isBefore(oneMonthAgo)) {
        return {'dateIsTooOld': true};
      }
    }
    return null;
  }

  timeDifferenceValidator(control: FormControl): {[s: string]: boolean} {
    if (this.followUpForm) {
      const startTime = this.followUpForm.get('appointmentStartTime').value;
      const endTime = control.value;
      if (startTime && endTime) {
        const diff = moment(endTime, 'HH:mm:ss').diff(moment(startTime, 'HH:mm:ss'), 'minutes');
        if (diff !== 30) {
          return {'invalidTimeDifference': true};
        }
      }
    }
    return null;
  }
}
