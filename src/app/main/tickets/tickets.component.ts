import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlsComponent } from '../../shared/controls/controls.component';


@Component({
    selector: 'app-tickets',
    standalone: true,
    imports: [ButtonComponent, ControlsComponent],
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css'
})
export class TicketsComponent {

} 