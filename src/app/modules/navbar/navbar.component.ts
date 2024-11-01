import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { routes } from '../../app.routes';
import { ButtonSidebarComponent } from "./button-sidebar/button-sidebar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgFor, ButtonSidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Corrected `styleUrl` to `styleUrls`
})
export class NavbarComponent {
  titles: string[] | undefined;
  currentPath: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.checkRouteAndGetCategory();
    this.getPathOnChange(); // Call to detect path changes
  }

  // checkRouteAndGetCategory() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     map(() => this.activatedRoute),
  //     map(route => {
  //       while (route.firstChild) route = route.firstChild;
  //       return route;
  //     }),
  //     filter(route => route.outlet === 'primary'),
  //     mergeMap(route => route.data)
  //   ).subscribe(data => this.title = data['title']);
  // }

  // // Recursive function to print routes
  // printRoutes(routes: any, parentPath: string = '') {
  //   routes.forEach((route: { path: any; data: { title: any; }; loadChildren: () => any; }) => {
  //     const fullPath = `${route.path}`.replace(/\/+/g, '/');
  //     console.log(`Path: ${fullPath}, Title: ${route.data?.title || 'No title'}`);

  //     // Check if the route has children and load them recursively
  //     if (typeof route.loadChildren === 'function') {
  //       const childRoutes = route.loadChildren();
  //       if (Array.isArray(childRoutes)) {
  //         this.printRoutes(childRoutes, fullPath);
  //       }
  //     }
  //   });
  // }

  getPathOnChange() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects;
        console.log(`Current Path: ${this.currentPath}`);
        this.pathSplit(this.currentPath)
      });
  }

  pathSplit(path:string){
    this.titles=path.split('/')
    console.log(this.titles)
    this.titles.shift()
    this.titles.reverse()
    if(this.titles[0] == ""){
      this.titles = ["home"];
    }
  }
}
