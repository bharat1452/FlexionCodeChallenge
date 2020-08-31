import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flexion';
  showResult = false;
  studentResult;
  
  constructor(private appService: AppService) {}

  unitConversionForm = new FormGroup({
    inputValue: new FormControl('', Validators.required),
    inputUnit: new FormControl('', Validators.required),
    targetUnit: new FormControl('', Validators.required),
    studentResponse: new FormControl('', Validators.required)
  })

  // calls service method to post data enetered in the form
  onSubmit() {
    console.log(this.unitConversionForm.value);
    this.appService.getStudentResult(this.unitConversionForm.value).subscribe(data => {
      this.studentResult = data;
    })
    this.showResult = true;
  }

  // get form Controls for UnitConversion Form
  get unitConversionFormControl() {
    return this.unitConversionForm.controls;
  }

  // resets the form values
  onReset() {
    this.unitConversionForm.reset();
    this.showResult = false;
  }
}
