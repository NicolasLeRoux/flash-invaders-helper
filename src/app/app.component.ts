import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flash-invaders-helper';

  constructor(
    private accountSrv: AccountService
  ) {}

  public ngOnInit() {
    this.accountSrv.query('')
      .subscribe(data => {
        console.log(data);
      });
  }
}
