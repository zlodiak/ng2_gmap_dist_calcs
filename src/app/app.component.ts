import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GmapService } from './services/gmap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GmapService]
})
export class AppComponent implements OnInit {

	private originLat: number;
	private originLng: number;
	private originLabel: string;
	private markers: any[] = [];

	constructor(private gmapService: GmapService) { }

	ngOnInit() {
		if (!navigator.geolocation) { alert('Geolocation API не поддерживается в вашем браузере'); }

		navigator.geolocation.getCurrentPosition((position) => {
			this.originLat = +position.coords.latitude;
			this.originLng = +position.coords.longitude;
			let coords = {lat: this.originLat, lng: this.originLng};

			this.gmapService.getAddress(this.originLat, this.originLng).subscribe(
				data => {
					//console.log(data);
					this.originLabel = JSON.parse(data['_body']).results[1].formatted_address;

				},
				err => { console.log('err'); }
			);
		});
	}

	private mapClick(ev) {
		let lat = ev.coords.lat;
		let lng = ev.coords.lng;
		let label: string = '';

		this.gmapService.calcDistance(this.originLat, this.originLng, lat, lng).subscribe(
			data => {
				//console.log(data);
				label = JSON.parse(data['_body']).rows[0].elements[0].distance.text;

				let newMarker = {
					title: label,
					lat: lat,
					lng: lng
				};

				this.markers.push(newMarker);
			},
			err => { console.log('err'); }
		);
	}
}
