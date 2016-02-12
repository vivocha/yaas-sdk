export class YAAS_Client {
  constructor(token) {
    this.token = token;
  }
  ws(path, method, query, body) {
    return YAAS_Client.ws(path, method, query, body, this.token);
  }
  static ws(path, method, query, body, token) {
    var url = path;
    var opts = {
      method: (method || 'GET').toUpperCase(),
      mode: 'cors',
      credentials: 'omit',
      headers: { }
    };
    if (query) {
      var qs = [];
      for (var i in query) {
        qs.push(encodeURIComponent(i) + '=' + encodeURIComponent(query[i]));
      }
      if (qs.length) {
        url += '?' + qs.join('&');
      }
    }
    if (typeof body === 'string') {
      opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      opts.body = body;
    } else if (typeof body === 'object') {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(body);
    }
    if (token) {
      opts.headers['Authorization'] = 'Bearer ' + token;
    }

    return fetch(url, opts).then(response => {
      if (response.ok) {
        if (response.headers.get('Content-Type') === 'application/json') {
          return response.json();
        } else {
          return response.text();
        }
      } else {
        throw response.status;
      }
    });
  }
  static getAccessTokenFromCredentials(ep, clientId, clientSecret, scope) {
    var body = [
      "grant_type=client_credentials",
      "scope=" + (scope && scope.join ? scope.join(' ') : scope || ''),
      "client_id=" + clientId,
      "client_secret=" + clientSecret
    ].join('&');
    return YAAS_Client.ws(ep, 'POST', null, body);
  }
}
