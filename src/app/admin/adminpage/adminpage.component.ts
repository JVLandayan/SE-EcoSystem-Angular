import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  constructor(public router: Router, private route: ActivatedRoute) {}
  activatedComponent = new Subject<any>();
  activepage = '';

  ngOnInit(): void {}

  active = false;

  routeState() {
    this.activatedComponent.next();
  }
}
