import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   // 'Authorization': 'my-auth-token'
  })
};
@Component({
  selector: 'app-trombi',
  templateUrl: './trombi.component.html',
  styleUrls: ['./trombi.component.css']
})
export class TrombiComponent implements OnInit {

  constructor(private http: HttpClient) { }


 docs = [];
  ngOnInit() {

    const mangoquery = {
      query : {
        selector: {
          name: {$gte: null}
        },
        limit: 100
      },
      parameter: { }

    };
    this.http.post('/api/photos', mangoquery, httpOptions).subscribe(res => this.docs = res['docs'] );
  }

}
