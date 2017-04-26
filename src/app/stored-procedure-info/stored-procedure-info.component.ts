import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { DataTable, LazyLoadEvent, MenuItem, Message } from "primeng/primeng";
import { DataTable } from "primeng/primeng";
import * as _ from "lodash";

import { StoredProcedure, StoredProcedureParameter } from "../models/storedprocedure";
import { DatabaseInfoService } from "../services/database-info.service";

@Component({
  selector: 'app-stored-procedure-info',
  templateUrl: './stored-procedure-info.component.html',
  styleUrls: ['./stored-procedure-info.component.css']
})
export class StoredProcedureInfoComponent implements OnInit {
  @ViewChild("dataTable") private dataTable: DataTable;

  public cStoredProcedures$: Observable<StoredProcedure[]>;
  public cStoredProcedure: StoredProcedure;
  public cStoredProcedureParameters$: Observable<StoredProcedureParameter[]>;
  public cDefinition: string = "";

  constructor(private databaseInfoService: DatabaseInfoService) { }

  ngOnInit() {
    this.cStoredProcedures$ = this.databaseInfoService.getStoredProcedures();
  }

  handleRowClick(event): void {
    console.log(`onRowClick()`);
  }

  handleRowSelect(event): void {
    console.log(`onRowSelect()`);
  }

  handleRowExpand(event): void {
    this.cStoredProcedure = event.data;
    this.dataTable.expandedRows.forEach(expandedRow => {
      if (expandedRow.SPECIFIC_NAME !== this.cStoredProcedure.SPECIFIC_NAME) {
        this.dataTable.toggleRow(expandedRow);
      }
    });
    this.cStoredProcedureParameters$ = this.databaseInfoService.getStoredProcedureParameters(this.cStoredProcedure.SPECIFIC_NAME);
    this.cDefinition = this.cStoredProcedure.ROUTINE_DEFINITION;
  }

  handleRowCollapse() {
    this.cDefinition = "";
    //this.cStoredProcedure = new StoredProcedure();
  }

}
