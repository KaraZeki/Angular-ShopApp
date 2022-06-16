import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { User } from "../_models/user";
import { AlertifyService } from "../_services/alertify.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";


@Injectable()
export class MemberDetailResolver implements Resolve<User>{

  constructor(private route: Router,
    private userService: UserService,
    private alertify: AlertifyService,
    private authService: AuthService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
            return this.userService.getUser(route.params['id'])
            .pipe(catchError(err=>{
              this.alertify.error("Server error ")
              this.route.navigate(['/members']);
              return of();
            }))
       }
}
