import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  isShow = false; // example 1

  isUser = false; // example 2 - something to toggle
  isSuperUser = false;  // example 2 - something else to toggle
  isCurrent = false; // example 2 - extra thing to toggle other than user/super

  constructor() { }

  ngOnInit(): void {
  }


}
