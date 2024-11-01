import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-button-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule, SidebarComponent],
  templateUrl: './button-sidebar.component.html',
  styleUrl: './button-sidebar.component.scss'
})
export class ButtonSidebarComponent {
  animateHide(){
    console.log("first")
    document.getElementById("sidebar-modal")?.classList.add("animate__fadeOutRight")
    setTimeout(() => {
      document.getElementById("sidebar-modal")?.setAttribute("data-modal-hide","sidebar-modal")
      console.log("hidden")
      console.log(document.querySelector('body'))
      document.querySelector('body')?.classList.remove("overflow-hidden")
    }, 300);
  }
}
