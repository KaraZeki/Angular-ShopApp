import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model:any={};
  constructor(private authService:AuthService,
    private alertify:AlertifyService,
    private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
     this.alertify.success("Kullanıcı Oluşturuldu")
    },
     error=>{
      this.alertify.error(error)
    },()=>{
      this.authService.login(this.model).subscribe(data=>{
      this.route.navigate(['/members'])
      })
    });
  }
}
