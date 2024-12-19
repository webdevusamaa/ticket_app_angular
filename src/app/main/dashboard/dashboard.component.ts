import { Component } from '@angular/core';
import { TicketsComponent } from '../tickets/tickets.component';
@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [TicketsComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent { }