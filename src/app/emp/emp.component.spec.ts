import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpComponent } from './emp.component';
import { EmpService} from '../emp.service';
import { Mock } from 'protractor/built/driverProviders';
import { MockService} from '../mock/mock.service';
describe('EmpComponent', () => {
  let component: EmpComponent;
  let fixture: ComponentFixture<EmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpComponent ],
      providers:[
        {
          provide:EmpService,
          useClass:MockService}
        ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(EmpComponent);
      component=fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have one user',async(()=>{
    expect(component.empy.length).toEqual(1);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AssessmentApril'`, () => {
    const fixture = TestBed.createComponent(EmpComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('employee');
  });
});