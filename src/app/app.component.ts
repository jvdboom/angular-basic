import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public clicks: number = 0;
  public cDisabled: boolean = true;

  count() {
    this.clicks++;
  }

  inverse() {
    this.cDisabled = !this.cDisabled
  }

  reset() {
    this.clicks = 0;
  }
}
