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
}