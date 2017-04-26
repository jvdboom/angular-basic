export interface TenantJSON {
    ParentID: number,
    CountryCodeID: number,
    Active: boolean,
    CustomerNumber: string,
    ID: number,
    Name: string
}


export class Tenant {

    static fromJSON(json: TenantJSON): Tenant {
        let tenant = Object.create(Tenant.prototype);
        return Object.assign(tenant, json, {
            ParentID: json.ParentID ? json.ParentID : 0,
            CountryCodeID: json.CountryCodeID,
            Active: json.Active ? json.Active : false,
            CustomerNumber: json.CustomerNumber,
            ID: json.ID ? json.ID : 0,
            Name: json.Name + ` ${json.ID}`
        });

    }

    // constructor(
    //     public ParentID: number,
    //     public CountryCodeID: number,
    //     public Active: boolean,
    //     public CustomerNumber: string,
    //     public ID: number,
    //     public Name: string
    // ) {

    // }

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}