import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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

  getData() {
    const collectionInstance = collection(this.firestore, 'experiance');
    this.experianceData = collectionData(collectionInstance, { idField: 'id' });
  }
}
