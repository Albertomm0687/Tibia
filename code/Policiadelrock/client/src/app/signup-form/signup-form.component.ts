import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  password = false
  isLogged = true
  auth = {password:"",password2:""}
  user = null
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
    this.authService.signupUser(this.auth)
    .subscribe(user=>{
      this.user=user
      this.router.navigate(['profile'])
    })
  }

  redirectLogin(){
    this.router.navigate(['login'])
  }

  passwordCorrect(){
    console.log(this.auth.password2)
    if (this.auth.password==this.auth.password2){return this.password= false}
    return this.password= true

  }

  ngOnInit() {
  }

}
