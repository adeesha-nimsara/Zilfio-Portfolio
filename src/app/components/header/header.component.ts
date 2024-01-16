import { Component, HostListener, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private themeService: ThemeService){}
  
  toggleTheme(){
    this.themeService.toggleTheme();
  }

  @Input()
  title : string = "";

}
