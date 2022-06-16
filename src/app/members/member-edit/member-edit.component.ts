import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {

  user!: User;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private authService: AuthService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.user=data['user'];
    })
  }
  updateUser() {
    this.userService.updateUser(this.authService.decodeToken.nameid, this.user)
    .subscribe(()=> {
      this.alertify.success("profiliniz güncellendi.");
    }, err => {
      this.alertify.error(err);
    })
  }

}
