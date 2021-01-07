import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-icon-iconfont',
  templateUrl: './icon-iconfont.component.html',
  styleUrls: ['./icon-iconfont.component.css']
})
export class IconIconfontComponent {
  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }
}
