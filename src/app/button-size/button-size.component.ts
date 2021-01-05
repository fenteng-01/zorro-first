import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-button-size',
  templateUrl: './button-size.component.html',
  styleUrls: ['./button-size.component.css']
})

export class ButtonSizeComponent {
  size: NzButtonSize = 'large';
}
