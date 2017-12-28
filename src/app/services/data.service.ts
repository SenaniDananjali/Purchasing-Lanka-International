import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('data service runs...');

  }

  getNames() {
    return this.http.get('http://localhost/backend/src/getstylistDetails.php/')
      .map(res => res.json());

  }
}
