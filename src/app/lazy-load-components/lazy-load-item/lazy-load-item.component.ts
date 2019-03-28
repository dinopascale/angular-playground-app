import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy-load-item',
  templateUrl: './lazy-load-item.component.html',
  styleUrls: ['./lazy-load-item.component.scss']
})
export class LazyLoadItemComponent implements OnInit {

  @Input() data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this._callApi(this.data.apiUrl).subscribe(val => console.log(val));
  }

  private _callApi(url: string): Observable<any> {
    return this.http.get(url);
  }


}
