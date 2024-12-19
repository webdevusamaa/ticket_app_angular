import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-controls',  // attributre selector button which tell any in app name button with [appButton] have this functionality
    standalone: true,
    templateUrl: './controls.component.html',
    styleUrl: './controls.component.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        class : 'control',
        // '(click)' : 'onClick()',
    },
})
export class ControlsComponent {
label = input.required<string>();
@HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse entered the element!')
}
} 