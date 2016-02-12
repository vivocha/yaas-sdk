export class YAAS_API {
  constructor(client, tenant, baseURL) {
    this.client = client;
    this.tenant = tenant;
    this.baseURL = baseURL;
  }
  ws(path, method, query, body) {
    return this.client.ws(this.baseURL + '/' + this.tenant + path, method, query, body);
  }
}
