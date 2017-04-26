interface MessageStatusJSON {
    ID: number;
    CreationDateTime: Date;
    StateID: number;
    FollowUp: boolean;
    MessageID: number;
}

export class MessageStatus {
    // public searchedAt: Date;
    public searched: string = "0:0:0";

    // MessageStatus.fromJSON()
    static fromJSON(json: MessageStatusJSON): MessageStatus {
        let messageStatus = Object.create(MessageStatus.prototype);
        return Object.assign(messageStatus, json, {
            ID: json.ID ? json.ID : 0,
            CreationDateTime: json.CreationDateTime ? new Date(json.CreationDateTime): new Date(),
            StateID: json.StateID,
            FollowUp: json.FollowUp
        });
    }

    constructor(
        public ID: number,
        public CreationDateTime: Date,
        public StateID: number,
        public FollowUp: boolean,
        public MessageID: number
    ) {
        // this.searchedAt = new Date();
        this.searched = new Date(CreationDateTime).toLocaleDateString();
    }
}

// <p>{{date | date:'dd MM yyyy'}}</p>
// <p>{{date | date:'dd MM yyyy hh:mm'}}</p>
// <p>{{date | date:'dd MM yyyy hh:mm:ss'}}</p>
// <p>{{date | date:'MM dd yy'}}</p>
// <p>{{date | date:'MM dd yyyy'}}</p>
// <p>{{date | date:'mediumDate'}}</p>
// <p>{{date | date:'yMMMMd'}}</p>
// <p>{{date | date:'shortTime'}}</p>