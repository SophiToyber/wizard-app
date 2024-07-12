import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-top-bar.component.html',
  styleUrls: ['./wizard-top-bar.component.css']
})
export class WizardTopBarComponent {
  @Input() currentStep!: number;
  @Input() totalSteps!: number;
}
