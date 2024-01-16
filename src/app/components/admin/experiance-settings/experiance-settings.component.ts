import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiance-settings',
  templateUrl: './experiance-settings.component.html',
  styleUrls: ['./experiance-settings.component.sass']
})
export class ExperianceSettingsComponent {

  rotate: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    
  }

  async changeLink(){
    if (this.router.url === "/admin/experiance/all-experiance") {
      this.router.navigate(['/admin/experiance/add-new-experiance']);
      this.rotate = !this.rotate
    } else if (this.router.url === "/admin/experiance/add-new-experiance"){
      this.router.navigate(['/admin/experiance/all-experiance']);
      this.rotate = false 
    }
  }
}

