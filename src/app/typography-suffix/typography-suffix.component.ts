import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-suffix',
  templateUrl: './typography-suffix.component.html'
})
export class TypographySuffixComponent {
  content =
    'To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of ' +
    'outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; ' +
    'No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, ' +
    "'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! " +
    'For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. ' +
    "There 's the respect That makes calamity of so long life";

  suffix = '--William Shakespeare';
  rows = 1;

  onEllipsisChange(ellipsis: boolean): void {console.log(ellipsis);}
} 
