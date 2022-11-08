import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){

    this.auth.login().subscribe( data=> {
      console.log(data);

      if(data.id){
        this.router.navigate(['./heroes'])
      }
    })

  }

}
