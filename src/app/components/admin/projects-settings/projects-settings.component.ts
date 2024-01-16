import { Component } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-settings',
  templateUrl: './projects-settings.component.html',
  styleUrls: ['./projects-settings.component.sass']
})
export class ProjectsSettingsComponent {

  projectData!: Observable<any>

  constructor(
    private sanitizer: DomSanitizer,
    private firestore: Firestore,) {
    this.getData();
  }

  modalElement: HTMLElement | null | undefined;
  visibleOptions: ModalOptions = {
    backdrop: 'static',
    backdropClasses:
      'hidden',
  };

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
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

  hideModal() {
    if (this.modalElement) {
      const modal: ModalInterface = new Modal(this.modalElement, this.visibleOptions);
      modal.hide()
    }
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'projects');
    this.projectData = collectionData(collectionInstance, { idField: 'id' });
  }

  deleteData(id: string){
    const docInstantce = doc(this.firestore, 'projects', id);
    deleteDoc(docInstantce).then(() => {
      console.log('Data Deleted');
    })
  }
}
