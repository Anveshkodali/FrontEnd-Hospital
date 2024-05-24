import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FollowUpAndCheckUpService } from '../Services/FollowUp.Service';
import { CheckUp } from '../Model/CheckUp.Model';
@Component({
  selector: 'app-book-check-up',
  templateUrl: './book-check-up.component.html',
  styleUrl: './book-check-up.component.css'
})
export class BookCheckUpComponent {
  checkUpForm: FormGroup;
  message: string;
  
today = new Date().toISOString().split('T')[0];
  constructor(private followUpService: FollowUpAndCheckUpService) { }

  ngOnInit(): void {
    this.checkUpForm = new FormGroup({
      'checkUpName': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'checkUpDate': new FormControl(null, Validators.required)
    });
  }

  bookCheckUp(): void {
    if (this.checkUpForm.valid) {
      const checkUpData: CheckUp = this.checkUpForm.value;

      this.followUpService.bookCheckUp(checkUpData).subscribe(
        res => this.message = res.message,
        err => this.message = err.error.message
      );
    }
  }
}
