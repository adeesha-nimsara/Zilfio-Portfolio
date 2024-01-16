import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Firestore, collection, addDoc, } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.sass']
})

export class AddNewProjectComponent {
  imageUrl: string = ''
  uploadingValue: string = '0%'
  tags = ["PHP", "wordpress"]
  tagsInput = ''

  constructor(
    private storage: Storage = inject(Storage),
    private firestore: Firestore,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  addProjectData(f: any) {
    const collectionInstance = collection(this.firestore, 'projects');
    const dataToSave = { ...f.value, image_url: this.imageUrl, tags: this.tags }
    addDoc(collectionInstance, dataToSave).then(() => {
      console.log(this.imageUrl);
      f.resetForm();
      this.router.navigate(['/admin/projects']);
    }).catch((err) => {
      console.log(err);
    })
  }

  addTags() {
    if (this.tagsInput.trim() !== '') {
      const newTags = this.tagsInput.split(',').map(tag => tag.trim());
      this.tags = this.tags.concat(newTags);
      this.tagsInput = '';
    }
  }

  deleteTags(value: string) {
    this.tags = this.tags.filter(tag => tag !== value);
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const storageRef = ref(this.storage, 'project/' + file.name)
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
