import { FormControl, FormGroup } from "@angular/forms";

export class ArticleForm extends FormGroup {

  constructor() {
    super({
      id: new FormControl(),
      title: new FormControl(),
      content: new FormControl()
    });
  }

  get id(): FormControl {
    return this.get('id') as FormControl;
  }

  get title(): FormControl {
    return this.get('title') as FormControl;
  }

  get content(): FormControl {
    return this.get('content') as FormControl;
  }

}
