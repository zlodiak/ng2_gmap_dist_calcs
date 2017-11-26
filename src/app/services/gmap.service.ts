import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class GmapService {

  constructor(private http: Http) { };

  getAddress(originLat, originLng): Observable<any> {
  	let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+originLat+','+originLng+'&key=AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ';
  	let result = this.http.get(url);
  	return result;
  };

	calcDistance(originLat, originLng, lat, lng) {
		let origins = originLat + ',' + originLng;
		let destinations = lat + ',' + lng;
		let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&language=ru&origins='+origins+'&destinations='+destinations+'&key=AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ';
		let result = this.http.get(url);
		return result;
	}

}
