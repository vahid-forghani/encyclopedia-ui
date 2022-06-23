import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { ViewArticleComponent } from './article/view-article/view-article.component';
import { LoginComponent } from './security/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: 'articles/view/:id', component: ViewArticleComponent},
  {path: 'articles/edit/:id', component: EditArticleComponent},
  {path: 'users', component: UserListComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
