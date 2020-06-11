import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  humanity = '46'
  feelslike='50'
  degree='25'
  day='Monday'
  wind='N at 11 mph'
  figure="figure2"


  ngOnInit(): void {
  }

  ChangeMon() {
    this.humanity = '46'
    this.feelslike ='50'
    this.degree='25'
    this.day='Monday'
    this.wind=' N at 11 mph'
    this.figure='figure2'
  }
  ChangeTue(){
    this.humanity = '54'
    this.feelslike ='32'
    this.degree='33'
    this.day='Tuesday'
    this.wind='S at 16 mph'
    this.figure='figure'
  }
  ChangeWed(){
    this.humanity = '45'
    this.feelslike ='42'
    this.degree='14'
    this.day='Wednesday'
    this.wind='NS at 20 mph'
    this.figure='figure3'
  }
  ChangeThu(){
    this.humanity = '33'
    this.feelslike ='43'
    this.degree='23'
    this.day='Thursday'
    this.wind='SW at 14 mph'
    this.figure='figure2'
  }
  ChangeFri(){
    this.humanity = '51'
    this.feelslike ='44'
    this.degree='24'
    this.day='Friday'
    this.wind='E at 5 mph'
    this.figure='figure'
  }
  ChangeSat(){
    this.humanity = '44'
    this.feelslike ='23'
    this.degree='18'
    this.day='Saturday'
    this.wind='SE at 10 mph'
    this.figure='figure2'
  }
  ChangeSun(){
    this.humanity = '54'
    this.feelslike ='48'
    this.degree='25'
    this.day='Sunday'
    this.wind='NW at 14 mph'
    this.figure='figure'
  }
}
