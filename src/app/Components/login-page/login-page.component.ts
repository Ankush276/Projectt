import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private eservice:UsersService){}

  ngOnInit(): void {}

  loginDetails={
    username:'',
    password:'',
  }

  isUserValid:boolean=false;

  EnterUser(){this.eservice.loginUser([this.loginDetails.username,this.loginDetails.password]).subscribe(
    res=>
    {
      if(res=='Failure')
      {
        this.isUserValid=false;
        alert('Login Unsuccessful');
      }else{
        this.isUserValid=true;
        alert('Login Successful');
      }
    }
  );}

  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });
  // Validators.username
  get Username(){
    // return this.loginForm.get('username') as FormControl;
    return this.loginDetails.username;
  }

  get Password(){
    // return this.loginForm.get('password') as FormControl;
    return this.loginDetails.password;
  }

  // get Password():FormControl{
  //   return this.loginForm.get('password') as FormControl;
  // }

}
