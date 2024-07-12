import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-content.component.html',
  styleUrls: ['./wizard-content.component.css']
})
export class WizardContentComponent {
  @Input() currentStep!: number;
  @Input() totalSteps!: number;
}
