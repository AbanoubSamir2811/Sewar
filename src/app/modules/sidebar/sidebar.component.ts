import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{
  isActive = false;
  currentActiveButton = 1;

  ngOnInit(): void {
    console.log(localStorage.getItem("number"))
    if(localStorage.getItem("number")){
      this.changeActiveButton(Number(localStorage.getItem("number")))
    }
  }

  changeActiveButton(buttonNumber : number) : void{
    localStorage.setItem("number",buttonNumber.toString())
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
