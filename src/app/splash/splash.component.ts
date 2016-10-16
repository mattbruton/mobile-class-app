import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})


export class SplashComponent implements OnInit {

  title = "Evening Cohort";
  three = "Three"

  constructor() { }

  ngOnInit() {
  }

}
