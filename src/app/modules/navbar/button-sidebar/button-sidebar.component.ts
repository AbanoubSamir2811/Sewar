import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-button-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule, SidebarComponent],
  templateUrl: './button-sidebar.component.html',
  styleUrl: './button-sidebar.component.scss'
})
export class ButtonSidebarComponent {
  animteClick(){
    document.getElementById("default-modal")?.classList.add("animate__fadeOutRight")
  }
}
