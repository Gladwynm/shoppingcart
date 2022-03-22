import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer:UserService,public myrouter:Router) { }

  ngOnInit(): void {
   
  }
  doLogout(){
      localStorage.clear();
      this.myrouter.navigateByUrl("/login");
  }
}
