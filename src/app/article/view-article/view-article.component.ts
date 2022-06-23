import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {

  article: Article = {} as Article;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    firstValueFrom(this.activatedRoute.params).then(params => {
      const id = params['id'];
      if (id == 'new'){
        return;
      }
      this.articleService.getById(id).subscribe(article => {
        this.article = article;
      });
    });
  }

}
