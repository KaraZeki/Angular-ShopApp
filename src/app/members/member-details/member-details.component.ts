import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

   user!:User;
   followText:string="Takip Et";
   isFollower:boolean=false;
  constructor(private userService:UserService,
    private alertify:AlertifyService,
    private route:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.user=data['user'];
      this.isFollowUser(this.user.id,this.authService.decodeToken.nameid);
    })
  }

  followUser(id:number){
    this.userService.followUser(id,this.authService.decodeToken.nameid).subscribe(data=>{
      this.alertify.success(this.user.name +" kullanıcı takip edildi.!!")
      this.followText="Takibi Brak";
      this.isFollower=true;
    },err=>{
      this.alertify.error(err);
    })
  }
  isFollowUser(id:number,followerId:number){
    this.userService.isFollowUser(id,followerId).subscribe(data=>{
     this.isFollower=data;
     if(data){
      this.followText="Takibi Brak"
     }

    })
  }

  unFollowUser(id:number){
    this.userService.unFollowUser(id,this.authService.decodeToken.nameid).subscribe(data=>{
      this.alertify.warning(this.user.name +" kullancısı takipten çıkarıldı.")
      this.followText="Takip Et";
      this.isFollower=false;
    },err=>{
      this.alertify.error(err);
    })
  }

}
