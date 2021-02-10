import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { articlelist } from 'src/app/models/articleslist.model';
import { ArticlesService } from 'src/app/service/articles.service';


@Component({
  selector: 'app-articlesmultiple',
  templateUrl: './articlesmultiple.component.html',
  styleUrls: ['../articlelist.component.css'],
  providers: [DatePipe]
})

export class ArticlesmultipleComponent implements OnInit {
  constructor(public datepipe: DatePipe, private articleService: ArticlesService) { }
  latestDate:any
  blogContent: articlelist[] = []

  pageNum = 1



  ngOnInit(): void {
  this.blogContent = this.articleService.blogContent
  }




}
