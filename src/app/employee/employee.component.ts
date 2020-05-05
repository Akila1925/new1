import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  text='contact page';
  employeeForm:FormGroup;
  employee={
    firstname:'',
    lastname:'',
    salary:'',
    street1:'',
    street2:'',
    location:''
  };
  submitted=false;
  constructor() {
    this.createForm();
   }
   createForm():void{
    this.employeeForm=new FormGroup({
      'firstname':new FormControl(this.employee.firstname,[
        Validators.required,
        Validators.minLength(4)
      ]),
      'lastname':new FormControl(this.employee.lastname,[
        Validators.required,
        Validators.minLength(4)
      ]),
      'salary':new FormControl(this.employee.salary,
        Validators.required),
        'street1':new FormControl(this.employee.street1,
          Validators.required),
          'street2':new FormControl(this.employee.street2,
            Validators.required),
            'location':new FormControl(this.employee.location,
              Validators.required)
            });

     

   }
   onSubmit():void{
     this.submitted=true;
   }

  ngOnInit(): void {
  }

}
