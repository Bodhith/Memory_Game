import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, ValidatorFn } from '@angular/forms';

const minimumSalaryValidation: ValidatorFn = (basicDetailsForm: FormGroup) => {
  let salary =basicDetailsForm.get('minimumSalary').value;
  let maxSalary = basicDetailsForm.get('maximumSalary').value;
  console.log("AS");
  if (salary != null && salary < 0 && true) {//   when minimum salary is set to less than 0
      return {
          negativeSalary: {
              salary: salary
          }
      }
  }
  else if (maxSalary != null && salary == null && true) {//   when minimum salary is not set
      return {
          minimumSalaryNotSet: {
              salary: salary
          }
      }
  }
  return null;
}

const maximumSalaryValidation: ValidatorFn = (basicDetailsForm: FormGroup) => {
  let salary = basicDetailsForm.get('maximumSalary').value;
  let minSalary = basicDetailsForm.get('minimumSalary').value;
  if (minSalary != null && salary != null && salary < minSalary && true) {//   when maximum salary is set to less than minimum salary
      return {
          salaryLessThanMinimum: {
              salary: salary
          }
      }
  }
  else if (minSalary != null && salary == null && true) {//   when maximum salary is not set
      return {
          maximumSalaryNotSet: {
              salary: salary
          }
      }
  }
  return null;
}

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  basicDetailsForm = this.formBuilder.group({
    "minimumSalary": [''],
    "maximumSalary": ['']
  },  { validator: [maximumSalaryValidation, minimumSalaryValidation] });

  validationMessages = {
    'jobTitle': [
        { type: 'required', message: 'Please enter the title' },
        { type: 'maxLength', message: 'Title must be < 200 characters' },
        { type: 'pattern', message: 'Please check the title' }
    ],
    'noOfOpenings': [
        { type: 'required', message: 'Please enter number of openings' },
        { type: 'min', message: 'Number of openings must be > 0' },
    ],
    'minimumSalary': [
        { type: 'negativeSalary', message: 'From must be positive' },
        { type: 'minimumSalaryNotSet', message: 'Please enter From value'}
    ],
    'maximumSalary': [
        { type: 'salaryLessThanMinimum', message: 'To value must be > From' },
        { type: 'maximumSalaryNotSet', message: 'Please enter To value'}
    ]
  };

  constructor(private router: Router, private formBuilder: FormBuilder)
  {
  }

  ngOnInit()
  {

  }

  redirectTo()
  {
    this.router.navigateByUrl("/game");
  }

  onSubmit()
  {
    console.log(this.basicDetailsForm);
  }
}