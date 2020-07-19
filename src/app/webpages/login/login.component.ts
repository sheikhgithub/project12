import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  pass;
  flag:boolean=false;
  success:boolean=false;
  fail:boolean=false;
  msg:string="";
  constructor(private router:Router, private http:HttpClient){
//   let data={
//   "user":"sudipta",
//   "pass":"sudipta1"
// }
//     this.http
//     .post('http://localhost:1234/login',data)
//     .subscribe(x=>{
//       console.log(x);
//     });
    // this.http.get('http://localhost:1234/number?number=2')
    // .subscribe(x=> {
    //   console.log(x);

    // }); //For get request
  }
  ngOnInit(){
    sessionStorage.clear();
  }
    // let data={
    //   "user":"sudipta",
    //   "pass":"sudipta1"
    // }
    //     this.http
    //     .post('http://localhost:1234/login',data)
    //     .subscribe(x=>{
    //       console.log(x);
    //     }); //For post
    // this.http.get('http://localhost:3000/number?number=2')
    // .subscribe(x=> {
    //   console.log(x);

    // }); //For get
    // ngOnDestroy() {
    //   //Called once, before the instance is destroyed.
    //   //Add 'implements OnDestroy' to the class.
    //   console.log("destroy");
    // }
    goToPage()
    {
      this.router.navigateByUrl('signup');
    }
    abc(){
      if(this.username!='' && this.pass!='')
      this.router.navigateByUrl('details');
    }
    reset(){
      if(this.username!='' && this.pass!='')
      this.username='';
      this.pass='';
      this.success=true;
      this.fail=false;
    }
    error(){
      if(this.username!='admin' && this.pass!='sudipta1')
      this.fail=true;
      this.success=false;
    }
  login() {
    this.http.get('http://localhost:1234/login?username=' + this.username + '&password=' + this.pass)
      .subscribe(x => {
        console.log('login data',x);
        if(x['status']=='ok' && x['data'].length>0){ 
          sessionStorage.setItem('user',this.username);
          this.username='';
          this.pass='';
          this.router.navigateByUrl('details');
        }
        else {
          this.flag=true;
          this.msg="Passwords don't match !!!";
        }
      });
  }
}
    // palin()
    //   // {
    //   //   if(this.test==this.test.split('').reverse().join('')){
    //   //     this.fail=false;
    //   //     this.success=true;  
    //   //   }
    //   //     else{
    //   //     this.success=false;
    //   //     this.fail=true;
    //   //     }
    //   // }
