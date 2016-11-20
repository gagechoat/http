import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getData() {
    return this.http.get('https://angular-2-course-2ab3b.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angular-2-course-2ab3b.firebaseio.com/data.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json());
  }
}
