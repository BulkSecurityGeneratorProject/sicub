webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <nav> <mat-toolbar color=\\\"primary\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"jh-logo-container float-left\\\"> <a class=\\\"navbar-brand logo float-left\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span class=\\\"logo-img\\\"></span> <span class=\\\"navbar-title\\\">SICUB</span> <span class=\\\"navbar-version\\\">{{version}}</span> </a> <div class=\\\"bem-vindo\\\"> <div class=\\\"float-left animated fadeInLeft\\\" *ngSwitchCase=\\\"true\\\"> <span class=\\\"icon-bem-vindo\\\"><i class=\\\"fas fa-user\\\" arial-hidden=\\\"true\\\"></i></span> <span class=\\\"bem-vindo-title\\\" *ngIf=\\\"account\\\" jhiTranslate=\\\"home.logged.message\\\" translateValues=\\\"{username: '{{account.login}}'}\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> </div> </div> <button *ngSwitchCase=\\\"false\\\" mat-icon-button [mat-menu-trigger-for]=\\\"menu\\\"> <i class=\\\"far fa-user fa-2x fa-color position-icon animated infinite bounce\\\" aria-hidden=\\\"true\\\"></i> </button> <button *ngSwitchCase=\\\"true\\\" mat-icon-button [mat-menu-trigger-for]=\\\"menu\\\"> <i class=\\\"far fa-user fa-2x fa-color position-icon animated\\\" aria-hidden=\\\"true\\\"></i> </button> </mat-toolbar> <mat-menu x-position=\\\"before\\\" #menu=\\\"matMenu\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <button *ngSwitchCase=\\\"false\\\" mat-menu-item (click)=\\\"login()\\\">Entrar</button> <button *ngSwitchCase=\\\"true\\\" mat-menu-item (click)=\\\"logout()\\\">Sair</button> <button mat-menu-item routerLink=\\\"register\\\" (click)=\\\"collapseNavbar()\\\">Registrar</button> </mat-menu> </nav> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD9jNWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRVQUE0VSxTQUFTLGlUQUFpVCxhQUFhLGVBQWUsRUFBRSxrQ0FBa0MsZUFBZSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8bmF2PiA8bWF0LXRvb2xiYXIgY29sb3I9XFxcInByaW1hcnlcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiamgtbG9nby1jb250YWluZXIgZmxvYXQtbGVmdFxcXCI+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgbG9nbyBmbG9hdC1sZWZ0XFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImxvZ28taW1nXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItdGl0bGVcXFwiPlNJQ1VCPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXZlcnNpb25cXFwiPnt7dmVyc2lvbn19PC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcImJlbS12aW5kb1xcXCI+IDxkaXYgY2xhc3M9XFxcImZsb2F0LWxlZnQgYW5pbWF0ZWQgZmFkZUluTGVmdFxcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpY29uLWJlbS12aW5kb1xcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS11c2VyXFxcIiBhcmlhbC1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJiZW0tdmluZG8tdGl0bGVcXFwiICpuZ0lmPVxcXCJhY2NvdW50XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubG9nZ2VkLm1lc3NhZ2VcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3VzZXJuYW1lOiAne3thY2NvdW50LmxvZ2lufX0nfVxcXCI+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIiBtYXQtaWNvbi1idXR0b24gW21hdC1tZW51LXRyaWdnZXItZm9yXT1cXFwibWVudVxcXCI+IDxpIGNsYXNzPVxcXCJmYXIgZmEtdXNlciBmYS0yeCBmYS1jb2xvciBwb3NpdGlvbi1pY29uIGFuaW1hdGVkIGluZmluaXRlIGJvdW5jZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPC9idXR0b24+IDxidXR0b24gKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbWF0LWljb24tYnV0dG9uIFttYXQtbWVudS10cmlnZ2VyLWZvcl09XFxcIm1lbnVcXFwiPiA8aSBjbGFzcz1cXFwiZmFyIGZhLXVzZXIgZmEtMnggZmEtY29sb3IgcG9zaXRpb24taWNvbiBhbmltYXRlZFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPC9idXR0b24+IDwvbWF0LXRvb2xiYXI+IDxtYXQtbWVudSB4LXBvc2l0aW9uPVxcXCJiZWZvcmVcXFwiICNtZW51PVxcXCJtYXRNZW51XFxcIiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxidXR0b24gKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cXFwibG9naW4oKVxcXCI+RW50cmFyPC9idXR0b24+IDxidXR0b24gKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+U2FpcjwvYnV0dG9uPiA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlJlZ2lzdHJhcjwvYnV0dG9uPiA8L21hdC1tZW51PiA8L25hdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.html\n");

/***/ })

})