import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class HomePageService{
    apiUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWoArCA68xAYnguMULm54lJg2GATVKHow&callback=initMap";
    constructor(private http : HttpClient){

    }
    getLocation()
    {
        return this.http.get(this.apiUrl);
    }
}
