import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from "../../environments/environment";
import { StoredProcedure, StoredProcedureParameter } from "../models/storedprocedure";
import { MessageStatus } from "../models/messagestatus";

interface MessageStatusSortFn {
  (a: MessageStatus, b: MessageStatus): number;
}

interface MessageStatusSortOrderFn {
  (direction: number): MessageStatusSortFn;
}

const sortByTime: MessageStatusSortOrderFn =
  (direction: number) => (a: MessageStatus, b: MessageStatus) => {
    return direction *
      (b.CreationDateTime.getTime() -
        a.CreationDateTime.getTime());
  };

const sortByIDs: MessageStatusSortOrderFn =
  (direction: number) => (a: MessageStatus, b: MessageStatus) => {
    return direction * (b.ID - a.ID);
  };

const sortFns = {
  'Time': sortByTime,
  'Votes': sortByIDs
};

@Injectable()
export class MessageStatusService {

  private _articles: BehaviorSubject<MessageStatus[]> = new BehaviorSubject<MessageStatus[]>([]);
  private _sources: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  private _refreshSubject: BehaviorSubject<string> = new BehaviorSubject<string>('reddit-r-all');
  private _sortByDirectionSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _sortByFilterSubject: BehaviorSubject<MessageStatusSortOrderFn> = new BehaviorSubject<MessageStatusSortOrderFn>(sortByTime);
  private _filterbySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public sources: Observable<any> = this._sources.asObservable();
  public articles: Observable<MessageStatus[]> = this._articles.asObservable();
  public orderedArticles: Observable<MessageStatus[]>;
  // "CreationDateTime": "2016-12-19 17:06:32.2366667",
  // "StateID": 701,
  // "ID": 5,
  // "FollowUp": false,
  // "MessageID": 2

  constructor(private http: Http) {
    this._refreshSubject.subscribe(this.getMessageStatus.bind(this));
    this.orderedArticles =
      Observable.combineLatest(
        this._articles,
        this._sortByFilterSubject,
        this._sortByDirectionSubject,
        this._filterbySubject
      )
        .map(([
          articles, sorter, direction, filterStr
        ]) => {
          const re = new RegExp(filterStr, 'gi');
          return articles
            .filter(a => re.exec(a.searched))
            .sort(sorter(direction));
        });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }


  public getMessageStatus(): void {
    this._makeHttpRequest("MessageStatus")
      .map(json => json)
      .subscribe(messageStatusJSON => {
        const list = messageStatusJSON
          .map(messageStateJSON => MessageStatus.fromJSON(messageStateJSON));
        this._articles.next(list);
      });
  }

  private _makeHttpRequest(path: string, sourceKey?: string): Observable<any> {
    let params = new URLSearchParams();

    return this.http
      .get(`${environment.urlDbstandard}${path}`, {
        search: params

      }).map(resp => resp.json());
  }


  //.catch(error => Observable.throw(error));

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
}
