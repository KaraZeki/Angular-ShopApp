import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   constructor(private authService:AuthService){}
   jwtHelper = new JwtHelperService();

   ngOnInit() {
    const token =localStorage.getItem("token");
    this.authService.decodeToken=this.jwtHelper.decodeToken(token?.toString());
   }
}
