import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent {

  SellRent = 1; //Default 1 => SellRent = 1 (Buy)
  Properties: Array<IProperty> = [];

  constructor(private housingSerivce: HousingService, private route: ActivatedRoute){

  }

  ngOnInit():void {
    //If URL is empty (Homepage) list properties to Buy
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // If URL is not empty (likely containing "rent-property") list houses to sell (SellRent = 2 (Sell))
    }
    this.housingSerivce.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
