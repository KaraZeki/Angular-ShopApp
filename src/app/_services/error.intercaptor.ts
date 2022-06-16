import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { pipe, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";



export class ErrorInterceptor implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
        if (err.status === 401) {
          return throwError(err.statusText)
        }
        if(err.error){
          return throwError(err.error)
        }
        if(err.error.errors){
          const serverError=err.error;
          let errorMessage='';
          for(const key in serverError.errors){
            errorMessage+=serverError.errors[key]+'\n';
          }
          return throwError(errorMessage);
        }
        if(err.status===500){
          return throwError(err.error.message);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
    }));
}
}


