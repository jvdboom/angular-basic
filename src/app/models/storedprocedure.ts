export class StoredProcedureParameter {
    Schema: string;
    ObjectName: string;
    ObjectType: string;
    ParameterID: number;
    ParameterName: string;
    ParameterDataType: string;
    ParameterMaxBytes: number;
    IsOutPutParameter: number;
}

export class StoredProcedure {
    SPECIFIC_CATALOG: string;
    SPECIFIC_SCHEMA: string;
    SPECIFIC_NAME: string;
    ROUTINE_DEFINITION: string;
    CREATED: Date
    LAST_ALTERED: Date;
}
