import { Component, Injectable } from '@angular/core';
import { defineCustomElements, addTheme } from 'corporate-ui-dev';
import { theme as scania } from 'scania-theme'; 

defineCustomElements(['c-theme','c-header','c-navigation','c-footer','c-container','c-content']);
addTheme(scania);

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-cui';
}
