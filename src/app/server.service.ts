import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {
  }

  storeServers(servers: any) {
    const header = new Headers({'content-type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-74431.firebaseio.com/data.json',
    //   servers,
    //   {headers: header});
    return this.http.put('https://udemy-ng-http-74431.firebaseio.com/data.json',
      servers,
      {headers: header});
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-74431.firebaseio.com/data.json')
  }

}
