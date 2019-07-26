import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // url ="";

  constructor(private http: HttpClient) { }
  getNews() {
    return this.http.get('http://dibnews.yarshatech.com.au/index.php/rest/news/get/api_key/teampsisthebest');
  }
}
