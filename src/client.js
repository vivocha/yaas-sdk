export class YAAS_Client {
  constructor(token) {
    this.token = token;
  }
  ws(path, method, query, body) {
    var url = path;
    var opts = {
      method: (method || 'GET').toUpperCase(),
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    };
    if (query) {
      console.log('query', query);
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

    console.log('url', url);
    console.log('opts', opts);

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
}
