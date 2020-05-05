import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  getEmployee():Array<{}>{
    return[
      {
        
          name1:'swetha',
          name2:'samysubbiah',
          phone:'1234',
          location:'chennai'
        },
        {
          name1:'priya',
          name2:'mohan',
          phone:'1234',
          location:'chennai'
        }
      ];
    }
  }



