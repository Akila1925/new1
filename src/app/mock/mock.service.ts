import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  getEmployee():Array<{}>{
    return [
      {
        name1:'akila',
        name2:'vasan',
        phone:'1263',
        location:'chennai'
      }
     
  ];
}
}