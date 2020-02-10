import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** 登录表单 */
  loginForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    /** 构造表单 */
    this.loginForm = this.builder.group({
      /** 用户名, 初始化为空, 必填项 */
      username: ['', Validators.required],
      /** 密码, 初始化为空, 必填项 */
      password: ['', Validators.required]
    });
  }

  login(): void {
    console.log(this.loginForm.value);
  }

}
