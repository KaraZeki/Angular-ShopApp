import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="http://localhost:5000/api/auth/";
  jwtHelper = new JwtHelperService();
  decodeToken:any;
  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl+"Login",model).pipe(
      map((response:any)=>{
        const result=response;
        if(result){
          localStorage.setItem("token",result.token);
          localStorage.setItem("userName",result.userName);

          this.decodeToken=this.jwtHelper.decodeToken(result.token);
        }
      })
    )
  }

  register(model:any){
    return this.http.post(this.baseUrl+"Register",model);
  }

loggedIn(){
  const token:any=localStorage.getItem("token");
  return  !this.jwtHelper.isTokenExpired(token);
}

logout(){
  localStorage.removeItem("token");
}


}
