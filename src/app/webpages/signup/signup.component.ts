import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  pass;
  conpass;
  flag:boolean=false;
  msg:string="";
  constructor(private router:Router, private http:HttpClient){}
  ngOnInit() {
}
  goto() {
    this.router.navigateByUrl('login');
  }
  reset(){
    if(this.pass!=this.conpass)
    this.username='';
    this.pass='';
    this.conpass='';
    this.flag=false;
    this.msg='';
  }
  signup() {
    if(this.username != '' && this.pass == this.conpass) {
    this.http.get('http://localhost:1234/signup?username=' + this.username + '&password=' + this.pass)
      .subscribe(x => {
        console.log('signup result: ', x);
        if(x['status']=='ok'){ 
          this.username='';
          this.pass='';
          this.conpass='';
          this.flag = true;
          this.msg = "Signup Successful !!"
        }
        else{
          this.flag = true;
          this.msg = "Signup Unsuccessful !!"
        }
      });
  }
  else {
    this.flag = true;
    this.msg = "Passwords do not match !!!";
  }
 }
}