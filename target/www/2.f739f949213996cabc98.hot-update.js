webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <span> <mat-icon (click)=\\\"sidenav.toggle()\\\" class=\\\"burguer-icon branco-gelo\\\" *ngIf=\\\"isAuthenticated()\\\">menu</mat-icon> </span> <router-outlet name=\\\"navbar\\\"></router-outlet> </div> <mat-sidenav-container> <mat-sidenav #sidenav mode=\\\"over\\\" [(opened)]=\\\"opened\\\" (opened)=\\\"events.push('open!')\\\" (closed)=\\\"events.push('close!')\\\"> <mat-accordion> <mat-expansion-panel> <mat-expansion-panel-header> <mat-panel-title> Personal data </mat-panel-title> </mat-expansion-panel-header> <mat-form-field> <a>teste</a> </mat-form-field> <mat-form-field> <input matInput placeholder=\\\"Age\\\"> </mat-form-field> </mat-expansion-panel> <mat-expansion-panel (opened)=\\\"panelOpenState = true\\\" (closed)=\\\"panelOpenState = false\\\"> <mat-expansion-panel-header> <mat-panel-title> Self aware panel </mat-panel-title> <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> </mat-expansion-panel-header> <p>I'm visible because I am open</p> </mat-expansion-panel> </mat-accordion> </mat-sidenav> <mat-sidenav-content> <div class=\\\"container-fluid\\\"> <div class=\\\"card jh-card\\\"> <router-outlet></router-outlet> <router-outlet name=\\\"popup\\\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> </mat-sidenav-content> </mat-sidenav-container> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdzJCQUF3MkIsb0NBQW9DIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8c3Bhbj4gPG1hdC1pY29uIChjbGljayk9XFxcInNpZGVuYXYudG9nZ2xlKClcXFwiIGNsYXNzPVxcXCJidXJndWVyLWljb24gYnJhbmNvLWdlbG9cXFwiICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+bWVudTwvbWF0LWljb24+IDwvc3Bhbj4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwibmF2YmFyXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8bWF0LXNpZGVuYXYtY29udGFpbmVyPiA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cXFwib3ZlclxcXCIgWyhvcGVuZWQpXT1cXFwib3BlbmVkXFxcIiAob3BlbmVkKT1cXFwiZXZlbnRzLnB1c2goJ29wZW4hJylcXFwiIChjbG9zZWQpPVxcXCJldmVudHMucHVzaCgnY2xvc2UhJylcXFwiPiA8bWF0LWFjY29yZGlvbj4gPG1hdC1leHBhbnNpb24tcGFuZWw+IDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1wYW5lbC10aXRsZT4gUGVyc29uYWwgZGF0YSA8L21hdC1wYW5lbC10aXRsZT4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj4gPG1hdC1mb3JtLWZpZWxkPiA8YT50ZXN0ZTwvYT4gPC9tYXQtZm9ybS1maWVsZD4gPG1hdC1mb3JtLWZpZWxkPiA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XFxcIkFnZVxcXCI+IDwvbWF0LWZvcm0tZmllbGQ+IDwvbWF0LWV4cGFuc2lvbi1wYW5lbD4gPG1hdC1leHBhbnNpb24tcGFuZWwgKG9wZW5lZCk9XFxcInBhbmVsT3BlblN0YXRlID0gdHJ1ZVxcXCIgKGNsb3NlZCk9XFxcInBhbmVsT3BlblN0YXRlID0gZmFsc2VcXFwiPiA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+IDxtYXQtcGFuZWwtdGl0bGU+IFNlbGYgYXdhcmUgcGFuZWwgPC9tYXQtcGFuZWwtdGl0bGU+IDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+IEN1cnJlbnRseSBJIGFtIHt7cGFuZWxPcGVuU3RhdGUgPyAnb3BlbicgOiAnY2xvc2VkJ319IDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPiA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPiA8cD5JJ20gdmlzaWJsZSBiZWNhdXNlIEkgYW0gb3BlbjwvcD4gPC9tYXQtZXhwYW5zaW9uLXBhbmVsPiA8L21hdC1hY2NvcmRpb24+IDwvbWF0LXNpZGVuYXY+IDxtYXQtc2lkZW5hdi1jb250ZW50PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkIGpoLWNhcmRcXFwiPiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcInBvcHVwXFxcIj48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PiA8amhpLWZvb3Rlcj48L2poaS1mb290ZXI+IDwvZGl2PiA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+IDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})