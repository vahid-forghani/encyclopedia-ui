import { FormControl, FormGroup } from "@angular/forms";

export class LoginForm extends FormGroup {

  constructor() {
    super({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  get username(): FormControl {
    return this.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.get('password') as FormControl;
  }

}
