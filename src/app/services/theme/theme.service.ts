import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: string = 'dark'

  constructor() { }

  toggleTheme() {
    // Toggle between 'dark' and 'light'
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  
    // Remove the previous theme class from the <html> element
    document.documentElement.classList.remove(this.currentTheme === 'dark' ? 'light' : 'dark');
    
    // Add the current theme class to the <html> element
    document.documentElement.classList.add(this.currentTheme);
  
    console.log(this.currentTheme);
  }
}
