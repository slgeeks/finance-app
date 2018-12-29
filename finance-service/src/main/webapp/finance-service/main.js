(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.guard */ "./src/app/app.guard.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports-list/reports-list.component */ "./src/app/reports/reports-list/reports-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "login",
        component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    },
    {
        path: "signup",
        component: _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    },
    {
        path: "reports",
        component: _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_6__["ReportsListComponent"],
        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["AppGuard"]]
    },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["AppGuard"]]
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "/home"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"], useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header *ngIf=\"isLoggedIn\"></app-header>\n  <div class=\"content-container\">\n    <div class=\"menu-container animated slideInLeft\" *ngIf=\"isLoggedIn\">\n      <app-main-menu></app-main-menu>\n    </div>\n    <div class=\"view-container\" [ngClass]=\"{'menu-expand':isMenuExpanded}\">\n      <div>\n        <div class=\"col-sm-12 breadcrumbs-bar\"  [ngClass]=\"{'menu-expand':isMenuExpanded}\" *ngIf=\"isLoggedIn\">\n          <app-breadcrumbs></app-breadcrumbs>\n        </div>\n        <div class=\"col-sm-12 content-div\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-height: 100%;\n  background-color: #f5f5f5;\n  min-width: 300px; }\n\n:host /deep/ ng2-toasty .toast {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\nrouter-outlet {\n  display: block; }\n\n@media screen and (max-width: 768px) {\n    router-outlet {\n      padding-top: 40px; } }\n\nng2-slim-loading-bar {\n  position: fixed;\n  top: 70px;\n  z-index: 500;\n  left: 0px;\n  right: 0px; }\n\n:host /deep/ ng2-slim-loading-bar .slim-loading-bar-progress {\n  background-color: #E19131 !important;\n  height: 4px !important; }\n\n.container-fluid {\n  height: 100%; }\n\n.content-container {\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n  margin-top: 70px; }\n\n@media screen and (max-width: 768px) {\n    .content-container {\n      margin-top: 140px; } }\n\n.menu-container {\n  position: fixed;\n  top: 70px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 100; }\n\n@media screen and (max-width: 768px) {\n    .menu-container {\n      top: 140px; } }\n\n.view-container {\n  transition: margin-left 0.8s ease-in-out;\n  margin-left: 50px; }\n\n.view-container.menu-expand {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    margin-left: 285px; }\n\n.view-container .breadcrumbs-bar {\n    border-bottom: inset 1px #dfdfdf;\n    border-radius: 0px;\n    height: 46px;\n    line-height: 2.2em;\n    background-color: white;\n    position: fixed;\n    z-index: 100;\n    left: 50px;\n    right: 0px;\n    min-width: 450px;\n    transition: width 0.3s ease-in-out; }\n\n.view-container .breadcrumbs-bar.menu-expand {\n      left: 285px; }\n\n.view-container .content-div {\n    margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tYW5vai9Qb2RpU2V0RWthL2ZpbmFuY2UtYXBwL2ZpbmFuY2UtYXBwLXVpL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYmxlcy5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5nLnNjc3MiLCIvaG9tZS9tYW5vai9Qb2RpU2V0RWthL2ZpbmFuY2UtYXBwL2ZpbmFuY2UtYXBwLXVpL3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLCtCQUE4QjtFQUM5Qix1QkFBc0I7RUFDdEIsa0NBQWlDO0VBQ2pDLDBCQUF5QjtFQUd6QixtQ0FBa0M7RUFHbEMsMkJBQTBCLEVBQzNCOztBQUVEO0VBQ0UsZUFBYyxFQUtmOztBQUhDO0lBSEY7TUFJSSxrQkFBaUIsRUFFcEIsRUFBQTs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsVUNoQ21CO0VEaUNuQixhQUFZO0VBQ1osVUFBUztFQUNULFdBQVUsRUFDWDs7QUFFRDtFQUNFLHFDQUEwQztFQUMxQyx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixpQkNuRG1CLEVEdURwQjs7QUFIQztJQUxGO01BTUksa0JBQThCLEVBRWpDLEVBQUE7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFVDM0RtQjtFRDREbkIsWUFBVztFQUNYLFVBQVM7RUFDVCxhQUFXLEVBS1o7O0FBSEM7SUFQRjtNQVFJLFdBQXVCLEVBRTFCLEVBQUE7O0FBRUQ7RUVuREUseUNGb0RnRDtFQUNoRCxrQkM1RDZCLEVEd0Y5Qjs7QUE5QkQ7SUFLSSw4QkFBcUI7WUFBckIsc0JBQXFCO0lBQ3JCLG1CQy9ENkIsRURnRTlCOztBQVBIO0lBVUksaUNHbEVpQjtJSG1FakIsbUJBQWtCO0lBQ2xCLGFDakUyQjtJRGtFM0IsbUJBQWtCO0lBQ2xCLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLGFBQVk7SUFDWixXQzNFMkI7SUQ0RTNCLFdBQVU7SUFDVixpQkFBb0Q7SUV0RXRELG1DRnVFNEMsRUFLM0M7O0FBekJIO01BdUJNLFlDaEYyQixFRGlGNUI7O0FBeEJMO0lBNEJJLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9hc3NldHMvc3R5bGVzL3ZhcmlibGVzXCI7XG5AaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9taXhpbmdcIjtcbkBpbXBvcnQgXCIuLi9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuXG46aG9zdHtcbiAgbWluLWhlaWdodDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG46aG9zdCAvZGVlcC8gbmcyLXRvYXN0eSAudG9hc3R7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuXG5cbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5yb3V0ZXItb3V0bGV0e1xuICBkaXNwbGF5OiBibG9jaztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG59XG5cbm5nMi1zbGltLWxvYWRpbmctYmFye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogJHRvcGJhci1oZWlnaHQ7XG4gIHotaW5kZXg6IDUwMDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG46aG9zdCAvZGVlcC8gbmcyLXNsaW0tbG9hZGluZy1iYXIgLnNsaW0tbG9hZGluZy1iYXItcHJvZ3Jlc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3IgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1jb250YWluZXJ7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAkdG9wYmFyLWhlaWdodDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW4tdG9wOiAkdG9wYmFyLWhlaWdodCAqIDI7XG4gIH1cbn1cblxuLm1lbnUtY29udGFpbmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogJHRvcGJhci1oZWlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6MTAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdG9wOiAkdG9wYmFyLWhlaWdodCAqIDI7XG4gIH1cbn1cblxuLnZpZXctY29udGFpbmVye1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKG1hcmdpbi1sZWZ0IDAuOHMgZWFzZS1pbi1vdXQpO1xuICBtYXJnaW4tbGVmdDogJG1haW4tbWVudS1kZWZhdWx0LXdpZHRoO1xuXG4gICYubWVudS1leHBhbmR7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgIG1hcmdpbi1sZWZ0OiAkbWFpbi1tZW51LWV4cGFuZGVkLXdpZHRoO1xuICB9XG5cbiAgLmJyZWFkY3J1bWJzLWJhcntcbiAgICBib3JkZXItYm90dG9tOiBpbnNldCAxcHggJGdyYXlfbGlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGhlaWdodDogJG1haW4tYnJlYWRjcnVtYnMtaGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGxlZnQ6ICRtYWluLW1lbnUtZGVmYXVsdC13aWR0aDtcbiAgICByaWdodDogMHB4O1xuICAgIG1pbi13aWR0aDogJGFwcC1taW4td2lkdGggLSAkbWFpbi1tZW51LWRlZmF1bHQtd2lkdGg7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbih3aWR0aCAwLjNzIGVhc2UtaW4tb3V0KTtcblxuICAgICYubWVudS1leHBhbmR7XG4gICAgICBsZWZ0OiAkbWFpbi1tZW51LWV4cGFuZGVkLXdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LWRpdntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG4iLCIvL1RvcEJhclxuJHRvcGJhci1oZWlnaHQgOiA3MHB4O1xuJGFwcC1taW4td2lkdGggOiA1MDBweDtcblxuJGFuaW1hdGlvbi1kdXJhdGlvbiA6IDAuOHM7XG5cbi8vSGFtYnVyZ2VyIE1lbnUgc2V0dGluZ3NcbiRobS1iYXItd2lkdGg6IDI1cHg7XG4kaG0tYmFyLWhlaWdodDogMnB4O1xuJGhtLWJhci1zcGFjaW5nOiAxMHB4O1xuXG4vL01lbnUgQmFyXG4kbWFpbi1tZW51LWRlZmF1bHQtd2lkdGggOiA1MHB4O1xuJG1haW4tbWVudS1leHBhbmRlZC13aWR0aCA6IDI4NXB4O1xuJG1haW4tbWVudS1pY29uLWhlaWdodCA6IDQ2cHg7XG5cbi8vQnJlYWRjcnVtYnNcbiRtYWluLWJyZWFkY3J1bWJzLWhlaWdodCA6IDQ2cHg7XG5cbiIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIC1tcy1ib3gtc2hhZG93OiAkc2hhZG93O1xuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gaWNvbi1yb3RhdGUoJHJvdGF0ZTkwKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1tb3otdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1tcy10cmFuc2Zvcm06ICRyb3RhdGU5MDtcbiAgLW8tdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIHRyYW5zZm9ybTogJHJvdGF0ZTkwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAtby10cmFuc2l0aW9uOiAgICAgICR0cmFuc2l0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cbiIsIiRwcmltYXJ5LWNvbG9yX21haW4gOiAjMjQyNTgyO1xuJHByaW1hcnktY29sb3JfbWVudSA6ICMyRjJGQTI7XG4kcHJpbWFyeS1jb2xvcl9saWdodCA6ICM0NzE3RjY7XG5cbiRhY2NlbnQtbGlnaHQtY29sb3IgOiAjZTFhNjM3O1xuJGFjY2VudC1jb2xvciA6ICNFMTkxMzE7XG4kYWNjZW50LWRhcmstY29sb3IgOiAjYzE3MTFkO1xuXG4kc2Vjb25kYXJ5X2NvbG9yIDogIzMyYzVkMjtcblxuXG4kd2hpdGVfZGFyayA6ICNmNWY1ZjU7XG5cbiRncmF5X2xpZ2h0ZXIgOiAjZTdlY2YxO1xuJGdyYXlfbGlnaHQgOiAjZGZkZmRmO1xuJGdyYXkgOiAjOEE5OEEwO1xuJGdyYXktZGFyayA6ICM3YThjYTU7XG5cblxuJGVycm9yLXJlZCA6ICNiYjM1MzU7XG4kd2FybmluZyA6ICNlMWExMGM7XG4kc3VjY2VzcyA6ICMxMDcxMjQ7XG5cbiRncmF5XzAgOiNmOGY5ZmE7XG4kZ3JheV8xIDogI2YxZjNmNTtcbiRncmF5XzIgOiAjZTllY2VmO1xuJGdyYXlfMyA6ICNkZWUyZTY7XG4kZ3JheV80IDogI2NlZDRkYTtcbiRncmF5XzUgOiAjYWRiNWJkO1xuJGdyYXlfNiA6ICM4NjhlOTY7XG4kZ3JheV83IDogIzQ5NTA1NztcbiRncmF5XzggOiAjMzQzYTQwO1xuJGdyYXlfOSA6ICMyMTI1Mjk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_app_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/app-common.service */ "./src/app/services/app-common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_authenticationService, _appCommonService) {
        this._authenticationService = _authenticationService;
        this._appCommonService = _appCommonService;
        this.title = 'record-platform';
        this.isLoggedIn = false;
        this.isMenuExpanded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this._authenticationService.isLoggedIn();
        this._authenticationService.loginUserInfo.subscribe(function (userInfo) {
            _this.isLoggedIn = !!userInfo;
        });
        this._appCommonService.menuToggleStream.subscribe(function (isExpand) { return _this.isMenuExpanded = isExpand; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [":host {\n    background-color: blue\n  }"],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_app_common_service__WEBPACK_IMPORTED_MODULE_2__["AppCommonService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.guard.ts":
/*!******************************!*\
  !*** ./src/app/app.guard.ts ***!
  \******************************/
/*! exports provided: AppGuard, LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGuard", function() { return AppGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppGuard = /** @class */ (function () {
    function AppGuard(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    AppGuard.prototype.canActivate = function () {
        if (this._authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this._router.navigate(["login"]);
            return false;
        }
    };
    AppGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppGuard);
    return AppGuard;
}());

var LoginGuard = /** @class */ (function () {
    function LoginGuard(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this._authenticationService.isLoggedIn()) {
            this._router.navigate(["home"]);
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.guard */ "./src/app/app.guard.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_app_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app-common.service */ "./src/app/services/app-common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _hamburger_menu_hamburger_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hamburger-menu/hamburger-menu.component */ "./src/app/hamburger-menu/hamburger-menu.component.ts");
/* harmony import */ var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-avatar/user-avatar.component */ "./src/app/user-avatar/user-avatar.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _billing_billing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./billing/billing.module */ "./src/app/billing/billing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _remote_electricity_bill_remote_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./remote/electricity_bill_remote.service */ "./src/app/remote/electricity_bill_remote.service.ts");
/* harmony import */ var _services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/electricity-bill.service */ "./src/app/services/electricity-bill.service.ts");
/* harmony import */ var _remote_login_remote_data_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./remote/login_remote-data.service */ "./src/app/remote/login_remote-data.service.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./piechart/piechart.component */ "./src/app/piechart/piechart.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dashboards_certify_count_certify_count_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboards/certify-count/certify-count.component */ "./src/app/dashboards/certify-count/certify-count.component.ts");
/* harmony import */ var _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./reports/reports-list/reports-list.component */ "./src/app/reports/reports-list/reports-list.component.ts");
/* harmony import */ var _reports_reports_bills_electricity_reports_electricity_reports_electricity_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./reports/reports-bills/electricity/reports-electricity/reports-electricity.component */ "./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _directives_permission_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directives/permission.module */ "./src/app/directives/permission.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _hamburger_menu_hamburger_menu_component__WEBPACK_IMPORTED_MODULE_13__["HamburgerMenuComponent"],
                _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_14__["UserAvatarComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_15__["MainMenuComponent"],
                _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsComponent"],
                _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_25__["ChartComponent"],
                _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_26__["PiechartComponent"],
                _dashboards_certify_count_certify_count_component__WEBPACK_IMPORTED_MODULE_28__["CertifyCountComponent"],
                _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_29__["ReportsListComponent"],
                _reports_reports_bills_electricity_reports_electricity_reports_electricity_component__WEBPACK_IMPORTED_MODULE_30__["ReportsElectricityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["AlertModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _directives_permission_module__WEBPACK_IMPORTED_MODULE_32__["PermissionModule"],
                _billing_billing_module__WEBPACK_IMPORTED_MODULE_20__["BillingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"]
            ],
            exports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
                _directives_permission_module__WEBPACK_IMPORTED_MODULE_32__["PermissionModule"]
            ],
            providers: [
                _app_guard__WEBPACK_IMPORTED_MODULE_7__["AppGuard"],
                _app_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
                _services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_23__["ElectricityBillsService"],
                _remote_electricity_bill_remote_service__WEBPACK_IMPORTED_MODULE_22__["ElectricityBillRemoteDataService"],
                _remote_login_remote_data_service__WEBPACK_IMPORTED_MODULE_24__["LoginRemoteDataService"],
                _services_dashboard_service__WEBPACK_IMPORTED_MODULE_31__["DashboardService"],
                _services_app_common_service__WEBPACK_IMPORTED_MODULE_9__["AppCommonService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container animated fadeInDown\" style=\"animation-delay: 1s\">\n\n  <div class=\"logo-container\">\n    RECORD<span class=\"man\">APPLICATION</span>\n  </div>\n\n  <div class=\"form-container\">\n    <h2 class=\"sign-in\">Sign In</h2>\n    <!--login form START-->\n    <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"onLoginClick(loginForm)\">\n      <div class=\"form-fields\">\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"text\"\n                 autocomplete=\"off\"\n                 placeholder=\"Username\"\n                 name=\"userName\"\n                 #userNameRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"userName\">\n          <span class=\"error\" *ngIf=\"userNameRef.errors?.required && (userNameRef.dirty || isSubmitted)\">User name can not be empty</span>\n        </div>\n\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"password\"\n                 autocomplete=\"off\"\n                 placeholder=\"Password\"\n                 name=\"password\"\n                 #passwordRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"password\">\n          <span class=\"error\" *ngIf=\"passwordRef.errors?.required && (passwordRef.dirty || isSubmitted)\">Password can not be empty</span>\n        </div>\n\n        <div class=\"action-container\">\n          <button class=\"btn btn-primary login\">LOGIN</button>\n          <label class=\"checkbox-lbl\">\n            <input type=\"checkbox\">\n            Remember\n            <span></span>\n          </label>\n          <button class=\"btn btn-light signup\" (click)=\"onSignUpClick()\">SIGNUP</button>\n        </div>\n      </div>\n\n\n    </form>\n\n    <!--login form END-->\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  width: 400px;\n  margin: -15px auto 35px auto; }\n  .login-container input {\n    background-color: #dde3ec;\n    height: 43px;\n    color: #8290a3;\n    border: 1px solid #dde3ec; }\n  .login-container input:focus {\n      border: 1px solid #c3ccda; }\n  .login-container .logo-container {\n    margin-bottom: 35px;\n    text-align: center;\n    font-size: 1.5rem;\n    color: #242582; }\n  .login-container .logo-container .man {\n      color: #8A98A0;\n      font-weight: 600; }\n  .login-container .form-container {\n    background-color: white;\n    box-shadow: 0px 0px 20px 3px #e6e5e5; }\n  .login-container .form-container .form-fields {\n      padding: 20px 30px; }\n  .login-container .form-container .sign-in {\n      margin: 0px;\n      padding: 30px 0px 10px;\n      text-align: center;\n      color: #2F2FA2;\n      font-size: 14px;\n      font-weight: 600; }\n  .login-container .form-container .forgot-ps {\n      padding: 15px 30px 20px;\n      border-top: solid 1px #dde3ec;\n      text-align: right;\n      color: #7a8ca5; }\n  .login-container .action-container {\n    margin: 35px 0px 10px; }\n  .login-container .action-container .login {\n      background-color: #242582;\n      color: white;\n      font-weight: 600;\n      transition: all 0.4 ease-in; }\n  .login-container .action-container .login:hover {\n        background-color: #4717F6; }\n  .login-container .action-container .signup {\n      color: blue;\n      font-weight: 600;\n      font-size: 14px;\n      transition: all 0.4 ease-in;\n      margin-left: 40px; }\n  .login-container .action-container .checkbox-lbl {\n      margin-left: 15px; }\n  .login-container .copyright {\n    text-align: center;\n    margin: 0 auto 30px 0;\n    padding: 10px;\n    color: #7a8ca5;\n    font-size: 13px; }\n  .login-container .error {\n    font-size: 0.9em;\n    color: #f96565; }\n  .login-container .error-container {\n    min-height: 50px;\n    background-color: #bb3535;\n    color: white;\n    text-align: center;\n    padding: 20px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFZO0VBQ1osNkJBQTRCLEVBdUc3QjtFQXpHRDtJQUtJLDBCQUF5QjtJQUN6QixhQUFZO0lBQ1osZUFBYztJQUNkLDBCQUF5QixFQUsxQjtFQWJIO01BV00sMEJBQXlCLEVBQzFCO0VBWkw7SUFvQkksb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsZUMxQnlCLEVEK0IxQjtFQTVCSDtNQXlCTSxlQUFjO01BQ2QsaUJBQWdCLEVBQ2pCO0VBM0JMO0lBK0JJLHdCQUF1QjtJQUN2QixxQ0FBb0MsRUFxQnJDO0VBckRIO01BbUNNLG1CQUFrQixFQUNuQjtFQXBDTDtNQXVDTSxZQUFXO01BQ1gsdUJBQXNCO01BQ3RCLG1CQUFrQjtNQUNsQixlQzVDdUI7TUQ2Q3ZCLGdCQUFlO01BQ2YsaUJBQWdCLEVBQ2pCO0VBN0NMO01BZ0RNLHdCQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0Isa0JBQWlCO01BQ2pCLGVDdENjLEVEdUNmO0VBcERMO0lBd0RJLHNCQUFxQixFQXlCdEI7RUFqRkg7TUEyRE0sMEJDOUR1QjtNRCtEdkIsYUFBWTtNQUNaLGlCQUFnQjtNRTdDcEIsNEJGOEN1QyxFQUtwQztFQW5FTDtRQWlFUSwwQkNsRXNCLEVEbUV2QjtFQWxFUDtNQXNFTSxZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLGdCQUFlO01FeERuQiw0QkZ5RHVDO01BQ25DLGtCQUFpQixFQUVsQjtFQTVFTDtNQStFTSxrQkFBaUIsRUFDbEI7RUFoRkw7SUFvRkksbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixjQUFhO0lBQ2IsZUMxRWdCO0lEMkVoQixnQkFBZSxFQUNoQjtFQXpGSDtJQTRGSSxpQkFBZ0I7SUFDaEIsZUFBYyxFQUNmO0VBOUZIO0lBaUdJLGlCQUFnQjtJQUNoQiwwQkNsRmdCO0lEbUZoQixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLG1CQUFrQixFQUVuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbmdcIjtcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAtMTVweCBhdXRvIDM1cHggYXV0bztcblxuICBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTNlYztcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgY29sb3I6ICM4MjkwYTM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZTNlYztcblxuICAgICY6Zm9jdXN7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjY2RhO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0Lm5nLWludmFsaWQge1xuICAgIC8vIGJvcmRlciA6IHNvbGlkIDJweCAjYzgxMTBkO1xuICB9XG5cbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3JfbWFpbjtcbiAgICAubWFuIHtcbiAgICAgIGNvbG9yOiAjOEE5OEEwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzcHggI2U2ZTVlNTtcblxuICAgIC5mb3JtLWZpZWxkc3tcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICB9XG5cbiAgICAuc2lnbi1pbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDMwcHggMHB4IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3JfbWVudTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmZvcmdvdC1wc3tcbiAgICAgIHBhZGRpbmc6IDE1cHggMzBweCAyMHB4O1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkZGUzZWM7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb24tY29udGFpbmVye1xuICAgIG1hcmdpbjogMzVweCAwcHggMTBweDtcblxuICAgIC5sb2dpbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yX21haW47XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC40IGVhc2UtaW4pO1xuXG4gICAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDokcHJpbWFyeS1jb2xvcl9saWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lnbnVwe1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC40IGVhc2UtaW4pO1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG5cbiAgICB9XG5cbiAgICAuY2hlY2tib3gtbGJse1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDMwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5lcnJvcntcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAjZjk2NTY1O1xuICB9XG5cbiAgLmVycm9yLWNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvci1yZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG5cbiAgfVxuXG59XG5cblxuIiwiJHByaW1hcnktY29sb3JfbWFpbiA6ICMyNDI1ODI7XG4kcHJpbWFyeS1jb2xvcl9tZW51IDogIzJGMkZBMjtcbiRwcmltYXJ5LWNvbG9yX2xpZ2h0IDogIzQ3MTdGNjtcblxuJGFjY2VudC1saWdodC1jb2xvciA6ICNlMWE2Mzc7XG4kYWNjZW50LWNvbG9yIDogI0UxOTEzMTtcbiRhY2NlbnQtZGFyay1jb2xvciA6ICNjMTcxMWQ7XG5cbiRzZWNvbmRhcnlfY29sb3IgOiAjMzJjNWQyO1xuXG5cbiR3aGl0ZV9kYXJrIDogI2Y1ZjVmNTtcblxuJGdyYXlfbGlnaHRlciA6ICNlN2VjZjE7XG4kZ3JheV9saWdodCA6ICNkZmRmZGY7XG4kZ3JheSA6ICM4QTk4QTA7XG4kZ3JheS1kYXJrIDogIzdhOGNhNTtcblxuXG4kZXJyb3ItcmVkIDogI2JiMzUzNTtcbiR3YXJuaW5nIDogI2UxYTEwYztcbiRzdWNjZXNzIDogIzEwNzEyNDtcblxuJGdyYXlfMCA6I2Y4ZjlmYTtcbiRncmF5XzEgOiAjZjFmM2Y1O1xuJGdyYXlfMiA6ICNlOWVjZWY7XG4kZ3JheV8zIDogI2RlZTJlNjtcbiRncmF5XzQgOiAjY2VkNGRhO1xuJGdyYXlfNSA6ICNhZGI1YmQ7XG4kZ3JheV82IDogIzg2OGU5NjtcbiRncmF5XzcgOiAjNDk1MDU3O1xuJGdyYXlfOCA6ICMzNDNhNDA7XG4kZ3JheV85IDogIzIxMjUyOTtcbiIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIC1tcy1ib3gtc2hhZG93OiAkc2hhZG93O1xuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gaWNvbi1yb3RhdGUoJHJvdGF0ZTkwKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1tb3otdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1tcy10cmFuc2Zvcm06ICRyb3RhdGU5MDtcbiAgLW8tdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIHRyYW5zZm9ybTogJHJvdGF0ZTkwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAtby10cmFuc2l0aW9uOiAgICAgICR0cmFuc2l0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginClick = function (loginForm) {
        this.isSubmitted = true;
        if (loginForm.valid) {
            this._authenticationService.login(this.userName, this.password);
        }
    };
    LoginComponent.prototype.onSignUpClick = function () {
        this._router.navigate(["signup"]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/authentication/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container animated fadeInDown\" style=\"animation-delay: 1s\">\n\n    <div class=\"logo-container\">\n        RECORD<span class=\"man\">APPLICATION</span>\n    </div>\n\n    <div class=\"form-container\">\n        <h1 class=\"sign-in\">Sign Up</h1>\n        <!--login form START-->\n        <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"onSignUpClick(signupForm)\">\n            <div class=\"form-fields\">\n                <div class=\"form-group\">\n                    <input class=\"form-control\"\n                           type=\"text\"\n                           autocomplete=\"off\"\n                           placeholder=\"Username\"\n                           name=\"userName\"\n                           #userNameRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"userName\"\n                           (input)=\"uniqueUsername($event.target.value)\">\n                    <span class=\"error\" *ngIf=\"isUsernameError\">{{usernameError}}</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <input class=\"form-control\"\n                           type=\"password\"\n                           autocomplete=\"off\"\n                           placeholder=\"Password\"\n                           name=\"password\"\n                           #passwordRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"password\"\n                           (input)=\"errorPwd($event.target.value)\">\n                    <span class=\"error\" *ngIf=\"isPasswordError\">{{passwordError}}</span>\n                    <span class=\"warning\" *ngIf=\"isPasswordWarning\">{{passwordWarning}}</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <input class=\"form-control\"\n                           type=\"password\"\n                           autocomplete=\"off\"\n                           placeholder=\"Repeat Password\"\n                           name=\"password\"\n                           #passwordRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"repeatpassword\"\n                           (input)=\"matchPwd($event.target.value)\">\n                    <span class=\"error\" *ngIf=\"isRepeatPasswordError\">{{repeatPasswordError}}</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label\">Select Role</label>\n                    <select class=\"form-control\" (change)=\"onRoleSelected($event)\" placeholder=\"Role\">\n                        <option *ngFor=\"let opt of availableUserRoles\" [selected]=\"selectedRole == opt.roleName\">\n                            {{opt.roleName}}\n                        </option>\n                    </select>\n                    <span class=\"error\" *ngIf=\"isInvalidRole\">Select a valid role</span>\n                </div>\n\n\n                <div class=\"action-container\">\n                    <button class=\"btn btn-primary signup\">SIGNUP</button>\n                    <button class=\"btn btn-light login\" (click)=\"loginClick()\">LOGIN</button>\n                </div>\n            </div>\n\n\n        </form> <!--login form END-->\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  width: 400px;\n  margin: -15px auto 35px auto; }\n  .login-container input {\n    background-color: #dde3ec;\n    height: 43px;\n    color: #8290a3;\n    border: 1px solid #dde3ec; }\n  .login-container input:focus {\n      border: 1px solid #c3ccda; }\n  .login-container .logo-container {\n    margin-bottom: 35px;\n    text-align: center;\n    font-size: 1.5rem;\n    color: #242582; }\n  .login-container .logo-container .man {\n      color: #8A98A0;\n      font-weight: 600; }\n  .login-container .form-container {\n    background-color: white;\n    box-shadow: 0px 0px 20px 3px #e6e5e5; }\n  .login-container .form-container .form-fields {\n      padding: 20px 30px; }\n  .login-container .form-container .sign-in {\n      margin: 0px;\n      padding: 30px 0px 10px;\n      text-align: center;\n      color: #2F2FA2;\n      font-size: 14px;\n      font-weight: 600; }\n  .login-container .form-container .forgot-ps {\n      padding: 15px 30px 20px;\n      border-top: solid 1px #dde3ec;\n      text-align: right;\n      color: #7a8ca5; }\n  .login-container .form-container .control-label {\n      color: #8A98A0;\n      font-weight: 600; }\n  .login-container .form-container option {\n      color: #8A98A0;\n      font-weight: 500;\n      font-size: 14px; }\n  .login-container .action-container {\n    margin: 35px 0px 10px; }\n  .login-container .action-container .signup {\n      background-color: #242582;\n      color: white;\n      font-weight: 600;\n      transition: all 0.4 ease-in; }\n  .login-container .action-container .signup:hover {\n        background-color: #4717F6; }\n  .login-container .action-container .login {\n      color: blue;\n      font-weight: 600;\n      font-size: 14px;\n      margin-left: 15px; }\n  .login-container .error {\n    font-size: 0.9em;\n    color: #f96565; }\n  .login-container .warning {\n    font-size: 0.9em;\n    color: green; }\n  .login-container .error-container {\n    min-height: 50px;\n    background-color: #bb3535;\n    color: white;\n    text-align: center;\n    padding: 20px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvaG9tZS9tYW5vai9Qb2RpU2V0RWthL2ZpbmFuY2UtYXBwL2ZpbmFuY2UtYXBwLXVpL3NyYy9hc3NldHMvc3R5bGVzL19taXhpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQVk7RUFDWiw2QkFBNEIsRUEyRzdCO0VBN0dEO0lBS0ksMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWixlQUFjO0lBQ2QsMEJBQXlCLEVBSzFCO0VBYkg7TUFXTSwwQkFBeUIsRUFDMUI7RUFaTDtJQW9CSSxvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixlQzFCeUIsRUQrQjFCO0VBNUJIO01BeUJNLGVBQWM7TUFDZCxpQkFBZ0IsRUFDakI7RUEzQkw7SUErQkksd0JBQXVCO0lBQ3ZCLHFDQUFvQyxFQWdDckM7RUFoRUg7TUFtQ00sbUJBQWtCLEVBQ25CO0VBcENMO01BdUNNLFlBQVc7TUFDWCx1QkFBc0I7TUFDdEIsbUJBQWtCO01BQ2xCLGVDNUN1QjtNRDZDdkIsZ0JBQWU7TUFDZixpQkFBZ0IsRUFDakI7RUE3Q0w7TUFnRE0sd0JBQXVCO01BQ3ZCLDhCQUE2QjtNQUM3QixrQkFBaUI7TUFDakIsZUN0Q2MsRUR1Q2Y7RUFwREw7TUF1RE0sZUFBYztNQUNkLGlCQUFnQixFQUNqQjtFQXpETDtNQTRETSxlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLGdCQUFlLEVBQ2hCO0VBL0RMO0lBbUVJLHNCQUFxQixFQXFCdEI7RUF4Rkg7TUFzRU0sMEJDekV1QjtNRDBFdkIsYUFBWTtNQUNaLGlCQUFnQjtNRXhEcEIsNEJGeUR1QyxFQUtwQztFQTlFTDtRQTRFUSwwQkM3RXNCLEVEOEV2QjtFQTdFUDtNQWlGTSxZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ2xCO0VBckZMO0lBMkZJLGlCQUFnQjtJQUNoQixlQUFjLEVBQ2Y7RUE3Rkg7SUFnR0ksaUJBQWdCO0lBQ2hCLGFBQVksRUFDYjtFQWxHSDtJQXFHSSxpQkFBZ0I7SUFDaEIsMEJDdEZnQjtJRHVGaEIsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixtQkFBa0IsRUFFbkIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbmdcIjtcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAtMTVweCBhdXRvIDM1cHggYXV0bztcblxuICBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTNlYztcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgY29sb3I6ICM4MjkwYTM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZTNlYztcblxuICAgICY6Zm9jdXN7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjY2RhO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0Lm5nLWludmFsaWQge1xuICAgIC8vIGJvcmRlciA6IHNvbGlkIDJweCAjYzgxMTBkO1xuICB9XG5cbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3JfbWFpbjtcbiAgICAubWFuIHtcbiAgICAgIGNvbG9yOiAjOEE5OEEwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzcHggI2U2ZTVlNTtcblxuICAgIC5mb3JtLWZpZWxkc3tcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICB9XG5cbiAgICAuc2lnbi1pbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDMwcHggMHB4IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3JfbWVudTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmZvcmdvdC1wc3tcbiAgICAgIHBhZGRpbmc6IDE1cHggMzBweCAyMHB4O1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkZGUzZWM7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xuICAgIH1cblxuICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAjOEE5OEEwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBvcHRpb24ge1xuICAgICAgY29sb3I6ICM4QTk4QTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb24tY29udGFpbmVye1xuICAgIG1hcmdpbjogMzVweCAwcHggMTBweDtcblxuICAgIC5zaWdudXB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcl9tYWluO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuNCBlYXNlLWluKTtcblxuICAgICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6JHByaW1hcnktY29sb3JfbGlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvZ2luIHtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cblxuXG4gIH1cblxuICAuZXJyb3J7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjogI2Y5NjU2NTtcbiAgfVxuXG4gIC53YXJuaW5ne1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG5cbiAgLmVycm9yLWNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvci1yZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG5cbiAgfVxuXG59XG5cblxuIiwiJHByaW1hcnktY29sb3JfbWFpbiA6ICMyNDI1ODI7XG4kcHJpbWFyeS1jb2xvcl9tZW51IDogIzJGMkZBMjtcbiRwcmltYXJ5LWNvbG9yX2xpZ2h0IDogIzQ3MTdGNjtcblxuJGFjY2VudC1saWdodC1jb2xvciA6ICNlMWE2Mzc7XG4kYWNjZW50LWNvbG9yIDogI0UxOTEzMTtcbiRhY2NlbnQtZGFyay1jb2xvciA6ICNjMTcxMWQ7XG5cbiRzZWNvbmRhcnlfY29sb3IgOiAjMzJjNWQyO1xuXG5cbiR3aGl0ZV9kYXJrIDogI2Y1ZjVmNTtcblxuJGdyYXlfbGlnaHRlciA6ICNlN2VjZjE7XG4kZ3JheV9saWdodCA6ICNkZmRmZGY7XG4kZ3JheSA6ICM4QTk4QTA7XG4kZ3JheS1kYXJrIDogIzdhOGNhNTtcblxuXG4kZXJyb3ItcmVkIDogI2JiMzUzNTtcbiR3YXJuaW5nIDogI2UxYTEwYztcbiRzdWNjZXNzIDogIzEwNzEyNDtcblxuJGdyYXlfMCA6I2Y4ZjlmYTtcbiRncmF5XzEgOiAjZjFmM2Y1O1xuJGdyYXlfMiA6ICNlOWVjZWY7XG4kZ3JheV8zIDogI2RlZTJlNjtcbiRncmF5XzQgOiAjY2VkNGRhO1xuJGdyYXlfNSA6ICNhZGI1YmQ7XG4kZ3JheV82IDogIzg2OGU5NjtcbiRncmF5XzcgOiAjNDk1MDU3O1xuJGdyYXlfOCA6ICMzNDNhNDA7XG4kZ3JheV85IDogIzIxMjUyOTtcbiIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIC1tcy1ib3gtc2hhZG93OiAkc2hhZG93O1xuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5AbWl4aW4gaWNvbi1yb3RhdGUoJHJvdGF0ZTkwKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1tb3otdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1tcy10cmFuc2Zvcm06ICRyb3RhdGU5MDtcbiAgLW8tdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIHRyYW5zZm9ybTogJHJvdGF0ZTkwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAtby10cmFuc2l0aW9uOiAgICAgICR0cmFuc2l0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    // roles: string [] = ["", "admin", "clerk", "other"];
    function SignupComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.selectedRole = "";
        this.isInvalidRole = false;
        this.userName = "";
        this.password = "";
        this.repeatpassword = "";
        this.getAllUserNames();
        this.getAllRoles();
    };
    SignupComponent.prototype.onSignUpClick = function (signupForm) {
        if (this.checkBeforeSignup()) {
            if (this.password == this.repeatpassword) {
                this._authenticationService.signup(this.userName, this.password, this.roleValue);
            }
        }
    };
    SignupComponent.prototype.checkBeforeSignup = function () {
        this.errorPwd(this.password);
        this.matchPwd(this.repeatpassword);
        this.uniqueUsername(this.userName);
        if (!this.isRepeatPasswordError && !this.isPasswordError && !this.isUsernameError && !this.isInvalidRole) {
            return true;
        }
        else {
            if (this.selectedRole == "") {
                this.isInvalidRole = true;
            }
            return false;
        }
    };
    SignupComponent.prototype.errorPwd = function (pwd) {
        this.isPasswordError = false;
        this.isPasswordWarning = false;
        if (pwd.length == 0) {
            this.isPasswordError = true;
            this.passwordError = "Password cannot be empty";
        }
        else if ((0 < pwd.length) && (pwd.length < 8)) {
            this.passwordWarning = "Not a strong password";
            this.isPasswordWarning = true;
        }
        else {
            this.isPasswordError = false;
            this.isPasswordWarning = false;
        }
    };
    SignupComponent.prototype.matchPwd = function (pwd) {
        this.isRepeatPasswordError = false;
        if (pwd != this.password) {
            this.isRepeatPasswordError = true;
            this.repeatPasswordError = "Not matching";
        }
    };
    SignupComponent.prototype.uniqueUsername = function (username) {
        if (username.length === 0) {
            this.isUsernameError = true;
            this.usernameError = "User name can not be empty";
        }
        else if (username.length > 45) {
            this.isUsernameError = true;
            this.usernameError = "Ony 45 Characters Allowed";
        }
        else if (!this.isUniqueUsername(username)) {
            this.isUsernameError = true;
            this.usernameError = "User name already exists, please use another name";
        }
        else {
            this.isUsernameError = false;
            this.usernameError = '';
        }
    };
    SignupComponent.prototype.onRoleSelected = function (event) {
        this.selectedRole = event.target.value;
        this.isInvalidRole = false;
        for (var _i = 0, _a = this.availableUserRoles; _i < _a.length; _i++) {
            var role = _a[_i];
            if (role.roleName === this.selectedRole) {
                this.roleValue = role.roleId;
                return;
            }
        }
        this.isInvalidRole = true;
        // switch (this.selectedRole) {
        //     case "admin": {
        //         this.roleValue = 1;
        //         break;
        //     }
        //     case "clerk": {
        //         this.roleValue = 2;
        //         break;
        //     }
        //     case "other": {
        //         this.roleValue = 3;
        //         break;
        //     }
        //     default: {
        //         this.isInvalidRole = true;
        //         break;
        //     }
        // }
    };
    SignupComponent.prototype.loginClick = function () {
        this._router.navigate(["login"]);
    };
    SignupComponent.prototype.getAllUserNames = function () {
        var _this = this;
        this._authenticationService.getAllUserNames(function (response) {
            if (response.length != 0) {
                _this.availableUserNames = response;
            }
            else {
                _this.availableUserNames = [];
            }
        });
    };
    SignupComponent.prototype.getAllRoles = function () {
        var _this = this;
        this._authenticationService.getAllRoles(function (response) {
            if (response.length != 0) {
                _this.availableUserRoles = response;
                console.log(JSON.stringify(_this.availableUserRoles));
            }
            else {
                _this.availableUserRoles = [];
            }
        });
    };
    SignupComponent.prototype.isUniqueUsername = function (username) {
        for (var _i = 0, _a = this.availableUserNames; _i < _a.length; _i++) {
            var item = _a[_i];
            if (username === item) {
                return false;
            }
        }
        return true;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/authentication/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/billing/billing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/billing/billing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function() { return BillingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maincomponets_addbill_addbill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maincomponets/addbill/addbill.component */ "./src/app/billing/maincomponets/addbill/addbill.component.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.guard */ "./src/app/app.guard.ts");
/* harmony import */ var _maincomponets_viewbill_viewbill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maincomponets/viewbill/viewbill.component */ "./src/app/billing/maincomponets/viewbill/viewbill.component.ts");
/* harmony import */ var _utility_bills_electricity_view_view_electricity_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility-bills/electricity/view/view-electricity-bill.component */ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.ts");
/* harmony import */ var _utility_bills_internet_create_create_internet_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility-bills/internet/create/create-internet-bill.component */ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var billingRoutes = [
    {
        path: "bill",
        children: [
            {
                path: 'create',
                component: _maincomponets_addbill_addbill_component__WEBPACK_IMPORTED_MODULE_2__["AddbillComponent"],
                canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_3__["AppGuard"]],
            },
            {
                path: 'show',
                canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_3__["AppGuard"]],
                children: [
                    {
                        path: 'electricity',
                        component: _utility_bills_electricity_view_view_electricity_bill_component__WEBPACK_IMPORTED_MODULE_5__["ViewElectricityBillComponent"],
                        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_3__["AppGuard"]]
                    },
                    {
                        path: 'telephone',
                        component: _utility_bills_internet_create_create_internet_bill_component__WEBPACK_IMPORTED_MODULE_6__["CreateInternetBillComponent"],
                        canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_3__["AppGuard"]]
                    }
                ]
            },
            {
                path: 'view',
                component: _maincomponets_viewbill_viewbill_component__WEBPACK_IMPORTED_MODULE_4__["ViewbillComponent"],
                canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_3__["AppGuard"]]
            }
        ]
    }
];
var BillingRoutingModule = /** @class */ (function () {
    function BillingRoutingModule() {
    }
    BillingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(billingRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], BillingRoutingModule);
    return BillingRoutingModule;
}());



/***/ }),

/***/ "./src/app/billing/billing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/billing/billing.module.ts ***!
  \*******************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_bills_electricity_create_create_electricity_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-bills/electricity/create/create-electricity-bill.component */ "./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.ts");
/* harmony import */ var _utility_bills_internet_create_create_internet_bill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility-bills/internet/create/create-internet-bill.component */ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.ts");
/* harmony import */ var _utility_bills_water_create_create_water_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility-bills/water/create/create-water-bill.component */ "./src/app/billing/utility-bills/water/create/create-water-bill.component.ts");
/* harmony import */ var _utility_bills_telephone_create_create_telephone_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility-bills/telephone/create/create-telephone-bill.component */ "./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.ts");
/* harmony import */ var _maincomponets_addbill_addbill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maincomponets/addbill/addbill.component */ "./src/app/billing/maincomponets/addbill/addbill.component.ts");
/* harmony import */ var _maincomponets_viewbill_viewbill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maincomponets/viewbill/viewbill.component */ "./src/app/billing/maincomponets/viewbill/viewbill.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/billing/billing-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _utility_bills_electricity_view_view_electricity_bill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utility-bills/electricity/view/view-electricity-bill.component */ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.ts");
/* harmony import */ var _utility_bills_electricity_update_update_electricity_bill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utility-bills/electricity/update/update-electricity-bill.component */ "./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _utility_bills_electricity_certify_certify_electricity_bill_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utility-bills/electricity/certify/certify-electricity-bill.component */ "./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _directives_permission_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../directives/permission.module */ "./src/app/directives/permission.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _billing_routing_module__WEBPACK_IMPORTED_MODULE_8__["BillingRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
                _directives_permission_module__WEBPACK_IMPORTED_MODULE_18__["PermissionModule"]
            ],
            declarations: [
                _utility_bills_electricity_create_create_electricity_bill_component__WEBPACK_IMPORTED_MODULE_1__["CreateElectricityBillComponent"],
                _utility_bills_internet_create_create_internet_bill_component__WEBPACK_IMPORTED_MODULE_2__["CreateInternetBillComponent"],
                _utility_bills_water_create_create_water_bill_component__WEBPACK_IMPORTED_MODULE_3__["CreateWaterBillComponent"],
                _utility_bills_telephone_create_create_telephone_bill_component__WEBPACK_IMPORTED_MODULE_4__["CreateTelephoneBillComponent"],
                _maincomponets_addbill_addbill_component__WEBPACK_IMPORTED_MODULE_5__["AddbillComponent"],
                _maincomponets_viewbill_viewbill_component__WEBPACK_IMPORTED_MODULE_6__["ViewbillComponent"],
                _utility_bills_electricity_view_view_electricity_bill_component__WEBPACK_IMPORTED_MODULE_13__["ViewElectricityBillComponent"],
                _utility_bills_electricity_update_update_electricity_bill_component__WEBPACK_IMPORTED_MODULE_14__["UpdateElectricityBillComponent"],
                _utility_bills_electricity_certify_certify_electricity_bill_component__WEBPACK_IMPORTED_MODULE_16__["CertifyElectricityBillComponent"]
            ]
        })
    ], BillingModule);
    return BillingModule;
}());



/***/ }),

/***/ "./src/app/billing/maincomponets/addbill/addbill.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/billing/maincomponets/addbill/addbill.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <div class=\"col-sm-12\">\n    <!--Form Container - START-->\n    <div class=\"form-container billInputContainer\">\n      <div class=\"form-header\">\n        Create New Bill\n      </div>\n\n      <div class=\"row \">\n        <label class=\"control-label col-sm-2\">Select Bill Type <span>*</span></label>\n        <div class=\"col-sm-2 field-value\">\n          <select class=\"form-control\" (change)=\"onTypeSelected($event)\">\n            <option *ngFor=\"let opt of typeString\" [selected]=\"selectedType == opt\">\n              {{opt}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"isElectricity\">\n      <app-create-electricity-bill></app-create-electricity-bill>\n    </div>\n    <div *ngIf=\"isInternet\">\n      <app-create-internet-bill></app-create-internet-bill>\n    </div>\n    <div *ngIf=\"isTelephone\">\n      <app-create-telephone-bill></app-create-telephone-bill>\n    </div>\n    <div *ngIf=\"isWater\">\n      <app-create-water-bill></app-create-water-bill>\n    </div>\n  </div>\n\n  <!--<button (click)=\"showit()\">show</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/billing/maincomponets/addbill/addbill.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/billing/maincomponets/addbill/addbill.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.form-header {\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL21haW5jb21wb25ldHMvYWRkYmlsbC9hZGRiaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsNkJBQTRCLEVBQzdCOztBQUVEO0VBQXNCLGVBQWMsRUFBRzs7QUFFdkM7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvbWFpbmNvbXBvbmV0cy9hZGRiaWxsL2FkZGJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiA1cHggMHB4IDMwcHg7XG4gIGNvbG9yOiAjRTE5MTMxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYmlsbElucHV0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZXNtb2tlO1xufVxuXG4uY29udHJvbC1sYWJlbCBzcGFuIHsgY29sb3I6ICNkZDBkMGQ7fVxuXG4uY29udHJvbC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDlweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/billing/maincomponets/addbill/addbill.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/billing/maincomponets/addbill/addbill.component.ts ***!
  \********************************************************************/
/*! exports provided: AddbillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbillComponent", function() { return AddbillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddbillComponent = /** @class */ (function () {
    function AddbillComponent() {
        this.typeString = ["", "Electricity", "Internet", "Telephone", "Water"];
    }
    AddbillComponent.prototype.ngOnInit = function () {
        this.selectedType = "";
        this.clearAll();
    };
    AddbillComponent.prototype.onTypeSelected = function (event) {
        this.selectedType = event.target.value;
        this.clearAll();
        switch (this.selectedType) {
            case "Electricity": {
                this.isElectricity = true;
                break;
            }
            case "Water": {
                this.isWater = true;
                break;
            }
            case "Telephone": {
                this.isTelephone = true;
                break;
            }
            case "Internet": {
                this.isInternet = true;
                break;
            }
            default: {
                this.clearAll();
                break;
            }
        }
    };
    AddbillComponent.prototype.clearAll = function () {
        this.isElectricity = false;
        this.isInternet = false;
        this.isWater = false;
        this.isTelephone = false;
    };
    AddbillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-addbill",
            template: __webpack_require__(/*! ./addbill.component.html */ "./src/app/billing/maincomponets/addbill/addbill.component.html"),
            styles: [__webpack_require__(/*! ./addbill.component.scss */ "./src/app/billing/maincomponets/addbill/addbill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddbillComponent);
    return AddbillComponent;
}());



/***/ }),

/***/ "./src/app/billing/maincomponets/viewbill/viewbill.component.html":
/*!************************************************************************!*\
  !*** ./src/app/billing/maincomponets/viewbill/viewbill.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <div class=\"col-sm-12\">\n    <!--Form Container - START-->\n    <div class=\"form-container billViewContainer\">\n      <div class=\"form-header\">\n         View Bills\n      </div>\n\n      <div class=\"row \">\n        <label class=\"control-label col-sm-2\">Select Bill Type <span>*</span></label>\n        <div class=\"col-sm-2 field-value\">\n          <select class=\"form-control\" (change)=\"onTypeSelected($event)\">\n            <option *ngFor=\"let opt of typeString\" [selected]=\"selectedType == opt\">\n              {{opt}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"isElectricity\">\n      <app-view-electricity-bill></app-view-electricity-bill>\n    </div>\n    <div *ngIf=\"isInternet\">\n      <app-create-internet-bill></app-create-internet-bill>\n    </div>\n    <div *ngIf=\"isTelephone\">\n      <app-create-telephone-bill></app-create-telephone-bill>\n    </div>\n    <div *ngIf=\"isWater\">\n      <app-create-water-bill></app-create-water-bill>\n    </div>\n  </div>\n\n  <!--<button (click)=\"showit()\">show</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/billing/maincomponets/viewbill/viewbill.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/billing/maincomponets/viewbill/viewbill.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.form-header {\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.billViewContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL21haW5jb21wb25ldHMvdmlld2JpbGwvdmlld2JpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2Qiw2QkFBNEIsRUFDN0I7O0FBRUQ7RUFBc0IsZUFBYyxFQUFHOztBQUV2QztFQUNFLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy9tYWluY29tcG9uZXRzL3ZpZXdiaWxsL3ZpZXdiaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogNXB4IDBweCAzMHB4O1xuICBjb2xvcjogI0UxOTEzMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJpbGxWaWV3Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZXNtb2tlO1xufVxuXG4uY29udHJvbC1sYWJlbCBzcGFuIHsgY29sb3I6ICNkZDBkMGQ7fVxuXG4uY29udHJvbC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDlweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/billing/maincomponets/viewbill/viewbill.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/billing/maincomponets/viewbill/viewbill.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewbillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewbillComponent", function() { return ViewbillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewbillComponent = /** @class */ (function () {
    function ViewbillComponent() {
        this.typeString = ["", "Electricity", "Internet", "Telephone", "Water"];
    }
    ViewbillComponent.prototype.ngOnInit = function () {
        this.selectedType = "";
        this.clearAll();
    };
    ViewbillComponent.prototype.onTypeSelected = function (event) {
        this.selectedType = event.target.value;
        this.clearAll();
        switch (this.selectedType) {
            case "Electricity": {
                this.isElectricity = true;
                break;
            }
            case "Water": {
                this.isWater = true;
                break;
            }
            case "Telephone": {
                this.isTelephone = true;
                break;
            }
            case "Internet": {
                this.isInternet = true;
                break;
            }
            default: {
                this.clearAll();
                break;
            }
        }
    };
    ViewbillComponent.prototype.clearAll = function () {
        this.isElectricity = false;
        this.isInternet = false;
        this.isWater = false;
        this.isTelephone = false;
    };
    ViewbillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-viewbill",
            template: __webpack_require__(/*! ./viewbill.component.html */ "./src/app/billing/maincomponets/viewbill/viewbill.component.html"),
            styles: [__webpack_require__(/*! ./viewbill.component.scss */ "./src/app/billing/maincomponets/viewbill/viewbill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewbillComponent);
    return ViewbillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n    <div class=\"form-container billInputContainer\">\n\n        <form class=\"form-horizontal\" #electricityBillForm=\"ngForm\" novalidate\n              (ngSubmit)=\"approve()\" autocomplete=\"off\">\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Date:</label>\n                <div class=\"col-sm-6\">\n                    <p class=\"form-control\">{{bill.datetime}}</p>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Number:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.billNo}}</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Previous Reading:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.previousReading}}</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Current Reading:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.currentReading}}</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Number:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.billNo}}</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">No. Of Units:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.noOfUnits}}</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Amount:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.amount}}</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-2\">Location:</label>\n                <div class=\"col-sm-6\"><p class=\"form-control\">{{bill.location}}</p></div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-sm-4 col-sm-offset-2 btnContainer\">\n                    <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n                    &nbsp;\n                    <a class=\"btn btn-warning\" (click)=\"reject()\">Clear</a>\n                </div>\n            </div>\n\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.modal {\n  top: 10%;\n  outline: none; }\n\n.tbl-header {\n  margin-top: 0px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvZWxlY3RyaWNpdHkvY2VydGlmeS9jZXJ0aWZ5LWVsZWN0cmljaXR5LWJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsNkJBQTRCLEVBQzdCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLFNBQVE7RUFDUixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFBTSw4QkFBNkIsRUFBRzs7QUFLdEM7RUFBc0IsZUFBYyxFQUFHOztBQUV2QztFQUNFLGVBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvdXRpbGl0eS1iaWxscy9lbGVjdHJpY2l0eS9jZXJ0aWZ5L2NlcnRpZnktZWxlY3RyaWNpdHktYmlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YmwtaGVhZGVyIHtcbiAgY29sb3I6ICNFMTkxMzE7XG59XG5cbi5iaWxsSW5wdXRDb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlc21va2U7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjZjk2NTY1O1xufVxuXG4ubW9kYWwge1xuICB0b3A6IDEwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRibC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDVweCAwcHggMzBweDtcbiAgY29sb3I6ICNFMTkxMzE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idG57IGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O31cblxuXG5cblxuLmNvbnRyb2wtbGFiZWwgc3BhbiB7IGNvbG9yOiAjZGQwZDBkO31cblxuLmJ0bkNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDo1JTtcbiAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbn1cblxuLmNvbnRyb2wtbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CertifyElectricityBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifyElectricityBillComponent", function() { return CertifyElectricityBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/data-models */ "./src/app/models/data-models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertifyElectricityBillComponent = /** @class */ (function () {
    // @Output()
    // private onUpdateTask: EventEmitter<boolean> = new EventEmitter();
    function CertifyElectricityBillComponent() {
    }
    CertifyElectricityBillComponent.prototype.ngOnInit = function () {
    };
    CertifyElectricityBillComponent.prototype.approve = function () {
    };
    CertifyElectricityBillComponent.prototype.reject = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_data_models__WEBPACK_IMPORTED_MODULE_1__["ElectricityBill"])
    ], CertifyElectricityBillComponent.prototype, "bill", void 0);
    CertifyElectricityBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certify-electricity-bill',
            template: __webpack_require__(/*! ./certify-electricity-bill.component.html */ "./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.html"),
            styles: [__webpack_require__(/*! ./certify-electricity-bill.component.scss */ "./src/app/billing/utility-bills/electricity/certify/certify-electricity-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CertifyElectricityBillComponent);
    return CertifyElectricityBillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <!--<div class=\"col-sm-12\">-->\n    <!--Form Container - START-->\n    <div class=\"form-container billInputContainer\">\n      <div class=\"form-header\">\n        Electricity Bill\n      </div>\n\n      <form class=\"form-horizontal\" #electricityBillForm=\"ngForm\" novalidate\n            (ngSubmit)=\"onSubmition(billForm)\" autocomplete=\"off\">\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isAccountNoError}\">\n          <label class=\"control-label col-sm-2\">Bill Account Number <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Bill Account Number\"\n                   name=\"name\"\n                   #nameRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"electricityBill.billNo\"\n                   (input)=\"isAccountNoValid($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isAccountNoError\">{{accountNoError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isPeriodError}\">\n          <label class=\"control-label col-sm-2\">Period <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"month\"\n                   autocomplete=\"off\"\n                   placeholder=\"Period\"\n                   name=\"period\"\n                   #periodRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"electricityBill.period\"\n                   (input)=\"isPeriodValid($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isPeriodError\">{{periodError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isPreviousReadingError}\">\n          <label class=\"control-label col-sm-2\">Previous Reading <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"number\"\n                   autocomplete=\"off\"\n                   placeholder=\"Previous Reading\"\n                   name=\"prevread\"\n                   #prevreadRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"electricityBill.previousReading\"\n                   (input)=\"isPreviousReadingValid($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isPreviousReadingError\">{{previousReadingError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isCurrentReadingError}\">\n          <label class=\"control-label col-sm-2\">Current Reading <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"number\"\n                   autocomplete=\"off\"\n                   placeholder=\"Current Reading\"\n                   name=\"curread\"\n                   #curreadRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"electricityBill.currentReading\"\n                   (input)=\"isCurrentReadingValid($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isCurrentReadingError\">{{currentReadingError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isNoOfUnitsError}\">\n          <label class=\"control-label col-sm-2\">No. of Units <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"number\"\n                   autocomplete=\"off\"\n                   placeholder=\"No. of Units\"\n                   name=\"units\"\n                   required\n                   #unitsRef=\"ngModel\"\n                   [(ngModel)]=\"electricityBill.noOfUnits\">\n            <span class=\"error\" *ngIf=\"isNoOfUnitsError\">{{noOfUnitsError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isAmountError}\">\n          <label class=\"control-label col-sm-2\">Amount <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"number\"\n                   autocomplete=\"off\"\n                   placeholder=\"Amount\"\n                   name=\"amount\"\n                   #amountRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"electricityBill.amount\"\n                   (input)=\"isAmountValid($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isAmountError\">{{amountError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isLocationError}\">\n          <label class=\"control-label col-sm-2\">Location <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Location\"\n                   name=\"location\"\n                   #locationRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"electricityBill.location\"\n                   (input)=\"isLocationValid($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isLocationError\">{{locationError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-4 col-sm-offset-2 btnContainer\">\n            <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n            &nbsp;\n            <a type=\"button\" class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</a>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.form-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvZWxlY3RyaWNpdHkvY3JlYXRlL2NyZWF0ZS1lbGVjdHJpY2l0eS1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBRUQ7RUFBc0IsZUFBYyxFQUFHOztBQUV2QztFQUNFLGVBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvdXRpbGl0eS1iaWxscy9lbGVjdHJpY2l0eS9jcmVhdGUvY3JlYXRlLWVsZWN0cmljaXR5LWJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICBjb2xvcjogI0UxOTEzMTtcbn1cblxuLmJpbGxJbnB1dENvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGVzbW9rZTtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmOTY1NjU7XG59XG5cbi5jb250cm9sLWxhYmVsIHNwYW4geyBjb2xvcjogI2RkMGQwZDt9XG5cbi5idG5Db250YWluZXJ7XG4gIG1hcmdpbi10b3A6NSU7XG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XG59XG5cbi5jb250cm9sLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateElectricityBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateElectricityBillComponent", function() { return CreateElectricityBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/data-models */ "./src/app/models/data-models.ts");
/* harmony import */ var _services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/electricity-bill.service */ "./src/app/services/electricity-bill.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateElectricityBillComponent = /** @class */ (function () {
    function CreateElectricityBillComponent(electricityBillsService, _router) {
        this.electricityBillsService = electricityBillsService;
        this._router = _router;
    }
    CreateElectricityBillComponent.prototype.ngOnInit = function () {
        this.electricityBill = new _models_data_models__WEBPACK_IMPORTED_MODULE_1__["ElectricityBill"]();
        this.clearForm();
        this.disableAddButton = false;
        //this.electricityBill.noOfUnits = this.getNoOfUnits();
    };
    CreateElectricityBillComponent.prototype.onSubmition = function (billForm) {
        //when form is submitted
        if (this.electricityBill.billNo != null && this.electricityBill.billNo != "" &&
            this.electricityBill.location != null && this.electricityBill.location != "" &&
            this.electricityBill.previousReading != null &&
            this.electricityBill.currentReading != null &&
            this.electricityBill.noOfUnits != null &&
            this.electricityBill.amount != null &&
            this.electricityBill.location != null && this.electricityBill.location != "") {
            this.electricityBill.certifiedDate = "2018-01-03 00:00:00.0";
            this.electricityBill.userKey = 1;
            this.electricityBill.traineeStaffId = 1;
            this.electricityBill.certification = "approved";
            this.electricityBillsService.insertElectricityBill(this.electricityBill);
        }
        else {
            if (this.electricityBill.billNo.length == 0) {
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty";
            }
            else {
                this.isAccountNoError = false;
            }
            if (this.electricityBill.period.length == 0) {
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty";
            }
            else {
                this.isPeriodError = false;
            }
            if (this.electricityBill.previousReading == null) {
                this.isPreviousReadingError = true;
                this.previousReadingError = "Previous Reading cannot be empty";
            }
            else {
                this.isPreviousReadingError = false;
            }
            if (this.electricityBill.currentReading == null) {
                this.isCurrentReadingError = true;
                this.currentReadingError = "Current Reading cannot be empty";
            }
            else {
                this.isCurrentReadingError = false;
            }
            if (this.electricityBill.noOfUnits == null) {
                this.isNoOfUnitsError = true;
                this.noOfUnitsError = "No of Units cannot be empty";
            }
            else {
                this.isNoOfUnitsError = false;
            }
            if (this.electricityBill.amount == null) {
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty";
            }
            else {
                this.isAmountError = false;
            }
            if (this.electricityBill.location.length == 0) {
                this.isLocationError = true;
                this.locationError = "Bill No cannot be empty";
            }
            else {
                this.isLocationError = false;
            }
            this.disableAddButton = false;
        }
    };
    CreateElectricityBillComponent.prototype.isAccountNoValid = function (accoutNo) {
        //when the accout no is ented do the acount no check.
        //shold be a no in the database
        if (accoutNo.length == 0) {
            this.isAccountNoError = true;
            this.accountNoError = 'Bill no can not be empty';
        }
        else {
            this.isAccountNoError = false;
            this.accountNoError = '';
        }
    };
    CreateElectricityBillComponent.prototype.isPeriodValid = function (period) {
        //shold be a no in the database
        if (period.length == 0) {
            this.isPeriodError = true;
            this.periodError = 'Period can not be empty';
        }
        else {
            this.isPeriodError = false;
            this.periodError = '';
        }
    };
    CreateElectricityBillComponent.prototype.isPreviousReadingValid = function (previousReading) {
        //shold be a no in the database
        if (previousReading.length == 0) {
            this.isPreviousReadingError = true;
            this.previousReadingError = 'Previous Reading can not be empty';
        }
        else {
            this.isPreviousReadingError = false;
            this.previousReadingError = '';
        }
    };
    CreateElectricityBillComponent.prototype.isCurrentReadingValid = function (currentReading) {
        //shold be a no in the database
        if (currentReading.length == 0) {
            this.isCurrentReadingError = true;
            this.currentReadingError = 'Current Reading can not be empty';
        }
        else {
            this.isCurrentReadingError = false;
            this.currentReadingError = '';
        }
    };
    CreateElectricityBillComponent.prototype.isNoOfUnitsValid = function (noOfUnits) {
        //shold be a no in the database
        if (noOfUnits.length == 0) {
            this.isNoOfUnitsError = true;
            this.noOfUnitsError = 'No of Units can not be empty';
        }
        else {
            this.isNoOfUnitsError = false;
            this.noOfUnitsError = '';
        }
    };
    CreateElectricityBillComponent.prototype.isAmountValid = function (amount) {
        //shold be a no in the database
        if (amount.length == 0) {
            this.isAmountError = true;
            this.amountError = 'Amount can not be empty';
        }
        else {
            this.isAmountError = false;
            this.amountError = '';
        }
    };
    CreateElectricityBillComponent.prototype.isLocationValid = function (location) {
        //shold be a no in the database
        if (location.length == 0) {
            this.isLocationError = true;
            this.locationError = 'Location can not be empty';
        }
        else {
            this.isLocationError = false;
            this.locationError = '';
        }
    };
    CreateElectricityBillComponent.prototype.reloadPage = function () {
    };
    CreateElectricityBillComponent.prototype.getNoOfUnits = function () {
        return this.electricityBill.noOfUnits = this.electricityBill.currentReading - this.electricityBill.previousReading;
    };
    CreateElectricityBillComponent.prototype.clearForm = function () {
        this.electricityBill.amount = null;
        this.electricityBill.currentReading = null;
        this.electricityBill.previousReading = null;
        this.electricityBill.location = '';
        this.electricityBill.period = '';
        this.electricityBill.noOfUnits = null;
        this.electricityBill.billNo = '';
        this.clearErrors();
    };
    CreateElectricityBillComponent.prototype.clearErrors = function () {
        this.isAccountNoError = false;
        this.isPeriodError = false;
        this.isPreviousReadingError = false;
        this.isCurrentReadingError = false;
        this.isNoOfUnitsError = false;
        this.isAmountError = false;
        this.isLocationError = false;
        this.accountNoError = "";
        this.periodError = "";
        this.previousReadingError = "";
        this.currentReadingError = "";
        this.noOfUnitsError = "";
        this.accountNoError = "";
        this.locationError = "";
    };
    CreateElectricityBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-electricity-bill",
            template: __webpack_require__(/*! ./create-electricity-bill.component.html */ "./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.html"),
            styles: [__webpack_require__(/*! ./create-electricity-bill.component.scss */ "./src/app/billing/utility-bills/electricity/create/create-electricity-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_2__["ElectricityBillsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateElectricityBillComponent);
    return CreateElectricityBillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n    <div class=\"form-container billInputContainer\">\n\n        <form class=\"form-horizontal\" #electricityBillForm=\"ngForm\" novalidate\n              (ngSubmit)=\"onSubmition(billForm)\" autocomplete=\"off\">\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isAccountNoError}\">\n                <label class=\"control-label col-sm-2\">Bill Account Number <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"text\"\n                           autocomplete=\"off\"\n                           readonly\n                           name=\"name\"\n                           #nameRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"electricityBill.billNo\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isPeriodError}\">\n                <label class=\"control-label col-sm-2\">Period <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"text\"\n                           autocomplete=\"off\"\n                           readonly\n                           name=\"period\"\n                           #periodRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"electricityBill.period\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isPreviousReadingError}\">\n                <label class=\"control-label col-sm-2\">Previous Reading <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"number\"\n                           autocomplete=\"off\"\n                           placeholder=\"Previous Reading\"\n                           name=\"prevread\"\n                           #prevreadRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"electricityBill.previousReading\"\n                           (input)=\"isPreviousReadingValid($event.target.value)\">\n                    <span class=\"error\" *ngIf=\"isPreviousReadingError\">{{previousReadingError}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isCurrentReadingError}\">\n                <label class=\"control-label col-sm-2\">Current Reading <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"number\"\n                           autocomplete=\"off\"\n                           placeholder=\"Current Reading\"\n                           name=\"curread\"\n                           #curreadRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"electricityBill.currentReading\"\n                           (input)=\"isCurrentReadingValid($event.target.value)\">\n                    <span class=\"error\" *ngIf=\"isCurrentReadingError\">{{currentReadingError}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isNoOfUnitsError}\">\n                <label class=\"control-label col-sm-2\">No. of Units <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"number\"\n                           autocomplete=\"off\"\n                           placeholder=\"No. of Units\"\n                           name=\"units\"\n                           required\n                           #unitsRef=\"ngModel\"\n                           [(ngModel)]=\"electricityBill.noOfUnits\">\n                    <span class=\"error\" *ngIf=\"isNoOfUnitsError\">{{noOfUnitsError}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isAmountError}\">\n                <label class=\"control-label col-sm-2\">Amount <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"number\"\n                           autocomplete=\"off\"\n                           placeholder=\"Amount\"\n                           name=\"amount\"\n                           #amountRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"electricityBill.amount\"\n                           (input)=\"isAmountValid($event.target.value)\">\n                    <span class=\"error\" *ngIf=\"isAmountError\">{{amountError}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': isLocationError}\">\n                <label class=\"control-label col-sm-2\">Location <span>*</span></label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\"\n                           type=\"text\"\n                           autocomplete=\"off\"\n                           readonly\n                           name=\"location\"\n                           #locationRef=\"ngModel\"\n                           required\n                           [(ngModel)]=\"electricityBill.location\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-sm-4 col-sm-offset-2 btnContainer\">\n                    <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n                    &nbsp;\n                    <a class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</a>\n                </div>\n            </div>\n\n        </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.modal {\n  top: 10%;\n  outline: none; }\n\n.tbl-header {\n  margin-top: 0px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvZWxlY3RyaWNpdHkvdXBkYXRlL3VwZGF0ZS1lbGVjdHJpY2l0eS1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxTQUFRO0VBQ1IsY0FBYSxFQUNkOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsMEJBQXlCLEVBQzFCOztBQUVEO0VBQU0sOEJBQTZCLEVBQUc7O0FBS3RDO0VBQXNCLGVBQWMsRUFBRzs7QUFFdkM7RUFDRSxlQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvZWxlY3RyaWNpdHkvdXBkYXRlL3VwZGF0ZS1lbGVjdHJpY2l0eS1iaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRibC1oZWFkZXIge1xuICBjb2xvcjogI0UxOTEzMTtcbn1cblxuLmJpbGxJbnB1dENvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGVzbW9rZTtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmOTY1NjU7XG59XG5cbi5tb2RhbCB7XG4gIHRvcDogMTAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGJsLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogNXB4IDBweCAzMHB4O1xuICBjb2xvcjogI0UxOTEzMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bnsgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7fVxuXG5cblxuXG4uY29udHJvbC1sYWJlbCBzcGFuIHsgY29sb3I6ICNkZDBkMGQ7fVxuXG4uYnRuQ29udGFpbmVye1xuICBtYXJnaW4tdG9wOjUlO1xuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xufVxuXG4uY29udHJvbC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDlweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UpdateElectricityBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateElectricityBillComponent", function() { return UpdateElectricityBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/data-models */ "./src/app/models/data-models.ts");
/* harmony import */ var _services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/electricity-bill.service */ "./src/app/services/electricity-bill.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateElectricityBillComponent = /** @class */ (function () {
    function UpdateElectricityBillComponent(electricityBillsService, _router) {
        this.electricityBillsService = electricityBillsService;
        this._router = _router;
        this.onUpdateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UpdateElectricityBillComponent.prototype.ngOnInit = function () {
        this.disableAddButton = false;
    };
    UpdateElectricityBillComponent.prototype.ngAfterViewChecked = function () {
        console.log("After view loaded : " + this.electricityBill.id);
    };
    UpdateElectricityBillComponent.prototype.onSubmition = function (billForm) {
        //when form is submitted
        if (this.electricityBill.billNo != null && this.electricityBill.billNo != "" &&
            this.electricityBill.location != null && this.electricityBill.location != "" &&
            this.electricityBill.previousReading != null &&
            this.electricityBill.currentReading != null &&
            this.electricityBill.noOfUnits != null &&
            this.electricityBill.amount != null &&
            this.electricityBill.location != null && this.electricityBill.location != "") {
            // this.electricityBill.certifiedDate = "2018-01-03 00:00:00.0";
            // this.electricityBill.userKey = 1;
            // this.electricityBill.traineeStaffId = 1;
            // this.electricityBill.certification = "approved";
            this.electricityBillsService.updateElectricityBill(this.electricityBill);
            this.onUpdateTask.emit(true);
        }
        else {
            if (this.electricityBill.billNo.length == 0) {
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty";
            }
            else {
                this.isAccountNoError = false;
            }
            if (this.electricityBill.period.length == 0) {
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty";
            }
            else {
                this.isPeriodError = false;
            }
            if (this.electricityBill.previousReading == null) {
                this.isPreviousReadingError = true;
                this.previousReadingError = "Previous Reading cannot be empty";
            }
            else {
                this.isPreviousReadingError = false;
            }
            if (this.electricityBill.currentReading == null) {
                this.isCurrentReadingError = true;
                this.currentReadingError = "Current Reading cannot be empty";
            }
            else {
                this.isCurrentReadingError = false;
            }
            if (this.electricityBill.noOfUnits == null) {
                this.isNoOfUnitsError = true;
                this.noOfUnitsError = "No of Units cannot be empty";
            }
            else {
                this.isNoOfUnitsError = false;
            }
            if (this.electricityBill.amount == null) {
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty";
            }
            else {
                this.isAmountError = false;
            }
            if (this.electricityBill.location.length == 0) {
                this.isLocationError = true;
                this.locationError = "Bill No cannot be empty";
            }
            else {
                this.isLocationError = false;
            }
            this.disableAddButton = false;
        }
    };
    UpdateElectricityBillComponent.prototype.isAccountNoValid = function (accoutNo) {
        //when the accout no is ented do the acount no check.
        //shold be a no in the database
        if (accoutNo.length == 0) {
            this.isAccountNoError = true;
            this.accountNoError = 'Bill no can not be empty';
        }
        else {
            this.isAccountNoError = false;
            this.accountNoError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.isPeriodValid = function (period) {
        //shold be a no in the database
        if (period.length == 0) {
            this.isPeriodError = true;
            this.periodError = 'Period can not be empty';
        }
        else {
            this.isPeriodError = false;
            this.periodError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.isPreviousReadingValid = function (previousReading) {
        //shold be a no in the database
        if (previousReading.length == 0) {
            this.isPreviousReadingError = true;
            this.previousReadingError = 'Previous Reading can not be empty';
        }
        else {
            this.isPreviousReadingError = false;
            this.previousReadingError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.isCurrentReadingValid = function (currentReading) {
        //shold be a no in the database
        if (currentReading.length == 0) {
            this.isCurrentReadingError = true;
            this.currentReadingError = 'Current Reading can not be empty';
        }
        else {
            this.isCurrentReadingError = false;
            this.currentReadingError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.isNoOfUnitsValid = function (noOfUnits) {
        //shold be a no in the database
        if (noOfUnits.length == 0) {
            this.isNoOfUnitsError = true;
            this.noOfUnitsError = 'No of Units can not be empty';
        }
        else {
            this.isNoOfUnitsError = false;
            this.noOfUnitsError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.isAmountValid = function (amount) {
        //shold be a no in the database
        if (amount.length == 0) {
            this.isAmountError = true;
            this.amountError = 'Amount can not be empty';
        }
        else {
            this.isAmountError = false;
            this.amountError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.isLocationValid = function (location) {
        //shold be a no in the database
        if (location.length == 0) {
            this.isLocationError = true;
            this.locationError = 'Location can not be empty';
        }
        else {
            this.isLocationError = false;
            this.locationError = '';
        }
    };
    UpdateElectricityBillComponent.prototype.reloadPage = function () {
    };
    UpdateElectricityBillComponent.prototype.clearForm = function () {
        this.electricityBill.amount = null;
        this.electricityBill.currentReading = null;
        this.electricityBill.previousReading = null;
        this.electricityBill.location = '';
        this.electricityBill.period = '';
        this.electricityBill.noOfUnits = null;
        this.electricityBill.billNo = '';
        this.clearErrors();
    };
    UpdateElectricityBillComponent.prototype.clearErrors = function () {
        this.isAccountNoError = false;
        this.isPeriodError = false;
        this.isPreviousReadingError = false;
        this.isCurrentReadingError = false;
        this.isNoOfUnitsError = false;
        this.isAmountError = false;
        this.isLocationError = false;
        this.accountNoError = "";
        this.periodError = "";
        this.previousReadingError = "";
        this.currentReadingError = "";
        this.noOfUnitsError = "";
        this.accountNoError = "";
        this.locationError = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_data_models__WEBPACK_IMPORTED_MODULE_1__["ElectricityBill"])
    ], UpdateElectricityBillComponent.prototype, "electricityBill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UpdateElectricityBillComponent.prototype, "onUpdateTask", void 0);
    UpdateElectricityBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-update-electricity-bill",
            template: __webpack_require__(/*! ./update-electricity-bill.component.html */ "./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.html"),
            styles: [__webpack_require__(/*! ./update-electricity-bill.component.scss */ "./src/app/billing/utility-bills/electricity/update/update-electricity-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_2__["ElectricityBillsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateElectricityBillComponent);
    return UpdateElectricityBillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n     [config]=\"{backdrop: false, ignoreBackdropClick: true}\"\n     aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title tbl-header pull-left\">{{modalTitle}}</h4>\n                <button type=\"button\" class=\"close pull-right\"\n                        (click)=\"lgModal.hide(); clearModalContent()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <app-update-electricity-bill\n                        *ngIf=\"showUpdateBill\"\n                        [electricityBill]=\"changingBill\"\n                        (onUpdateTask)=\"onUpdateBillHandler($event)\"\n                        (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-update-electricity-bill>\n\n                <app-certify-electricity-bill\n                        *ngIf=\"showCertifyBill\"\n                        [bill]=\"changingBill\"\n                        (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-certify-electricity-bill>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"animated fadeInUp\">\n\n    <div class=\"table-wrapper\">\n\n        <div class=\"form-header\">\n            Electricity Bill Table\n        </div>\n\n        <div class=\"table\">\n            <div class=\"tbl-row header\">\n                <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\" style=\"text-transform: capitalize\">{{field}}</div>\n            </div>\n            <div class=\"tbl-row\" *ngFor=\"let item of electrictyBillList\">\n                <div class=\"tbl-cell\">{{item.datetime}}</div>\n                <div class=\"tbl-cell\">{{item.billNo}}</div>\n                <div class=\"tbl-cell\">{{item.previousReading}}</div>\n                <div class=\"tbl-cell\">{{item.currentReading}}</div>\n                <div class=\"tbl-cell\">{{item.noOfUnits}}</div>\n                <div class=\"tbl-cell\">{{item.amount}}</div>\n                <div class=\"tbl-cell\">{{item.location}}</div>\n                <div class=\"tbl-cell\">{{item.certification}}</div>\n                <div class=\"tbl-cell\">\n                    <button class=\"btn btn-light\"\n                            (click)=\"showUpdateBill=true;changingBill=item;changeDialogTitle();lgModal.show();\"\n                            type=\"button\"\n                            tooltip=\"Update\"\n                            placement=\"top\">\n                        <span class=\"icon material-icons\">edit</span>\n                    </button>\n                </div>\n                <div class=\"tbl-cell\" *appHaspermission=\"1\">\n                    <button class=\"btn btn-light\"\n                            (click)=\"showCertifyBill=true;changingBill=item;changeHeading();lgModal.show();\"\n                            type=\"button\"\n                            tooltip=\"Certify\"\n                            placement=\"top\">\n                        <span class=\"icon material-icons\">done</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"no-rec-row tbl-row\" *ngIf=\"electrictyBillList.length == 0\">\n                <span class=\"no-rec\">No Records...</span>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.form-header {\n  color: #E19131;\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  text-transform: uppercase; }\n\n.table-wrapper {\n  margin-top: 20px; }\n\n.modal {\n  top: 20%;\n  outline: none;\n  background: rgba(0, 0, 0, 0.5); }\n\n.modal-content {\n  width: 1000px; }\n\n.modal-backdrop {\n  display: none; }\n\n.tbl-header {\n  margin-top: 0px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n.table {\n  display: table;\n  width: 100%; }\n\n.table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px; }\n\n.table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n\n.table .tbl-row.header {\n      background-color: #4717F6;\n      font-weight: 600;\n      color: white; }\n\n.table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n\n.table .tbl-row.modified {\n      background-color: #ffffcc; }\n\n.table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n\n.table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n\n.table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n\n.table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #7a8ca5;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0; }\n\n.table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n\n.table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n\n.table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #9a9a9a;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n\n.table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n\n.table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n\n.table .tbl-row .more-con .btn {\n        margin-top: 20px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n\n.table .no-rec-row {\n    position: relative; }\n\n.table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #9a9a9a; }\n\n.table .fromcolor {\n    color: #2f9e44; }\n\n.table .tocolor {\n    color: #dd0d0d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvZWxlY3RyaWNpdHkvdmlldy92aWV3LWVsZWN0cmljaXR5LWJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQiwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxTQUFRO0VBQ1IsY0FBYTtFQUNiLCtCQUE4QixFQUM3Qjs7QUFFSDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGNBQ0YsRUFBQzs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsZUFBYztFQUNkLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBRUQ7RUFBTSw4QkFBNkIsRUFBRzs7QUFFdEM7RUFBc0IsZUFBYyxFQUFHOztBQUV2QztFQUNFLGVBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxZQUFXLEVBcUhaOztBQXZIRDtJQVNJLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsWUFBVyxFQXFGWjs7QUFoR0g7TUFjTSx3QkFBdUIsRUFDeEI7O0FBZkw7TUFrQk0sMEJBQXlCO01BQ3pCLGlCQUFnQjtNQUNoQixhQUFZLEVBQ2I7O0FBckJMO01BNEJNLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFJbkI7O0FBakNMO01Bb0NNLDBCQUF5QixFQUMxQjs7QUFyQ0w7TUF3Q00sY0FBYTtNQUNiLDBCQUF5QixFQVUxQjs7QUFuREw7UUE0Q1Esb0JBQW1CO1FBQ25CLGFBQWEsRUFDZDs7QUE5Q1A7UUFpRFEsY0FBYSxFQUNkOztBQWxEUDtNQXNETSwyQkFBeUI7TUFDekIsMEJBQXlCO01BQ3pCLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsWUFBVztNQUNYLGNBQWE7TUFDYixpQkFBZ0I7TUFDaEIsMEJBQXdCLEVBaUN6Qjs7QUE5Rkw7UUFnRVEsY0FBYSxFQUNkOztBQWpFUDtRQW9FUSxtQkFBa0IsRUFDbkI7O0FBckVQO1FBd0VRLGFBQVk7UUFDWiwwQkFBeUI7UUFDekIsa0JBQWlCO1FBQ2pCLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDakI7O0FBN0VQO1FBZ0ZRLGFBQVk7UUFDWix3QkFBdUI7UUFDdkIsa0JBQWlCLEVBQ2xCOztBQW5GUDtRQXNGUSxnQkFBZSxFQUNoQjs7QUF2RlA7UUEwRlEsaUJBQWdCO1FBQ2hCLDRCQUEwQjtRQUMxQiwrQkFBOEIsRUFDL0I7O0FBN0ZQO0lBbUdJLG1CQUFrQixFQVduQjs7QUE5R0g7TUFzR00sbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxXQUFVO01BQ1YsYUFBWTtNQUNaLGFBQVk7TUFDWixrQkFBaUI7TUFDakIsZUFBYyxFQUNmOztBQTdHTDtJQWlISSxlQUFjLEVBQ2Y7O0FBbEhIO0lBcUhJLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvdXRpbGl0eS1iaWxscy9lbGVjdHJpY2l0eS92aWV3L3ZpZXctZWxlY3RyaWNpdHktYmlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIGNvbG9yOiAjRTE5MTMxO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiA1cHggMHB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1vZGFsIHtcbiAgdG9wOiAyMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KVxuICB9XG5cbi5tb2RhbC1jb250ZW50e1xuICB3aWR0aDogMTAwMHB4O1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lXG59XG5cbi50YmwtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiA1cHggMHB4IDMwcHg7XG4gIGNvbG9yOiAjRTE5MTMxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGFzLWRhbmdlciAuZm9ybS1jb250cm9se1xuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XG4gIGNvbG9yOiAjZDk1MzRmO1xufVxuXG4uYnRueyBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDt9XG5cbi5jb250cm9sLWxhYmVsIHNwYW4geyBjb2xvcjogI2RkMGQwZDt9XG5cbi5idG5Db250YWluZXJ7XG4gIG1hcmdpbi10b3A6NSU7XG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XG59XG5cbi5jb250cm9sLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogOXB4O1xufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnRibC1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGhlaWdodDogMHB4O1xuXG4gICAgJjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzE3RjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50YmwtY2VsbCB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAvLyAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tb2RpZmllZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjO1xuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICBoZWlnaHQ6IDE1OHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjJjOTtcblxuICAgICAgLmFjdGlvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yIDogYmxhY2s7XG4gICAgICB9XG5cbiAgICAgICYuQSwmLlJ7XG4gICAgICAgIGhlaWdodDogMjQzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vcmUtY29ue1xuICAgICAgcGFkZGluZzoxMHB4IDBweCAxMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YThjYTU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNTNweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAxcHggI2QwZDBkMDtcblxuICAgICAgJi5BLCYuUntcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgIH1cblxuICAgICAgLm1vcmUtcm93e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC1uYW1le1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5YTlhOWE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLXZhbHVle1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LGlucHV0e1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5idG57XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHghaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAubm8tcmVjLXJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm5vLXJlYyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICB9XG4gIH1cblxuICAuZnJvbWNvbG9ye1xuICAgIGNvbG9yOiAjMmY5ZTQ0O1xuICB9XG5cbiAgLnRvY29sb3J7XG4gICAgY29sb3I6ICNkZDBkMGQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewElectricityBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewElectricityBillComponent", function() { return ViewElectricityBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/electricity-bill.service */ "./src/app/services/electricity-bill.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewElectricityBillComponent = /** @class */ (function () {
    function ViewElectricityBillComponent(_electrictyBillService, _router) {
        this._electrictyBillService = _electrictyBillService;
        this._router = _router;
        this.fieldSet = ["Date", "Bill Number", "Previous Reading", "Current Reading", "No. of Units", "Amount", "Location", "Certification", ""];
    }
    ViewElectricityBillComponent.prototype.ngOnInit = function () {
        this.electrictyBillList = [];
        this.getElectrictyBills();
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    };
    ViewElectricityBillComponent.prototype.getElectrictyBills = function () {
        var _this = this;
        this._electrictyBillService.getElectricityBills(function (response) {
            console.log(response.length);
            if (response.length != 0) {
                _this.electrictyBillList = response;
            }
            else {
                console.log("Unsuccessfull request");
            }
        });
    };
    ViewElectricityBillComponent.prototype.changeDialogTitle = function () {
        this.changingBill.period = "November 2018";
        return this.modalTitle = "Update an Electricity Bill";
    };
    ViewElectricityBillComponent.prototype.changeHeading = function () {
        return this.modalTitle = "Certify Electricity Bill";
    };
    ViewElectricityBillComponent.prototype.clearModalContent = function () {
        this.showUpdateBill = false;
        this.showCertifyBill = false;
    };
    ViewElectricityBillComponent.prototype.onUpdateBillHandler = function (event) {
        if (event) {
            this.getElectrictyBills();
        }
    };
    ViewElectricityBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view-electricity-bill",
            template: __webpack_require__(/*! ./view-electricity-bill.component.html */ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.html"),
            styles: [__webpack_require__(/*! ./view-electricity-bill.component.scss */ "./src/app/billing/utility-bills/electricity/view/view-electricity-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_electricity_bill_service__WEBPACK_IMPORTED_MODULE_1__["ElectricityBillsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewElectricityBillComponent);
    return ViewElectricityBillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/internet/create/create-internet-bill.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <div class=\"col-sm-12\">\n    <!--Form Container - START-->\n    <div class=\"form-container billInputContainer\">\n      <div class=\"tbl-header\">\n        Internet Bill\n      </div>\n\n      <form class=\"form-horizontal\" #billForm=\"ngForm\" novalidate\n            (ngSubmit)=\"onSubmition(billForm)\" autocomplete=\"off\">\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isNameError}\">\n          <label class=\"control-label col-sm-2\">Bill Account Number <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Bill Account Number\"\n                   name=\"name\"\n                   #nameRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefName\"\n                   (input)=\"isNameUnique($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isNameError\">{{nameError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Date <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Date\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Payment Month <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Payment Month\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Duration <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Duration\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Amount <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Amount\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-4 col-sm-offset-2 btnContainer\">\n            <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n            &nbsp;\n            <a class=\"btn btn-warning\" (click)=\"reloadPage()\">Clear</a>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n  <!--<button (click)=\"showit()\">show</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/internet/create/create-internet-bill.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.billInputContainer .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n\n.billInputContainer .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n\n.rateForm input {\n  background-color: #dde3ec;\n  height: 43px;\n  color: #8290a3;\n  border: 1px solid #dde3ec; }\n\n.rateForm input:focus {\n    border: 1px solid #c3ccda; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  display: none; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n.info-tooltip-view {\n  margin-top: 0em !important;\n  margin-left: 0.5em; }\n\n.modal {\n  top: 10%;\n  outline: none; }\n\n.tbl-header {\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n.noreteselect {\n  margin-left: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  color: #343a40; }\n\n.noreteselect i {\n  font-size: 50px;\n  color: #E19131; }\n\n.viewListForm .control-label {\n  padding-top: 0px !important; }\n\n.sub-control-label {\n  color: #9a9a9a; }\n\n.table {\n  display: table;\n  width: 100%; }\n\n.table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px; }\n\n.table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n\n.table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n\n.table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n\n.table .tbl-row.modified {\n      background-color: #ffffcc; }\n\n.table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n\n.table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n\n.table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n\n.table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #7a8ca5;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0; }\n\n.table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n\n.table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n\n.table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #9a9a9a;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n\n.table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n\n.table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n\n.table .tbl-row .more-con .btn {\n        margin-top: 20px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n\n.table .no-rec-row {\n    position: relative; }\n\n.table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #9a9a9a; }\n\n.table .fromcolor {\n    color: #2f9e44; }\n\n.table .tocolor {\n    color: #dd0d0d; }\n\n.open > .dropdown-menu {\n  display: block;\n  height: 100px;\n  overflow-y: scroll; }\n\n.tariff_des {\n  font-size: 9px !important; }\n\n.tariffdropname {\n  color: #660066; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvaW50ZXJuZXQvY3JlYXRlL2NyZWF0ZS1pbnRlcm5ldC1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLDZCQUE0QixFQWM3Qjs7QUFsQkQ7SUFRTSxxQkFBb0IsRUFDckI7O0FBVEw7SUFhSSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxvQkFBbUIsRUFDcEI7O0FBR0g7RUFHSSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGVBQWM7RUFDZCwwQkFBeUIsRUFLMUI7O0FBWEg7SUFTTSwwQkFBeUIsRUFDMUI7O0FBSUw7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmOztBQUVELDRDQUE0Qzs7QUFDNUM7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQsZ0NBQWdDOztBQUNoQztFQUNFLGNBQWEsRUFDZDs7QUFFRCxnQkFBZ0I7O0FBQ2hCO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULHVCQUFzQjtFQUV0QixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCxVQUFTO0VBQ1QsWUFBVztFQUNYLHdCQUF1QjtFQUV2QixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLG9DQUFtQztFQUVuQyw0QkFBMkIsRUFDNUI7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDJCQUEwQjtFQUMxQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxTQUFRO0VBQ1IsY0FBYSxFQUNkOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZUFBYyxFQUNmOztBQUVEO0VBQU0sOEJBQTZCLEVBQUc7O0FBR3RDO0VBQ0U7Ozs7Z0NBSThCO0VBRTlCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QiwwQkFBeUI7RUFHekIsbUJBQWtCO0VBR2xCLGdEQUErQztFQUMvQyxlQUFjLEVBQ2Y7O0FBRUQ7RUFFSSxxQkFBb0IsRUFDckI7O0FBR0g7RUFBc0IsZUFBYyxFQUFHOztBQUV2QztFQUNFLGVBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUFlLGlCQUFnQjtFQUFFLGVBQWM7RUFBRSxrQkFBaUI7RUFBRSxlQUFjLEVBQUc7O0FBRXJGO0VBQWlCLGdCQUFlO0VBQUUsZUFBYyxFQUFHOztBQUVuRDtFQUE4Qiw0QkFBMkIsRUFBRzs7QUFFNUQ7RUFBb0IsZUFBYyxFQUFHOztBQUdyQztFQUNFLGVBQWM7RUFDZCxZQUFXLEVBcUhaOztBQXZIRDtJQVNJLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsWUFBVyxFQXFGWjs7QUFoR0g7TUFjTSx3QkFBdUIsRUFDeEI7O0FBZkw7TUFrQk0sMEJBQXlCO01BQ3pCLGlCQUFnQjtNQUNoQixhQUFZLEVBQ2I7O0FBckJMO01BNEJNLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFJbkI7O0FBakNMO01Bb0NNLDBCQUF5QixFQUMxQjs7QUFyQ0w7TUF3Q00sY0FBYTtNQUNiLDBCQUF5QixFQVUxQjs7QUFuREw7UUE0Q1Esb0JBQW1CO1FBQ25CLGFBQWEsRUFDZDs7QUE5Q1A7UUFpRFEsY0FBYSxFQUNkOztBQWxEUDtNQXNETSwyQkFBeUI7TUFDekIsMEJBQXlCO01BQ3pCLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsWUFBVztNQUNYLGNBQWE7TUFDYixpQkFBZ0I7TUFDaEIsMEJBQXdCLEVBaUN6Qjs7QUE5Rkw7UUFnRVEsY0FBYSxFQUNkOztBQWpFUDtRQW9FUSxtQkFBa0IsRUFDbkI7O0FBckVQO1FBd0VRLGFBQVk7UUFDWiwwQkFBeUI7UUFDekIsa0JBQWlCO1FBQ2pCLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDakI7O0FBN0VQO1FBZ0ZRLGFBQVk7UUFDWix3QkFBdUI7UUFDdkIsa0JBQWlCLEVBQ2xCOztBQW5GUDtRQXNGUSxnQkFBZSxFQUNoQjs7QUF2RlA7UUEwRlEsaUJBQWdCO1FBQ2hCLDRCQUEwQjtRQUMxQiwrQkFBOEIsRUFDL0I7O0FBN0ZQO0lBbUdJLG1CQUFrQixFQVduQjs7QUE5R0g7TUFzR00sbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxXQUFVO01BQ1YsYUFBWTtNQUNaLGFBQVk7TUFDWixrQkFBaUI7TUFDakIsZUFBYyxFQUNmOztBQTdHTDtJQWlISSxlQUFjLEVBQ2Y7O0FBbEhIO0lBcUhJLGVBQWMsRUFDZjs7QUFHSDtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsbUJBQWtCLEVBQ25COztBQUVEO0VBQWEsMEJBQXlCLEVBQUc7O0FBRXpDO0VBQWdCLGVBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvdXRpbGl0eS1iaWxscy9pbnRlcm5ldC9jcmVhdGUvY3JlYXRlLWludGVybmV0LWJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGJsLWhlYWRlciB7XG4gIGNvbG9yOiAjRTE5MTMxO1xufVxuXG4uYmlsbElucHV0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZXNtb2tlO1xuXG4gIC5maWVsZHMtY29udGFpbmVyIHtcbiAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi5yYXRlRm9ybSB7XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGUzZWM7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGNvbG9yOiAjODI5MGEzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGUzZWM7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2NjZGE7XG4gICAgfVxuICB9XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjZjk2NTY1O1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluZm8tdG9vbHRpcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjOEU0NEFEO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tdG9wOiAwLjNlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5mby10b29sdGlwLXZpZXcge1xuICBtYXJnaW4tdG9wOiAwZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4ubW9kYWwge1xuICB0b3A6IDEwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRibC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiA1cHggMHB4IDMwcHg7XG4gIGNvbG9yOiAjRTE5MTMxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGFzLWRhbmdlciAuZm9ybS1jb250cm9se1xuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XG4gIGNvbG9yOiAjZDk1MzRmO1xufVxuXG4uYnRueyBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDt9XG5cblxuLnNlYXJjaEZpbHRlciB7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxOTEzMTsqL1xuXG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMTkxMzE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZWFyY2hGaWx0ZXIge1xuICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLmNvbnRyb2wtbGFiZWwgc3BhbiB7IGNvbG9yOiAjZGQwZDBkO31cblxuLmJ0bkNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDo1JTtcbiAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbn1cblxuLmNvbnRyb2wtbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59XG5cbi5ub3JldGVzZWxlY3R7IG1hcmdpbi1sZWZ0OiAxMCU7IG1hcmdpbi10b3A6IDUlOyBtYXJnaW4tYm90dG9tOiA1JTsgY29sb3I6ICMzNDNhNDA7fVxuXG4ubm9yZXRlc2VsZWN0IGl7IGZvbnQtc2l6ZTogNTBweDsgY29sb3I6ICNFMTkxMzE7fVxuXG4udmlld0xpc3RGb3JtIC5jb250cm9sLWxhYmVseyBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7fVxuXG4uc3ViLWNvbnRyb2wtbGFiZWx7IGNvbG9yOiAjOWE5YTlhO31cblxuXG4udGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnRibC1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGhlaWdodDogMHB4O1xuXG4gICAgJjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzg4YWE7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50YmwtY2VsbCB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAvLyAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tb2RpZmllZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjO1xuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICBoZWlnaHQ6IDE1OHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjJjOTtcblxuICAgICAgLmFjdGlvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yIDogYmxhY2s7XG4gICAgICB9XG5cbiAgICAgICYuQSwmLlJ7XG4gICAgICAgIGhlaWdodDogMjQzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vcmUtY29ue1xuICAgICAgcGFkZGluZzoxMHB4IDBweCAxMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YThjYTU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNTNweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAxcHggI2QwZDBkMDtcblxuICAgICAgJi5BLCYuUntcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgIH1cblxuICAgICAgLm1vcmUtcm93e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC1uYW1le1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5YTlhOWE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLXZhbHVle1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LGlucHV0e1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5idG57XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHghaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAubm8tcmVjLXJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm5vLXJlYyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICB9XG4gIH1cblxuICAuZnJvbWNvbG9ye1xuICAgIGNvbG9yOiAjMmY5ZTQ0O1xuICB9XG5cbiAgLnRvY29sb3J7XG4gICAgY29sb3I6ICNkZDBkMGQ7XG4gIH1cbn1cblxuLm9wZW4+LmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGFyaWZmX2Rlc3sgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDt9XG5cbi50YXJpZmZkcm9wbmFtZXtjb2xvcjojNjYwMDY2IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/internet/create/create-internet-bill.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateInternetBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInternetBillComponent", function() { return CreateInternetBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateInternetBillComponent = /** @class */ (function () {
    function CreateInternetBillComponent() {
    }
    CreateInternetBillComponent.prototype.ngOnInit = function () {
    };
    CreateInternetBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-internet-bill",
            template: __webpack_require__(/*! ./create-internet-bill.component.html */ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.html"),
            styles: [__webpack_require__(/*! ./create-internet-bill.component.scss */ "./src/app/billing/utility-bills/internet/create/create-internet-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateInternetBillComponent);
    return CreateInternetBillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <div class=\"col-sm-12\">\n    <!--Form Container - START-->\n    <div class=\"form-container billInputContainer\">\n      <div class=\"tbl-header\">\n        Telephone Bill\n      </div>\n\n      <form class=\"form-horizontal\" #billForm=\"ngForm\" novalidate\n            (ngSubmit)=\"onSubmition(billForm)\" autocomplete=\"off\">\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isNameError}\">\n          <label class=\"control-label col-sm-2\">Bill Account Number <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Bill Account Number\"\n                   name=\"name\"\n                   #nameRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefName\"\n                   (input)=\"isNameUnique($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isNameError\">{{nameError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Date <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Date\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Payment Month <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Payment Month\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Duration <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                     name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n              </div>\n            </div>\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Amount <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Amount\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-4 col-sm-offset-2 btnContainer\">\n            <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n            &nbsp;\n            <a class=\"btn btn-warning\" (click)=\"reloadPage()\">Clear</a>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n  <!--<button (click)=\"showit()\">show</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.billInputContainer .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n\n.billInputContainer .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n\n.rateForm input {\n  background-color: #dde3ec;\n  height: 43px;\n  color: #8290a3;\n  border: 1px solid #dde3ec; }\n\n.rateForm input:focus {\n    border: 1px solid #c3ccda; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  display: none; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n.info-tooltip-view {\n  margin-top: 0em !important;\n  margin-left: 0.5em; }\n\n.tbl-header {\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n.noreteselect {\n  margin-left: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  color: #343a40; }\n\n.noreteselect i {\n  font-size: 50px;\n  color: #E19131; }\n\n.viewListForm .control-label {\n  padding-top: 0px !important; }\n\n.sub-control-label {\n  color: #9a9a9a; }\n\n.table {\n  display: table;\n  width: 100%; }\n\n.table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px; }\n\n.table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n\n.table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n\n.table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n\n.table .tbl-row.modified {\n      background-color: #ffffcc; }\n\n.table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n\n.table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n\n.table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n\n.table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #7a8ca5;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0; }\n\n.table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n\n.table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n\n.table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #9a9a9a;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n\n.table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n\n.table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n\n.table .tbl-row .more-con .btn {\n        margin-top: 20px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n\n.table .no-rec-row {\n    position: relative; }\n\n.table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #9a9a9a; }\n\n.table .fromcolor {\n    color: #2f9e44; }\n\n.table .tocolor {\n    color: #dd0d0d; }\n\n.open > .dropdown-menu {\n  display: block;\n  height: 100px;\n  overflow-y: scroll; }\n\n.tariff_des {\n  font-size: 9px !important; }\n\n.tariffdropname {\n  color: #660066; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvdGVsZXBob25lL2NyZWF0ZS9jcmVhdGUtdGVsZXBob25lLWJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsNkJBQTRCLEVBYzdCOztBQWxCRDtJQVFNLHFCQUFvQixFQUNyQjs7QUFUTDtJQWFJLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLG9CQUFtQixFQUNwQjs7QUFHSDtFQUdJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osZUFBYztFQUNkLDBCQUF5QixFQUsxQjs7QUFYSDtJQVNNLDBCQUF5QixFQUMxQjs7QUFJTDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBRUQsNENBQTRDOztBQUM1QztFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsY0FBYSxFQUNkOztBQUVELGdCQUFnQjs7QUFDaEI7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsdUJBQXNCO0VBRXRCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLFVBQVM7RUFDVCxZQUFXO0VBQ1gsd0JBQXVCO0VBRXZCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsNEJBQTJCLEVBQzVCOztBQUVEO0VBQ0Usb0NBQW1DO0VBRW5DLDRCQUEyQixFQUM1Qjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMkJBQTBCO0VBQzFCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLGVBQWMsRUFDZjs7QUFFRDtFQUFNLDhCQUE2QixFQUFHOztBQUd0QztFQUNFOzs7O2dDQUk4QjtFQUU5QixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsMEJBQXlCO0VBR3pCLG1CQUFrQjtFQUdsQixnREFBK0M7RUFDL0MsZUFBYyxFQUNmOztBQUVEO0VBRUkscUJBQW9CLEVBQ3JCOztBQUdIO0VBQXNCLGVBQWMsRUFBRzs7QUFFdkM7RUFDRSxlQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFBZSxpQkFBZ0I7RUFBRSxlQUFjO0VBQUUsa0JBQWlCO0VBQUUsZUFBYyxFQUFHOztBQUVyRjtFQUFpQixnQkFBZTtFQUFFLGVBQWMsRUFBRzs7QUFFbkQ7RUFBOEIsNEJBQTJCLEVBQUc7O0FBRTVEO0VBQW9CLGVBQWMsRUFBRzs7QUFHckM7RUFDRSxlQUFjO0VBQ2QsWUFBVyxFQXFIWjs7QUF2SEQ7SUFTSSxtQkFBa0I7SUFDbEIsMEJBQXlCO0lBQ3pCLFlBQVcsRUFxRlo7O0FBaEdIO01BY00sd0JBQXVCLEVBQ3hCOztBQWZMO01Ba0JNLDBCQUF5QjtNQUN6QixpQkFBZ0I7TUFDaEIsYUFBWSxFQUNiOztBQXJCTDtNQTRCTSxvQkFBbUI7TUFDbkIsbUJBQWtCLEVBSW5COztBQWpDTDtNQW9DTSwwQkFBeUIsRUFDMUI7O0FBckNMO01Bd0NNLGNBQWE7TUFDYiwwQkFBeUIsRUFVMUI7O0FBbkRMO1FBNENRLG9CQUFtQjtRQUNuQixhQUFhLEVBQ2Q7O0FBOUNQO1FBaURRLGNBQWEsRUFDZDs7QUFsRFA7TUFzRE0sMkJBQXlCO01BQ3pCLDBCQUF5QjtNQUN6QixtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLFlBQVc7TUFDWCxjQUFhO01BQ2IsaUJBQWdCO01BQ2hCLDBCQUF3QixFQWlDekI7O0FBOUZMO1FBZ0VRLGNBQWEsRUFDZDs7QUFqRVA7UUFvRVEsbUJBQWtCLEVBQ25COztBQXJFUDtRQXdFUSxhQUFZO1FBQ1osMEJBQXlCO1FBQ3pCLGtCQUFpQjtRQUNqQixrQkFBaUI7UUFDakIsaUJBQWdCLEVBQ2pCOztBQTdFUDtRQWdGUSxhQUFZO1FBQ1osd0JBQXVCO1FBQ3ZCLGtCQUFpQixFQUNsQjs7QUFuRlA7UUFzRlEsZ0JBQWUsRUFDaEI7O0FBdkZQO1FBMEZRLGlCQUFnQjtRQUNoQiw0QkFBMEI7UUFDMUIsK0JBQThCLEVBQy9COztBQTdGUDtJQW1HSSxtQkFBa0IsRUFXbkI7O0FBOUdIO01Bc0dNLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsV0FBVTtNQUNWLGFBQVk7TUFDWixhQUFZO01BQ1osa0JBQWlCO01BQ2pCLGVBQWMsRUFDZjs7QUE3R0w7SUFpSEksZUFBYyxFQUNmOztBQWxISDtJQXFISSxlQUFjLEVBQ2Y7O0FBR0g7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLG1CQUFrQixFQUNuQjs7QUFFRDtFQUFhLDBCQUF5QixFQUFHOztBQUV6QztFQUFnQixlQUFjLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvdGVsZXBob25lL2NyZWF0ZS9jcmVhdGUtdGVsZXBob25lLWJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGJsLWhlYWRlciB7XG4gIGNvbG9yOiAjRTE5MTMxO1xufVxuXG4uYmlsbElucHV0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZXNtb2tlO1xuXG4gIC5maWVsZHMtY29udGFpbmVyIHtcbiAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi5yYXRlRm9ybSB7XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGUzZWM7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGNvbG9yOiAjODI5MGEzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGUzZWM7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2NjZGE7XG4gICAgfVxuICB9XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjZjk2NTY1O1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluZm8tdG9vbHRpcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjOEU0NEFEO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tdG9wOiAwLjNlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5mby10b29sdGlwLXZpZXcge1xuICBtYXJnaW4tdG9wOiAwZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4udGJsLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDVweCAwcHggMzBweDtcbiAgY29sb3I6ICNFMTkxMzE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oYXMtZGFuZ2VyIC5mb3JtLWNvbnRyb2x7XG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0ZjtcbiAgY29sb3I6ICNkOTUzNGY7XG59XG5cbi5idG57IGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O31cblxuXG4uc2VhcmNoRmlsdGVyIHtcbiAgLypvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGVzbW9rZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTE5MTMxOyovXG5cbiAgbWluLWhlaWdodDogNzhweDtcbiAgcGFkZGluZzogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxOTEzMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlYXJjaEZpbHRlciB7XG4gIGRpdltjbGFzc149XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4uY29udHJvbC1sYWJlbCBzcGFuIHsgY29sb3I6ICNkZDBkMGQ7fVxuXG4uYnRuQ29udGFpbmVye1xuICBtYXJnaW4tdG9wOjUlO1xuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xufVxuXG4uY29udHJvbC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDlweDtcbn1cblxuLm5vcmV0ZXNlbGVjdHsgbWFyZ2luLWxlZnQ6IDEwJTsgbWFyZ2luLXRvcDogNSU7IG1hcmdpbi1ib3R0b206IDUlOyBjb2xvcjogIzM0M2E0MDt9XG5cbi5ub3JldGVzZWxlY3QgaXsgZm9udC1zaXplOiA1MHB4OyBjb2xvcjogI0UxOTEzMTt9XG5cbi52aWV3TGlzdEZvcm0gLmNvbnRyb2wtbGFiZWx7IHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDt9XG5cbi5zdWItY29udHJvbC1sYWJlbHsgY29sb3I6ICM5YTlhOWE7fVxuXG5cbi50YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudGJsLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgaGVpZ2h0OiAwcHg7XG5cbiAgICAmOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3ODhhYTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnRibC1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC8vICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1vZGlmaWVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmY2M7XG4gICAgfVxuXG4gICAgJi5vcGVuIHtcbiAgICAgIGhlaWdodDogMTU4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMmM5O1xuXG4gICAgICAuYWN0aW9uIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3IgOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgJi5BLCYuUntcbiAgICAgICAgaGVpZ2h0OiAyNDNweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9yZS1jb257XG4gICAgICBwYWRkaW5nOjEwcHggMHB4IDEwcHggMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdhOGNhNTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICByaWdodDogMTFweDtcbiAgICAgIGhlaWdodDogMTA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1M3B4O1xuICAgICAgYm9yZGVyOnNvbGlkIDFweCAjZDBkMGQwO1xuXG4gICAgICAmLkEsJi5Se1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgfVxuXG4gICAgICAubW9yZS1yb3d7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLW5hbWV7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlhOWE5YTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtdmFsdWV7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICBzZWxlY3QsaW5wdXR7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweCFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5uby1yZWMtcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubm8tcmVjIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgIH1cbiAgfVxuXG4gIC5mcm9tY29sb3J7XG4gICAgY29sb3I6ICMyZjllNDQ7XG4gIH1cblxuICAudG9jb2xvcntcbiAgICBjb2xvcjogI2RkMGQwZDtcbiAgfVxufVxuXG4ub3Blbj4uZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50YXJpZmZfZGVzeyBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O31cblxuLnRhcmlmZmRyb3BuYW1le2NvbG9yOiM2NjAwNjYgfVxuIl19 */"

/***/ }),

/***/ "./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateTelephoneBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTelephoneBillComponent", function() { return CreateTelephoneBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateTelephoneBillComponent = /** @class */ (function () {
    function CreateTelephoneBillComponent() {
    }
    CreateTelephoneBillComponent.prototype.ngOnInit = function () {
    };
    CreateTelephoneBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-telephone-bill",
            template: __webpack_require__(/*! ./create-telephone-bill.component.html */ "./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.html"),
            styles: [__webpack_require__(/*! ./create-telephone-bill.component.scss */ "./src/app/billing/utility-bills/telephone/create/create-telephone-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateTelephoneBillComponent);
    return CreateTelephoneBillComponent;
}());



/***/ }),

/***/ "./src/app/billing/utility-bills/water/create/create-water-bill.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/water/create/create-water-bill.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <div class=\"col-sm-12\">\n    <!--Form Container - START-->\n    <div class=\"form-container billInputContainer\">\n      <div class=\"tbl-header\">\n        Water Bill\n      </div>\n\n      <form class=\"form-horizontal\" #billForm=\"ngForm\" novalidate\n            (ngSubmit)=\"onSubmition(billForm)\" autocomplete=\"off\">\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isNameError}\">\n          <label class=\"control-label col-sm-2\">Bill Account Number <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Bill Account Number\"\n                   name=\"name\"\n                   #nameRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefName\"\n                   (input)=\"isNameUnique($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isNameError\">{{nameError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Period <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Period\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Previous Reading <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Previous Reading\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Current Reading <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Current Reading\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">No. of Units <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"No. of Units\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group row\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n          <label class=\"control-label col-sm-2\">Amount <span>*</span></label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   placeholder=\"Amount\"\n                   name=\"description\"\n                   #descriptionRef=\"ngModel\"\n                   required\n                   [(ngModel)]=\"rateDefDescription\"\n                   (input)=\"descriptionEmpty($event.target.value)\">\n            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-4 col-sm-offset-2 btnContainer\">\n            <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n            &nbsp;\n            <a class=\"btn btn-warning\" (click)=\"reloadPage()\">Clear</a>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n  <!--<button (click)=\"showit()\">show</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/billing/utility-bills/water/create/create-water-bill.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/billing/utility-bills/water/create/create-water-bill.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.billInputContainer .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n\n.billInputContainer .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n\n.rateForm input {\n  background-color: #dde3ec;\n  height: 43px;\n  color: #8290a3;\n  border: 1px solid #dde3ec; }\n\n.rateForm input:focus {\n    border: 1px solid #c3ccda; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  display: none; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n.info-tooltip-view {\n  margin-top: 0em !important;\n  margin-left: 0.5em; }\n\n.modal {\n  top: 10%;\n  outline: none; }\n\n.tbl-header {\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 5%;\n  padding-left: 150px; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n.noreteselect {\n  margin-left: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  color: #343a40; }\n\n.noreteselect i {\n  font-size: 50px;\n  color: #E19131; }\n\n.viewListForm .control-label {\n  padding-top: 0px !important; }\n\n.sub-control-label {\n  color: #9a9a9a; }\n\n.table {\n  display: table;\n  width: 100%; }\n\n.table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px; }\n\n.table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n\n.table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n\n.table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n\n.table .tbl-row.modified {\n      background-color: #ffffcc; }\n\n.table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n\n.table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n\n.table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n\n.table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #7a8ca5;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0; }\n\n.table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n\n.table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n\n.table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #9a9a9a;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n\n.table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n\n.table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n\n.table .tbl-row .more-con .btn {\n        margin-top: 20px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n\n.table .no-rec-row {\n    position: relative; }\n\n.table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #9a9a9a; }\n\n.table .fromcolor {\n    color: #2f9e44; }\n\n.table .tocolor {\n    color: #dd0d0d; }\n\n.open > .dropdown-menu {\n  display: block;\n  height: 100px;\n  overflow-y: scroll; }\n\n.tariff_des {\n  font-size: 9px !important; }\n\n.tariffdropname {\n  color: #660066; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9iaWxsaW5nL3V0aWxpdHktYmlsbHMvd2F0ZXIvY3JlYXRlL2NyZWF0ZS13YXRlci1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLDZCQUE0QixFQWM3Qjs7QUFsQkQ7SUFRTSxxQkFBb0IsRUFDckI7O0FBVEw7SUFhSSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxvQkFBbUIsRUFDcEI7O0FBR0g7RUFHSSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGVBQWM7RUFDZCwwQkFBeUIsRUFLMUI7O0FBWEg7SUFTTSwwQkFBeUIsRUFDMUI7O0FBSUw7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmOztBQUVELDRDQUE0Qzs7QUFDNUM7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQsZ0NBQWdDOztBQUNoQztFQUNFLGNBQWEsRUFDZDs7QUFFRCxnQkFBZ0I7O0FBQ2hCO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULHVCQUFzQjtFQUV0QixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCxVQUFTO0VBQ1QsWUFBVztFQUNYLHdCQUF1QjtFQUV2QixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLG9DQUFtQztFQUVuQyw0QkFBMkIsRUFDNUI7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDJCQUEwQjtFQUMxQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxTQUFRO0VBQ1IsY0FBYSxFQUNkOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZUFBYyxFQUNmOztBQUVEO0VBQU0sOEJBQTZCLEVBQUc7O0FBR3RDO0VBQ0U7Ozs7Z0NBSThCO0VBRTlCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QiwwQkFBeUI7RUFHekIsbUJBQWtCO0VBR2xCLGdEQUErQztFQUMvQyxlQUFjLEVBQ2Y7O0FBRUQ7RUFFSSxxQkFBb0IsRUFDckI7O0FBR0g7RUFBc0IsZUFBYyxFQUFHOztBQUV2QztFQUNFLGVBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUFlLGlCQUFnQjtFQUFFLGVBQWM7RUFBRSxrQkFBaUI7RUFBRSxlQUFjLEVBQUc7O0FBRXJGO0VBQWlCLGdCQUFlO0VBQUUsZUFBYyxFQUFHOztBQUVuRDtFQUE4Qiw0QkFBMkIsRUFBRzs7QUFFNUQ7RUFBb0IsZUFBYyxFQUFHOztBQUdyQztFQUNFLGVBQWM7RUFDZCxZQUFXLEVBcUhaOztBQXZIRDtJQVNJLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsWUFBVyxFQXFGWjs7QUFoR0g7TUFjTSx3QkFBdUIsRUFDeEI7O0FBZkw7TUFrQk0sMEJBQXlCO01BQ3pCLGlCQUFnQjtNQUNoQixhQUFZLEVBQ2I7O0FBckJMO01BNEJNLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFJbkI7O0FBakNMO01Bb0NNLDBCQUF5QixFQUMxQjs7QUFyQ0w7TUF3Q00sY0FBYTtNQUNiLDBCQUF5QixFQVUxQjs7QUFuREw7UUE0Q1Esb0JBQW1CO1FBQ25CLGFBQWEsRUFDZDs7QUE5Q1A7UUFpRFEsY0FBYSxFQUNkOztBQWxEUDtNQXNETSwyQkFBeUI7TUFDekIsMEJBQXlCO01BQ3pCLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsWUFBVztNQUNYLGNBQWE7TUFDYixpQkFBZ0I7TUFDaEIsMEJBQXdCLEVBaUN6Qjs7QUE5Rkw7UUFnRVEsY0FBYSxFQUNkOztBQWpFUDtRQW9FUSxtQkFBa0IsRUFDbkI7O0FBckVQO1FBd0VRLGFBQVk7UUFDWiwwQkFBeUI7UUFDekIsa0JBQWlCO1FBQ2pCLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDakI7O0FBN0VQO1FBZ0ZRLGFBQVk7UUFDWix3QkFBdUI7UUFDdkIsa0JBQWlCLEVBQ2xCOztBQW5GUDtRQXNGUSxnQkFBZSxFQUNoQjs7QUF2RlA7UUEwRlEsaUJBQWdCO1FBQ2hCLDRCQUEwQjtRQUMxQiwrQkFBOEIsRUFDL0I7O0FBN0ZQO0lBbUdJLG1CQUFrQixFQVduQjs7QUE5R0g7TUFzR00sbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxXQUFVO01BQ1YsYUFBWTtNQUNaLGFBQVk7TUFDWixrQkFBaUI7TUFDakIsZUFBYyxFQUNmOztBQTdHTDtJQWlISSxlQUFjLEVBQ2Y7O0FBbEhIO0lBcUhJLGVBQWMsRUFDZjs7QUFHSDtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsbUJBQWtCLEVBQ25COztBQUVEO0VBQWEsMEJBQXlCLEVBQUc7O0FBRXpDO0VBQWdCLGVBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvdXRpbGl0eS1iaWxscy93YXRlci9jcmVhdGUvY3JlYXRlLXdhdGVyLWJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGJsLWhlYWRlciB7XG4gIGNvbG9yOiAjRTE5MTMxO1xufVxuXG4uYmlsbElucHV0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZXNtb2tlO1xuXG4gIC5maWVsZHMtY29udGFpbmVyIHtcbiAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi5yYXRlRm9ybSB7XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGUzZWM7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGNvbG9yOiAjODI5MGEzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGUzZWM7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2NjZGE7XG4gICAgfVxuICB9XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjZjk2NTY1O1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluZm8tdG9vbHRpcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjOEU0NEFEO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tdG9wOiAwLjNlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5mby10b29sdGlwLXZpZXcge1xuICBtYXJnaW4tdG9wOiAwZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4ubW9kYWwge1xuICB0b3A6IDEwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRibC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiA1cHggMHB4IDMwcHg7XG4gIGNvbG9yOiAjRTE5MTMxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGFzLWRhbmdlciAuZm9ybS1jb250cm9se1xuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XG4gIGNvbG9yOiAjZDk1MzRmO1xufVxuXG4uYnRueyBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDt9XG5cblxuLnNlYXJjaEZpbHRlciB7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxOTEzMTsqL1xuXG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMTkxMzE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZWFyY2hGaWx0ZXIge1xuICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLmNvbnRyb2wtbGFiZWwgc3BhbiB7IGNvbG9yOiAjZGQwZDBkO31cblxuLmJ0bkNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDo1JTtcbiAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbn1cblxuLmNvbnRyb2wtbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59XG5cbi5ub3JldGVzZWxlY3R7IG1hcmdpbi1sZWZ0OiAxMCU7IG1hcmdpbi10b3A6IDUlOyBtYXJnaW4tYm90dG9tOiA1JTsgY29sb3I6ICMzNDNhNDA7fVxuXG4ubm9yZXRlc2VsZWN0IGl7IGZvbnQtc2l6ZTogNTBweDsgY29sb3I6ICNFMTkxMzE7fVxuXG4udmlld0xpc3RGb3JtIC5jb250cm9sLWxhYmVseyBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7fVxuXG4uc3ViLWNvbnRyb2wtbGFiZWx7IGNvbG9yOiAjOWE5YTlhO31cblxuXG4udGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnRibC1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGhlaWdodDogMHB4O1xuXG4gICAgJjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzg4YWE7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50YmwtY2VsbCB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAvLyAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tb2RpZmllZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjO1xuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICBoZWlnaHQ6IDE1OHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjJjOTtcblxuICAgICAgLmFjdGlvbiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yIDogYmxhY2s7XG4gICAgICB9XG5cbiAgICAgICYuQSwmLlJ7XG4gICAgICAgIGhlaWdodDogMjQzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vcmUtY29ue1xuICAgICAgcGFkZGluZzoxMHB4IDBweCAxMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YThjYTU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNTNweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAxcHggI2QwZDBkMDtcblxuICAgICAgJi5BLCYuUntcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgIH1cblxuICAgICAgLm1vcmUtcm93e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC1uYW1le1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5YTlhOWE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLXZhbHVle1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LGlucHV0e1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5idG57XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHghaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAubm8tcmVjLXJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm5vLXJlYyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICB9XG4gIH1cblxuICAuZnJvbWNvbG9ye1xuICAgIGNvbG9yOiAjMmY5ZTQ0O1xuICB9XG5cbiAgLnRvY29sb3J7XG4gICAgY29sb3I6ICNkZDBkMGQ7XG4gIH1cbn1cblxuLm9wZW4+LmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGFyaWZmX2Rlc3sgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDt9XG5cbi50YXJpZmZkcm9wbmFtZXtjb2xvcjojNjYwMDY2IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/billing/utility-bills/water/create/create-water-bill.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/billing/utility-bills/water/create/create-water-bill.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateWaterBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWaterBillComponent", function() { return CreateWaterBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateWaterBillComponent = /** @class */ (function () {
    function CreateWaterBillComponent() {
    }
    CreateWaterBillComponent.prototype.ngOnInit = function () {
    };
    CreateWaterBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-water-bill",
            template: __webpack_require__(/*! ./create-water-bill.component.html */ "./src/app/billing/utility-bills/water/create/create-water-bill.component.html"),
            styles: [__webpack_require__(/*! ./create-water-bill.component.scss */ "./src/app/billing/utility-bills/water/create/create-water-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateWaterBillComponent);
    return CreateWaterBillComponent;
}());



/***/ }),

/***/ "./src/app/breadcrumbs/breadcrumbs.component.html":
/*!********************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"url-part\" *ngFor=\"let path of activeView\">{{path}}</span>\n  <span class=\"url-part\" *ngIf=\"!activeView\">home</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/breadcrumbs/breadcrumbs.component.scss":
/*!********************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  line-height: 4rem;\n  position: relative;\n  display: block; }\n\n.url-part {\n  display: inline-block;\n  padding-right: 10px;\n  font-size: 1.3em;\n  font-weight: 300;\n  text-transform: capitalize; }\n\n.url-part:last-child {\n    font-weight: 900;\n    text-transform: uppercase; }\n\n.refresh-icon {\n  position: absolute;\n  right: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #E19131;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 20px;\n  color: white;\n  font-size: 1em;\n  margin-top: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease-in; }\n\n@media screen and (max-width: 768px) {\n    .refresh-icon {\n      right: 0px; } }\n\n.refresh-icon:hover {\n    background-color: #e1a637;\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQiwyQkFBMEIsRUFNM0I7O0FBWEQ7SUFRSSxpQkFBZ0I7SUFDaEIsMEJBQXlCLEVBQzFCOztBQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQ3RCcUI7RUR1QnJCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixnQkFBZTtFRWZmLDZCRnFCb0MsRUFNckM7O0FBVkM7SUFkRjtNQWVJLFdBQVUsRUFTYixFQUFBOztBQXhCRDtJQXFCSSwwQkN2Q3lCO0lEd0N6QixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5nXCI7XG5cbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi51cmwtcGFydHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICAmOmxhc3QtY2hpbGR7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG5cbi5yZWZyZXNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cblxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UtaW4pO1xuXG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1saWdodC1jb2xvcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbiIsIiRwcmltYXJ5LWNvbG9yX21haW4gOiAjMjQyNTgyO1xuJHByaW1hcnktY29sb3JfbWVudSA6ICMyRjJGQTI7XG4kcHJpbWFyeS1jb2xvcl9saWdodCA6ICM0NzE3RjY7XG5cbiRhY2NlbnQtbGlnaHQtY29sb3IgOiAjZTFhNjM3O1xuJGFjY2VudC1jb2xvciA6ICNFMTkxMzE7XG4kYWNjZW50LWRhcmstY29sb3IgOiAjYzE3MTFkO1xuXG4kc2Vjb25kYXJ5X2NvbG9yIDogIzMyYzVkMjtcblxuXG4kd2hpdGVfZGFyayA6ICNmNWY1ZjU7XG5cbiRncmF5X2xpZ2h0ZXIgOiAjZTdlY2YxO1xuJGdyYXlfbGlnaHQgOiAjZGZkZmRmO1xuJGdyYXkgOiAjOEE5OEEwO1xuJGdyYXktZGFyayA6ICM3YThjYTU7XG5cblxuJGVycm9yLXJlZCA6ICNiYjM1MzU7XG4kd2FybmluZyA6ICNlMWExMGM7XG4kc3VjY2VzcyA6ICMxMDcxMjQ7XG5cbiRncmF5XzAgOiNmOGY5ZmE7XG4kZ3JheV8xIDogI2YxZjNmNTtcbiRncmF5XzIgOiAjZTllY2VmO1xuJGdyYXlfMyA6ICNkZWUyZTY7XG4kZ3JheV80IDogI2NlZDRkYTtcbiRncmF5XzUgOiAjYWRiNWJkO1xuJGdyYXlfNiA6ICM4NjhlOTY7XG4kZ3JheV83IDogIzQ5NTA1NztcbiRncmF5XzggOiAjMzQzYTQwO1xuJGdyYXlfOSA6ICMyMTI1Mjk7XG4iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93KSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbiAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAtbXMtYm94LXNoYWRvdzogJHNoYWRvdztcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIGljb24tcm90YXRlKCRyb3RhdGU5MCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICAtbW96LXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICAtbXMtdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1vLXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICB0cmFuc2Zvcm06ICRyb3RhdGU5MDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLW1vei10cmFuc2l0aW9uOiAgICAkdHJhbnNpdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogICAgICAkdHJhbnNpdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgdHJhbnNpdGlvbjogICAgICAgICAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/breadcrumbs/breadcrumbs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.component.ts ***!
  \******************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(_router) {
        this._router = _router;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvals = false;
        this._router.events
            .subscribe(function (event) {
            if (event.url) {
                _this.activeView = event.url.toString().replace('/', '').split('/');
                if (_this.activeView.length == 2) {
                    if (_this.activeView[0] == 'approvals') {
                        _this.approvals = true;
                    }
                    else {
                        _this.approvals = false;
                    }
                }
                else {
                    _this.approvals = false;
                }
            }
        });
    };
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.scss */ "./src/app/breadcrumbs/breadcrumbs.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chartdiv\" style=\"width: 100%; height: 500px\"></div>"

/***/ }),

/***/ "./src/app/chart/chart.component.scss":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ChartComponent = /** @class */ (function () {
    function ChartComponent(zone) {
        this.zone = zone;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
            chart.paddingRight = 20;
            chart.data = [{
                    "country": "January",
                    "visits": 2025
                }, {
                    "country": "February",
                    "visits": 1882
                }, {
                    "country": "March",
                    "visits": 1809
                }, {
                    "country": "April",
                    "visits": 1322
                }, {
                    "country": "May",
                    "visits": 1114
                }, {
                    "country": "Juny",
                    "visits": 984
                }, {
                    "country": "July",
                    "visits": 711
                }, {
                    "country": "August",
                    "visits": 665
                }, {
                    "country": "september",
                    "visits": 580
                }, {
                    "country": "October",
                    "visits": 443
                }, {
                    "country": "November",
                    "visits": 441
                }, {
                    "country": "December",
                    "visits": 395
                }];
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
            categoryAxis.dataFields.category = "country";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
            series.dataFields.valueY = "visits";
            series.dataFields.categoryX = "country";
            series.name = "Visits";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.chart = chart;
        });
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/certify-count/certify-count.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboards/certify-count/certify-count.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"approval-count\" (click)=\"navigate()\">\n  <span class=\"breakdown myCount\">Bill Type: <span class=\"sub\">{{bill.type}}</span></span>\n  <span class=\"count\">{{bill.pendingCertifcations}}</span>\n  <s class=\"icon glyphicon material-icons\">{{bill.icon}}</s>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboards/certify-count/certify-count.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboards/certify-count/certify-count.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".approval-count {\n  height: 170px;\n  position: relative;\n  overflow: hidden;\n  background: green;\n  border-radius: 8px;\n  cursor: hand; }\n  .approval-count .count {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    font-size: 6em;\n    color: white; }\n  .approval-count .name {\n    position: absolute;\n    right: 10px;\n    bottom: 30px;\n    color: #e9e9e9;\n    font-size: 1.2em;\n    font-weight: 900; }\n  .approval-count .icon {\n    color: rgba(255, 255, 255, 0.06);\n    position: absolute;\n    bottom: 0px;\n    top: 40%;\n    left: 0px;\n    font-size: 9em; }\n  .approval-count .myCount {\n    position: absolute;\n    color: #e9e9e9;\n    top: 37px;\n    left: 15px; }\n  .approval-count .groupCount {\n    top: 12px;\n    left: 15px;\n    position: absolute;\n    color: #e9e9e9; }\n  .approval-count .sub {\n    font-weight: 900; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9kYXNoYm9hcmRzL2NlcnRpZnktY291bnQvY2VydGlmeS1jb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWSxFQStDYjtFQXJERDtJQVNJLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWM7SUFDZCxhQUFZLEVBRWI7RUFmSDtJQWtCSSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGFBQVc7SUFDWCxlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNqQjtFQXhCSDtJQTJCSSxpQ0FBZ0M7SUFDaEMsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxTQUFPO0lBQ1AsVUFBUztJQUNULGVBQWMsRUFDZjtFQWpDSDtJQW9DSSxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLFVBQVM7SUFDVCxXQUFVLEVBQ1g7RUF4Q0g7SUEyQ0ksVUFBUztJQUNULFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsZUFBYyxFQUNmO0VBL0NIO0lBa0RJLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvY2VydGlmeS1jb3VudC9jZXJ0aWZ5LWNvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5nXCI7XG5cbi5hcHByb3ZhbC1jb3VudHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IGhhbmQ7XG5cbiAgLmNvdW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3AgOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogNmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICB9XG5cbiAgLm5hbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTozMHB4O1xuICAgIGNvbG9yOiAjZTllOWU5O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuXG4gIC5pY29ue1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB0b3A6NDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBmb250LXNpemU6IDllbTtcbiAgfVxuXG4gIC5teUNvdW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2U5ZTllOTtcbiAgICB0b3A6IDM3cHg7XG4gICAgbGVmdDogMTVweDtcbiAgfVxuXG4gIC5ncm91cENvdW50e1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2U5ZTllOTtcbiAgfVxuXG4gIC5zdWJ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboards/certify-count/certify-count.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboards/certify-count/certify-count.component.ts ***!
  \*********************************************************************/
/*! exports provided: CertifyCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifyCountComponent", function() { return CertifyCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/data-models */ "./src/app/models/data-models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CertifyCountComponent = /** @class */ (function () {
    function CertifyCountComponent(_router) {
        this._router = _router;
    }
    CertifyCountComponent.prototype.ngOnInit = function () {
    };
    CertifyCountComponent.prototype.navigate = function () {
        this._router.navigate([this.bill.route]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_data_models__WEBPACK_IMPORTED_MODULE_1__["Certify"])
    ], CertifyCountComponent.prototype, "bill", void 0);
    CertifyCountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certify-count',
            template: __webpack_require__(/*! ./certify-count.component.html */ "./src/app/dashboards/certify-count/certify-count.component.html"),
            styles: [__webpack_require__(/*! ./certify-count.component.scss */ "./src/app/dashboards/certify-count/certify-count.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CertifyCountComponent);
    return CertifyCountComponent;
}());



/***/ }),

/***/ "./src/app/directives/haspermission.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/haspermission.directive.ts ***!
  \*******************************************************/
/*! exports provided: HaspermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaspermissionDirective", function() { return HaspermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HaspermissionDirective = /** @class */ (function () {
    function HaspermissionDirective(_as, _templateRef, _viewContainer) {
        this._as = _as;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this.hasPermission = false;
    }
    Object.defineProperty(HaspermissionDirective.prototype, "appHaspermission", {
        set: function (permissionPattern) {
            if (this._as.hasPermissions(permissionPattern)) {
                this._viewContainer.createEmbeddedView(this._templateRef);
                this.hasPermission = true;
            }
            else {
                this._viewContainer.clear();
                this.hasPermission = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], HaspermissionDirective.prototype, "appHaspermission", null);
    HaspermissionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHaspermission]'
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], HaspermissionDirective);
    return HaspermissionDirective;
}());



/***/ }),

/***/ "./src/app/directives/permission.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/permission.module.ts ***!
  \*************************************************/
/*! exports provided: PermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionModule", function() { return PermissionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _haspermission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haspermission.directive */ "./src/app/directives/haspermission.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PermissionModule = /** @class */ (function () {
    function PermissionModule() {
    }
    PermissionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _haspermission_directive__WEBPACK_IMPORTED_MODULE_2__["HaspermissionDirective"]
            ],
            exports: [
                _haspermission_directive__WEBPACK_IMPORTED_MODULE_2__["HaspermissionDirective"]
            ]
        })
    ], PermissionModule);
    return PermissionModule;
}());



/***/ }),

/***/ "./src/app/hamburger-menu/hamburger-menu.component.html":
/*!**************************************************************!*\
  !*** ./src/app/hamburger-menu/hamburger-menu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hm-menu-container\" (click)=\"onClick()\">\n  <div class=\"hamburger-menu\" >\n    <div class=\"bar\" [ngClass]=\"{'animate':isClicked}\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hamburger-menu/hamburger-menu.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/hamburger-menu/hamburger-menu.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.hm-menu-container {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n\n.hm-menu-container .hamburger-menu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 25px;\n    height: 22px;\n    cursor: pointer; }\n\n.hm-menu-container .hamburger-menu .bar,\n    .hm-menu-container .hamburger-menu .bar:after,\n    .hm-menu-container .hamburger-menu .bar:before {\n      width: 25px;\n      height: 2px; }\n\n.hm-menu-container .hamburger-menu .bar {\n      position: relative;\n      -webkit-transform: translateY(10px);\n              transform: translateY(10px);\n      background: white;\n      transition: all 0ms 300ms; }\n\n.hm-menu-container .hamburger-menu .bar:before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 10px;\n        background: white;\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n\n.hm-menu-container .hamburger-menu .bar:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 10px;\n        background: white;\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n\n.hm-menu-container .hamburger-menu .bar.animate {\n        background: rgba(255, 255, 255, 0); }\n\n.hm-menu-container .hamburger-menu .bar.animate:after {\n          width: 15.625px;\n          top: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n\n.hm-menu-container .hamburger-menu .bar.animate:before {\n          width: 15.625px;\n          bottom: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2Fzc2V0cy9zdHlsZXMvX3ZhcmlibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVksRUFzRWI7O0FBekVEO0lBTUksbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixRQUFPO0lBQ1AsU0FBUTtJQUNSLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUNYZTtJRFlmLGFBQTBDO0lBQzFDLGdCQUFlLEVBeURoQjs7QUF2RUg7OztNQW1CTSxZQ2xCYTtNRG1CYixZQ2xCYSxFRG1CZDs7QUFyQkw7TUF3Qk0sbUJBQWtCO01BQ2xCLG9DQUFzQztjQUF0Qyw0QkFBc0M7TUFDdEMsa0JBQWtDO01BQ2xDLDBCQUF5QixFQTBDMUI7O0FBckVMO1FBOEJRLFlBQVc7UUFDWCxtQkFBa0I7UUFDbEIsUUFBTztRQUNQLGFDOUJhO1FEK0JiLGtCQUFrQztRQUNsQyxzSEFBNkc7UUFBN0csOEdBQTZHO1FBQTdHLHNLQUE2RyxFQUM5Rzs7QUFwQ1A7UUF1Q1EsWUFBVztRQUNYLG1CQUFrQjtRQUNsQixRQUFPO1FBQ1AsVUN2Q2E7UUR3Q2Isa0JBQWtDO1FBQ2xDLG1IQUEwRztRQUExRywyR0FBMEc7UUFBMUcsbUtBQTBHLEVBQzNHOztBQTdDUDtRQWdEUSxtQ0FBa0MsRUFtQm5DOztBQW5FUDtVQW1EVSxnQkFBMEI7VUFDMUIsT0FBTTtVQUNOLFVBQVU7VUFDVixrQ0FBMEI7a0JBQTFCLDBCQUEwQjtVQUMxQixpQ0FBd0I7a0JBQXhCLHlCQUF3QjtVQUN4QixtSEFBMEc7VUFBMUcsMkdBQTBHO1VBQTFHLHlLQUEwRyxFQUMzRzs7QUF6RFQ7VUE0RFUsZ0JBQTBCO1VBQzFCLFVBQVM7VUFDVCxVQUFVO1VBQ1Ysa0NBQTBCO2tCQUExQiwwQkFBMEI7VUFDMUIsa0NBQXlCO2tCQUF6QiwwQkFBeUI7VUFDekIsc0hBQTZHO1VBQTdHLDhHQUE2RztVQUE3Ryw0S0FBNkcsRUFDOUciLCJmaWxlIjoic3JjL2FwcC9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlibGVzXCI7XG5cbjpob3N0e1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhtLW1lbnUtY29udGFpbmVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgLmhhbWJ1cmdlci1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogJGhtLWJhci13aWR0aDtcbiAgICBoZWlnaHQ6ICRobS1iYXItaGVpZ2h0ICsgJGhtLWJhci1zcGFjaW5nKjI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLmJhcixcbiAgICAuYmFyOmFmdGVyLFxuICAgIC5iYXI6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAkaG0tYmFyLXdpZHRoO1xuICAgICAgaGVpZ2h0OiAkaG0tYmFyLWhlaWdodDtcbiAgICB9XG5cbiAgICAuYmFyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkaG0tYmFyLXNwYWNpbmcpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206ICRobS1iYXItc3BhY2luZztcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAkaG0tYmFyLXNwYWNpbmc7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICB9XG5cbiAgICAgICYuYW5pbWF0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgd2lkdGg6ICRobS1iYXItd2lkdGggLyAxLjY7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQgOiA1cHg7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbiA6IDBweCAwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHdpZHRoOiAkaG0tYmFyLXdpZHRoIC8gMS42O1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0IDogNXB4O1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW4gOiAwcHggMHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbn1cbiIsIi8vVG9wQmFyXG4kdG9wYmFyLWhlaWdodCA6IDcwcHg7XG4kYXBwLW1pbi13aWR0aCA6IDUwMHB4O1xuXG4kYW5pbWF0aW9uLWR1cmF0aW9uIDogMC44cztcblxuLy9IYW1idXJnZXIgTWVudSBzZXR0aW5nc1xuJGhtLWJhci13aWR0aDogMjVweDtcbiRobS1iYXItaGVpZ2h0OiAycHg7XG4kaG0tYmFyLXNwYWNpbmc6IDEwcHg7XG5cbi8vTWVudSBCYXJcbiRtYWluLW1lbnUtZGVmYXVsdC13aWR0aCA6IDUwcHg7XG4kbWFpbi1tZW51LWV4cGFuZGVkLXdpZHRoIDogMjg1cHg7XG4kbWFpbi1tZW51LWljb24taGVpZ2h0IDogNDZweDtcblxuLy9CcmVhZGNydW1ic1xuJG1haW4tYnJlYWRjcnVtYnMtaGVpZ2h0IDogNDZweDtcblxuIl19 */"

/***/ }),

/***/ "./src/app/hamburger-menu/hamburger-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hamburger-menu/hamburger-menu.component.ts ***!
  \************************************************************/
/*! exports provided: HamburgerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerMenuComponent", function() { return HamburgerMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app-common.service */ "./src/app/services/app-common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HamburgerMenuComponent = /** @class */ (function () {
    function HamburgerMenuComponent(_appCommonService) {
        this._appCommonService = _appCommonService;
        this.isClicked = false;
    }
    HamburgerMenuComponent.prototype.ngOnInit = function () {
    };
    HamburgerMenuComponent.prototype.onClick = function () {
        this.isClicked = !this.isClicked;
        this._appCommonService.updateMenuToggleStream(this.isClicked);
    };
    HamburgerMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-hamburger-menu",
            template: __webpack_require__(/*! ./hamburger-menu.component.html */ "./src/app/hamburger-menu/hamburger-menu.component.html"),
            styles: [__webpack_require__(/*! ./hamburger-menu.component.scss */ "./src/app/hamburger-menu/hamburger-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_common_service__WEBPACK_IMPORTED_MODULE_1__["AppCommonService"]])
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"row navbar animated fadeInDown fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"home\">\n        <span class=\"logo\"><img src=\"assets/images/BlenderDesktopLogo.png\" ></span>\n        <span class=\"name\"><span class=\"man\">RECORD APPLICATION</span></span>\n      </a>\n      <app-hamburger-menu></app-hamburger-menu>\n    </div>\n\n    <div class=\"navbar-right text-right\">\n      <app-user-avatar></app-user-avatar>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #242582;\n  border: 0;\n  border-radius: 0px;\n  margin-bottom: 0px;\n  z-index: 200;\n  height: 70px; }\n  .navbar .container-fluid {\n    padding: 10px 0px 10px 0px;\n    min-width: 500px; }\n  @media screen and (max-width: 768px) {\n    .navbar {\n      height: 140px; } }\n  @media screen and (max-width: 768px) {\n  .navbar-header {\n    margin-left: 0px;\n    margin-right: 0px; } }\n  @media screen and (max-width: 768px) {\n  .navbar-right {\n    margin-left: 15px; } }\n  .navbar-brand {\n  float: right;\n  padding-left: 25px;\n  font-size: 1.6rem;\n  color: #E19131;\n  position: relative; }\n  .navbar-brand .logo, .navbar-brand .name {\n    float: left; }\n  .navbar-brand .logo {\n    top: 10px; }\n  .navbar-brand .logo img {\n      height: 30px;\n      margin-top: 5px; }\n  .navbar-brand .name {\n    margin-left: 10px; }\n  .navbar-brand:hover, .navbar-brand:focus, .navbar-brand:active {\n    color: #E19131; }\n  .navbar-brand .man {\n    color: #8A98A0;\n    font-weight: 600;\n    display: inline-block;\n    margin-top: 10px; }\n  app-hamburger-menu {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvaG9tZS9tYW5vai9Qb2RpU2V0RWthL2ZpbmFuY2UtYXBwL2ZpbmFuY2UtYXBwLXVpL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsMEJDSjJCO0VESzNCLFVBQVU7RUFDVixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhRVJtQixFRmtCcEI7RUFoQkQ7SUFTSSwyQkFBMEI7SUFDMUIsaUJFWGtCLEVGWW5CO0VBRUQ7SUFiRjtNQWNJLGNBQTBCLEVBRTdCLEVBQUE7RUFHQztFQURGO0lBRUksaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUVwQixFQUFBO0VBR0M7RUFERjtJQUVJLGtCQUFpQixFQUVwQixFQUFBO0VBRUQ7RUFDRSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixlQ2pDcUI7RURrQ3JCLG1CQUFrQixFQTRCbkI7RUFqQ0Q7SUFRSSxZQUFXLEVBQ1o7RUFUSDtJQVlJLFVBQVMsRUFLVjtFQWpCSDtNQWNNLGFBQVk7TUFDWixnQkFBZSxFQUNoQjtFQWhCTDtJQW9CSSxrQkFBaUIsRUFDbEI7RUFyQkg7SUF3QkksZUNyRG1CLEVEc0RwQjtFQXpCSDtJQTRCSSxlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLHNCQUFxQjtJQUNyQixpQkFBZ0IsRUFDakI7RUFHSDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlibGVzXCI7XG5cbi5uYXZiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yX21haW47XG4gIGJvcmRlciA6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAyMDA7XG4gIGhlaWdodDogJHRvcGJhci1oZWlnaHQ7XG5cbiAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgICBtaW4td2lkdGg6ICRhcHAtbWluLXdpZHRoO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6ICR0b3BiYXItaGVpZ2h0ICogMjtcbiAgfVxufVxuXG4ubmF2YmFyLWhlYWRlcntcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG5cbi5uYXZiYXItcmlnaHR7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn1cblxuLm5hdmJhci1icmFuZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogJGFjY2VudC1jb2xvcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5sb2dvLC5uYW1le1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLmxvZ297XG4gICAgdG9wOiAxMHB4O1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIH1cblxuICAubmFtZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gICY6aG92ZXIsJjpmb2N1cywmOmFjdGl2ZXtcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcbiAgfVxuXG4gIC5tYW4ge1xuICAgIGNvbG9yOiAjOEE5OEEwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuYXBwLWhhbWJ1cmdlci1tZW51e1xuICBmbG9hdDogbGVmdDtcbn1cbiIsIiRwcmltYXJ5LWNvbG9yX21haW4gOiAjMjQyNTgyO1xuJHByaW1hcnktY29sb3JfbWVudSA6ICMyRjJGQTI7XG4kcHJpbWFyeS1jb2xvcl9saWdodCA6ICM0NzE3RjY7XG5cbiRhY2NlbnQtbGlnaHQtY29sb3IgOiAjZTFhNjM3O1xuJGFjY2VudC1jb2xvciA6ICNFMTkxMzE7XG4kYWNjZW50LWRhcmstY29sb3IgOiAjYzE3MTFkO1xuXG4kc2Vjb25kYXJ5X2NvbG9yIDogIzMyYzVkMjtcblxuXG4kd2hpdGVfZGFyayA6ICNmNWY1ZjU7XG5cbiRncmF5X2xpZ2h0ZXIgOiAjZTdlY2YxO1xuJGdyYXlfbGlnaHQgOiAjZGZkZmRmO1xuJGdyYXkgOiAjOEE5OEEwO1xuJGdyYXktZGFyayA6ICM3YThjYTU7XG5cblxuJGVycm9yLXJlZCA6ICNiYjM1MzU7XG4kd2FybmluZyA6ICNlMWExMGM7XG4kc3VjY2VzcyA6ICMxMDcxMjQ7XG5cbiRncmF5XzAgOiNmOGY5ZmE7XG4kZ3JheV8xIDogI2YxZjNmNTtcbiRncmF5XzIgOiAjZTllY2VmO1xuJGdyYXlfMyA6ICNkZWUyZTY7XG4kZ3JheV80IDogI2NlZDRkYTtcbiRncmF5XzUgOiAjYWRiNWJkO1xuJGdyYXlfNiA6ICM4NjhlOTY7XG4kZ3JheV83IDogIzQ5NTA1NztcbiRncmF5XzggOiAjMzQzYTQwO1xuJGdyYXlfOSA6ICMyMTI1Mjk7XG4iLCIvL1RvcEJhclxuJHRvcGJhci1oZWlnaHQgOiA3MHB4O1xuJGFwcC1taW4td2lkdGggOiA1MDBweDtcblxuJGFuaW1hdGlvbi1kdXJhdGlvbiA6IDAuOHM7XG5cbi8vSGFtYnVyZ2VyIE1lbnUgc2V0dGluZ3NcbiRobS1iYXItd2lkdGg6IDI1cHg7XG4kaG0tYmFyLWhlaWdodDogMnB4O1xuJGhtLWJhci1zcGFjaW5nOiAxMHB4O1xuXG4vL01lbnUgQmFyXG4kbWFpbi1tZW51LWRlZmF1bHQtd2lkdGggOiA1MHB4O1xuJG1haW4tbWVudS1leHBhbmRlZC13aWR0aCA6IDI4NXB4O1xuJG1haW4tbWVudS1pY29uLWhlaWdodCA6IDQ2cHg7XG5cbi8vQnJlYWRjcnVtYnNcbiRtYWluLWJyZWFkY3J1bWJzLWhlaWdodCA6IDQ2cHg7XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.1s\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"container-fluid InputContainer\" *appHaspermission=\"1\">\n        <div class=\"title\" >\n          Pending Bill Certifications\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\" *ngFor=\"let bill of certifications\">\n            <app-certify-count\n            [bill]=\"bill\"></app-certify-count>\n          </div>\n        </div>\n      </div>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"title\">Monthly Consumption</div>\n            <app-chart></app-chart>\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"title\">Usage Percentages</div>\n            <app-piechart></app-piechart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".InputContainer {\n  min-height: 100px;\n  padding: 10px;\n  margin-top: 50px;\n  padding-top: 20px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n  .InputContainer .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n  .InputContainer .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLDZCQUE0QixFQWM3QjtFQXBCRDtJQVVNLHFCQUFvQixFQUNyQjtFQVhMO0lBZUksaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixZQUFXO0lBQ1gsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLklucHV0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGVzbW9rZTtcblxuICAuZmllbGRzLWNvbnRhaW5lciB7XG4gICAgZGl2W2NsYXNzXj1cImNvbC1cIl0ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/data-models */ "./src/app/models/data-models.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_authenticationService, _dashboardService) {
        this._authenticationService = _authenticationService;
        this._dashboardService = _dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isEnabled = false;
        this.certifications = [];
        this.getPendingCertifications();
    };
    HomeComponent.prototype.onLogoutClick = function () {
        this._authenticationService.doLogout();
    };
    HomeComponent.prototype.getPendingCertifications = function () {
        var _this = this;
        this._dashboardService.getPendingCertifiactions(function (response) {
            if (response.length != 0) {
                _this.pendingCertifications = response;
                for (var _i = 0, _a = _this.pendingCertifications; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.certifications.push(_this.createBill(item));
                }
            }
            else {
                console.log("Unsuccessfull request");
            }
        });
    };
    HomeComponent.prototype.createBill = function (pendingCertfication) {
        var bill = new _models_data_models__WEBPACK_IMPORTED_MODULE_2__["Certify"]();
        switch (pendingCertfication.billType) {
            case "electricity": {
                bill.type = "Electricity";
                bill.color = "green";
                bill.route = "bill/show/electricity";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }
            case "internet": {
                bill.type = "Internet";
                bill.color = "green";
                bill.route = "bill/show/internet";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }
            case "telephone": {
                bill.type = "Telephone";
                bill.color = "green";
                bill.route = "bill/show/telephone";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }
            default: {
                bill.type = "Other";
                bill.color = "green";
                bill.route = "bill/show/other";
                bill.icon = "ev_station";
                bill.pendingCertifcations = pendingCertfication.count;
                break;
            }
        }
        return bill;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [ngClass]=\"{'is-expand':isExpand}\">\n  <ng-container *ngFor=\"let menu of menuSource\">\n    <li (click)=\"onClick(menu)\" [ngClass]=\"{'selected':menu.id==selectedMenu?.id}\" class=\"{{menu.position}}\">\n            <span *ngIf=\"!isExpand\" tooltip=\"{{menu.name}}\" placement=\"right\">\n                <span class=\"icon material-icons\">{{menu.iconName}}</span>\n            </span>\n      <span class=\"menu-name animated fadeIn\" *ngIf=\"isExpand\">\n                <span class=\"icon material-icons\">{{menu.iconName}}</span>{{menu.name}}</span>\n    </li>\n  </ng-container>\n</ul>\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: #2F2FA2;\n  height: 100%; }\n\nul {\n  list-style: none;\n  padding: 0px;\n  width: 50px;\n  transition: width 0.3s ease-in-out; }\n\nul li {\n    cursor: pointer;\n    width: 100%;\n    height: 46px;\n    border-bottom: solid 1px #4717F6;\n    position: relative;\n    transition: all 0.3s ease-in; }\n\nul li:hover {\n      background-color: #242582; }\n\nul li:after {\n      content: '';\n      width: 0px;\n      height: 0px;\n      border-right: solid 8px #f5f5f5;\n      border-top: solid 10px transparent;\n      border-bottom: solid 10px transparent;\n      position: absolute;\n      right: 0px;\n      top: 14px;\n      display: none; }\n\nul li .icon {\n      display: inline-block;\n      text-align: center;\n      width: 100%;\n      line-height: 46px;\n      color: #adadad;\n      font-size: 1.6em; }\n\nul li .menu-name {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n      color: #afafaf; }\n\nul li.selected {\n      background-color: #32c5d2; }\n\nul li.selected .icon {\n        color: white; }\n\nul li.selected .menu-name {\n        color: white; }\n\nul li.selected:after {\n        display: block; }\n\nul.is-expand {\n    width: 285px; }\n\nul.is-expand li .icon {\n      width: 50px; }\n\nli.child {\n  padding-left: 8%; }\n\n.is-expand .has-child {\n  display: block;\n  pointer-events: none;\n  cursor: default; }\n\nli.has-child {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvaG9tZS9tYW5vai9Qb2RpU2V0RWthL2ZpbmFuY2UtYXBwL2ZpbmFuY2UtYXBwLXVpL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYmxlcy5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFjO0VBQ2QsMEJDTDJCO0VETTNCLGFBQVksRUFDYjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osWUVENkI7RUNPN0IsbUNITDBDLEVBb0UzQzs7QUF4RUQ7SUFPSSxnQkFBZTtJQUNmLFlBQVc7SUFDWCxhRUx5QjtJRk16QixpQ0NsQjBCO0lEbUIxQixtQkFBa0I7SUdGcEIsNkJIR3NDLEVBaURyQzs7QUE3REg7TUFlTSwwQkN6QnVCLEVEMEJ4Qjs7QUFoQkw7TUFtQk0sWUFBVztNQUNYLFdBQVU7TUFDVixZQUFXO01BQ1gsZ0NBQStCO01BQy9CLG1DQUFrQztNQUNsQyxzQ0FBcUM7TUFDckMsbUJBQWtCO01BQ2xCLFdBQVU7TUFDVixVQUFTO01BQ1QsY0FBYSxFQUNkOztBQTdCTDtNQWdDTSxzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxrQkUvQnVCO01GZ0N2QixlQUFjO01BQ2QsaUJBQWdCLEVBQ2pCOztBQXRDTDtNQXlDTSw4QkFBNkI7TUFHN0Isc0JBQXFCO01BQ3JCLGVBQWMsRUFDZjs7QUE5Q0w7TUFpRE0sMEJDbkRvQixFRDhEckI7O0FBNURMO1FBbURRLGFBQVksRUFDYjs7QUFwRFA7UUFzRFEsYUFBWSxFQUNiOztBQXZEUDtRQTBEUSxlQUFjLEVBQ2Y7O0FBM0RQO0lBZ0VJLGFFN0Q2QixFRm9FOUI7O0FBdkVIO01Bb0VRLFlBQVcsRUFDWjs7QUFLUDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxxQkFBb0I7RUFDcEIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbmdcIjtcbkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yX21lbnU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAkbWFpbi1tZW51LWRlZmF1bHQtd2lkdGg7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24od2lkdGggMC4zcyBlYXNlLWluLW91dCk7XG5cbiAgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRtYWluLW1lbnUtaWNvbi1oZWlnaHQ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRwcmltYXJ5LWNvbG9yX2xpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjNzIGVhc2UtaW4pO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcl9tYWluO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMHB4O1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDhweCAjZjVmNWY1O1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMTBweCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEwcHggdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgdG9wOiAxNHB4O1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbWFpbi1tZW51LWljb24taGVpZ2h0O1xuICAgICAgY29sb3I6ICNhZGFkYWQ7XG4gICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIH1cblxuICAgIC5tZW51LW5hbWUge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgIC1vLWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgIGNvbG9yOiAjYWZhZmFmO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeV9jb2xvcjtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLm1lbnUtbmFtZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuaXMtZXhwYW5kIHtcbiAgICB3aWR0aDogJG1haW4tbWVudS1leHBhbmRlZC13aWR0aDtcblxuICAgIGxpIHtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxpLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbn1cblxuLmlzLWV4cGFuZCAuaGFzLWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmxpLmhhcy1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIkcHJpbWFyeS1jb2xvcl9tYWluIDogIzI0MjU4MjtcbiRwcmltYXJ5LWNvbG9yX21lbnUgOiAjMkYyRkEyO1xuJHByaW1hcnktY29sb3JfbGlnaHQgOiAjNDcxN0Y2O1xuXG4kYWNjZW50LWxpZ2h0LWNvbG9yIDogI2UxYTYzNztcbiRhY2NlbnQtY29sb3IgOiAjRTE5MTMxO1xuJGFjY2VudC1kYXJrLWNvbG9yIDogI2MxNzExZDtcblxuJHNlY29uZGFyeV9jb2xvciA6ICMzMmM1ZDI7XG5cblxuJHdoaXRlX2RhcmsgOiAjZjVmNWY1O1xuXG4kZ3JheV9saWdodGVyIDogI2U3ZWNmMTtcbiRncmF5X2xpZ2h0IDogI2RmZGZkZjtcbiRncmF5IDogIzhBOThBMDtcbiRncmF5LWRhcmsgOiAjN2E4Y2E1O1xuXG5cbiRlcnJvci1yZWQgOiAjYmIzNTM1O1xuJHdhcm5pbmcgOiAjZTFhMTBjO1xuJHN1Y2Nlc3MgOiAjMTA3MTI0O1xuXG4kZ3JheV8wIDojZjhmOWZhO1xuJGdyYXlfMSA6ICNmMWYzZjU7XG4kZ3JheV8yIDogI2U5ZWNlZjtcbiRncmF5XzMgOiAjZGVlMmU2O1xuJGdyYXlfNCA6ICNjZWQ0ZGE7XG4kZ3JheV81IDogI2FkYjViZDtcbiRncmF5XzYgOiAjODY4ZTk2O1xuJGdyYXlfNyA6ICM0OTUwNTc7XG4kZ3JheV84IDogIzM0M2E0MDtcbiRncmF5XzkgOiAjMjEyNTI5O1xuIiwiLy9Ub3BCYXJcbiR0b3BiYXItaGVpZ2h0IDogNzBweDtcbiRhcHAtbWluLXdpZHRoIDogNTAwcHg7XG5cbiRhbmltYXRpb24tZHVyYXRpb24gOiAwLjhzO1xuXG4vL0hhbWJ1cmdlciBNZW51IHNldHRpbmdzXG4kaG0tYmFyLXdpZHRoOiAyNXB4O1xuJGhtLWJhci1oZWlnaHQ6IDJweDtcbiRobS1iYXItc3BhY2luZzogMTBweDtcblxuLy9NZW51IEJhclxuJG1haW4tbWVudS1kZWZhdWx0LXdpZHRoIDogNTBweDtcbiRtYWluLW1lbnUtZXhwYW5kZWQtd2lkdGggOiAyODVweDtcbiRtYWluLW1lbnUtaWNvbi1oZWlnaHQgOiA0NnB4O1xuXG4vL0JyZWFkY3J1bWJzXG4kbWFpbi1icmVhZGNydW1icy1oZWlnaHQgOiA0NnB4O1xuXG4iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93KSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbiAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAtbXMtYm94LXNoYWRvdzogJHNoYWRvdztcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIGljb24tcm90YXRlKCRyb3RhdGU5MCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICAtbW96LXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICAtbXMtdHJhbnNmb3JtOiAkcm90YXRlOTA7XG4gIC1vLXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICB0cmFuc2Zvcm06ICRyb3RhdGU5MDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLW1vei10cmFuc2l0aW9uOiAgICAkdHJhbnNpdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogICAgICAkdHJhbnNpdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgdHJhbnNpdGlvbjogICAgICAgICAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app-common.service */ "./src/app/services/app-common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(_appCommonService, _router) {
        this._appCommonService = _appCommonService;
        this._router = _router;
        this.isExpand = false;
        this.menuSource = [
            { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home', pattern: '*' },
            { id: 2, route: '/', name: 'Bill', position: 'parent has-child', iconName: 'blur_linear', pattern: '*' },
            { id: 3, route: '/bill/create', position: 'child', name: 'Create Bill', iconName: 'add_box', pattern: '*' },
            { id: 4, route: '/bill/view', position: 'child', name: 'View Bill', iconName: 'pageview', pattern: '*' },
            { id: 6, route: 'reports', position: 'child', name: 'Charts', iconName: 'blur_linear', pattern: '1' },
        ];
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.selectedMenu = _this.menuSource.filter(function (menu) { return menu.route == event.url; })[0];
            }
        });
        this.selectedMenu = this.menuSource[0];
        this._appCommonService.menuToggleStream.subscribe(function (flag) { return _this.isExpand = flag; });
    };
    MainMenuComponent.prototype.onClick = function (menu) {
        this.selectedMenu = menu;
        this._router.navigate([menu.route]);
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/app/main-menu/main-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_common_service__WEBPACK_IMPORTED_MODULE_1__["AppCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/models/data-models.ts":
/*!***************************************!*\
  !*** ./src/app/models/data-models.ts ***!
  \***************************************/
/*! exports provided: LoginResponse, UserRole, SignupResponse, MenuItem, ElectricityBill, CreateBillResponse, UpdateBillResponse, User, TempResponse, Profile, Certify, PendingCertification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function() { return LoginResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupResponse", function() { return SignupResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityBill", function() { return ElectricityBill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBillResponse", function() { return CreateBillResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBillResponse", function() { return UpdateBillResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempResponse", function() { return TempResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Certify", function() { return Certify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingCertification", function() { return PendingCertification; });
var LoginResponse = /** @class */ (function () {
    function LoginResponse() {
    }
    return LoginResponse;
}());

var UserRole = /** @class */ (function () {
    function UserRole() {
    }
    return UserRole;
}());

var SignupResponse = /** @class */ (function () {
    function SignupResponse() {
    }
    return SignupResponse;
}());

var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());

var ElectricityBill = /** @class */ (function () {
    function ElectricityBill() {
    }
    return ElectricityBill;
}());

var CreateBillResponse = /** @class */ (function () {
    function CreateBillResponse() {
    }
    return CreateBillResponse;
}());

var UpdateBillResponse = /** @class */ (function () {
    function UpdateBillResponse() {
    }
    return UpdateBillResponse;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var TempResponse = /** @class */ (function () {
    function TempResponse() {
    }
    return TempResponse;
}());

var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());

var Certify = /** @class */ (function () {
    function Certify() {
    }
    return Certify;
}());

var PendingCertification = /** @class */ (function () {
    function PendingCertification() {
    }
    return PendingCertification;
}());



/***/ }),

/***/ "./src/app/piechart/piechart.component.html":
/*!**************************************************!*\
  !*** ./src/app/piechart/piechart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chartdivx\" style=\"width: 100%; height: 500px\"></div>"

/***/ }),

/***/ "./src/app/piechart/piechart.component.scss":
/*!**************************************************!*\
  !*** ./src/app/piechart/piechart.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZWNoYXJ0L3BpZWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/piechart/piechart.component.ts":
/*!************************************************!*\
  !*** ./src/app/piechart/piechart.component.ts ***!
  \************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
var PiechartComponent = /** @class */ (function () {
    function PiechartComponent() {
    }
    PiechartComponent.prototype.ngOnInit = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdivx", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
        chart.data = [{
                "bill": "Electricity",
                "value": 501.9
            }, {
                "bill": "Internet",
                "value": 301.9
            }, {
                "bill": "Water",
                "value": 201.1
            }, {
                "bill": "Telephone",
                "value": 165.8
            }, {
                "bill": "Other",
                "value": 139.9
            }];
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "bill";
    };
    PiechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piechart',
            template: __webpack_require__(/*! ./piechart.component.html */ "./src/app/piechart/piechart.component.html"),
            styles: [__webpack_require__(/*! ./piechart.component.scss */ "./src/app/piechart/piechart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PiechartComponent);
    return PiechartComponent;
}());



/***/ }),

/***/ "./src/app/remote/dashboard_remote.service.ts":
/*!****************************************************!*\
  !*** ./src/app/remote/dashboard_remote.service.ts ***!
  \****************************************************/
/*! exports provided: DashboardRemoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRemoteService", function() { return DashboardRemoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardRemoteService = /** @class */ (function () {
    function DashboardRemoteService(http) {
        this.http = http;
        this.url = new URL(window.location.href);
        this.apiContext = this.url.protocol + '//' + this.url.host + '/financeo';
        this.apiEndpoints = {
            pendingBills: this.apiContext + "/bills/pending"
        };
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
    }
    DashboardRemoteService.prototype.getPendingCertifiactions = function () {
        this.certificationObservable = this.http.get(this.apiEndpoints['pendingBills'], this.httpOptions);
        return this.certificationObservable;
    };
    DashboardRemoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardRemoteService);
    return DashboardRemoteService;
}());



/***/ }),

/***/ "./src/app/remote/electricity_bill_remote.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/remote/electricity_bill_remote.service.ts ***!
  \***********************************************************/
/*! exports provided: ElectricityBillRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityBillRemoteDataService", function() { return ElectricityBillRemoteDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectricityBillRemoteDataService = /** @class */ (function () {
    function ElectricityBillRemoteDataService(http) {
        this.http = http;
        //private apiContext = "http://demo0207630.mockable.io";
        this.url = new URL(window.location.href);
        this.apiContext = this.url.protocol + '//' + this.url.host + '/finance';
        this.apiEndpoints = {
            electricitybills: this.apiContext + "/bills/electricitybill",
            insertbill: this.apiContext + "/bills/electricitybill",
            updatebill: this.apiContext + "/bills/electricitybill"
        };
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
    }
    // getElectricityBills() {
    //     return this.http.get(this.apiEndpoints['electricitybills'], this.httpOptions)
    //         .pipe(map((response: Response) => {
    //             console.log(response);
    //             return {
    //                 success: true,
    //                 message: 'Electricity Bills Loaded Successfully',
    //                 payload: response.json()
    //             };
    //         }))
    //     // .catch
    //     // ((error: Response) => Observable.throw({
    //     //     success: false,
    //     //     message: 'Error Loading Rate Tax List',
    //     //     error: error
    //     // }));
    // }
    ElectricityBillRemoteDataService.prototype.getElectricityBills = function () {
        this.electricityBillsObservable = this.http.get(this.apiEndpoints['electricitybills'], this.httpOptions);
        console.log(this.electricityBillsObservable);
        return this.electricityBillsObservable;
    };
    ElectricityBillRemoteDataService.prototype.insertElectricityBill = function (electricityBill) {
        return this.http.post(this.apiEndpoints["insertbill"], electricityBill, this.httpOptions);
    };
    ElectricityBillRemoteDataService.prototype.updateElectricityBill = function (electricityBill) {
        console.log("Id:" + electricityBill.id);
        return this.http.put(this.apiEndpoints["updatebill"] + "/" + electricityBill.billNo, electricityBill, this.httpOptions);
    };
    ElectricityBillRemoteDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ElectricityBillRemoteDataService);
    return ElectricityBillRemoteDataService;
}());



/***/ }),

/***/ "./src/app/remote/login_remote-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/remote/login_remote-data.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRemoteDataService", function() { return LoginRemoteDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/data-models */ "./src/app/models/data-models.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRemoteDataService = /** @class */ (function () {
    function LoginRemoteDataService(http) {
        this.http = http;
        this.url = new URL(window.location.href);
        this.apiContext = this.url.protocol + '//' + this.url.host + '/finance';
        this.apiEndpoints = {
            login: this.apiContext + "/staff/login",
            signup: this.apiContext + "/staff/signup",
            userNames: this.apiContext + "/staff/usernames",
            userRoles: this.apiContext + "/roles/all"
        };
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
    }
    LoginRemoteDataService.prototype.login = function (userName, password) {
        var user = new _models_data_models__WEBPACK_IMPORTED_MODULE_1__["User"]();
        user.password = password;
        user.userName = userName;
        return this.http.post(this.apiEndpoints["login"], user, this.httpOptions);
    };
    LoginRemoteDataService.prototype.signup = function (userName, password, role) {
        var profile = new _models_data_models__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
        profile.password = password;
        profile.userName = userName;
        profile.userRole = role;
        return this.http.post(this.apiEndpoints["signup"], profile, this.httpOptions);
    };
    LoginRemoteDataService.prototype.getAllUserNames = function () {
        this.userNamesObservable = this.http.get(this.apiEndpoints['userNames'], this.httpOptions);
        return this.userNamesObservable;
    };
    LoginRemoteDataService.prototype.getAllRoles = function () {
        this.userRolesObservable = this.http.get(this.apiEndpoints['userRoles'], this.httpOptions);
        return this.userRolesObservable;
    };
    LoginRemoteDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginRemoteDataService);
    return LoginRemoteDataService;
}());



/***/ }),

/***/ "./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"chartContainer\" style=\"height: 370px; width: 100%; margin-left:auto;margin-right:auto;\"></div>-->\n<!--<div id=\"chartdivx\" style=\"width: 100%; height: 370px; margin-left:auto;margin-right:auto;\"></div>-->\n\n<mat-grid-list cols=\"2\" rowHeight=\"1:1\">\n  <mat-grid-tile>\n    <mat-grid-tile-header>\n      Monthly consumption of the Year\n    </mat-grid-tile-header>\n    <div id=\"chartdiv\" style=\"width: 90%;height: 80%;\"></div>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>\n      Consumption by Location\n    </mat-grid-tile-header>\n    <div id=\"chartdivx\" style=\"width: 90%;height: 80%;\"></div>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>\n      Comparison with Last year\n    </mat-grid-tile-header>\n    <div id=\"chartdivCompare\" style=\"width: 90%;height: 80%;\"></div>\n  </mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  border: 1px;\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtYmlsbHMvZWxlY3RyaWNpdHkvcmVwb3J0cy1lbGVjdHJpY2l0eS9yZXBvcnRzLWVsZWN0cmljaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGNBQWEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy1iaWxscy9lbGVjdHJpY2l0eS9yZXBvcnRzLWVsZWN0cmljaXR5L3JlcG9ydHMtZWxlY3RyaWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ReportsElectricityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsElectricityComponent", function() { return ReportsElectricityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ReportsElectricityComponent = /** @class */ (function () {
    function ReportsElectricityComponent(zone) {
        this.zone = zone;
    }
    ReportsElectricityComponent.prototype.ngOnInit = function () {
        this.createPieChart();
        this.createBarChart();
        this.createComaprisonChart();
    };
    ReportsElectricityComponent.prototype.createPieChart = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdivx", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
        chart.data = [{
                "bill": "Library",
                "value": 501.9
            }, {
                "bill": "Hall 01",
                "value": 301.9
            }, {
                "bill": "Hall 02",
                "value": 201.1
            }, {
                "bill": "Canteen 01",
                "value": 165.8
            }, {
                "bill": "Auditorium",
                "value": 139.9
            }];
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "bill";
        this.pieChart = chart;
    };
    ReportsElectricityComponent.prototype.createBarChart = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
            chart.paddingRight = 20;
            chart.data = [{
                    "country": "Jan",
                    "visits": 2025
                }, {
                    "country": "Feb",
                    "visits": 1882
                }, {
                    "country": "Mar",
                    "visits": 1809
                }, {
                    "country": "Apr",
                    "visits": 1322
                }, {
                    "country": "May",
                    "visits": 1114
                }, {
                    "country": "Jun",
                    "visits": 984
                }, {
                    "country": "Jul",
                    "visits": 711
                }, {
                    "country": "Aug",
                    "visits": 665
                }, {
                    "country": "Sep",
                    "visits": 580
                }, {
                    "country": "Oct",
                    "visits": 443
                }, {
                    "country": "Nov",
                    "visits": 441
                }, {
                    "country": "Dec",
                    "visits": 395
                }];
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
            categoryAxis.dataFields.category = "country";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
            series.dataFields.valueY = "visits";
            series.dataFields.categoryX = "country";
            series.name = "Visits";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.barChart = chart;
        });
    };
    ReportsElectricityComponent.prototype.createComaprisonChart = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdivCompare", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        // Add data
        chart.data = [{
                "month": "Jan",
                "lastyear": 2500,
                "thisyear": 2100
            }, {
                "month": "Feb",
                "lastyear": 1800,
                "thisyear": 2600
            }, {
                "month": "Mar",
                "lastyear": 1900,
                "thisyear": 2900
            }, {
                "month": "Apr",
                "lastyear": 1700,
                "thisyear": 2700
            }, {
                "month": "May",
                "lastyear": 2900,
                "thisyear": 1000
            }, {
                "month": "Jun",
                "lastyear": 2500,
                "thisyear": 2100
            }, {
                "month": "Jul",
                "lastyear": 1800,
                "thisyear": 2600
            }, {
                "month": "Aug",
                "lastyear": 1900,
                "thisyear": 2900
            }, {
                "month": "Sep",
                "lastyear": 1700,
                "thisyear": 2700
            }, {
                "month": "Oct",
                "lastyear": 2900,
                "thisyear": 1000
            }, {
                "month": "Nov",
                "lastyear": 1700,
                "thisyear": 2700
            }, {
                "month": "Dec",
                "lastyear": 2900,
                "thisyear": 1000
            }];
        // Create axes
        var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.renderer.opposite = true;
        // Create series
        function createSeries(field, name) {
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "month";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
            series.columns.template.height = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
            series.sequencedInterpolation = true;
            var valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
            valueLabel.label.text = "{valueX}";
            valueLabel.label.horizontalCenter = "left";
            valueLabel.label.dx = 10;
            valueLabel.label.hideOversized = false;
            valueLabel.label.truncate = false;
            var categoryLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
            categoryLabel.label.text = "{name}";
            categoryLabel.label.horizontalCenter = "right";
            categoryLabel.label.dx = -10;
            categoryLabel.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
            categoryLabel.label.hideOversized = false;
            categoryLabel.label.truncate = false;
        }
        createSeries("lastyear", "2017");
        createSeries("thisyear", "2018");
    };
    ReportsElectricityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-electricity-bill',
            template: __webpack_require__(/*! ./reports-electricity.component.html */ "./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.html"),
            styles: [__webpack_require__(/*! ./reports-electricity.component.scss */ "./src/app/reports/reports-bills/electricity/reports-electricity/reports-electricity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ReportsElectricityComponent);
    return ReportsElectricityComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n\n  <div class=\"col-sm-12\">\n    <!--Form Container - START-->\n    <div class=\"form-container billInputContainer\">\n      <div class=\"tbl-header\">\n        View Reports and Charts\n      </div>\n\n      <div class=\"row \">\n        <label class=\"control-label col-sm-2\">Select Bill Type <span>*</span></label>\n        <div class=\"col-sm-2 field-value\">\n          <select class=\"form-control\" (change)=\"onTypeSelected($event)\">\n            <option *ngFor=\"let opt of typeString\" [selected]=\"selectedType == opt\">\n              {{opt}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"isElectricity\">\n      <app-reports-electricity-bill></app-reports-electricity-bill>\n    </div>\n    <!--<div *ngIf=\"isInternet\">-->\n      <!--<app-create-internet-bill></app-create-internet-bill>-->\n    <!--</div>-->\n    <!--<div *ngIf=\"isTelephone\">-->\n      <!--<app-create-telephone-bill></app-create-telephone-bill>-->\n    <!--</div>-->\n    <!--<div *ngIf=\"isWater\">-->\n      <!--<app-create-water-bill></app-create-water-bill>-->\n    <!--</div>-->\n  </div>\n\n  <!--<button (click)=\"showit()\">show</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.billInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.billInputContainer .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n\n.billInputContainer .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n\n.rateForm input {\n  background-color: #dde3ec;\n  height: 43px;\n  color: #8290a3;\n  border: 1px solid #dde3ec; }\n\n.rateForm input:focus {\n    border: 1px solid #c3ccda; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  display: none; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n.info-tooltip-view {\n  margin-top: 0em !important;\n  margin-left: 0.5em; }\n\n.modal {\n  top: 10%;\n  outline: none; }\n\n.tbl-header {\n  margin-top: 50px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 30px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.control-label span {\n  color: #dd0d0d; }\n\n.btnContainer {\n  margin-top: 2%; }\n\n.control-label {\n  text-align: right;\n  font-weight: bold;\n  padding-top: 9px; }\n\n.noreteselect {\n  margin-left: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  color: #343a40; }\n\n.noreteselect i {\n  font-size: 50px;\n  color: #E19131; }\n\n.viewListForm .control-label {\n  padding-top: 0px !important; }\n\n.sub-control-label {\n  color: #9a9a9a; }\n\n.table {\n  display: table;\n  width: 100%; }\n\n.table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px; }\n\n.table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n\n.table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n\n.table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n\n.table .tbl-row.modified {\n      background-color: #ffffcc; }\n\n.table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n\n.table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n\n.table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n\n.table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #7a8ca5;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0; }\n\n.table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n\n.table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n\n.table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #9a9a9a;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n\n.table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n\n.table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n\n.table .tbl-row .more-con .btn {\n        margin-top: 10px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n\n.table .no-rec-row {\n    position: relative; }\n\n.table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #9a9a9a; }\n\n.table .fromcolor {\n    color: #2f9e44; }\n\n.table .tocolor {\n    color: #dd0d0d; }\n\n.open > .dropdown-menu {\n  display: block;\n  height: 100px;\n  overflow-y: scroll; }\n\n.tariff_des {\n  font-size: 9px !important; }\n\n.tariffdropname {\n  color: #660066; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMtbGlzdC9yZXBvcnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsNkJBQTRCLEVBYzdCOztBQWxCRDtJQVFNLHFCQUFvQixFQUNyQjs7QUFUTDtJQWFJLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLG9CQUFtQixFQUNwQjs7QUFHSDtFQUdJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osZUFBYztFQUNkLDBCQUF5QixFQUsxQjs7QUFYSDtJQVNNLDBCQUF5QixFQUMxQjs7QUFJTDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBRUQsNENBQTRDOztBQUM1QztFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsY0FBYSxFQUNkOztBQUVELGdCQUFnQjs7QUFDaEI7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsdUJBQXNCO0VBRXRCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLFVBQVM7RUFDVCxZQUFXO0VBQ1gsd0JBQXVCO0VBRXZCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsNEJBQTJCLEVBQzVCOztBQUVEO0VBQ0Usb0NBQW1DO0VBRW5DLDRCQUEyQixFQUM1Qjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMkJBQTBCO0VBQzFCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLFNBQVE7RUFDUixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsZUFBYztFQUNkLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBRUQ7RUFBTSw4QkFBNkIsRUFBRzs7QUFHdEM7RUFDRTs7OztnQ0FJOEI7RUFFOUIsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLDBCQUF5QjtFQUd6QixtQkFBa0I7RUFHbEIsZ0RBQStDO0VBQy9DLGVBQWMsRUFDZjs7QUFFRDtFQUVJLHFCQUFvQixFQUNyQjs7QUFHSDtFQUFzQixlQUFjLEVBQUc7O0FBRXZDO0VBQWUsZUFBYSxFQUFHOztBQUUvQjtFQUNFLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQWUsaUJBQWdCO0VBQUUsZUFBYztFQUFFLGtCQUFpQjtFQUFFLGVBQWMsRUFBRzs7QUFFckY7RUFBaUIsZ0JBQWU7RUFBRSxlQUFjLEVBQUc7O0FBRW5EO0VBQThCLDRCQUEyQixFQUFHOztBQUU1RDtFQUFvQixlQUFjLEVBQUc7O0FBR3JDO0VBQ0UsZUFBYztFQUNkLFlBQVcsRUFxSFo7O0FBdkhEO0lBU0ksbUJBQWtCO0lBQ2xCLDBCQUF5QjtJQUN6QixZQUFXLEVBcUZaOztBQWhHSDtNQWNNLHdCQUF1QixFQUN4Qjs7QUFmTDtNQWtCTSwwQkFBeUI7TUFDekIsaUJBQWdCO01BQ2hCLGFBQVksRUFDYjs7QUFyQkw7TUE0Qk0sb0JBQW1CO01BQ25CLG1CQUFrQixFQUluQjs7QUFqQ0w7TUFvQ00sMEJBQXlCLEVBQzFCOztBQXJDTDtNQXdDTSxjQUFhO01BQ2IsMEJBQXlCLEVBVTFCOztBQW5ETDtRQTRDUSxvQkFBbUI7UUFDbkIsYUFBYSxFQUNkOztBQTlDUDtRQWlEUSxjQUFhLEVBQ2Q7O0FBbERQO01Bc0RNLDJCQUF5QjtNQUN6QiwwQkFBeUI7TUFDekIsbUJBQWtCO01BQ2xCLFdBQVU7TUFDVixZQUFXO01BQ1gsY0FBYTtNQUNiLGlCQUFnQjtNQUNoQiwwQkFBd0IsRUFpQ3pCOztBQTlGTDtRQWdFUSxjQUFhLEVBQ2Q7O0FBakVQO1FBb0VRLG1CQUFrQixFQUNuQjs7QUFyRVA7UUF3RVEsYUFBWTtRQUNaLDBCQUF5QjtRQUN6QixrQkFBaUI7UUFDakIsa0JBQWlCO1FBQ2pCLGlCQUFnQixFQUNqQjs7QUE3RVA7UUFnRlEsYUFBWTtRQUNaLHdCQUF1QjtRQUN2QixrQkFBaUIsRUFDbEI7O0FBbkZQO1FBc0ZRLGdCQUFlLEVBQ2hCOztBQXZGUDtRQTBGUSxpQkFBZ0I7UUFDaEIsNEJBQTBCO1FBQzFCLCtCQUE4QixFQUMvQjs7QUE3RlA7SUFtR0ksbUJBQWtCLEVBV25COztBQTlHSDtNQXNHTSxtQkFBa0I7TUFDbEIsVUFBUztNQUNULFdBQVU7TUFDVixhQUFZO01BQ1osYUFBWTtNQUNaLGtCQUFpQjtNQUNqQixlQUFjLEVBQ2Y7O0FBN0dMO0lBaUhJLGVBQWMsRUFDZjs7QUFsSEg7SUFxSEksZUFBYyxFQUNmOztBQUdIO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFBYSwwQkFBeUIsRUFBRzs7QUFFekM7RUFBZ0IsZUFBYyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLWxpc3QvcmVwb3J0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRibC1oZWFkZXIge1xuICBjb2xvcjogI0UxOTEzMTtcbn1cblxuLmJpbGxJbnB1dENvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGVzbW9rZTtcblxuICAuZmllbGRzLWNvbnRhaW5lciB7XG4gICAgZGl2W2NsYXNzXj1cImNvbC1cIl0ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxufVxuXG4ucmF0ZUZvcm0ge1xuXG4gIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlM2VjO1xuICAgIGhlaWdodDogNDNweDtcbiAgICBjb2xvcjogIzgyOTBhMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRlM2VjO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjY2RhO1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2Y5NjU2NTtcbn1cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbmZvLXRvb2x0aXAge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzhFNDRBRDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXRvcDogMC4zZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmluZm8tdG9vbHRpcC12aWV3IHtcbiAgbWFyZ2luLXRvcDogMGVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLm1vZGFsIHtcbiAgdG9wOiAxMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YmwtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogNXB4IDBweCAzMHB4O1xuICBjb2xvcjogI0UxOTEzMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhcy1kYW5nZXIgLmZvcm0tY29udHJvbHtcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xuICBjb2xvcjogI2Q5NTM0Zjtcbn1cblxuLmJ0bnsgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7fVxuXG5cbi5zZWFyY2hGaWx0ZXIge1xuICAvKm92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMTkxMzE7Ki9cblxuICBtaW4taGVpZ2h0OiA3OHB4O1xuICBwYWRkaW5nOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTE5MTMxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VhcmNoRmlsdGVyIHtcbiAgZGl2W2NsYXNzXj1cImNvbC1cIl0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi5jb250cm9sLWxhYmVsIHNwYW4geyBjb2xvcjogI2RkMGQwZDt9XG5cbi5idG5Db250YWluZXJ7IG1hcmdpbi10b3A6MiU7fVxuXG4uY29udHJvbC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDlweDtcbn1cblxuLm5vcmV0ZXNlbGVjdHsgbWFyZ2luLWxlZnQ6IDEwJTsgbWFyZ2luLXRvcDogNSU7IG1hcmdpbi1ib3R0b206IDUlOyBjb2xvcjogIzM0M2E0MDt9XG5cbi5ub3JldGVzZWxlY3QgaXsgZm9udC1zaXplOiA1MHB4OyBjb2xvcjogI0UxOTEzMTt9XG5cbi52aWV3TGlzdEZvcm0gLmNvbnRyb2wtbGFiZWx7IHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDt9XG5cbi5zdWItY29udHJvbC1sYWJlbHsgY29sb3I6ICM5YTlhOWE7fVxuXG5cbi50YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudGJsLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgaGVpZ2h0OiAwcHg7XG5cbiAgICAmOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3ODhhYTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnRibC1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC8vICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1vZGlmaWVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmY2M7XG4gICAgfVxuXG4gICAgJi5vcGVuIHtcbiAgICAgIGhlaWdodDogMTU4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMmM5O1xuXG4gICAgICAuYWN0aW9uIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3IgOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgJi5BLCYuUntcbiAgICAgICAgaGVpZ2h0OiAyNDNweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9yZS1jb257XG4gICAgICBwYWRkaW5nOjEwcHggMHB4IDEwcHggMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdhOGNhNTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICByaWdodDogMTFweDtcbiAgICAgIGhlaWdodDogMTA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1M3B4O1xuICAgICAgYm9yZGVyOnNvbGlkIDFweCAjZDBkMGQwO1xuXG4gICAgICAmLkEsJi5Se1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgfVxuXG4gICAgICAubW9yZS1yb3d7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLW5hbWV7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlhOWE5YTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtdmFsdWV7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICBzZWxlY3QsaW5wdXR7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweCFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5uby1yZWMtcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubm8tcmVjIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgIH1cbiAgfVxuXG4gIC5mcm9tY29sb3J7XG4gICAgY29sb3I6ICMyZjllNDQ7XG4gIH1cblxuICAudG9jb2xvcntcbiAgICBjb2xvcjogI2RkMGQwZDtcbiAgfVxufVxuXG4ub3Blbj4uZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50YXJpZmZfZGVzeyBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O31cblxuLnRhcmlmZmRyb3BuYW1le2NvbG9yOiM2NjAwNjYgfVxuIl19 */"

/***/ }),

/***/ "./src/app/reports/reports-list/reports-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reports/reports-list/reports-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ReportsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsListComponent", function() { return ReportsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent() {
        this.typeString = ["", "Electricity", "Internet", "Telephone", "Water"];
    }
    ReportsListComponent.prototype.ngOnInit = function () {
        this.selectedType = "";
        this.clearAll();
    };
    ReportsListComponent.prototype.onTypeSelected = function (event) {
        this.selectedType = event.target.value;
        this.clearAll();
        switch (this.selectedType) {
            case "Electricity": {
                this.isElectricity = true;
                break;
            }
            case "Water": {
                this.isWater = true;
                break;
            }
            case "Telephone": {
                this.isTelephone = true;
                break;
            }
            case "Internet": {
                this.isInternet = true;
                break;
            }
            default: {
                this.clearAll();
                break;
            }
        }
    };
    ReportsListComponent.prototype.clearAll = function () {
        this.isElectricity = false;
        this.isInternet = false;
        this.isWater = false;
        this.isTelephone = false;
    };
    ReportsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-list',
            template: __webpack_require__(/*! ./reports-list.component.html */ "./src/app/reports/reports-list/reports-list.component.html"),
            styles: [__webpack_require__(/*! ./reports-list.component.scss */ "./src/app/reports/reports-list/reports-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsListComponent);
    return ReportsListComponent;
}());



/***/ }),

/***/ "./src/app/services/app-common.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/app-common.service.ts ***!
  \************************************************/
/*! exports provided: AppCommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonService", function() { return AppCommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCommonService = /** @class */ (function () {
    function AppCommonService() {
        this.menuToggleStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AppCommonService.prototype.updateMenuToggleStream = function (flag) {
        this.menuToggleStream.next(flag);
    };
    AppCommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppCommonService);
    return AppCommonService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/data-models */ "./src/app/models/data-models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _remote_login_remote_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../remote/login_remote-data.service */ "./src/app/remote/login_remote-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_router, _remoteService) {
        this._router = _router;
        this._remoteService = _remoteService;
        this.loginUserInfo = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        var _loginUserInfo = JSON.parse(sessionStorage.getItem("loginUserInfo"));
        this.loginUserInfo.next(_loginUserInfo);
    }
    AuthenticationService.prototype.login = function (userName, password) {
        var _this = this;
        this._remoteService.login(userName, btoa(password))
            .subscribe(function (data) {
            var loginInfo = new _models_data_models__WEBPACK_IMPORTED_MODULE_2__["LoginResponse"]();
            if (data["loggedIn"] == true) {
                loginInfo.loggedIn = data["loggedIn"];
                loginInfo.userName = data["userName"];
                loginInfo.userRole = data["userRole"];
                _this.loginUserInfo.next(loginInfo);
                sessionStorage.setItem("loginUserInfo", JSON.stringify(loginInfo));
                _this._router.navigate(["home"]);
            }
            else {
                sessionStorage.setItem("loginUserInfo", null);
            }
        });
    };
    AuthenticationService.prototype.signup = function (userName, password, roleVal) {
        var _this = this;
        this._remoteService.signup(userName, btoa(password), roleVal)
            .subscribe(function (data) {
            if (data["success"] == true) {
                _this._router.navigate(["login"]);
            }
            else {
                _this._router.navigate(["singnup"]);
            }
        });
    };
    AuthenticationService.prototype.doLogout = function () {
        sessionStorage.setItem("loginUserInfo", null);
        this.loginUserInfo.next(null);
        this._router.navigate(["login"]);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
        return !!loginInfo;
    };
    AuthenticationService.prototype.getUser = function () {
        return true;
    };
    AuthenticationService.prototype.getAllUserNames = function (callback) {
        this._remoteService.getAllUserNames()
            .subscribe(function (data) {
            callback(data);
        }, function (error) {
            callback(error);
        });
    };
    AuthenticationService.prototype.getAllRoles = function (callback) {
        this._remoteService.getAllRoles()
            .subscribe(function (data) {
            callback(data);
        }, function (error) {
            callback(error);
        });
    };
    AuthenticationService.prototype.hasPermissions = function (patternStr) {
        var permissionExists = false;
        var userInfo = this.loginUserInfo.getValue();
        if (userInfo.userRole == patternStr) {
            permissionExists = true;
        }
        return permissionExists;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _remote_login_remote_data_service__WEBPACK_IMPORTED_MODULE_4__["LoginRemoteDataService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _remote_dashboard_remote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remote/dashboard_remote.service */ "./src/app/remote/dashboard_remote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardService = /** @class */ (function () {
    function DashboardService(_remoteService) {
        this._remoteService = _remoteService;
    }
    DashboardService.prototype.getPendingCertifiactions = function (callback) {
        this._remoteService.getPendingCertifiactions()
            .subscribe(function (data) {
            callback(data);
        }, function (error) {
            callback(error);
        });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_remote_dashboard_remote_service__WEBPACK_IMPORTED_MODULE_1__["DashboardRemoteService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/electricity-bill.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/electricity-bill.service.ts ***!
  \******************************************************/
/*! exports provided: ElectricityBillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityBillsService", function() { return ElectricityBillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _remote_electricity_bill_remote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remote/electricity_bill_remote.service */ "./src/app/remote/electricity_bill_remote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectricityBillsService = /** @class */ (function () {
    function ElectricityBillsService(_router, _remoteService) {
        this._router = _router;
        this._remoteService = _remoteService;
    }
    ElectricityBillsService.prototype.getElectricityBills = function (callback) {
        this._remoteService.getElectricityBills()
            .subscribe(function (data) {
            callback(data);
        }, function (error) {
            callback(error);
        });
    };
    ElectricityBillsService.prototype.insertElectricityBill = function (electricityBill) {
        var _this = this;
        this._remoteService.insertElectricityBill(electricityBill)
            .subscribe(function (data) {
            // if (data["success"] == true) {
            //     this._router.navigate(["home"]);
            // } else {
            //     this._router.navigate(["singnup"]);
            // }
            _this._router.navigate(["home"]);
        });
    };
    ElectricityBillsService.prototype.updateElectricityBill = function (electricityBill) {
        var _this = this;
        this._remoteService.updateElectricityBill(electricityBill)
            .subscribe(function (data) {
            // if (data["success"] == true) {
            //     this._router.navigate(["home"]);
            // } else {
            //     this._router.navigate(["singnup"]);
            // }
            _this._router.navigate(["viewBill"]);
        });
    };
    ElectricityBillsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _remote_electricity_bill_remote_service__WEBPACK_IMPORTED_MODULE_2__["ElectricityBillRemoteDataService"]])
    ], ElectricityBillsService);
    return ElectricityBillsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"]
            ],
            declarations: [],
            providers: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            ],
            entryComponents: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user-avatar/user-avatar.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-avatar/user-avatar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"avatar-component\"-->\n     <!--(click)=\"onClick()\"-->\n     <!--[ngClass]=\"{'expand':dropDownStatus.isOpen}\"-->\n     <!--dropdown-->\n     <!--[isOpen]=\"dropDownStatus.isOpen\">-->\n  <!--<div>-->\n    <!--<div class=\"avatar\" dropdownToggle>-->\n      <!--<span class=\"icon material-icons\">account_circle</span>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"userName\">{{loginInfo.userName}}</div>-->\n\n  <!---->\n\n\n  <!--&lt;!&ndash;<ul class=\"dropdown-menu avatar-dropdown animated fadeIn\" *dropdownMenu aria-labelledby=\"simple-dropdown\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<li>&ndash;&gt;-->\n      <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"#\">My Profile</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n    <!--&lt;!&ndash;<li>&ndash;&gt;-->\n      <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"#\">My Assignments</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n    <!--&lt;!&ndash;<li>&ndash;&gt;-->\n      <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"\" (click)=\"onMenuClick('doLogout')\">Logout</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n  <!--&lt;!&ndash;</ul>&ndash;&gt;-->\n\n\n\n<!--</div>-->\n<div class=\"btn-group\" dropdown>\n  <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn dropdownbutton dropdown-toggle\"\n          aria-controls=\"dropdown-basic\">\n    <span class=\"userName\">{{loginInfo.userName}}</span>\n    <span class=\"caret\"></span>\n  </button>\n  <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\n      role=\"menu\" aria-labelledby=\"button-basic\">\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">My Profile</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"onMenuClick('doLogout')\">LOGOUT</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/user-avatar/user-avatar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-avatar/user-avatar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 50px;\n  display: block;\n  background-color: #242582;\n  transition: all 0.3s ease-in;\n  color: #8A98A0;\n  cursor: pointer; }\n  :host:hover {\n    color: white; }\n  .dropdownbutton {\n  margin-right: 60px;\n  margin-top: 5px;\n  background-color: #242582;\n  color: #8A98A0;\n  font-size: 14px;\n  font-weight: 600; }\n  .dropdownbutton:hover {\n    color: white; }\n  .avatar-component {\n  height: 100%;\n  /* &.expand{\n     background-color: $primary-color_light;\n   }*/ }\n  .avatar-component .avatar-dropdown {\n    margin-top: 12px; }\n  @media screen and (max-width: 768px) {\n      .avatar-component .avatar-dropdown {\n        width: 100%;\n        margin-top: 32px; } }\n  .avatar-component:before {\n    content: \"\";\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%; }\n  .avatar-component > div {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 5px; }\n  .avatar-component > div:first-child {\n      padding-right: 2px; }\n  .avatar-component .avatar {\n    width: 30px;\n    height: 30px;\n    border: solid 1px #8A98A0;\n    border-radius: 15px;\n    text-align: center;\n    padding-top: 3px; }\n  .avatar-component .arrow {\n    font-size: 0.8em;\n    padding-right: 15px; }\n  .avatar-dropdown {\n  position: absolute;\n  right: 0px;\n  left: auto;\n  min-width: 250px;\n  padding: 0px; }\n  .avatar-dropdown li {\n    height: 35px;\n    border-bottom: solid 1px #f5f5f5; }\n  .avatar-dropdown li a {\n      height: 35px;\n      line-height: 27px;\n      transition: background-color 0.2s ease-in; }\n  .avatar-dropdown li a:hover {\n        background-color: #32c5d2; }\n  .userName {\n  text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2FwcC91c2VyLWF2YXRhci91c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hbm9qL1BvZGlTZXRFa2EvZmluYW5jZS1hcHAvZmluYW5jZS1hcHAtdWkvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvbWFub2ovUG9kaVNldEVrYS9maW5hbmNlLWFwcC9maW5hbmNlLWFwcC11aS9zcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFZO0VBQ1osZUFBYztFQUNkLDBCQ04yQjtFQ21CM0IsNkJGWm9DO0VBQ3BDLGVDT2E7RUROYixnQkFBZSxFQU1oQjtFQVpEO0lBU0ksYUFBWSxFQUNiO0VBSUg7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZiwwQkNwQjJCO0VEcUIzQixlQ05hO0VET2IsZ0JBQWU7RUFDZixpQkFBZ0IsRUFLakI7RUFYRDtJQVNJLGFBQVksRUFDYjtFQUdIO0VBQ0UsYUFBWTtFQUVaOztNQUVJLEVBd0NMO0VBN0NEO0lBUUksaUJBQWdCLEVBS2pCO0VBSkM7TUFUSjtRQVVNLFlBQVc7UUFDWCxpQkFBZ0IsRUFFbkIsRUFBQTtFQWJIO0lBZ0JJLFlBQVc7SUFDWCxzQkFBcUI7SUFDckIsdUJBQXNCO0lBQ3RCLGFBQVksRUFDYjtFQXBCSDtJQXVCSSxzQkFBcUI7SUFDckIsdUJBQXNCO0lBQ3RCLGFBQWEsRUFLZDtFQTlCSDtNQTRCTSxtQkFBa0IsRUFDbkI7RUE3Qkw7SUFpQ0ksWUFBVztJQUNYLGFBQVk7SUFDWiwwQkNsRFc7SURtRFgsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDakI7RUF2Q0g7SUEwQ0ksaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUNwQjtFQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGFBQVksRUFnQmI7RUFyQkQ7SUFRSSxhQUFhO0lBQ2IsaUNDM0VpQixFRHNGbEI7RUFwQkg7TUFZTSxhQUFZO01BQ1osa0JBQWlCO01FdkVyQiwwQ0Z3RXFELEVBSWxEO0VBbEJMO1FBZ0JRLDBCQ3JGa0IsRURzRm5CO0VBTVA7RUFDRSwyQkFBMEIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC91c2VyLWF2YXRhci91c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5nXCI7XG5cbjpob3N0e1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcl9tYWluO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjNzIGVhc2UtaW4pO1xuICBjb2xvcjogJGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG59XG5cbi5kcm9wZG93bmJ1dHRvbntcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yX21haW47XG4gIGNvbG9yOiAkZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gICY6aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5hdmF0YXItY29tcG9uZW50e1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogJi5leHBhbmR7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yX2xpZ2h0O1xuICAgfSovXG5cbiAgLmF2YXRhci1kcm9wZG93bntcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmV7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmPmRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nIDogNXB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICB9XG4gIH1cblxuICAuYXZhdGFye1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICB9XG5cbiAgLmFycm93e1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxufVxuXG4uYXZhdGFyLWRyb3Bkb3due1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IGF1dG87XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDBweDtcblxuICBsaXtcbiAgICBoZWlnaHQgOiAzNXB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkd2hpdGVfZGFyaztcblxuICAgIGF7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4pO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeV9jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG4udXNlck5hbWV7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4iLCIkcHJpbWFyeS1jb2xvcl9tYWluIDogIzI0MjU4MjtcbiRwcmltYXJ5LWNvbG9yX21lbnUgOiAjMkYyRkEyO1xuJHByaW1hcnktY29sb3JfbGlnaHQgOiAjNDcxN0Y2O1xuXG4kYWNjZW50LWxpZ2h0LWNvbG9yIDogI2UxYTYzNztcbiRhY2NlbnQtY29sb3IgOiAjRTE5MTMxO1xuJGFjY2VudC1kYXJrLWNvbG9yIDogI2MxNzExZDtcblxuJHNlY29uZGFyeV9jb2xvciA6ICMzMmM1ZDI7XG5cblxuJHdoaXRlX2RhcmsgOiAjZjVmNWY1O1xuXG4kZ3JheV9saWdodGVyIDogI2U3ZWNmMTtcbiRncmF5X2xpZ2h0IDogI2RmZGZkZjtcbiRncmF5IDogIzhBOThBMDtcbiRncmF5LWRhcmsgOiAjN2E4Y2E1O1xuXG5cbiRlcnJvci1yZWQgOiAjYmIzNTM1O1xuJHdhcm5pbmcgOiAjZTFhMTBjO1xuJHN1Y2Nlc3MgOiAjMTA3MTI0O1xuXG4kZ3JheV8wIDojZjhmOWZhO1xuJGdyYXlfMSA6ICNmMWYzZjU7XG4kZ3JheV8yIDogI2U5ZWNlZjtcbiRncmF5XzMgOiAjZGVlMmU2O1xuJGdyYXlfNCA6ICNjZWQ0ZGE7XG4kZ3JheV81IDogI2FkYjViZDtcbiRncmF5XzYgOiAjODY4ZTk2O1xuJGdyYXlfNyA6ICM0OTUwNTc7XG4kZ3JheV84IDogIzM0M2E0MDtcbiRncmF5XzkgOiAjMjEyNTI5O1xuIiwiQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcbiAgLW1zLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiBpY29uLXJvdGF0ZSgkcm90YXRlOTApIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICRyb3RhdGU5MDtcbiAgLW1vei10cmFuc2Zvcm06ICRyb3RhdGU5MDtcbiAgLW1zLXRyYW5zZm9ybTogJHJvdGF0ZTkwO1xuICAtby10cmFuc2Zvcm06ICRyb3RhdGU5MDtcbiAgdHJhbnNmb3JtOiAkcm90YXRlOTA7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gIC1tb3otdHJhbnNpdGlvbjogICAgJHRyYW5zaXRpb247XG4gIC1vLXRyYW5zaXRpb246ICAgICAgJHRyYW5zaXRpb247XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gIHRyYW5zaXRpb246ICAgICAgICAgJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/user-avatar/user-avatar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-avatar/user-avatar.component.ts ***!
  \******************************************************/
/*! exports provided: UserAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return UserAvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAvatarComponent = /** @class */ (function () {
    function UserAvatarComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.dropDownStatus = { isOpen: false };
    }
    UserAvatarComponent.prototype.ngOnInit = function () {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();
    };
    UserAvatarComponent.prototype.onClick = function () {
        this.dropDownStatus.isOpen = !this.dropDownStatus.isOpen;
    };
    UserAvatarComponent.prototype.onMenuClick = function (type) {
        switch (type) {
            case 'doLogout': {
                this._authenticationService.doLogout();
            }
        }
    };
    UserAvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-avatar',
            template: __webpack_require__(/*! ./user-avatar.component.html */ "./src/app/user-avatar/user-avatar.component.html"),
            styles: [__webpack_require__(/*! ./user-avatar.component.scss */ "./src/app/user-avatar/user-avatar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], UserAvatarComponent);
    return UserAvatarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/manoj/PodiSetEka/finance-app/finance-app-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map