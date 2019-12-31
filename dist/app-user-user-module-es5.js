function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Login</h1>\r\n<hr>\r\n<div class=\"col-md-4\">\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\" >\r\n      <label for=\"userName\">User Name:</label>\r\n      <em *ngIf=\"loginForm.controls.userName?.invalid && (loginForm.controls.userName?.touched || mouseoverLogin)\">Required</em>\r\n      <input (ngModel)=\"username\" name=\"userName\" required id=\"userName\" type=\"text\" class=\"form-control\" placeholder=\"User Name...\" />\r\n    </div>\r\n    <div class=\"form-group\" >\r\n      <label for=\"password\">Password:</label>\r\n      <em *ngIf=\"loginForm.controls.password?.invalid  && (loginForm.controls.password?.touched || mouseoverLogin)\">Required</em>\r\n      <input (ngModel)=\"password\" name=\"password\" required id=\"password\" type=\"password\" class=\"form-control\"placeholder=\"Password...\" />\r\n    </div>\r\n    \r\n    <span (mouseenter)=\"mouseoverLogin=true\" (mouseleave)=\"mouseoverLogin=false\">\r\n      <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-primary\">Login</button>\r\n    </span>\r\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h1>Edit Your Profile </h1>\r\n  <hr>\r\n  <div class=\"col-md-4\">\r\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveProfile(profileForm.value)\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{'error' : !validateFirstName() }\">\r\n        <label for=\"firstName\">First Name:</label>\r\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.required\">Required</em>\r\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.pattern\">Must start with a letter</em>\r\n        <input formControlName=\"firstName\" id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name...\" />\r\n      </div>\r\n      <div class=\"form-group\"  [ngClass]=\"{'error' : !validateLastName() }\">\r\n        <label for=\"lastName\">Last Name:</label>\r\n        <em *ngIf=\"!validateLastName()\">Required</em>\r\n        <input formControlName=\"lastName\" id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Last Name...\" />\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n    </form>\r\n  <div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/user/login.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/user/login.component.ts ***!
    \*****************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_authentication_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/authentication/index */
    "./src/app/Services/authentication/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login(formValues) {
          var _this = this;

          this.authService.login(formValues.userName, formValues.password);
          this.authService.authChange$.subscribe(function (loginstate) {
            if (loginstate.Loggedin) {
              console.warn('successully logged in');
              var redirecturl = _this.authService.redirecturl ? _this.authService.redirecturl : 'events'; // Redirect the user

              _this.router.navigate([redirecturl]);
            }
          });
          this.router.navigate['handyman/list'];
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['events']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _Services_authentication_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html")).default,
      styles: ["\n    em { float:right; color:#E05C65; padding-left:10px; }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_authentication_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/user/profile.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/user/profile.component.ts ***!
    \*******************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/user/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/toastr.service */
    "./src/app/common/toastr.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(router, authService, toastr) {
        _classCallCheck(this, ProfileComponent);

        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authService.currentUser.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z].*')]);
          this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authService.currentUser.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName
          });
        }
      }, {
        key: "saveProfile",
        value: function saveProfile(formValues) {
          if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.toastr.success('Profile Saved');
          }
        }
      }, {
        key: "validateFirstName",
        value: function validateFirstName() {
          return this.firstName.valid || this.firstName.untouched;
        }
      }, {
        key: "validateLastName",
        value: function validateLastName() {
          return this.lastName.valid || this.lastName.untouched;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['events']);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_common_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"]]
        }]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile.component.html")).default,
      styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :-moz-placeholder { color:#999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_common_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], Object])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.routes */
    "./src/app/user/user.routes.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/user/profile.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/user/login.component.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_5__["userRoutes"])],
      declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
      providers: []
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/user/user.routes.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.routes.ts ***!
    \*************************************/

  /*! exports provided: userRoutes */

  /***/
  function srcAppUserUserRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userRoutes", function () {
      return userRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/user/profile.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/user/login.component.ts");

    var userRoutes = [{
      path: 'profile',
      component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
    }, {
      path: 'login',
      component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];
    /***/
  }
}]);
//# sourceMappingURL=app-user-user-module-es5.js.map