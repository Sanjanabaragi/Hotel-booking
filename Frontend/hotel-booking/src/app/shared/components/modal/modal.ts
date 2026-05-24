import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent {

  @Input() title: string = '';

  @Input() isOpen: boolean = false;

  @Output() close =
    new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}