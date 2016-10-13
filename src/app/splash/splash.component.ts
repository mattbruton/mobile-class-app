import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})


export class SplashComponent implements OnInit {

  title = "Evening Cohort 3";

  constructor() { }

  ngOnInit() {
  }

}
