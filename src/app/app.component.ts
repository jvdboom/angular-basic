import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

/** PrimeNG */
import { MenubarModule, MenuItem } from "primeng/primeng";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app works!";

  public clicks: number = 0;
  public cDisabled: boolean = true;
  public cItems: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    /** EXAMPLE: Two examples of menustructuur */
    let items: MenuItem[] = [];
    this.cItems = [];
    // items.push({ label: "DatabaseInfo", icon: "fa-bolt", routerLink: ["databaseinfo"] });
    items.push({ label: "DatabaseInfo", icon: "fa-bolt", command: (click) => { this.router.navigate(["databaseinfo"]); } });
    items.push({ label: "StoredProcedureInfo", icon: "fa-bolt", command: (click) => { this.router.navigate(["storedprocedureinfo"]); } });
    items.push({ label: "MessageStatus", icon: "fa-bolt", command: (click) => { this.router.navigate(["messagestatus"]); } });
    this.cItems.push({ label: "Database", icon: "fa-bug", items });
    items=[];
    items.push({ label: "ArticleList", icon: "fa-bolt", command: (click) => { this.router.navigate(["articlelist"]); } });
    items.push({ label: "Tenant", icon: "fa-bolt", command: (click) => { this.router.navigate(["tenant"]); } });
    this.cItems.push({ label: "Observable", icon: "fa-bug", items });
    items=[];
    this.cItems.push({ label: "DynamicForm", icon: "fa-bolt", command: (click) => { this.router.navigate(["dynamicform"]); } });

    // items = [];
    // items.push({ label: "Car", icon: "fa-bolt", routerLink: ["car"] });
    // this.cItems.push({ label: "Example", icon: "fa-bug", items });
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
