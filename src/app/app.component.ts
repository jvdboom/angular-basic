import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** PrimeNG */
import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public clicks: number = 0;
  public cDisabled: boolean = true;
  public cItems: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    /** EXAMPLE: Two examples of menustructuur */
    let items: MenuItem[] = [];
    this.cItems = [];
    items.push({ label: 'DatabaseInfo', icon: 'fa-bolt', routerLink: ['databaseinfo'] });
    this.cItems.push({ label: 'Database', icon: 'fa-bug', items });

    // items = [];
    // items.push({ label: 'Car', icon: 'fa-bolt', routerLink: ['car'] });
    // this.cItems.push({ label: 'Example', icon: 'fa-bug', items });
  }

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
