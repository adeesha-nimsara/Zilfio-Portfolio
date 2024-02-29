import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, serverTimestamp, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-skills-settings',
  templateUrl: './skills-settings.component.html',
  styleUrls: ['./skills-settings.component.sass']
})
export class SkillsSettingsComponent {
  skillData!: Observable<any>;
  imageUrl: string = '';
  uploadingValue: string = ''
  showSubmit: boolean = false

  constructor(
    private storage: Storage = inject(Storage),
    private firestore: Firestore,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
  ) {
    this.getSkillData();
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const storageRef = ref(this.storage, 'skills/' + file.name)
      uploadBytesResumable(storageRef, file).on('state_changed', (snapshot) => {
        this.showSubmit = true
        const value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploadingValue = value.toString() + '%'
        console.log('upload is' + this.uploadingValue)
        this.cdr.detectChanges()
        if(this.uploadingValue === '100%'){
          setTimeout(()=>{
            getDownloadURL(ref(storageRef)).then((url) => {
              this.imageUrl = url
              console.log(this.imageUrl)
            })
          }, 1000)
        }
        this.showSubmit = false
      })
    }
  }

  addSkillData(f: any) {
    const collectionInstance = collection(this.firestore, 'skills');
    const dataToSave = { ...f.value, imageUrl: this.imageUrl, createdAt: serverTimestamp()}
    addDoc(collectionInstance, dataToSave).then(() => {
      console.log(this.imageUrl);
    }).catch((err) => {
      console.log(err);
    })
  }

  getSkillData() {
    const collectionInstance = collection(this.firestore, 'skills');
    const q = query(collectionInstance, orderBy('createdAt'))
    this.skillData = collectionData(q, { idField: 'id'});
  }

  deleteSkillData(id: string) {
    const docInstantce = doc(this.firestore, 'skills', id);
    deleteDoc(docInstantce).then(() => {
      console.log('Data Deleted');
    })
  }
}
