import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  constructor(private http: HttpClient) { }
public getBreweries(){
  return this.http.get("https://api.openbrewerydb.org/breweries");
  
}

}
