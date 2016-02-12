import { YAAS_API } from './api';

export class Product extends YAAS_API {
  constructor(client, tenant) {
    super(client, tenant, 'https://api.yaas.io/hybris/product/v1');
  }
  query(opts) {
    return this.ws('/products', 'GET', opts);
  }
  get(id, opts) {
    return this.ws('/products/' + id, 'GET', opts);
  }
}
