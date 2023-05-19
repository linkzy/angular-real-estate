import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  Properties: Array<any> = [{
    "Id": 1,
    "Name": "House",
    "Type": "House",
    "Price": 120000
  },
  {
    "Id": 2,
    "Name": "Villa",
    "Type": "Villa",
    "Price": 120000
  },
  {
    "Id": 3,
    "Name": "Apartment",
    "Type": "Apartment",
    "Price": 120000
  },
  {
    "Id": 4,
    "Name": "Farm",
    "Type": "Farm",
    "Price": 120000
  }]

  constructor(){

  }

}
