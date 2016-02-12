import { YAAS_API } from './api';

export class SalesOrder extends YAAS_API {
  constructor(client, tenant) {
    super(client, tenant, 'https://api.yaas.io/hybris/order/v1');
  }
  query(opts) {
    return this.ws('/salesorders', 'GET', opts);
  }
  get(id, opts) {
    return this.ws('/salesorders/' + id, 'GET', opts);
  }
}
