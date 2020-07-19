import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
  }
  logout() {
    this.router.navigateByUrl('home');
  }
  gotonotice(){
    this.router.navigateByUrl('notice');
  }
}
