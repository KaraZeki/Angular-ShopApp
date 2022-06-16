import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model:any={};
  isCollapsed =true;
  userName:any;
  constructor(public authService:AuthService,private route:Router, private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }

  login(){
    try{
      this.authService.login(this.model).subscribe(data=>{
        this.route.navigate(['/members']);
        this.alertifyService.success("Login is success !!");
      },error=>{
        this.alertifyService.error(error);
      }
      );
    }
    catch(error){
      this.alertifyService.error(String(error));
    }

  }

  loggedIn(){
    this.userName=localStorage.getItem("userName");
    return this.authService.loggedIn()
  }
  logout(){
    this.alertifyService.warning("Logged out :(. See you later");
    localStorage.removeItem("token");
    this.route.navigate(['/home']);
  }

}
