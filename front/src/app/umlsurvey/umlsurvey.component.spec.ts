import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlsurveyComponent } from './umlsurvey.component';

describe('UmlsurveyComponent', () => {
  let component: UmlsurveyComponent;
  let fixture: ComponentFixture<UmlsurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlsurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
