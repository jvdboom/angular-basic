import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import "rxjs/Rx"; /** for .map */
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Table } from "../models/table";
import { Column } from "../models/column";
import { StoredProcedure, StoredProcedureParameter } from "../models/storedprocedure";
import { environment } from "../../environments/environment";

@Injectable()
export class DatabaseInfoService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }

  getTables(): Observable<Table[]> {
    return this.http
      .get(`${environment.urlDbstoredprocedure}[InfoTableName]`)
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }

  getColumns(aTableName: string = ""): Observable<Column[]> {
    let search = new URLSearchParams();
    search.set('param1', aTableName);

    if (aTableName !== "") {
      return this.http
        .get(`${environment.urlDbstoredprocedure}[InfoTableColumn]?${search.toString()}`)
        .map(this.extractData)
        .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    } else {
      return undefined;
    }
  }

  getTableContentAsJson(aTableName: string): Promise<Object[]> {
    return this.http.request(`${environment.urlDbstandard}[${aTableName}]`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getTableContent(aTableName: string): Observable<Object[]> {
    return this.http.request(`${environment.urlDbstandard}[${aTableName}]`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStoredProcedures(): Observable<StoredProcedure[]> {
    return this.http
      .get(`${environment.urlDbstoredprocedure}[InfoStoredProcedure]`)
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }

  getStoredProcedureParameters(aStoredProcedureName: string): Observable<StoredProcedureParameter[]> {
    let search = new URLSearchParams();
    search.set('param1', aStoredProcedureName);

    if (aStoredProcedureName !== "") {
      return this.http
        .get(`${environment.urlDbstoredprocedure}[InfoStoredProcedureParameters]?${search.toString()}`)
        .map(this.extractData)
        .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    } else {
      return undefined;
    }
  }


  private handleError(error: any) {
    console.log();
    return Promise.reject(error.message || error);
  }

}


