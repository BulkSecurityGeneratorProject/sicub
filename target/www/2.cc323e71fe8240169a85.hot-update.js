webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <span> <mat-icon (click)=\\\"sidenav.toggle()\\\" class=\\\"burguer-icon branco-gelo\\\" *ngIf=\\\"isAuthenticated()\\\">menu</mat-icon> </span> <router-outlet name=\\\"navbar\\\"></router-outlet> </div> <mat-sidenav-container> <mat-sidenav #sidenav mode=\\\"over\\\" [(opened)]=\\\"opened\\\" (opened)=\\\"events.push('open!')\\\" (closed)=\\\"events.push('close!')\\\"> <mat-accordion> <mat-expansion-panel> <mat-expansion-panel-header> <mat-panel-title> Personal data </mat-panel-title> </mat-expansion-panel-header> <mat-selection-list role=\\\"option\\\"> <mat-list-option>test1</mat-list-option> <mat-list-option>test2</mat-list-option> <mat-list-option>test3</mat-list-option> <mat-list-option>test4</mat-list-option> </mat-selection-list> </mat-expansion-panel> <mat-expansion-panel (opened)=\\\"panelOpenState = true\\\" (closed)=\\\"panelOpenState = false\\\"> <mat-expansion-panel-header> <mat-panel-title> Self aware panel </mat-panel-title> </mat-expansion-panel-header> <mat-selection-list role=\\\"option\\\"> <mat-list-option>test1</mat-list-option> <mat-list-option>test2</mat-list-option> <mat-list-option>test3</mat-list-option> <mat-list-option>test4</mat-list-option> </mat-selection-list> </mat-expansion-panel> </mat-accordion> </mat-sidenav> <mat-sidenav-content> <div class=\\\"container-fluid\\\"> <div class=\\\"card jh-card\\\"> <router-outlet></router-outlet> <router-outlet name=\\\"popup\\\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> </mat-sidenav-content> </mat-sidenav-container> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxzcGFuPiA8bWF0LWljb24gKGNsaWNrKT1cXFwic2lkZW5hdi50b2dnbGUoKVxcXCIgY2xhc3M9XFxcImJ1cmd1ZXItaWNvbiBicmFuY28tZ2Vsb1xcXCIgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj5tZW51PC9tYXQtaWNvbj4gPC9zcGFuPiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxtYXQtc2lkZW5hdi1jb250YWluZXI+IDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVxcXCJvdmVyXFxcIiBbKG9wZW5lZCldPVxcXCJvcGVuZWRcXFwiIChvcGVuZWQpPVxcXCJldmVudHMucHVzaCgnb3BlbiEnKVxcXCIgKGNsb3NlZCk9XFxcImV2ZW50cy5wdXNoKCdjbG9zZSEnKVxcXCI+IDxtYXQtYWNjb3JkaW9uPiA8bWF0LWV4cGFuc2lvbi1wYW5lbD4gPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPiA8bWF0LXBhbmVsLXRpdGxlPiBQZXJzb25hbCBkYXRhIDwvbWF0LXBhbmVsLXRpdGxlPiA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPiA8bWF0LXNlbGVjdGlvbi1saXN0IHJvbGU9XFxcIm9wdGlvblxcXCI+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDE8L21hdC1saXN0LW9wdGlvbj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0MjwvbWF0LWxpc3Qtb3B0aW9uPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3QzPC9tYXQtbGlzdC1vcHRpb24+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDQ8L21hdC1saXN0LW9wdGlvbj4gPC9tYXQtc2VsZWN0aW9uLWxpc3Q+IDwvbWF0LWV4cGFuc2lvbi1wYW5lbD4gPG1hdC1leHBhbnNpb24tcGFuZWwgKG9wZW5lZCk9XFxcInBhbmVsT3BlblN0YXRlID0gdHJ1ZVxcXCIgKGNsb3NlZCk9XFxcInBhbmVsT3BlblN0YXRlID0gZmFsc2VcXFwiPiA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+IDxtYXQtcGFuZWwtdGl0bGU+IFNlbGYgYXdhcmUgcGFuZWwgPC9tYXQtcGFuZWwtdGl0bGU+IDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+IDxtYXQtc2VsZWN0aW9uLWxpc3Qgcm9sZT1cXFwib3B0aW9uXFxcIj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0MTwvbWF0LWxpc3Qtb3B0aW9uPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3QyPC9tYXQtbGlzdC1vcHRpb24+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDM8L21hdC1saXN0LW9wdGlvbj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0NDwvbWF0LWxpc3Qtb3B0aW9uPiA8L21hdC1zZWxlY3Rpb24tbGlzdD4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsPiA8L21hdC1hY2NvcmRpb24+IDwvbWF0LXNpZGVuYXY+IDxtYXQtc2lkZW5hdi1jb250ZW50PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkIGpoLWNhcmRcXFwiPiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcInBvcHVwXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8amhpLWZvb3Rlcj48L2poaS1mb290ZXI+IDwvZGl2PiA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+IDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})