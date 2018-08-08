import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule} from "@angular/http"
//Routes
import {routes} from './routes'

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { MainComponent } from './main/main.component';

import { BlogListService} from './services/blog-list.service';
import { BlogService} from './services/blogs.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ProfileComponent,
    LoginComponent,
    BlogPageComponent,
    NavbarComponent,
    MainComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [BlogListService, BlogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
