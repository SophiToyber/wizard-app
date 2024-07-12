import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardTopBarComponent } from '../wizard-top-bar/wizard-top-bar.component';
import { WizardContentComponent } from '../wizard-content/wizard-content.component';
import { WizardBottomBarComponent } from '../wizard-bottom-bar/wizard-bottom-bar.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule, WizardTopBarComponent, WizardContentComponent, WizardBottomBarComponent],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
  currentStep: number = 1;
  totalSteps: number = 5;

  moveToNextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  moveToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
