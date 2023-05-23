import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent {

  Properties: any;

  constructor(private housingSerivce: HousingService){

  }

  ngOnInit():void {
    this.housingSerivce.getAllProperties().subscribe(
      data => {
        this.Properties = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
