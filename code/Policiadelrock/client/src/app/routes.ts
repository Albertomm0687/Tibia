import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MainComponent } from './main/main.component';



export const routes: Routes = [
    // {path:'', redirectTo: 'home', pathMatch: 'full' },
    {path:'', component: MainComponent},
    {
        path:'signup',
        component: SignupFormComponent
    },{
        path:'login',
        component: LoginComponent
    },{
        path:'profile',
        component: ProfileComponent
    },
    {
        path:'blog-page',
        component: BlogPageComponent
    },
    {
        path:'blog-page/:id',
        component: BlogDetailComponent
    }
]