import { Component } from '@angular/core';

@Component({
    selector: 'button[appButton]',  // attributre selector button which tell any in app name button with [appButton] have this functionality
    standalone: true,
    templateUrl: './button.component.html',
    styleUrl: './button.component.css'
})
export class ButtonComponent {

} 