import { Component, OnInit } from '@angular/core';
import { EmpService}  from '../emp.service';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  empy;
  title = 'employee';
    constructor(private service:EmpService) {
      this.empy=this.service.getEmployee();
  
     }
  
    ngOnInit(): void {
    }
  
  }