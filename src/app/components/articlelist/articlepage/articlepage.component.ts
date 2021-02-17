import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlelist } from 'src/app/models/articleslist.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private articleService:ArticlesService) { }

  activeArticle: any

  ngOnInit(): void {
    const article = this.articleService.blogContent.find((data:articlelist)=>{
    return data.id == +this.route.snapshot.params['id']
    })
    this.activeArticle = article
  }

}
