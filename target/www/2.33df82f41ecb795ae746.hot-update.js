webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <span> <mat-icon (click)=\\\"sidenav.toggle()\\\" class=\\\"burguer-icon branco-gelo\\\" *ngIf=\\\"isAuthenticated()\\\">menu</mat-icon> </span> <router-outlet name=\\\"navbar\\\"></router-outlet> </div> <mat-sidenav-container> <mat-sidenav #sidenav mode=\\\"over\\\" [(opened)]=\\\"opened\\\" (opened)=\\\"events.push('open!')\\\" (closed)=\\\"events.push('close!')\\\"> <mat-accordion> <mat-expansion-panel> <mat-expansion-panel-header> <mat-panel-title> Personal data </mat-panel-title> </mat-expansion-panel-header> <mat-form-field> </mat-form-field> <mat-form-field> <input matInput placeholder=\\\"Age\\\"> </mat-form-field> </mat-expansion-panel> <mat-expansion-panel (opened)=\\\"panelOpenState = true\\\" (closed)=\\\"panelOpenState = false\\\"> <mat-expansion-panel-header> <mat-panel-title> Self aware panel </mat-panel-title> <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> </mat-expansion-panel-header> <p>I'm visible because I am open</p> </mat-expansion-panel> </mat-accordion> </mat-sidenav> <mat-sidenav-content> <div class=\\\"container-fluid\\\"> <div class=\\\"card jh-card\\\"> <router-outlet></router-outlet> <router-outlet name=\\\"popup\\\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> </mat-sidenav-content> </mat-sidenav-container> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMjFCQUEyMUIsb0NBQW9DIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8c3Bhbj4gPG1hdC1pY29uIChjbGljayk9XFxcInNpZGVuYXYudG9nZ2xlKClcXFwiIGNsYXNzPVxcXCJidXJndWVyLWljb24gYnJhbmNvLWdlbG9cXFwiICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+bWVudTwvbWF0LWljb24+IDwvc3Bhbj4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwibmF2YmFyXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8bWF0LXNpZGVuYXYtY29udGFpbmVyPiA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cXFwib3ZlclxcXCIgWyhvcGVuZWQpXT1cXFwib3BlbmVkXFxcIiAob3BlbmVkKT1cXFwiZXZlbnRzLnB1c2goJ29wZW4hJylcXFwiIChjbG9zZWQpPVxcXCJldmVudHMucHVzaCgnY2xvc2UhJylcXFwiPiA8bWF0LWFjY29yZGlvbj4gPG1hdC1leHBhbnNpb24tcGFuZWw+IDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1wYW5lbC10aXRsZT4gUGVyc29uYWwgZGF0YSA8L21hdC1wYW5lbC10aXRsZT4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1mb3JtLWZpZWxkPiA8L21hdC1mb3JtLWZpZWxkPiA8bWF0LWZvcm0tZmllbGQ+IDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cXFwiQWdlXFxcIj4gPC9tYXQtZm9ybS1maWVsZD4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsPiA8bWF0LWV4cGFuc2lvbi1wYW5lbCAob3BlbmVkKT1cXFwicGFuZWxPcGVuU3RhdGUgPSB0cnVlXFxcIiAoY2xvc2VkKT1cXFwicGFuZWxPcGVuU3RhdGUgPSBmYWxzZVxcXCI+IDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1wYW5lbC10aXRsZT4gU2VsZiBhd2FyZSBwYW5lbCA8L21hdC1wYW5lbC10aXRsZT4gPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj4gQ3VycmVudGx5IEkgYW0ge3twYW5lbE9wZW5TdGF0ZSA/ICdvcGVuJyA6ICdjbG9zZWQnfX0gPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+IDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+IDxwPkknbSB2aXNpYmxlIGJlY2F1c2UgSSBhbSBvcGVuPC9wPiA8L21hdC1leHBhbnNpb24tcGFuZWw+IDwvbWF0LWFjY29yZGlvbj4gPC9tYXQtc2lkZW5hdj4gPG1hdC1zaWRlbmF2LWNvbnRlbnQ+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IDwvbWF0LXNpZGVuYXYtY29udGVudD4gPC9tYXQtc2lkZW5hdi1jb250YWluZXI+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})