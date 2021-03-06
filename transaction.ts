import {TimeStamp} from './timestamp';
/*export class Transaction {
// A Transaction is used to push data from one matrix server to another matrix
// server.export function Transaction {
  // The IDs of the most recent transactions sent by the origin server to
  // the destination server. Multiple transactions can be sent by the origin
  // server to the destination server in parallel so there may be more than
  // one previous transaction.
constructor(public TransactionID: string, public ServerName: string, public Timestamp: string,
PreviousIds:string['previous_ids'], PDUs:string['pdus']) {}
  // The room events pushed from the origin server to the destination server
  // by this transaction. The events should either be events that originate
  // on the origin server or be join m.room.member events.

}
// A TransactionID identifies a transaction sent by a matrix server to another
// matrix server. The ID must be unique amongst the transactions sent from the
// origin server to the destination, but doesn't have to be globally unique.
// The ID must be safe to insert into a URL path segment. The ID should have a
// format matching '^[0-9A-Za-z\-_]*$'
let transactions = new Transaction('transaction_id', 'origin', 'destination', 'previous_ids', 'pdus');
type TransactionID =  string; */
type TransactionID = string;

export class Transaction {
TransactionID: TransactionID;
Origin: string;
Destination: 'origin_server_ts';
OriginServerTS: TimeStamp;
PreviousIds: TransactionID[];
PDUs: Event[];
// constructor ()
}
