webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <span> <mat-icon (click)=\\\"sidenav.toggle()\\\" class=\\\"burguer-icon branco-gelo\\\" *ngIf=\\\"isAuthenticated()\\\">menu</mat-icon> </span> <router-outlet name=\\\"navbar\\\"></router-outlet> </div> <mat-sidenav-container [ngSwitch]=\\\"isAuthenticated()\\\"> <mat-sidenav #sidenav mode=\\\"over\\\" [(opened)]=\\\"opened\\\" (opened)=\\\"events.push('open!')\\\" (closed)=\\\"events.push('close!')\\\" (opened)=\\\"panelOpenState = false\\\"> <mat-list class=\\\"nav-item\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span> <i class=\\\"fa fa-home\\\" aria-hidden=\\\"true\\\"></i> <span jhiTranslate=\\\"global.menu.home\\\">Home</span> </span> </a> </mat-list> <mat-list> <li *ngSwitchCase=\\\"true\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"entity-menu\\\"> <span> <i class=\\\"fa fa-th-list\\\" aria-hidden=\\\"true\\\"></i> <span jhiTranslate=\\\"global.menu.entities.main\\\"> Entities </span> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> </ul> </li> </mat-list> <mat-accordion> <mat-expansion-panel> <mat-expansion-panel-header *ngSwitchCase=\\\"true\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <mat-panel-title> <span jhiTranslate=\\\"global.menu.entities.main\\\"> Entities </span> </mat-panel-title> </mat-expansion-panel-header> <mat-selection-list role=\\\"option\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <mat-list-option>test1</mat-list-option> <mat-list-option>test2</mat-list-option> <mat-list-option>test3</mat-list-option> <mat-list-option>test4</mat-list-option> </mat-selection-list> </mat-expansion-panel> <mat-expansion-panel (opened)=\\\"panelOpenState = true\\\" (closed)=\\\"panelOpenState = false\\\"> <mat-expansion-panel-header> <mat-panel-title> Self aware panel </mat-panel-title> </mat-expansion-panel-header> <mat-selection-list role=\\\"option\\\"> <mat-list-option>test1</mat-list-option> <mat-list-option>test2</mat-list-option> <mat-list-option>test3</mat-list-option> <mat-list-option>test4</mat-list-option> </mat-selection-list> </mat-expansion-panel> </mat-accordion> </mat-sidenav> <mat-sidenav-content> <div class=\\\"container-fluid\\\"> <div class=\\\"card jh-card\\\"> <router-outlet></router-outlet> <router-outlet name=\\\"popup\\\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> </mat-sidenav-content> </mat-sidenav-container> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdWdCQUF1Z0IsWUFBWSw4VkFBOFYsWUFBWSxzRkFBc0YsMFhBQTBYLFlBQVksdU9BQXVPLFlBQVkiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxzcGFuPiA8bWF0LWljb24gKGNsaWNrKT1cXFwic2lkZW5hdi50b2dnbGUoKVxcXCIgY2xhc3M9XFxcImJ1cmd1ZXItaWNvbiBicmFuY28tZ2Vsb1xcXCIgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj5tZW51PC9tYXQtaWNvbj4gPC9zcGFuPiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxtYXQtc2lkZW5hdi1jb250YWluZXIgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cXFwib3ZlclxcXCIgWyhvcGVuZWQpXT1cXFwib3BlbmVkXFxcIiAob3BlbmVkKT1cXFwiZXZlbnRzLnB1c2goJ29wZW4hJylcXFwiIChjbG9zZWQpPVxcXCJldmVudHMucHVzaCgnY2xvc2UhJylcXFwiIChvcGVuZWQpPVxcXCJwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlXFxcIj4gPG1hdC1saXN0IGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmhvbWVcXFwiPkhvbWU8L3NwYW4+IDwvc3Bhbj4gPC9hPiA8L21hdC1saXN0PiA8bWF0LWxpc3Q+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImVudGl0eS1tZW51XFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmVudGl0aWVzLm1haW5cXFwiPiBFbnRpdGllcyA8L3NwYW4+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPC91bD4gPC9saT4gPC9tYXQtbGlzdD4gPG1hdC1hY2NvcmRpb24+IDxtYXQtZXhwYW5zaW9uLXBhbmVsPiA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPG1hdC1wYW5lbC10aXRsZT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5lbnRpdGllcy5tYWluXFxcIj4gRW50aXRpZXMgPC9zcGFuPiA8L21hdC1wYW5lbC10aXRsZT4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1zZWxlY3Rpb24tbGlzdCByb2xlPVxcXCJvcHRpb25cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDE8L21hdC1saXN0LW9wdGlvbj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0MjwvbWF0LWxpc3Qtb3B0aW9uPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3QzPC9tYXQtbGlzdC1vcHRpb24+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDQ8L21hdC1saXN0LW9wdGlvbj4gPC9tYXQtc2VsZWN0aW9uLWxpc3Q+IDwvbWF0LWV4cGFuc2lvbi1wYW5lbD4gPG1hdC1leHBhbnNpb24tcGFuZWwgKG9wZW5lZCk9XFxcInBhbmVsT3BlblN0YXRlID0gdHJ1ZVxcXCIgKGNsb3NlZCk9XFxcInBhbmVsT3BlblN0YXRlID0gZmFsc2VcXFwiPiA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+IDxtYXQtcGFuZWwtdGl0bGU+IFNlbGYgYXdhcmUgcGFuZWwgPC9tYXQtcGFuZWwtdGl0bGU+IDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+IDxtYXQtc2VsZWN0aW9uLWxpc3Qgcm9sZT1cXFwib3B0aW9uXFxcIj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0MTwvbWF0LWxpc3Qtb3B0aW9uPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3QyPC9tYXQtbGlzdC1vcHRpb24+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDM8L21hdC1saXN0LW9wdGlvbj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0NDwvbWF0LWxpc3Qtb3B0aW9uPiA8L21hdC1zZWxlY3Rpb24tbGlzdD4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsPiA8L21hdC1hY2NvcmRpb24+IDwvbWF0LXNpZGVuYXY+IDxtYXQtc2lkZW5hdi1jb250ZW50PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkIGpoLWNhcmRcXFwiPiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcInBvcHVwXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8amhpLWZvb3Rlcj48L2poaS1mb290ZXI+IDwvZGl2PiA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+IDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})