import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const authRouteAnimation = trigger('authRouteAnimation', [
  transition('* <=> *', [
    style({ position: 'relative'}),
    query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, width: '100%'}), { optional: true }),
    query(':enter', style({opacity: 0, transform: 'translateY(100px)'}), { optional: true }),
    query(':leave', style({opacity: 1, transform: 'translateY(0)'}), { optional: true }),
    group([
      query(':leave', animate('500ms ease', style({opacity: 0, transform: 'translateY(-100px)'})), { optional: true }),
      query(':enter', animate('500ms 300ms ease', style({opacity: 1, transform: 'translateY(0)'})), { optional: true }),
    ])
  ]),
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0 }))
  ])
]);
