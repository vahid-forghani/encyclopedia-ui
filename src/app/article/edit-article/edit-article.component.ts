import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ArticleForm } from '../article.form';
import { ArticleService } from '../article.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleForm: ArticleForm = new ArticleForm();

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    firstValueFrom(this.activatedRoute.params).then(params => {
      const id = params['id'];
      if (id == 'new'){
        return;
      }
      this.articleService.getById(id).subscribe(article => {
        this.articleForm.patchValue(article);
      });
    });
  }

  save(): void {
    this.articleService.save(this.articleForm.value).subscribe({
      next: () => this.messageService.add({severity:'success', summary:'Article updated successfully', detail:''}),
      error: (error) => this.messageService.add({severity:'error', summary:'Error', detail: JSON.stringify(error)})
    });

  }

}
