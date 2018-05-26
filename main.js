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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/quiz-form/quiz-form.component */ "./src/app/dashboard/quiz-form/quiz-form.component.ts");
/* harmony import */ var _dashboard_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/quiz-list/quiz-list.component */ "./src/app/dashboard/quiz-list/quiz-list.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _quiz_levels_quiz_levels_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quiz-levels/quiz-levels.component */ "./src/app/quiz-levels/quiz-levels.component.ts");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.component */ "./src/app/material/material.component.ts");
/* harmony import */ var _dashboard_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/material-list/material-list.component */ "./src/app/dashboard/material-list/material-list.component.ts");
/* harmony import */ var _dashboard_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/material-form/material-form.component */ "./src/app/dashboard/material-form/material-form.component.ts");
/* harmony import */ var _quiz_test_quiz_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quiz-test/quiz-test.component */ "./src/app/quiz-test/quiz-test.component.ts");
/* harmony import */ var _quiz_levels_material_tile_material_tile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quiz-levels/material-tile/material-tile.component */ "./src/app/quiz-levels/material-tile/material-tile.component.ts");
/* harmony import */ var _quiz_levels_quiz_tile_quiz_tile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./quiz-levels/quiz-tile/quiz-tile.component */ "./src/app/quiz-levels/quiz-tile/quiz-tile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
    { path: 'quiz-levels', component: _quiz_levels_quiz_levels_component__WEBPACK_IMPORTED_MODULE_15__["QuizLevelsComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
    { path: 'material/:key', component: _material_material_component__WEBPACK_IMPORTED_MODULE_16__["MaterialComponent"] },
    { path: 'quiz-test/:key', component: _quiz_test_quiz_test_component__WEBPACK_IMPORTED_MODULE_19__["QuizTestComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _dashboard_quiz_form_quiz_form_component__WEBPACK_IMPORTED_MODULE_12__["QuizFormComponent"],
                _dashboard_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_13__["QuizListComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _quiz_levels_quiz_levels_component__WEBPACK_IMPORTED_MODULE_15__["QuizLevelsComponent"],
                _material_material_component__WEBPACK_IMPORTED_MODULE_16__["MaterialComponent"],
                _dashboard_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_17__["MaterialListComponent"],
                _dashboard_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_18__["MaterialFormComponent"],
                _quiz_test_quiz_test_component__WEBPACK_IMPORTED_MODULE_19__["QuizTestComponent"],
                _quiz_levels_material_tile_material_tile_component__WEBPACK_IMPORTED_MODULE_20__["MaterialTileComponent"],
                _quiz_levels_quiz_tile_quiz_tile_component__WEBPACK_IMPORTED_MODULE_21__["QuizTileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard{\r\n    padding-top: 150px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section id=\"dashboard\">\n  <div class=\"container\">\n    <h2 class=\"text-center text-uppercase text-secondary mb-0\">Teacher Dashboard</h2>\n    <br>\n    <br>\n    <h3 class=\"text-secondary mb-0\">Students Statistics</h3>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-lg-12 mx-auto\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>ID</th>\n                <th>Firstname</th>\n                <th>Lastname</th>\n                <th>email</th>\n                <th>Points</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>Anna</td>\n                <td>Pitt</td>\n                <td>example@gmail.com</td>\n                <td>100</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <br>\n    <h3 class=\"text-secondary mb-0\">Questions</h3>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto\">\n        <app-quiz-form></app-quiz-form>\n      </div>\n      <div class=\"col-lg-6 mx-auto\">\n        <app-quiz-list></app-quiz-list>\n      </div>\n    </div>\n    <br>\n    <h3 class=\"text-secondary mb-0\">Material</h3>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto\">\n        <app-material-form></app-material-form>\n      </div>\n      <div class=\"col-lg-6 mx-auto\">\n        <app-material-list></app-material-list>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/quiz.service */ "./src/app/dashboard/services/quiz.service.ts");
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/material.service */ "./src/app/dashboard/services/material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(quizService, materialService) {
        this.quizService = quizService;
        this.materialService = materialService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"]]
        }),
        __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/material-form/material-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/material-form/material-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/material-form/material-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/material-form/material-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #materialForm=\"ngForm\" (ngSubmit)=\"onSubmit(materialForm)\" id=\"contactForm\">\n  <input type=\"hidden\" name=\"key\" #key=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.key\">\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>1st text</label>\n      <textarea rows=\"3\" class=\"form-control\" name=\"text1\" #text1=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.text1\"\n        placeholder=\"1st Text\"></textarea>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>2nd text</label>\n      <textarea rows=\"3\" class=\"form-control\" name=\"text2\" #text2=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.text2\"\n        placeholder=\"2nd text\"></textarea>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>3d text</label>\n      <textarea rows=\"3\" class=\"form-control\" name=\"text3\" #text3=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.text3\"\n        placeholder=\"3d text\"></textarea>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>4th text</label>\n      <textarea rows=\"3\" class=\"form-control\" name=\"text4\" #text4=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.text4\"\n        placeholder=\"4th text\"></textarea>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>5th text</label>\n      <textarea rows=\"3\" class=\"form-control\" name=\"text5\" #text5=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.text5\"\n        placeholder=\"5th text\"></textarea>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>1st image</label>\n      <input class=\"form-control\" name=\"image1\" #image1=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.image1\" placeholder=\"1st image\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>2nd image</label>\n      <input class=\"form-control\" name=\"image2\" #image2=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.image2\" placeholder=\"2nd image\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>3rd image</label>\n      <input class=\"form-control\" name=\"image3\" #image3=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.image3\" placeholder=\"3rd image\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>4th image</label>\n      <input class=\"form-control\" name=\"image4\" #image4=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.image4\" placeholder=\"4th image\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>5th image</label>\n      <input class=\"form-control\" name=\"image5\" #image5=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.image5\" placeholder=\"5th image\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Level</label>\n      <input type=\"number\" class=\"form-control\" name=\"level\" #level=\"ngModel\" [(ngModel)]=\"materialService.selectedMaterial.level\"\n        placeholder=\"Level\">\n    </div>\n  </div>\n  <br>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-xl\" [disabled]=\"!materialForm.valid\">Submit</button>\n    <button type=\"button\" class=\"btn btn-danger btn-xl\" *ngIf=\"materialService.selectedMaterial.key!=null\" (click)=\"onDelete(materialForm)\">Delete</button>\n    <button type=\"button\" class=\"btn btn-warning btn-xl\" (click)=\"resetForm(materialForm)\">Reset</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/dashboard/material-form/material-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/material-form/material-form.component.ts ***!
  \********************************************************************/
/*! exports provided: MaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFormComponent", function() { return MaterialFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/material.service */ "./src/app/dashboard/services/material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialFormComponent = /** @class */ (function () {
    function MaterialFormComponent(materialService) {
        this.materialService = materialService;
    }
    MaterialFormComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    MaterialFormComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null)
            this.materialService.insertMaterial(form.value);
        else
            this.materialService.updateMaterial(form.value);
        this.resetForm(form);
    };
    MaterialFormComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.materialService.selectedMaterial = {
            key: null,
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            text5: '',
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            level: 0
        };
    };
    MaterialFormComponent.prototype.onDelete = function (form) {
        this.materialService.deleteMaterial(form.value.key);
        this.resetForm(form);
    };
    MaterialFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-form',
            template: __webpack_require__(/*! ./material-form.component.html */ "./src/app/dashboard/material-form/material-form.component.html"),
            styles: [__webpack_require__(/*! ./material-form.component.css */ "./src/app/dashboard/material-form/material-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_material_service__WEBPACK_IMPORTED_MODULE_1__["MaterialService"]])
    ], MaterialFormComponent);
    return MaterialFormComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/material-list/material-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/material-list/material-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\r\n    height: 81px;\r\n}\r\ndiv {\r\n    height: 810px;\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/material-list/material-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/material-list/material-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group hover\">\n  <div>\n    <li class=\"form-group list-group-item\" *ngFor=\"let material of materiallist\" (click)=\"onItemClick(material)\">\n      <p>Material for level {{material.level}}</p>\n    </li>\n  </div>\n</ul>"

/***/ }),

/***/ "./src/app/dashboard/material-list/material-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/material-list/material-list.component.ts ***!
  \********************************************************************/
/*! exports provided: MaterialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialListComponent", function() { return MaterialListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/material.service */ "./src/app/dashboard/services/material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialListComponent = /** @class */ (function () {
    function MaterialListComponent(materialService) {
        this.materialService = materialService;
    }
    MaterialListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.materialService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.materiallist = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.materiallist.push(y);
            });
        });
    };
    MaterialListComponent.prototype.onItemClick = function (emp) {
        this.materialService.selectedMaterial = Object.assign({}, emp);
    };
    MaterialListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-list',
            template: __webpack_require__(/*! ./material-list.component.html */ "./src/app/dashboard/material-list/material-list.component.html"),
            styles: [__webpack_require__(/*! ./material-list.component.css */ "./src/app/dashboard/material-list/material-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_material_service__WEBPACK_IMPORTED_MODULE_1__["MaterialService"]])
    ], MaterialListComponent);
    return MaterialListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/quiz-form/quiz-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/quiz-form/quiz-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/quiz-form/quiz-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/quiz-form/quiz-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #quizForm=\"ngForm\" (ngSubmit)=\"onSubmit(quizForm)\" id=\"contactForm\">\n  <input type=\"hidden\" name=\"key\" #key=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.key\">\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Question</label>\n      <input class=\"form-control\" name=\"question\" #question=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.question\" placeholder=\"Question\"\n        required>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Answer 1</label>\n      <input class=\"form-control\" name=\"answer1\" #answer1=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.answer1\" placeholder=\"Answer 1\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Answer 2</label>\n      <input class=\"form-control\" name=\"answer2\" #answer2=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.answer2\" placeholder=\"Answer 2\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Answer 3</label>\n      <input class=\"form-control\" name=\"answer3\" #answer3=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.answer3\" placeholder=\"Answer 3\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Answer 4</label>\n      <input class=\"form-control\" name=\"answer4\" #answer4=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.answer4\" placeholder=\"Answer 4\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Right Answer</label>\n      <input class=\"form-control\" name=\"rightAnswer\" #rightAnswer=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.rightAnswer\"\n        placeholder=\"Right Answer\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Points</label>\n      <input type=\"number\" class=\"form-control\" name=\"points\" #points=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.points\" placeholder=\"Points\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n      <label>Level</label>\n      <input type=\"number\" class=\"form-control\" name=\"level\" #level=\"ngModel\" [(ngModel)]=\"quizService.selectedQuiz.level\" placeholder=\"Level\">\n    </div>\n  </div>\n  <br>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-xl\" [disabled]=\"!quizForm.valid\">Submit</button>\n    <button type=\"button\" class=\"btn btn-danger btn-xl\" *ngIf=\"quizService.selectedQuiz.key!=null\" (click)=\"onDelete(quizForm)\">Delete</button>\n    <button type=\"button\" class=\"btn btn-warning btn-xl\" (click)=\"resetForm(quizForm)\">Reset</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/dashboard/quiz-form/quiz-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/quiz-form/quiz-form.component.ts ***!
  \************************************************************/
/*! exports provided: QuizFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizFormComponent", function() { return QuizFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/dashboard/services/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizFormComponent = /** @class */ (function () {
    function QuizFormComponent(quizService) {
        this.quizService = quizService;
    }
    QuizFormComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    QuizFormComponent.prototype.onSubmit = function (form) {
        if (form.value.key == null)
            this.quizService.insertQuiz(form.value);
        else
            this.quizService.updateQuiz(form.value);
        this.resetForm(form);
    };
    QuizFormComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.quizService.selectedQuiz = {
            key: null,
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            rightAnswer: '',
            points: 0,
            level: 0
        };
    };
    QuizFormComponent.prototype.onDelete = function (form) {
        this.quizService.deleteQuiz(form.value.key);
        this.resetForm(form);
    };
    QuizFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-form',
            template: __webpack_require__(/*! ./quiz-form.component.html */ "./src/app/dashboard/quiz-form/quiz-form.component.html"),
            styles: [__webpack_require__(/*! ./quiz-form.component.css */ "./src/app/dashboard/quiz-form/quiz-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], QuizFormComponent);
    return QuizFormComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/quiz-list/quiz-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/quiz-list/quiz-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\r\n    height: 81px;\r\n}\r\ndiv {\r\n    height: 650px;\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/quiz-list/quiz-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/quiz-list/quiz-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group hover\">\n  <div>\n    <li class=\"form-group list-group-item\" *ngFor=\"let quiz of quizlist\" (click)=\"onItemClick(quiz)\">\n      <p>{{quiz.question}} - ( {{quiz.answer1}} - {{quiz.answer2}} - {{quiz.answer3}} - {{quiz.answer4}} )\n        <br>Right Answer: {{quiz.rightAnswer}} - Points: {{quiz.points}} - Level: {{quiz.level}}\n      </p>\n    </li>\n  </div>\n</ul>"

/***/ }),

/***/ "./src/app/dashboard/quiz-list/quiz-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/quiz-list/quiz-list.component.ts ***!
  \************************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/dashboard/services/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(quizService) {
        this.quizService = quizService;
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.quizService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.quizlist = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.quizlist.push(y);
            });
        });
    };
    QuizListComponent.prototype.onItemClick = function (emp) {
        this.quizService.selectedQuiz = Object.assign({}, emp);
    };
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-list',
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/dashboard/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/dashboard/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/material.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/services/material.service.ts ***!
  \********************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material */ "./src/app/dashboard/services/material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialService = /** @class */ (function () {
    function MaterialService(firebase) {
        this.firebase = firebase;
        this.selectedMaterial = new _material__WEBPACK_IMPORTED_MODULE_2__["Material"]();
        this.materialList = this.firebase.list('material');
    }
    MaterialService.prototype.getData = function () {
        this.materialList = this.firebase.list('material');
        return this.materialList;
    };
    MaterialService.prototype.insertMaterial = function (material) {
        this.materialList.push({
            text1: material.text1,
            text2: material.text2,
            text3: material.text3,
            text4: material.text4,
            text5: material.text5,
            image1: material.image1,
            image2: material.image2,
            image3: material.image3,
            image4: material.image4,
            image5: material.image5,
            level: material.level
        });
    };
    MaterialService.prototype.updateMaterial = function (emp) {
        this.materialList.update(emp.key, {
            text1: emp.text1,
            text2: emp.text2,
            text3: emp.text3,
            text4: emp.text4,
            text5: emp.text5,
            image1: emp.image1,
            image2: emp.image2,
            image3: emp.image3,
            image4: emp.image4,
            image5: emp.image5,
            level: emp.level
        });
    };
    MaterialService.prototype.deleteMaterial = function (key) {
        this.materialList.remove(key);
    };
    MaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], MaterialService);
    return MaterialService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/material.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/services/material.ts ***!
  \************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
var Material = /** @class */ (function () {
    function Material() {
    }
    return Material;
}());



/***/ }),

/***/ "./src/app/dashboard/services/quiz.service.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/services/quiz.service.ts ***!
  \****************************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz */ "./src/app/dashboard/services/quiz.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = /** @class */ (function () {
    function QuizService(firebase) {
        this.firebase = firebase;
        this.selectedQuiz = new _quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]();
        this.quizList = this.firebase.list('quizzes');
    }
    QuizService.prototype.getData = function () {
        this.quizList = this.firebase.list('quizzes');
        return this.quizList;
    };
    QuizService.prototype.insertQuiz = function (quiz) {
        this.quizList.push({
            question: quiz.question,
            answer1: quiz.answer1,
            answer2: quiz.answer2,
            answer3: quiz.answer3,
            answer4: quiz.answer4,
            rightAnswer: quiz.rightAnswer,
            points: quiz.points,
            level: quiz.level
        });
    };
    QuizService.prototype.updateQuiz = function (emp) {
        this.quizList.update(emp.key, {
            question: emp.question,
            answer1: emp.answer1,
            answer2: emp.answer2,
            answer3: emp.answer3,
            answer4: emp.answer4,
            rightAnswer: emp.rightAnswer,
            points: emp.points,
            level: emp.level
        });
    };
    QuizService.prototype.deleteQuiz = function (key) {
        this.quizList.remove(key);
    };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/quiz.ts":
/*!********************************************!*\
  !*** ./src/app/dashboard/services/quiz.ts ***!
  \********************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    return Quiz;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 ml-auto\">\n        <h4>\n          <i class=\"fa fa-plus\"></i>\n          <i class=\"fa fa-minus\"></i>\n        </h4>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead bg-primary text-white text-center\">\n  <div class=\"container\">\n    <h1 class=\"text-uppercase mb-0\">Learn Maths</h1>\n    <hr class=\"star-light\">\n    <h2 class=\"font-weight-light mb-0\">Amazing learning material and practice through quiz. Play now!</h2>\n  </div>\n</header>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n  <div class=\"container\">\n    <h2 class=\"text-center text-uppercase text-secondary mb-0\">Login</h2>\n    <hr class=\"star-dark mb-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto\">\n        <form name=\"sentMessage\">\n          <div class=\"control-group\">\n            <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n              <label>Email Address</label>\n              <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Email Address\" required=\"required\" data-validation-required-message=\"Please enter your email address.\">\n              <p class=\"help-block text-danger\"></p>\n            </div>\n          </div>\n          <div class=\"control-group\">\n            <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n              <label>Password</label>\n              <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Name\" required=\"required\" data-validation-required-message=\"Please enter your password.\">\n              <p class=\"help-block text-danger\"></p>\n            </div>\n          </div>\n          <br>\n          <div id=\"success\"></div>\n          <div class=\"form-group\">\n            <button type=\"submit\" routerLink=\"/quiz-levels\" class=\"btn btn-primary btn-xl col-lg-12\">Login</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.component.css":
/*!*************************************************!*\
  !*** ./src/app/material/material.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material/material.component.html":
/*!**************************************************!*\
  !*** ./src/app/material/material.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header></app-header>\n<section class=\"mb-0\">\n  <div class=\"container\" *ngIf=\"materialElement\">\n    <h2 class=\"text-center text-uppercase\">Let's Study</h2>\n    <br>\n    <br>\n    <h3 class=\"text-secondary mb-0\">Study material for level {{materialElement.level}}</h3>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-lg-6 text-center\">\n        <img [src]=\"materialElement.image1\" width=\"300px\" class=\"img-responsive img-rounded\" [alt]=\"materialElement.image1\">\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <img [src]=\"materialElement.image2\" width=\"300px\" class=\"img-responsive img-rounded\" [alt]=\"materialElement.image2\">\n      </div>\n      <div class=\"col-lg-12\">\n        <p class=\"lead\">{{materialElement.text1}}</p>\n        <p class=\"lead\">{{materialElement.text2}}</p>\n      </div>\n      <div class=\"col-lg-12 text-center\">\n        <img [src]=\"materialElement.image3\" width=\"300px\" class=\"img-responsive img-rounded\" [alt]=\"materialElement.image3\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 ml-auto\">\n        <p class=\"lead\">{{materialElement.text3}}</p>\n      </div>\n      <div class=\"col-lg-6 mr-auto\">\n        <p class=\"lead\">{{materialElement.text4}}</p>\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <img [src]=\"materialElement.image4\" width=\"300px\" class=\"img-responsive img-rounded\" [alt]=\"materialElement.image4\">\n      </div>\n      <div class=\"col-lg-6 text-center\">\n        <img [src]=\"materialElement.image5\" width=\"300px\" class=\"img-responsive img-rounded\" [alt]=\"materialElement.image5\">\n      </div>\n      <div class=\"col-lg-12\">\n        <p class=\"lead\">{{materialElement.text5}}</p>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/material/material.component.ts":
/*!************************************************!*\
  !*** ./src/app/material/material.component.ts ***!
  \************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _dashboard_services_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/services/material.service */ "./src/app/dashboard/services/material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(route, materialService, location) {
        this.route = route;
        this.materialService = materialService;
        this.location = location;
    }
    MaterialComponent.prototype.ngOnInit = function () {
        var urlKey = this.route.snapshot.params['key'];
        this.getSingleMaterial(urlKey);
    };
    MaterialComponent.prototype.getSingleMaterial = function (urlKey) {
        var _this = this;
        var x = this.materialService.getData();
        x.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                if (element.key === urlKey) {
                    _this.materialElement = y;
                }
            });
        });
    };
    MaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material',
            template: __webpack_require__(/*! ./material.component.html */ "./src/app/material/material.component.html"),
            styles: [__webpack_require__(/*! ./material.component.css */ "./src/app/material/material.component.css")],
            providers: [_dashboard_services_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _dashboard_services_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav{\r\n    border-bottom: 5px solid #18BC9C;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-secondary fixed-top text-uppercase\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/quiz-levels\">Quiz Game</a>\n    <div class=\"navbar navbar-fixed-top\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item mx-0 mx-lg-1\">\n          <a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" routerLink=\"/dashboard\">\n            <i class=\"fa fa-user fa-2x\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/quiz-levels/material-tile/material-tile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/quiz-levels/material-tile/material-tile.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-levels/material-tile/material-tile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/quiz-levels/material-tile/material-tile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"portfolio-item d-block mx-auto\" routerLink=\"/material/{{materialElement.key}}\">\n  <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n    <div class=\"portfolio-item-caption-content my-auto w-100 text-center text-white\">\n      <i class=\"fa fa-star fa-3x\"> {{materialElement.level}}</i>\n    </div>\n  </div>\n  <img class=\"img-fluid\" [src]=\"imageList[index]\" alt=\"material {{index}}\">\n</a>"

/***/ }),

/***/ "./src/app/quiz-levels/material-tile/material-tile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-levels/material-tile/material-tile.component.ts ***!
  \**********************************************************************/
/*! exports provided: MaterialTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTileComponent", function() { return MaterialTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _dashboard_services_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/material */ "./src/app/dashboard/services/material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialTileComponent = /** @class */ (function () {
    function MaterialTileComponent() {
        this.index = 0;
        this.imageList = [
            "assets/img/portfolio/algebra.png",
            "assets/img/portfolio/statistics.png",
            "assets/img/portfolio/teacher.png",
            "assets/img/portfolio/maths.png",
            "assets/img/portfolio/cabin.png",
            "assets/img/portfolio/cake.png",
            "assets/img/portfolio/circus.png",
            "assets/img/portfolio/game.png",
            "assets/img/portfolio/safe.png",
            "assets/img/portfolio/submarine.png"
        ];
    }
    MaterialTileComponent.prototype.ngOnInit = function () {
        this.index = this.getRandomInt(0, 9);
    };
    MaterialTileComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dashboard_services_material__WEBPACK_IMPORTED_MODULE_1__["Material"])
    ], MaterialTileComponent.prototype, "materialElement", void 0);
    MaterialTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-tile',
            template: __webpack_require__(/*! ./material-tile.component.html */ "./src/app/quiz-levels/material-tile/material-tile.component.html"),
            styles: [__webpack_require__(/*! ./material-tile.component.css */ "./src/app/quiz-levels/material-tile/material-tile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialTileComponent);
    return MaterialTileComponent;
}());



/***/ }),

/***/ "./src/app/quiz-levels/quiz-levels.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quiz-levels/quiz-levels.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-levels/quiz-levels.component.html":
/*!********************************************************!*\
  !*** ./src/app/quiz-levels/quiz-levels.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header></app-header>\n<section class=\"portfolio\">\n  <div class=\"container\">\n    <h2 class=\"text-center text-uppercase text-secondary mb-0\">Material</h2>\n    <hr class=\"star-dark mb-5\">\n    <div class=\"row\">\n      <app-material-tile class=\"col-lg-3\" *ngFor=\"let material of materialList\" [materialElement]=\"material\"></app-material-tile>\n    </div>\n  </div>\n</section>\n<section class=\"portfolio\">\n  <div class=\"container\">\n    <h2 class=\"text-center text-uppercase text-secondary mb-0\">Quizzes</h2>\n    <hr class=\"star-dark mb-5\">\n    <div class=\"row\">\n      <app-quiz-tile class=\"col-lg-3\" *ngFor=\"let quiz of quizList\" [quizElement]=\"quiz\"></app-quiz-tile>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/quiz-levels/quiz-levels.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quiz-levels/quiz-levels.component.ts ***!
  \******************************************************/
/*! exports provided: QuizLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizLevelsComponent", function() { return QuizLevelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/services/quiz.service */ "./src/app/dashboard/services/quiz.service.ts");
/* harmony import */ var _dashboard_services_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/services/material.service */ "./src/app/dashboard/services/material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizLevelsComponent = /** @class */ (function () {
    function QuizLevelsComponent(quizService, materialService) {
        this.quizService = quizService;
        this.materialService = materialService;
    }
    QuizLevelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var q = this.quizService.getData();
        q.snapshotChanges().subscribe(function (item) {
            _this.quizList = [];
            item.forEach(function (element) {
                var q1 = element.payload.toJSON();
                q1["key"] = element.key;
                _this.quizList.push(q1);
            });
        });
        var m = this.materialService.getData();
        m.snapshotChanges().subscribe(function (item) {
            _this.materialList = [];
            item.forEach(function (element) {
                var ml = element.payload.toJSON();
                ml["key"] = element.key;
                _this.materialList.push(ml);
            });
        });
    };
    QuizLevelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-levels',
            template: __webpack_require__(/*! ./quiz-levels.component.html */ "./src/app/quiz-levels/quiz-levels.component.html"),
            styles: [__webpack_require__(/*! ./quiz-levels.component.css */ "./src/app/quiz-levels/quiz-levels.component.css")],
            providers: [_dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _dashboard_services_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"]]
        }),
        __metadata("design:paramtypes", [_dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _dashboard_services_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"]])
    ], QuizLevelsComponent);
    return QuizLevelsComponent;
}());



/***/ }),

/***/ "./src/app/quiz-levels/quiz-tile/quiz-tile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/quiz-levels/quiz-tile/quiz-tile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-levels/quiz-tile/quiz-tile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/quiz-levels/quiz-tile/quiz-tile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"portfolio-item d-block mx-auto\" routerLink=\"/quiz-test/{{quizElement.key}}\">\n  <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n    <div class=\"portfolio-item-caption-content my-auto w-100 text-center text-white\">\n      <i class=\"fa fa-star fa-3x\"> {{quizElement.level}}</i>\n    </div>\n  </div>\n  <img class=\"img-fluid\" [src]=\"imageList[index]\" alt=\"quiz {{index}}\">\n</a>"

/***/ }),

/***/ "./src/app/quiz-levels/quiz-tile/quiz-tile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/quiz-levels/quiz-tile/quiz-tile.component.ts ***!
  \**************************************************************/
/*! exports provided: QuizTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTileComponent", function() { return QuizTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _dashboard_services_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/quiz */ "./src/app/dashboard/services/quiz.ts");
/* harmony import */ var _dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/services/quiz.service */ "./src/app/dashboard/services/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizTileComponent = /** @class */ (function () {
    function QuizTileComponent(quizService) {
        this.quizService = quizService;
        this.index = 0;
        this.imageList = [
            "assets/img/portfolio/algebra.png",
            "assets/img/portfolio/statistics.png",
            "assets/img/portfolio/teacher.png",
            "assets/img/portfolio/maths.png",
            "assets/img/portfolio/cabin.png",
            "assets/img/portfolio/cake.png",
            "assets/img/portfolio/circus.png",
            "assets/img/portfolio/game.png",
            "assets/img/portfolio/safe.png",
            "assets/img/portfolio/submarine.png"
        ];
    }
    QuizTileComponent.prototype.ngOnInit = function () {
        this.index = this.getRandomInt(0, 9);
    };
    QuizTileComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    QuizTileComponent.prototype.onItemClick = function (emp) {
        this.quizService.selectedQuiz = Object.assign({}, emp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dashboard_services_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"])
    ], QuizTileComponent.prototype, "quizElement", void 0);
    QuizTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-tile',
            template: __webpack_require__(/*! ./quiz-tile.component.html */ "./src/app/quiz-levels/quiz-tile/quiz-tile.component.html"),
            styles: [__webpack_require__(/*! ./quiz-tile.component.css */ "./src/app/quiz-levels/quiz-tile/quiz-tile.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], QuizTileComponent);
    return QuizTileComponent;
}());



/***/ }),

/***/ "./src/app/quiz-test/quiz-test.component.css":
/*!***************************************************!*\
  !*** ./src/app/quiz-test/quiz-test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#quiz-test {\r\n    padding: 50px;\r\n    border-width:5px;  \r\n    border-style:dashed;\r\n}\r\n\r\nbutton{\r\n    width: 15em;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/quiz-test/quiz-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/quiz-test/quiz-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header></app-header>\n<section class=\"mb-0\">\n  <div class=\"container\" *ngIf=\"quizElement\">\n    <h2 class=\"text-center text-uppercase\">{{quizElement.level}} Level - {{quizElement.points}} Points</h2>\n    <hr class=\"star-dark mb-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 text-center\"></div>\n      <div class=\"col-lg-8  text-center\" id=\"quiz-test\">\n        <p class=\"lead\">{{quizElement.question}}</p>\n      </div>\n      <div class=\"col-lg-2 text-center\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"text-center col-lg-6 mt-4\">\n        <button class=\"btn btn-xl\" [ngClass]=\"{'btn-success': right === 1, 'btn-outline-dark': right!==1}\" (click)=\"checkAnswer(quizElement.answer1, 1)\">{{quizElement.answer1}}</button>\n      </div>\n      <div class=\"text-center col-lg-6 mt-4\">\n        <button class=\"btn btn-xl\" [ngClass]=\"{'btn-success': right === 2, 'btn-outline-dark': right!==2}\" (click)=\"checkAnswer(quizElement.answer2, 2)\">{{quizElement.answer2}}</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"text-center col-lg-6 mt-4\">\n        <button class=\"btn btn-xl\" [ngClass]=\"{'btn-success': right === 3, 'btn-outline-dark': right!==3}\" (click)=\"checkAnswer(quizElement.answer3, 3)\">{{quizElement.answer3}}</button>\n      </div>\n      <div class=\"text-center col-lg-6 mt-4\">\n        <button class=\"btn btn-xl\" [ngClass]=\"{'btn-success': right === 4, 'btn-outline-dark': right!==4}\" (click)=\"checkAnswer(quizElement.answer4, 4)\">{{quizElement.answer4}}</button>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/quiz-test/quiz-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-test/quiz-test.component.ts ***!
  \**************************************************/
/*! exports provided: QuizTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTestComponent", function() { return QuizTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/services/quiz.service */ "./src/app/dashboard/services/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizTestComponent = /** @class */ (function () {
    function QuizTestComponent(renderer, route, quizService, location) {
        this.renderer = renderer;
        this.route = route;
        this.quizService = quizService;
        this.location = location;
    }
    QuizTestComponent.prototype.ngOnInit = function () {
        var urlKey = this.route.snapshot.params['key'];
        this.getSingleQuiz(urlKey);
    };
    QuizTestComponent.prototype.getSingleQuiz = function (urlKey) {
        var _this = this;
        var x = this.quizService.getData();
        x.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                if (element.key === urlKey) {
                    _this.quizElement = y;
                }
            });
        });
    };
    QuizTestComponent.prototype.checkAnswer = function (answer, x) {
        if (answer === this.quizElement.rightAnswer) {
            this.right = x;
            alert("Right answer");
        }
        else {
            alert("Wrong answer");
        }
    };
    QuizTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-test',
            template: __webpack_require__(/*! ./quiz-test.component.html */ "./src/app/quiz-test/quiz-test.component.html"),
            styles: [__webpack_require__(/*! ./quiz-test.component.css */ "./src/app/quiz-test/quiz-test.component.css")],
            providers: [_dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _dashboard_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], QuizTestComponent);
    return QuizTestComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCWebDQZ_CN8RoDr-vhNPCc_GNVHZl31_U",
        authDomain: "login-app-d9fb0.firebaseapp.com",
        databaseURL: "https://login-app-d9fb0.firebaseio.com",
        projectId: "login-app-d9fb0",
        storageBucket: "login-app-d9fb0.appspot.com",
        messagingSenderId: "110377725060"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\georg\Έγγραφα\Angular\project-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map