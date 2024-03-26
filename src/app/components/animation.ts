import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn',[
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-35%)',
            }),
            animate('300ms linear',
            style({
                opacity: 1,
                transform: 'translateY(0)',
            }), )
        ]),
    ]);


export const rotacion = 
    trigger('rotacion',[
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'rotate(150deg)',
            }),
        animate('300ms linear',
        style({
            opacity: 1,
            transform: 'rotate(0deg)',
        }), )
    ]),
]);