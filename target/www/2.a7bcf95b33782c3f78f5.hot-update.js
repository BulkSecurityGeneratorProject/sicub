webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <span> <mat-icon (click)=\\\"sidenav.toggle()\\\" class=\\\"burguer-icon branco-gelo\\\" *ngIf=\\\"isAuthenticated()\\\">menu</mat-icon> </span> <router-outlet name=\\\"navbar\\\"></router-outlet> </div> <mat-sidenav-container> <mat-sidenav #sidenav mode=\\\"over\\\" [(opened)]=\\\"opened\\\" (opened)=\\\"events.push('open!')\\\" (closed)=\\\"events.push('close!')\\\"> <mat-list> <h3 matSubheader>Folders</h3> <mat-list-item> <mat-icon matListIcon>folder</mat-icon> <h4 matLine>2</h4> <p matLine class=\\\"demo-2\\\"> 3 </p> </mat-list-item> <mat-divider></mat-divider> <h3 matSubheader>Notes</h3> <mat-list-item> <mat-icon matListIcon>note</mat-icon> <h4 matLine>4</h4> <p matLine class=\\\"demo-2\\\"> 5 </p> </mat-list-item> </mat-list> </mat-sidenav> <mat-sidenav-content> <div class=\\\"container-fluid\\\"> <div class=\\\"card jh-card\\\"> <router-outlet></router-outlet> <router-outlet name=\\\"popup\\\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> </mat-sidenav-content> </mat-sidenav-container> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxzcGFuPiA8bWF0LWljb24gKGNsaWNrKT1cXFwic2lkZW5hdi50b2dnbGUoKVxcXCIgY2xhc3M9XFxcImJ1cmd1ZXItaWNvbiBicmFuY28tZ2Vsb1xcXCIgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj5tZW51PC9tYXQtaWNvbj4gPC9zcGFuPiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxtYXQtc2lkZW5hdi1jb250YWluZXI+IDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVxcXCJvdmVyXFxcIiBbKG9wZW5lZCldPVxcXCJvcGVuZWRcXFwiIChvcGVuZWQpPVxcXCJldmVudHMucHVzaCgnb3BlbiEnKVxcXCIgKGNsb3NlZCk9XFxcImV2ZW50cy5wdXNoKCdjbG9zZSEnKVxcXCI+IDxtYXQtbGlzdD4gPGgzIG1hdFN1YmhlYWRlcj5Gb2xkZXJzPC9oMz4gPG1hdC1saXN0LWl0ZW0+IDxtYXQtaWNvbiBtYXRMaXN0SWNvbj5mb2xkZXI8L21hdC1pY29uPiA8aDQgbWF0TGluZT4yPC9oND4gPHAgbWF0TGluZSBjbGFzcz1cXFwiZGVtby0yXFxcIj4gMyA8L3A+IDwvbWF0LWxpc3QtaXRlbT4gPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+IDxoMyBtYXRTdWJoZWFkZXI+Tm90ZXM8L2gzPiA8bWF0LWxpc3QtaXRlbT4gPG1hdC1pY29uIG1hdExpc3RJY29uPm5vdGU8L21hdC1pY29uPiA8aDQgbWF0TGluZT40PC9oND4gPHAgbWF0TGluZSBjbGFzcz1cXFwiZGVtby0yXFxcIj4gNSA8L3A+IDwvbWF0LWxpc3QtaXRlbT4gPC9tYXQtbGlzdD4gPC9tYXQtc2lkZW5hdj4gPG1hdC1zaWRlbmF2LWNvbnRlbnQ+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IDwvbWF0LXNpZGVuYXYtY29udGVudD4gPC9tYXQtc2lkZW5hdi1jb250YWluZXI+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})