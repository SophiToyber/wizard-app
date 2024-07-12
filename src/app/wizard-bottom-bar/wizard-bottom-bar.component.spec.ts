import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardBottomBarComponent } from './wizard-bottom-bar.component';

describe('WizardBottomBarComponent', () => {
  let component: WizardBottomBarComponent;
  let fixture: ComponentFixture<WizardBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardBottomBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
