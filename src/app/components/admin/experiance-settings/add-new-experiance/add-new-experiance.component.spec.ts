import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExperianceComponent } from './add-new-experiance.component';

describe('AddNewExperianceComponent', () => {
  let component: AddNewExperianceComponent;
  let fixture: ComponentFixture<AddNewExperianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewExperianceComponent]
    });
    fixture = TestBed.createComponent(AddNewExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
