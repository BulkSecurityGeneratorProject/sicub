webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <span> <mat-icon (click)=\\\"sidenav.toggle()\\\" class=\\\"burguer-icon branco-gelo\\\" *ngIf=\\\"isAuthenticated()\\\">menu</mat-icon> </span> <router-outlet name=\\\"navbar\\\"></router-outlet> </div> <mat-sidenav-container> <mat-sidenav #sidenav mode=\\\"over\\\" [(opened)]=\\\"opened\\\" (opened)=\\\"events.push('open!')\\\" (closed)=\\\"events.push('close!')\\\" (opened)=\\\"panelOpenState = false\\\"> <mat-accordion> <mat-expansion-panel> <mat-expansion-panel-header> <mat-panel-title> Personal data </mat-panel-title> </mat-expansion-panel-header> <mat-selection-list role=\\\"option\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <mat-list-option>test1</mat-list-option> <mat-list-option>test2</mat-list-option> <mat-list-option>test3</mat-list-option> <mat-list-option>test4</mat-list-option> </mat-selection-list> </mat-expansion-panel> <mat-expansion-panel (opened)=\\\"panelOpenState = true\\\" (closed)=\\\"panelOpenState = false\\\"> <mat-expansion-panel-header> <mat-panel-title> Self aware panel </mat-panel-title> </mat-expansion-panel-header> <mat-selection-list role=\\\"option\\\"> <mat-list-option>test1</mat-list-option> <mat-list-option>test2</mat-list-option> <mat-list-option>test3</mat-list-option> <mat-list-option>test4</mat-list-option> </mat-selection-list> </mat-expansion-panel> </mat-accordion> </mat-sidenav> <mat-sidenav-content> <div class=\\\"container-fluid\\\"> <div class=\\\"card jh-card\\\"> <router-outlet></router-outlet> <router-outlet name=\\\"popup\\\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> </mat-sidenav-content> </mat-sidenav-container> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaW9CQUFpb0IsWUFBWSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPHNwYW4+IDxtYXQtaWNvbiAoY2xpY2spPVxcXCJzaWRlbmF2LnRvZ2dsZSgpXFxcIiBjbGFzcz1cXFwiYnVyZ3Vlci1pY29uIGJyYW5jby1nZWxvXFxcIiAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPm1lbnU8L21hdC1pY29uPiA8L3NwYW4+IDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcIm5hdmJhclxcXCI+PC9yb3V0ZXItb3V0bGV0PiA8L2Rpdj4gPG1hdC1zaWRlbmF2LWNvbnRhaW5lcj4gPG1hdC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XFxcIm92ZXJcXFwiIFsob3BlbmVkKV09XFxcIm9wZW5lZFxcXCIgKG9wZW5lZCk9XFxcImV2ZW50cy5wdXNoKCdvcGVuIScpXFxcIiAoY2xvc2VkKT1cXFwiZXZlbnRzLnB1c2goJ2Nsb3NlIScpXFxcIiAob3BlbmVkKT1cXFwicGFuZWxPcGVuU3RhdGUgPSBmYWxzZVxcXCI+IDxtYXQtYWNjb3JkaW9uPiA8bWF0LWV4cGFuc2lvbi1wYW5lbD4gPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPiA8bWF0LXBhbmVsLXRpdGxlPiBQZXJzb25hbCBkYXRhIDwvbWF0LXBhbmVsLXRpdGxlPiA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPiA8bWF0LXNlbGVjdGlvbi1saXN0IHJvbGU9XFxcIm9wdGlvblxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0MTwvbWF0LWxpc3Qtb3B0aW9uPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3QyPC9tYXQtbGlzdC1vcHRpb24+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDM8L21hdC1saXN0LW9wdGlvbj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0NDwvbWF0LWxpc3Qtb3B0aW9uPiA8L21hdC1zZWxlY3Rpb24tbGlzdD4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsPiA8bWF0LWV4cGFuc2lvbi1wYW5lbCAob3BlbmVkKT1cXFwicGFuZWxPcGVuU3RhdGUgPSB0cnVlXFxcIiAoY2xvc2VkKT1cXFwicGFuZWxPcGVuU3RhdGUgPSBmYWxzZVxcXCI+IDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1wYW5lbC10aXRsZT4gU2VsZiBhd2FyZSBwYW5lbCA8L21hdC1wYW5lbC10aXRsZT4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1zZWxlY3Rpb24tbGlzdCByb2xlPVxcXCJvcHRpb25cXFwiPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3QxPC9tYXQtbGlzdC1vcHRpb24+IDxtYXQtbGlzdC1vcHRpb24+dGVzdDI8L21hdC1saXN0LW9wdGlvbj4gPG1hdC1saXN0LW9wdGlvbj50ZXN0MzwvbWF0LWxpc3Qtb3B0aW9uPiA8bWF0LWxpc3Qtb3B0aW9uPnRlc3Q0PC9tYXQtbGlzdC1vcHRpb24+IDwvbWF0LXNlbGVjdGlvbi1saXN0PiA8L21hdC1leHBhbnNpb24tcGFuZWw+IDwvbWF0LWFjY29yZGlvbj4gPC9tYXQtc2lkZW5hdj4gPG1hdC1zaWRlbmF2LWNvbnRlbnQ+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IDwvbWF0LXNpZGVuYXYtY29udGVudD4gPC9tYXQtc2lkZW5hdi1jb250YWluZXI+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})