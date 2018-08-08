import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth={}
  user=null
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  redirectSignup(){
    this.router.navigate(['signup'])
  }

  login(){
    this.authService.loginUser(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['profile'])
    })
  }
  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['profile'])
  }
  
  
}}
