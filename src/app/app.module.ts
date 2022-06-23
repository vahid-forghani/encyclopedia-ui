import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article/article-list/article-list.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ViewArticleComponent } from './article/view-article/view-article.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './security/login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';
import { UserListComponent } from './user/user-list/user-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    EditArticleComponent,
    ViewArticleComponent,
    LoginComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
