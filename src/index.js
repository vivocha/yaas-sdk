import { YAAS_Client } from './client';
import { Cart } from './cart';
import { Coupon } from './coupon';
import { Customer } from './customer';
import { Product } from './product';
import { SalesOrder } from './salesorder';
import { ServiceTicket } from './serviceticket';

export class YAAS_SDK {
  constructor(tenant, token) {
    var client = new YAAS_Client(token);
    this.cart = new Cart(client, tenant);
    this.coupon = new Coupon(client, tenant);
    this.customer = new Customer(client, tenant);
    this.product = new Product(client, tenant);
    this.salesOrder = new SalesOrder(client, tenant);
    this.serviceTicket = new ServiceTicket(client, tenant);
  }
  static createWithCredentials(tenant, clientId, clientSecret, scope) {
    return YAAS_SDK.getAccessTokenFromCredentials(clientId, clientSecret, scope).then(function(data) {
      return new YAAS_SDK(tenant, data.access_token);
    });
  }
  static getAccessTokenFromCredentials(clientId, clientSecret, scope) {
    var ep = 'https://api.yaas.io/hybris/oauth2/v1/token';
    return YAAS_Client.getAccessTokenFromCredentials(ep, clientId, clientSecret, scope);
  }
}