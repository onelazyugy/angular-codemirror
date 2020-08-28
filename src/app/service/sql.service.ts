import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  constructor(private http: HttpClient) { }

  query(base64QueryRequest: string): Observable<string> {
    const url = environment.queryURL;
    console.log(base64QueryRequest);
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<string>(url, base64QueryRequest, { headers, responseType: 'text' as 'json' });
  }
}
