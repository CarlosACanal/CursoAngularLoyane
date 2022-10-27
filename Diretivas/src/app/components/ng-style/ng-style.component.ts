import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  active: boolean = false;
  fontSize: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
