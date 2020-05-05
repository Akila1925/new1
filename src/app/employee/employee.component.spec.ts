import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports: [
        BrowserModule,
       FormsModule,
      ReactiveFormsModule
      ]
    })
    .compileComponents().then(() =>{
      fixture = TestBed.createComponent(EmployeeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;


    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should set submitted to true`,async(()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
   }));
   it(`form should be invalid`,async(()=>{
    component.employeeForm.controls['firstname'].setValue('');
    component.employeeForm.controls['lastname'].setValue('');
    component.employeeForm.controls['salary'].setValue('');
    component.employeeForm.controls['street1'].setValue('');
    component.employeeForm.controls['street2'].setValue('');
    component.employeeForm.controls['location'].setValue('');
    expect(component.employeeForm.valid).toBeFalsy();
  }));
  it(`form should be valid`,async(()=>{
    component.employeeForm.controls['firstname'].setValue('akila');
    component.employeeForm.controls['lastname'].setValue('vasan');
    component.employeeForm.controls['salary'].setValue('10000');
    component.employeeForm.controls['street1'].setValue('252');
    component.employeeForm.controls['street2'].setValue('bjnd');
    component.employeeForm.controls['location'].setValue('chennai');
    expect(component.employeeForm.valid).toBeTruthy();
  })); 
 

});