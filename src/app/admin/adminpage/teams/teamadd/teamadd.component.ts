import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-teamadd',
  templateUrl: './teamadd.component.html',
  styleUrls: ['../../adminpage.component.css'],
})
export class TeamaddComponent implements OnInit {
  constructor(private renderer:Renderer2) {}

  ngOnInit() {

  }

}
