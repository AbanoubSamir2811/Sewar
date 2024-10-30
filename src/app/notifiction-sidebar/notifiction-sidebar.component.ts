import { Component } from '@angular/core';
import { NotificationCardComponent } from "../notification-card/notification-card.component";

@Component({
  selector: 'app-notifiction-sidebar',
  standalone: true,
  imports: [NotificationCardComponent],
  templateUrl: './notifiction-sidebar.component.html',
  styleUrl: './notifiction-sidebar.component.scss'
})
export class NotifictionSidebarComponent {

}
