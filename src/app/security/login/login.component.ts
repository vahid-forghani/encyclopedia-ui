import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { LoginForm } from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = new LoginForm();

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.loginForm.username.value, this.loginForm.password.value)
      .then(_ => this.router.navigate(['/']))
      .then(_ => location.reload())
      .catch(error => this.messageService.add({severity:'error', summary:'Error', detail:error}));
  }

}
