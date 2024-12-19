import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './main/server-status/server-status.component';
import { TrafficComponent } from './main/traffic/traffic.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DashboardItemComponent } from './main/dashborad-item/dashboard-item.component';
import { TicketsComponent } from './main/tickets/tickets.component';
import { ButtonComponent } from './shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, DashboardComponent, DashboardItemComponent, TicketsComponent, ButtonComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {


}
