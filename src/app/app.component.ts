import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/services/account.service';
import { FlashesService } from './shared/services/flashes.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flash-invaders-helper';

  constructor(
    private accountSrv: AccountService,
    private flashesSrv: FlashesService,
    private iconRegistrySrv: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnInit() {
    this.iconRegistrySrv.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icon-set.svg'));

    /*this.accountSrv.query('')
      .subscribe(data => {
        console.log(data);
      });*/

    /*this.flashesSrv.query('')
      .subscribe(data => {
        console.log(data);
      });*/

    const mymap = Leaflet.map('app-map', {
      center: [51.505, -0.09],
      zoom: 13,
      zoomControl: false
    });

    Leaflet.marker([51.5, -0.09]).addTo(mymap);

    Leaflet.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(mymap);
  }
}
