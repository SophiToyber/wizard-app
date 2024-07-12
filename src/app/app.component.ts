import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WizardComponent } from './wizard/wizard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wizard-app';
}
