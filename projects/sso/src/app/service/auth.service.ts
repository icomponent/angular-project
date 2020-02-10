import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonCredentials } from 'common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * 用户登录
   * @param username 用户名
   * @param password 密码
   */
  login(username: string, password: string): Observable<void> {
    /** 构造登录凭证 */
    const credentials = new CommonCredentials();
    credentials.username = username;
    credentials.password = password;
    return null;
  }
}
