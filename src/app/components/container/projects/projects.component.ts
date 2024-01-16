import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  projectData!: Observable<any>

  constructor(
    private sanitizer: DomSanitizer,
    private firestore: Firestore,) {
    this.getData();
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'projects');
    this.projectData = collectionData(collectionInstance, { idField: 'id' });
  }
}
