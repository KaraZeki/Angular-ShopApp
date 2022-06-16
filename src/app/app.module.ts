import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { AuthGuard } from './_guards/auth-guard';
import { ErrorInterceptor } from './_services/error.intercaptor';
import { JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { TimeagoModule } from 'ngx-timeago';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    RegisterComponent,
    HomeComponent,
    FriendListComponent,
    MemberListComponent,
    MessagesComponent,
    NotfoundComponent,
    MemberDetailsComponent,
    PhotoGalleryComponent,
    MemberEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["localhost:5000/api/auth"],
      },
    }),
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    TimeagoModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#104989",
      secondaryColour: "#104989",
      tertiaryColour: "#104989",
    })
  ],
  providers: [
    AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
    },
    MemberEditResolver,
    MemberDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
