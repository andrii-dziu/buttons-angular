import { Component, Input} from '@angular/core';

@Component({
  selector: 'ad-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  {
  @Input() class: string = '';
}
