import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/services/account.service';
import { FlashesService } from './shared/services/flashes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flash-invaders-helper';

  constructor(
    private accountSrv: AccountService,
    private flashesSrv: FlashesService
  ) {}

  public ngOnInit() {
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
