import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

  show: boolean = true;

  /**
   * This constructor function subscribes to router events and sets the value of "show" based on the
   * current URL.
   * @param {Router} router - The "router" parameter is an instance of the Router class, which is a
   * service provided by Angular. It is used for managing navigation and routing within an Angular
   * application.
   */
  constructor(private router: Router){
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.show = true;
        }else{
          this.show = false;
        }
      }
    })
  }

}
