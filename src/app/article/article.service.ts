import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  public getById(id: String): Observable<Article> {
    return this.http.get<Article>('/api/articles/' + id);
  }

  public save(article: Article): Observable<Article> {
    return this.http.post<Article>('/api/articles', article);
  }

  public delete(id: string): Observable<Article> {
    return this.http.delete<Article>('/api/articles/' + id);
  }

}
