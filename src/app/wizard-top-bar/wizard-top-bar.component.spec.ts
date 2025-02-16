import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTopBarComponent } from './wizard-top-bar.component';

describe('WizardTopBarComponent', () => {
  let component: WizardTopBarComponent;
  let fixture: ComponentFixture<WizardTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
