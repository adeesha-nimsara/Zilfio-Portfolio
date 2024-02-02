import { Component } from '@angular/core';
import { Modal, ModalInterface, ModalOptions } from 'flowbite';

@Component({
  selector: 'app-landing-settings',
  templateUrl: './landing-settings.component.html',
  styleUrls: ['./landing-settings.component.sass']
})
export class LandingSettingsComponent {

  modalElement: HTMLElement | null | undefined
  visibleOptions: ModalOptions = {
    backdrop: 'static',
    backdropClasses:
      'hidden',
  }

  ngAfterViewInit() {
    this.modalElement = document.getElementById('crud-modal');
    console.log(this.modalElement)
  }

  toggleModal() {
    if (this.modalElement) {
      const modal: ModalInterface = new Modal(this.modalElement, this.visibleOptions);
      modal.show();
      // console.log('modal toggle');
    }
  }
}
