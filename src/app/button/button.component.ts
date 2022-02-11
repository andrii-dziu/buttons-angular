import { Component, Input, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'ad-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}
  

  ngOnInit(): void {}
}
