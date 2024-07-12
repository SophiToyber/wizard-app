import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard-bottom-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-bottom-bar.component.html',
  styleUrls: ['./wizard-bottom-bar.component.css']
})
export class WizardBottomBarComponent {
  @Input() isFirstStep!: boolean;
  @Input() isLastStep!: boolean;
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onPrevious() {
    this.previous.emit();
  }

  onNext() {
    this.next.emit();
  }
}
