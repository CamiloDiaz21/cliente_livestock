import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

export const verticalSlideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0
      })
    ], { optional: true }),

    group([
      query(':leave', [
        animate('400ms ease-in-out', style({
          transform: 'translateY(-100%)',
          opacity: 0
        }))
      ], { optional: true }),

      query(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('400ms ease-in-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ], { optional: true })
    ])
  ])
]);
