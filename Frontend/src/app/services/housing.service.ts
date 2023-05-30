import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { IProperty } from '../property/IProperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for (const Id in data){
          if(data.hasOwnProperty(Id)){
            let p: IProperty = data[Id as keyof object];
            if(p.SellRent == SellRent)
              propertiesArray.push(p);
          }
        }
        return propertiesArray;
      })
    );
  }
}
