import { YAAS_API } from './api';

export class Cart extends YAAS_API {
  constructor(client, tenant) {
    super(client, tenant, 'https://api.yaas.io/hybris/cart/v1');
  }
  query(opts) {
    return this.ws('/carts', 'GET', opts);
  }
  get(id, opts) {
    return this.ws('/carts/' + id, 'GET', opts);
  }
}
