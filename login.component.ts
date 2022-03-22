  import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  msg: string
  loginForm: FormGroup
  form: any;
  
  constructor(public userSer :UserService, public myRouter :Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'Username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'Password': new FormControl(null, [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")])
    });

    $('.toggle').click(() => {
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });
  }

  doRegister(form: NgForm) {
  
    this.userSer.userRegistration(form.value).subscribe({next: (data:string)=>{
  console.log(data);
  this.msg=data;
  form.reset();
    }, error: (error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";

    }});
  }

  //doUsercheck(form: NgForm){
  // this.userSer.userNamecheck(form.value).subscribe
 // }
  doLogin() {
   // console.log(this.loginForm.value);
   this.userSer.userLogin(this.loginForm.value).subscribe({next: (data:string)=>{
     console.log(data);
     if(data.length==0){
       this.msg="Invalid Log";
     }
     else{
       localStorage.setItem("loginuser",data)
       this.myRouter.navigateByUrl("/")
     }
   },error: (error:any)=>{
     console.log(error);
     this.msg="Something Went Wrong";
   }})
  }

}

