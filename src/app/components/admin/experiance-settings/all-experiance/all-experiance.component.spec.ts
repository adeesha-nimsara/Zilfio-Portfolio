import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExperianceComponent } from './all-experiance.component';

describe('AllExperianceComponent', () => {
  let component: AllExperianceComponent;
  let fixture: ComponentFixture<AllExperianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllExperianceComponent]
    });
    fixture = TestBed.createComponent(AllExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
