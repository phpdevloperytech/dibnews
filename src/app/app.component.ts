import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { NewsService } from './news.service';
import { News } from './news'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'test-api-dbnews';
  private gridApi;
  private gridColumnApi;
  private ColumnDefs;
  private SortingOrder;
  private searchValue;
   news : News[];
  columnDefs = [
    {headerName: 'News Title', field: 'news_title', width:450,filter:true},
    {headerName: 'Added Date', field: 'added_date', width:125 },
    {headerName: 'Category', field: 'category.cat_name', width:125},
    {headerName: 'Search Tags', field: 'news_search_tags', width:125},
    {headerName: 'Likes', field: 'like_count', width:75},
    {headerName: 'Comments', field: 'comment_count', width:100},
    {headerName: 'Touches', field: 'touch_count', width:100},
    {headerName: 'Favourites', field: 'favourite_count', width:100},
    {headerName: 'Images', field: 'image_count', width:100},
    {headerName: 'Youtube', field: 'youtube_count', width:100}
  ];
  constructor(public http: HttpClient, private newsService: NewsService){

  }
 
  ngOnInit(){
    this.getNews();
  }
  getNews(){
    this.newsService
    .getNews()
    .subscribe((data:News[]) =>{
      console.log(data);
      this.news =data;
      // console.log(this.news);
    })
  }
 
  quickSearch(){
    this.gridApi.setQuickFilter(this.searchValue);
  }
}
