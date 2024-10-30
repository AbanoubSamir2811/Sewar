import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  query,
  stagger,
} from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TitlesService } from '../titles.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isActive = false;
  currentActiveButton = 1;
  labels;
  constructor(private titleService: TitlesService) {
    this.labels = titleService.labels;
  }

  changeActiveButton(buttonNumber : number) : void{
    if(this.currentActiveButton < buttonNumber){
      for(let i = this.currentActiveButton; i<= buttonNumber; i++){
        var timeOut = i - this.currentActiveButton;
        if(timeOut == 0){
          this.currentActiveButton = i;
        }
        else {
          setTimeout(() => {
            this.currentActiveButton = i;
          }, timeOut * 60);
        }
      }
    }


    if(this.currentActiveButton > buttonNumber){
      debugger;
      for(let i = this.currentActiveButton - 1; i >= buttonNumber; i--){
        var timeOut = this.currentActiveButton - i;
        if(timeOut == 0){
          this.currentActiveButton = i;
        }
        else {
          setTimeout(() => {
            this.currentActiveButton = i;
          }, timeOut * 60);
        }
      }
    }
    //this.currentActiveButton = buttonNumber;
  }
}
