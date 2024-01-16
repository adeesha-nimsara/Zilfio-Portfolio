import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSettingsComponent } from './landing-settings.component';

describe('LandingSettingsComponent', () => {
  let component: LandingSettingsComponent;
  let fixture: ComponentFixture<LandingSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSettingsComponent]
    });
    fixture = TestBed.createComponent(LandingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
