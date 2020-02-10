import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

/**
 * 核心 HTTP 拦截器
 */
export abstract class CoreHttpInterceptor implements HttpInterceptor {

  /**
   * 返回 API 服务器地址
   */
  abstract api(): string;

  /**
   * HTTP 请求错误处理
   * @param error HTTP 错误响应
   */
  abstract handleError(error: HttpErrorResponse): Observable<HttpErrorResponse>;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /** 配置请求 url */
    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = this.api() + url;
    }
    let request = req.clone({url});

    /** 配置 XHR 请求 */
    let headers = request.headers;
    headers = headers.append('X-Requested-With', 'XMLHttpRequest');
    request = request.clone({headers});

    /** 错误处理 */
    return next.handle(request).pipe(mergeMap((event: any) => {
      return of(event);
    }), catchError((error: HttpErrorResponse) => {
      return this.handleError(error);
    }));
  }

}
