webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"col-md-12\\\"> <div class=\\\"alert alert-success animated fadeInRight\\\" *ngSwitchCase=\\\"true\\\" role=\\\"alert\\\" data-auto-dismiss=\\\"2000\\\"> <span *ngIf=\\\"account\\\" jhiTranslate=\\\"home.logged.message\\\" translateValues=\\\"{username: '{{account.login}}'}\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> </div> <div class=\\\"alert alert-warning alert-dismissible fade in\\\" data-auto-dismiss role=\\\"alert\\\" *ngSwitchCase=\\\"true\\\"> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\"> <span aria-hidden=\\\"true\\\">&times;</span></button> <strong>Warning!</strong> Warning message here </div> </div> <div class=\\\"row\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"col-md-12 text-center\\\"> <span class=\\\"logo-img\\\"></span> <h1 class=\\\"display-4\\\" jhiTranslate=\\\"home.title\\\">Welcome, Java Hipster!</h1> <p class=\\\"lead\\\" jhiTranslate=\\\"home.subtitle\\\">This is your homepage</p> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD8zNjE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJTQUEyUyxhQUFhLGVBQWUsRUFBRSxrQ0FBa0MsZUFBZSx1UUFBdVEiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2VzcyBhbmltYXRlZCBmYWRlSW5SaWdodFxcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYXV0by1kaXNtaXNzPVxcXCIyMDAwXFxcIj4gPHNwYW4gKm5nSWY9XFxcImFjY291bnRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5sb2dnZWQubWVzc2FnZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7dXNlcm5hbWU6ICd7e2FjY291bnQubG9naW59fSd9XFxcIj4gWW91IGFyZSBsb2dnZWQgaW4gYXMgdXNlciBcXFwie3thY2NvdW50LmxvZ2lufX1cXFwiLiA8L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZyBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIGluXFxcIiBkYXRhLWF1dG8tZGlzbWlzcyByb2xlPVxcXCJhbGVydFxcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj4gPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+IDxzdHJvbmc+V2FybmluZyE8L3N0cm9uZz4gV2FybmluZyBtZXNzYWdlIGhlcmUgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIHRleHQtY2VudGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImxvZ28taW1nXFxcIj48L3NwYW4+IDxoMSBjbGFzcz1cXFwiZGlzcGxheS00XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUudGl0bGVcXFwiPldlbGNvbWUsIEphdmEgSGlwc3RlciE8L2gxPiA8cCBjbGFzcz1cXFwibGVhZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLnN1YnRpdGxlXFxcIj5UaGlzIGlzIHlvdXIgaG9tZXBhZ2U8L3A+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/home.component.html\n");

/***/ })

})