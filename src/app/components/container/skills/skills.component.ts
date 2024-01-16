import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  skillData!: Observable<any>;

  constructor(
    private firestore: Firestore,
    private sanitizer: DomSanitizer,) {
    this.getData();
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'skills');
    this.skillData = collectionData(collectionInstance, { idField: 'id' });
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
