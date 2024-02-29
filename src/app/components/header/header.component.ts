import { Component, HostListener, Input } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  cvData = ""

  constructor(
    private themeService: ThemeService,
    private firestore: Firestore
    ){
      this.getData()
    }
  
  toggleTheme(){
    this.themeService.toggleTheme()
  }

  async getData() {
    const db = getFirestore()
    const docRef = doc(db, "userDownloads", "cv")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      const data = docSnap.data()
      const downloadUrl = data['download_url']
      this.cvData = downloadUrl
    }
  }

  @Input()
  title : string = "";

}
