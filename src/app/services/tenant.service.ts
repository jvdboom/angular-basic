import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from "../../environments/environment";
import { Tenant } from "../models/tenant";


interface TenantSortFn {
  (a: Tenant, b: Tenant): number;
}

interface TenantSortOrderFn {
  (direction: number): TenantSortFn;
}

// const sortByID: TenantSortOrderFn =
  // (direction: number) => (a: Tenant, b: Tenant) => {
  //   return direction * (b. - a);
  // } ;

// const sortByVotes: ArticleSortOrderFn =
//   (direction: number) => (a: Article, b: Article) => {
//     return direction * (b.votes - a.votes);
//  };

// const sortTenants = {
//   // 'Time': sortByName,
//   "ID": sortByID
// };

@Injectable()
export class TenantService {

  private _tenants: BehaviorSubject<Tenant[]> = new BehaviorSubject<Tenant[]>([]);
  private _refreshTenants: BehaviorSubject<string> = new BehaviorSubject<string>("Tenant");
  private _sortByDirectionSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _filterbyName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public tenants: Observable<Tenant[]> = this._tenants.asObservable();
  public orderedTenants$: Observable<Tenant[]>;



  constructor(private http: Http) {

    // this._refreshSubject.subscribe(this.getTenants.bind(this));
    // this.orderedTenants = Observable
    //   .combineLatest(this._tenants,
    //   this._sortByDirectionSubject,
    //   this._filterbyName)
    //   .map(res => {
    //     this.tenants = res;
    //   });

    // .map(([tenants, sorter, direction, filterStr]) => {
    //   const re = new RegExp(filterStr, 'gi');
    //   return tenants
    //     .filter(a => re.exec(a.Name))
    //     .sort(sorter(direction));
    // });

  }

  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    // .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : "Server error";
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getTenants() {
    // return this.http
    //   .get(`${environment.urlDbstandard}Tenant`)
    //   .map(result => result.json().map(obj => new Tenant(obj)))
    //   .catch(this.handleError)


    // this._makeHttpDBStandardRequest("tenant")
    //   .map(this.extractData)
    //   .subscribe(tenantJSON => {
    //     const tenants = tenantJSON
    //       .map(tjson => Tenant.fromJSON(tjson));
    //     this._tenants.next(tenants);
    //   })

  }

  getTenantsOrg(): Observable<Tenant[]> {
    return this.http
      .get(`${environment.urlDbstandard}Tenant`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  public sortBy(
    filter: string,
    direction: number
  ): void {
    this._sortByDirectionSubject.next(direction);
  }

  public filterBy(filter: string) {
    this._filterbyName.next(filter);
  }


  private _makeHttpDBStandardRequest(path: string) {
    const params = new URLSearchParams();

    return this.http
      .get(`${environment.urlDbstandard}${path}`, {
        search: params
      }).map(resp => resp.json());
  }


  private _makeHttpRequest(path: string, sourceKey?: string): Observable<any> {
    const params = new URLSearchParams();

    return this.http
      .get(`${environment.urlDbstandard}${path}`, {
        search: params
      }).map(resp => resp.json());
  }

  public getTenantsEx001(): void {
    this._makeHttpRequest("Tenant")
      .map(json => json)
      .subscribe(messageStatusJSON => {
        const list = messageStatusJSON
          .map(messageStateJSON => Tenant.fromJSON(messageStateJSON));
        this._tenants.next(list);
      });
  }

}
