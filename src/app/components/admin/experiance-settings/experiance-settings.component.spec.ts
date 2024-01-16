import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianceSettingsComponent } from './experiance-settings.component';

describe('ExperianceSettingsComponent', () => {
  let component: ExperianceSettingsComponent;
  let fixture: ComponentFixture<ExperianceSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperianceSettingsComponent]
    });
    fixture = TestBed.createComponent(ExperianceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
