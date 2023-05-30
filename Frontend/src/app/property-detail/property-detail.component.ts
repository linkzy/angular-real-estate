import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (parms) => {
        this.propertyId = +parms['id'];
      }
    );
  }

  ngOnInit() {

  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId])
  }

}
