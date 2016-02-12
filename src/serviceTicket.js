import { YAAS_API } from './api';

export class ServiceTicket extends YAAS_API {
  constructor(client, tenant) {
    super(client, tenant, 'https://api.yaas.io/hybris/serviceticketmashup/v1');
  }
  query(opts) {
    return this.ws('/serviceTickets', 'GET', opts);
  }
  create(data, opts) {
    return this.ws('/serviceTickets', 'POST', opts, data);
  }
  get(id, opts) {
    return this.ws('/serviceTickets/' + id, 'GET', opts);
  }
  update(id, data, opts) {
    return this.ws('/serviceTickets/' + id, 'PUT', opts, data);
  }
  remove(id, opts) {
    return this.ws('/serviceTickets/' + id, 'DELETE', opts);
  }
  priorities(opts) {
    return this.ws('/serviceTicketPriorities', 'GET', opts);
  }
  types(opts) {
    return this.ws('/serviceTicketTypes', 'GET', opts);
  }
  classifications(opts) {
    return this.ws('/serviceTicketClassifications', 'GET', opts);
  }
}
