import { routes } from './app.routes';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { NotifictionSidebarComponent } from "./notifiction-sidebar/notifiction-sidebar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NotifictionSidebarComponent, SidebarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Aswar';

  ngOnInit(): void {
    initFlowbite();
  }
}
