import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/services/account.service';
import { FlashesService } from './shared/services/flashes.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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

    this.accountSrv.query('')
      .subscribe(data => {
        console.log(data);
      });

    this.flashesSrv.query('')
      .subscribe(data => {
        console.log(data);
      });
  }
}
