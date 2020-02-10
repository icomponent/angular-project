import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    console.log(username);
    console.log(password);
    return null;
  }
}
