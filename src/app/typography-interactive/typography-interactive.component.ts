import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-interactive',
  templateUrl: './typography-interactive.component.html',
  styleUrls: ['./typography-interactive.component.css']
})
export class TypographyInteractiveComponent {
  editStr = 'This is an editable text.';
  customEditIconStr = 'Custom edit icon and tooltip text.';
  hideEditTooltipStr = 'Hide edit tooltip.';
  copyStr = 'This is a copyable text.';
}
