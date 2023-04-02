import { animate, style, transition, trigger } from "@angular/animations";

export const fadeIn = [
  trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateY(80%)'}),
      animate('500ms', style({opacity: 1, transform: 'none'}))
    ])
  ])
];
