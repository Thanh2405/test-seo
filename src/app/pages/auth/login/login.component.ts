import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  username = '';
  password = '';
  showPass = false;

  constructor(
    private formBuilder: FormBuilder,
    private authSvc: LoginService,
  ) { }

  ngOnInit() {
    this.createFormLogin();
  }

  public createFormLogin() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authSvc.login(this.loginForm.value);
  }

  public showPassword() {
    this.showPass = !this.showPass;
  }
}
