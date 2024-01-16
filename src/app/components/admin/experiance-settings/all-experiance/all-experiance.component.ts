import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-all-experiance',
  templateUrl: './all-experiance.component.html',
  styleUrls: ['./all-experiance.component.sass']
})

export class AllExperianceComponent {
  experianceData!: Observable<any>;

  constructor(
    private firestore: Firestore,
    private sanitizer: DomSanitizer,
    private loading: LoadingService,
  ) {
    this.loading.showLoading();
    this.getExperianceData();
  }



  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getExperianceData() {
    const collectionInstance = collection(this.firestore, 'experiance');
    this.experianceData = collectionData(collectionInstance, { idField: 'id' });
    this.experianceData.subscribe(()=> this.loading.hideLoading())
  }

  deleteExperianceData(id: string) {
    const docInstantce = doc(this.firestore, 'experiance', id);
    deleteDoc(docInstantce).then(() => {
      console.log('Data Deleted');
    })
  }
}
