import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/security/auth.service';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  readonly auth = this.authService;

  constructor(private articleService: ArticleService,
    private messageService: MessageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getAll().subscribe(value => this.articles = value);
  }

  delete(id: string): void {
    this.articleService.delete(id).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Article deleted successfully', detail:id});
        this.getArticles();
      },
      error: (error) => this.messageService.add({severity:'error', summary:'Error', detail: JSON.stringify(error)})
    });
  }

}
