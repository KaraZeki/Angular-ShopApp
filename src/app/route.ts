import { Routes } from "@angular/router";
import { FriendListComponent } from "./friend-list/friend-list.component";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MessagesComponent } from "./messages/messages.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthGuard } from "./_guards/auth-guard";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";

export const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'members',component:MemberListComponent,canActivate:[AuthGuard]},
  {path:'member/edit',component:MemberEditComponent,resolve:{user:MemberEditResolver},canActivate:[AuthGuard]},
  {path:'members/:id',component:MemberDetailsComponent,resolve:{user:MemberDetailResolver},canActivate:[AuthGuard]},
  {path:'friends',component:FriendListComponent,canActivate:[AuthGuard]},
  {path:'messages',component:MessagesComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotfoundComponent},
];

