import { YAAS_API } from './api';

export class Coupon extends YAAS_API {
  constructor(client, tenant) {
    super(client, tenant, 'https://api.yaas.io/hybris/coupon/v1');
  }
  query(opts) {
    return this.ws('/coupons', 'GET', opts);
  }
  get(id, opts) {
    return this.ws('/coupons/' + id, 'GET', opts);
  }
}
