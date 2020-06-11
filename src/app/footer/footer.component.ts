import { Component, OnInit } from '@angular/core';
import {Data} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 footDate: Data = new Date();
 
  ngOnInit(): void {
  }

}
