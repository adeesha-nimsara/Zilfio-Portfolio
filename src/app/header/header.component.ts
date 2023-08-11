import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  title: string = 'ABN';
  about: string = 'About';
  project: string = 'Projects';
  contact: string = 'Contact';
  
}
