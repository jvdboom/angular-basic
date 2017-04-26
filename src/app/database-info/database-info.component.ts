import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { DataTable, LazyLoadEvent, MenuItem, Message } from "primeng/primeng";
import { DataTable } from "primeng/primeng";
import * as _ from "lodash";

import { Table } from "../models/table";
import { Column } from "../models/column";
import { DatabaseInfoService } from "../services/database-info.service";

@Component({
  selector: 'app-database-info',
  templateUrl: './database-info.component.html',
  styleUrls: ['./database-info.component.css']
})
export class DatabaseInfoComponent implements OnInit {
  @ViewChild("dataTable") private dataTable: DataTable;

  public cTables$: Observable<Table[]>;
  public cColumns$: Observable<Column[]>;
  public cTableContent$: Observable<Object[]>;;
  public cTable: Table;
  public cTableContent: Object;

  constructor(private databaseInfoService: DatabaseInfoService) { }

  ngOnInit() {
    this.cTables$ = this.databaseInfoService.getTables();
  }

  handleRowClick(event): void {
    console.log(`onRowClick()`);
  }

  handleRowSelect(event): void {
    console.log(`onRowSelect()`);
  }

  handleRowExpand(event): void {
    this.cTable = event.data;
    this.dataTable.expandedRows.forEach(expandedRow => {
      if (expandedRow.TABLE_NAME !== this.cTable.TABLE_NAME) {
        this.dataTable.toggleRow(expandedRow);
      }
    });
    this.cColumns$ = this.databaseInfoService.getColumns(this.cTable.TABLE_NAME);
    // this.cTableContent = this.databaseInfoService.getTableContentAsJsonP(this.cTable.TABLE_NAME);
    this.cTableContent$ = this.databaseInfoService.getTableContent(this.cTable.TABLE_NAME);
  }
}
