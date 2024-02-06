import { Component } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent {

  experianceData!: Observable<any>;

  constructor(
    private sanitizer: DomSanitizer,
    private firestore: Firestore) {
    this.getData();
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  async getData() {
    const collectionInstance = collection(this.firestore, 'experiance');
    const q = query(collectionInstance, orderBy('order', 'desc'));
    this.experianceData = await collectionData(q, { idField: 'id' });
    console.log(this.experianceData);
  }
}
