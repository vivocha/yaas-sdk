import { YAAS_API } from './api';

export class Customer extends YAAS_API {
  constructor(client, tenant) {
    super(client, tenant, 'https://api.yaas.io/hybris/customer/v1');
  }
  query(opts) {
    return this.ws('/customers', 'GET', opts);
  }
  get(id, opts) {
    return this.ws('/customers/' + id, 'GET', opts);
  }
  addresses(id, opts) {
    return this.ws('/customers/' + id + '/addresses', 'GET', opts);
  }
  address(id, addrId, opts) {
    return this.ws('/customers/' + id + '/addresses/' + addrId, 'GET', opts);
  }
}
