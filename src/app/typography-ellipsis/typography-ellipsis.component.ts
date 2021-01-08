import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-ellipsis',
  templateUrl: './typography-ellipsis.component.html'
})
export class TypographyEllipsisComponent {
  dynamicContent =
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team. ' +
    'Ant Design, a design language for background applications, is refined by Ant UED Team.';

  onChange(event: string): void {
    this.dynamicContent = event;
  }
}
