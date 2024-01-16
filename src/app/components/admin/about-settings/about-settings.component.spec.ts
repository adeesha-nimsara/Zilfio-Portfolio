import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettingsComponent } from './about-settings.component';

describe('AboutSettingsComponent', () => {
  let component: AboutSettingsComponent;
  let fixture: ComponentFixture<AboutSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSettingsComponent]
    });
    fixture = TestBed.createComponent(AboutSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
