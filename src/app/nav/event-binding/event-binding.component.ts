import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  message = "Some Text";
  secondMessage = "";

  onClick() {
    this.message = "Different Text Appears from Click";
  }

  onKey() {
    this.secondMessage = "I dont care what you type, I only produce this message";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
