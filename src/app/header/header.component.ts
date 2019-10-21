import { Component, OnInit } from '@angular/core';
import { TRUCK } from '../data/truck-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  primary = TRUCK.map(obj => {
      let newObj = {};
      newObj['text'] = obj.text;
      newObj['href'] = '/detail/'+obj.id;
      return newObj;
  });

  constructor() { }

  ngOnInit() {
  }

}
