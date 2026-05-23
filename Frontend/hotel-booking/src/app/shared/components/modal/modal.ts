import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent {

  // Modal title
  @Input() title: string = '';

  // Open/Close state
  @Input() isOpen: boolean = false;

  // Close event
  @Output() close =
    new EventEmitter<void>();


  // Close modal method
  closeModal(): void {

    this.close.emit();

  }

}