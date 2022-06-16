import { Component, OnInit } from '@angular/core';
import { faCoffee, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  public loading=false;
  faCoffee = faCoffee;
  faPlusCircle=faPlusCircle
  users:User[]=[];
  constructor(private userService:UserService,
    private alertify:AlertifyService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.loading=true;
    this.userService.getUsers().subscribe(users=>{
      this.users=users;
      this.loading=false;
    },err=>{
      this.alertify.error(err);
      this.loading=false;
    })
  }

  followUser(user:User){
    this.userService.followUser(user.id,this.authService.decodeToken.nameid).subscribe(data=>{
      this.alertify.success(user.name +" kullanıcı takip edildi.!!")
    },err=>{
      this.alertify.error(err);
    })
  }

}
