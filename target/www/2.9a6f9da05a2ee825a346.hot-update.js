webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <nav> <mat-toolbar color=\\\"primary\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"jh-logo-container float-left\\\"> <a class=\\\"navbar-brand logo float-left\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span class=\\\"logo-img\\\"></span> <span class=\\\"navbar-title\\\">SICUB</span> <span class=\\\"navbar-version\\\">{{version}}</span> </a> <div class=\\\"bem-vindo float-left animated flash\\\" *ngSwitchCase=\\\"true\\\"> <span><i class=\\\"far fa-user\\\" arial-hidden=\\\"true\\\"></i></span> <span style=\\\"color: #82C761;\\\" *ngIf=\\\"account\\\" jhiTranslate=\\\"home.logged.message\\\" translateValues=\\\"{username: '{{account.login}}'}\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> </div> <button *ngSwitchCase=\\\"false\\\" mat-icon-button [mat-menu-trigger-for]=\\\"menu\\\"> <i class=\\\"far fa-user fa-2x fa-color position-icon animated infinite bounce\\\" aria-hidden=\\\"true\\\"></i> </button> <button *ngSwitchCase=\\\"true\\\" mat-icon-button [mat-menu-trigger-for]=\\\"menu\\\"> <i class=\\\"far fa-user fa-2x fa-color position-icon animated\\\" aria-hidden=\\\"true\\\"></i> </button> </mat-toolbar> <mat-menu x-position=\\\"before\\\" #menu=\\\"matMenu\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <button *ngSwitchCase=\\\"false\\\" mat-menu-item (click)=\\\"login()\\\">Entrar</button> <button *ngSwitchCase=\\\"true\\\" mat-menu-item (click)=\\\"logout()\\\">Sair</button> <button mat-menu-item routerLink=\\\"register\\\" (click)=\\\"collapseNavbar()\\\">Registrar</button> </mat-menu> </nav> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD9jNWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRVQUE0VSxTQUFTLHNMQUFzTCw2RUFBNkUsYUFBYSxlQUFlLEVBQUUsa0NBQWtDLGVBQWUiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPG5hdj4gPG1hdC10b29sYmFyIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxkaXYgY2xhc3M9XFxcImpoLWxvZ28tY29udGFpbmVyIGZsb2F0LWxlZnRcXFwiPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIGxvZ28gZmxvYXQtbGVmdFxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJsb2dvLWltZ1xcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5TSUNVQjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5hdmJhci12ZXJzaW9uXFxcIj57e3ZlcnNpb259fTwvc3Bhbj4gPC9hPiA8ZGl2IGNsYXNzPVxcXCJiZW0tdmluZG8gZmxvYXQtbGVmdCBhbmltYXRlZCBmbGFzaFxcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxzcGFuPjxpIGNsYXNzPVxcXCJmYXIgZmEtdXNlclxcXCIgYXJpYWwtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPiA8c3BhbiBzdHlsZT1cXFwiY29sb3I6ICM4MkM3NjE7XFxcIiAqbmdJZj1cXFwiYWNjb3VudFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxvZ2dlZC5tZXNzYWdlXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt1c2VybmFtZTogJ3t7YWNjb3VudC5sb2dpbn19J31cXFwiPiBZb3UgYXJlIGxvZ2dlZCBpbiBhcyB1c2VyIFxcXCJ7e2FjY291bnQubG9naW59fVxcXCIuIDwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIiBtYXQtaWNvbi1idXR0b24gW21hdC1tZW51LXRyaWdnZXItZm9yXT1cXFwibWVudVxcXCI+IDxpIGNsYXNzPVxcXCJmYXIgZmEtdXNlciBmYS0yeCBmYS1jb2xvciBwb3NpdGlvbi1pY29uIGFuaW1hdGVkIGluZmluaXRlIGJvdW5jZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPC9idXR0b24+IDxidXR0b24gKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbWF0LWljb24tYnV0dG9uIFttYXQtbWVudS10cmlnZ2VyLWZvcl09XFxcIm1lbnVcXFwiPiA8aSBjbGFzcz1cXFwiZmFyIGZhLXVzZXIgZmEtMnggZmEtY29sb3IgcG9zaXRpb24taWNvbiBhbmltYXRlZFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPC9idXR0b24+IDwvbWF0LXRvb2xiYXI+IDxtYXQtbWVudSB4LXBvc2l0aW9uPVxcXCJiZWZvcmVcXFwiICNtZW51PVxcXCJtYXRNZW51XFxcIiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxidXR0b24gKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cXFwibG9naW4oKVxcXCI+RW50cmFyPC9idXR0b24+IDxidXR0b24gKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+U2FpcjwvYnV0dG9uPiA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlJlZ2lzdHJhcjwvYnV0dG9uPiA8L21hdC1tZW51PiA8L25hdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.html\n");

/***/ })

})