webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <nav> <mat-toolbar color=\\\"primary\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"jh-logo-container float-left\\\"> <a class=\\\"navbar-brand logo float-left\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span class=\\\"logo-img\\\"></span> <span class=\\\"navbar-title\\\">SICUB</span> <span class=\\\"navbar-version\\\">{{version}}</span> </a> <div class=\\\"bem-vindo\\\"> <div class=\\\"float-right animated fadeInLeft\\\" *ngSwitchCase=\\\"true\\\"> <span class=\\\"icon-bem-vindo\\\"><i class=\\\"fas fa-user\\\" arial-hidden=\\\"true\\\"></i></span> <span class=\\\"bem-vindo-title\\\" *ngIf=\\\"account\\\" jhiTranslate=\\\"home.logged.message\\\" translateValues=\\\"{username: '{{account.login}}'}\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> </div> </div> <button *ngSwitchCase=\\\"false\\\" mat-icon-button [mat-menu-trigger-for]=\\\"menu\\\"> <i class=\\\"far fa-user fa-2x fa-color position-icon animated infinite bounce\\\" aria-hidden=\\\"true\\\"></i> </button> <button *ngSwitchCase=\\\"true\\\" mat-icon-button [mat-menu-trigger-for]=\\\"menu\\\"> <i class=\\\"far fa-user fa-2x fa-color position-icon animated\\\" aria-hidden=\\\"true\\\"></i> </button> </mat-toolbar> <mat-menu x-position=\\\"before\\\" #menu=\\\"matMenu\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <button *ngSwitchCase=\\\"false\\\" mat-menu-item (click)=\\\"login()\\\">Entrar</button> <button *ngSwitchCase=\\\"true\\\" mat-menu-item (click)=\\\"logout()\\\">Sair</button> <button mat-menu-item routerLink=\\\"register\\\" (click)=\\\"collapseNavbar()\\\">Registrar</button> </mat-menu> </nav> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD9jNWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRVQUE0VSxTQUFTLGtUQUFrVCxhQUFhLGVBQWUsRUFBRSxrQ0FBa0MsZUFBZSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8bmF2PiA8bWF0LXRvb2xiYXIgY29sb3I9XFxcInByaW1hcnlcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiamgtbG9nby1jb250YWluZXIgZmxvYXQtbGVmdFxcXCI+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgbG9nbyBmbG9hdC1sZWZ0XFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImxvZ28taW1nXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItdGl0bGVcXFwiPlNJQ1VCPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXZlcnNpb25cXFwiPnt7dmVyc2lvbn19PC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcImJlbS12aW5kb1xcXCI+IDxkaXYgY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGFuaW1hdGVkIGZhZGVJbkxlZnRcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iZW0tdmluZG9cXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtdXNlclxcXCIgYXJpYWwtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmVtLXZpbmRvLXRpdGxlXFxcIiAqbmdJZj1cXFwiYWNjb3VudFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxvZ2dlZC5tZXNzYWdlXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt1c2VybmFtZTogJ3t7YWNjb3VudC5sb2dpbn19J31cXFwiPiBZb3UgYXJlIGxvZ2dlZCBpbiBhcyB1c2VyIFxcXCJ7e2FjY291bnQubG9naW59fVxcXCIuIDwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCIgbWF0LWljb24tYnV0dG9uIFttYXQtbWVudS10cmlnZ2VyLWZvcl09XFxcIm1lbnVcXFwiPiA8aSBjbGFzcz1cXFwiZmFyIGZhLXVzZXIgZmEtMnggZmEtY29sb3IgcG9zaXRpb24taWNvbiBhbmltYXRlZCBpbmZpbml0ZSBib3VuY2VcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDwvYnV0dG9uPiA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiIG1hdC1pY29uLWJ1dHRvbiBbbWF0LW1lbnUtdHJpZ2dlci1mb3JdPVxcXCJtZW51XFxcIj4gPGkgY2xhc3M9XFxcImZhciBmYS11c2VyIGZhLTJ4IGZhLWNvbG9yIHBvc2l0aW9uLWljb24gYW5pbWF0ZWRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDwvYnV0dG9uPiA8L21hdC10b29sYmFyPiA8bWF0LW1lbnUgeC1wb3NpdGlvbj1cXFwiYmVmb3JlXFxcIiAjbWVudT1cXFwibWF0TWVudVxcXCIgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIiBtYXQtbWVudS1pdGVtIChjbGljayk9XFxcImxvZ2luKClcXFwiPkVudHJhcjwvYnV0dG9uPiA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPlNhaXI8L2J1dHRvbj4gPGJ1dHRvbiBtYXQtbWVudS1pdGVtIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5SZWdpc3RyYXI8L2J1dHRvbj4gPC9tYXQtbWVudT4gPC9uYXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.html\n");

/***/ })

})