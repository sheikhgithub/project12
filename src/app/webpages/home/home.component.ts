import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit() {
  }
  goToLogin() {
    this.router.navigateByUrl('login');
  }
  goToSignup() {
    this.router.navigateByUrl('signup');
  }
  goToDep(){
    this.router.navigateByUrl('department');
  }
  // goToPage() {
  //   this.router.navigateByUrl('signup');
  // }
}
