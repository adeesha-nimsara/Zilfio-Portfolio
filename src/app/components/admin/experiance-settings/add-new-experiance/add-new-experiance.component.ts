import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Firestore, collection, addDoc, } from '@angular/fire/firestore';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-experiance',
  templateUrl: './add-new-experiance.component.html',
  styleUrls: ['./add-new-experiance.component.sass']
})
export class AddNewExperianceComponent {

  imageUrl: string = ''
  uploadingValue: string = '0%'

  constructor(
    private storage: Storage = inject(Storage),
    private firestore: Firestore,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  addExperianceData(f: any) {
    const collectionInstance = collection(this.firestore, 'experiance');
    const dataToSave = { ...f.value, imageUrl: this.imageUrl }
    addDoc(collectionInstance, dataToSave).then(() => {
      console.log(this.imageUrl);
      f.resetForm();
      this.router.navigate(['/admin/experiance/all-experiance']);
    }).catch((err) => {
      console.log(err);
    })
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const storageRef = ref(this.storage, 'experiance/' + file.name)
      uploadBytesResumable(storageRef, file).on('state_changed', (snapshot) => {
        const value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploadingValue = value.toString() + '%'
        console.log('upload is' + this.uploadingValue)
        this.cdr.detectChanges()
        if (this.uploadingValue === '100%') {
          getDownloadURL(ref(storageRef)).then((url => {
            this.imageUrl = url
            console.log(this.imageUrl)
          }))
        }
      })
    }
  }
}
