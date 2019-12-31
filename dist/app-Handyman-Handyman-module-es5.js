function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-Handyman-Handyman-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Handyman/Handyman-Create.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Handyman/Handyman-Create.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHandymanHandymanCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h1>\r\n    <div *ngIf=\"addMode \">Add new Handyman</div>\r\n    <div *ngIf=\"!addMode\">Edit Handyman</div>\r\n  </h1>\r\n  <hr>\r\n  <div class=\"col-md-4\">\r\n    <form  [formGroup]=\"customerForm\" (ngSubmit)=\"saveCustomer(customerForm.value)\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{'error' : !validateFirstName() }\">\r\n        <label for=\"fname\">First Name:</label>\r\n        <em *ngIf=\"!validateFirstName() && customerForm?.controls?.fname?.errors?.required\">Required</em>\r\n        <em *ngIf=\"!validateFirstName() && customerForm?.controls?.fname?.errors?.pattern\">Must start with a letter</em>\r\n        <input formControlName=\"fname\" id=\"fname\" type=\"text\" class=\"form-control\" placeholder=\"First Name...\" />\r\n      </div>\r\n      <div class=\"form-group\"  [ngClass]=\"{'error' : !validateLastName() }\">\r\n        <label for=\"lname\">Last Name:</label>\r\n        <em *ngIf=\"!validateLastName()\">Required</em>\r\n        <input formControlName=\"lname\" id=\"lname\" type=\"text\" class=\"form-control\" placeholder=\"Last Name...\" />\r\n      </div>\r\n        \r\n      <div class=\"form-group\">\r\n        <label for=\"age\">Age:</label>\r\n        <em *ngIf=\"customerForm.controls.age.errors?.required\">Required</em>\r\n        <em *ngIf=\"customerForm.controls.age.errors?.pattern\">Age accept numeric only</em>\r\n        <em *ngIf=\"customerForm.controls.age.errors?.max || customerForm.controls.age.errors?.min\">Maximum is 199</em>\r\n        <input type=\"number\" minlength=\"2\" min = \"18\" formControlName=\"age\" id=\"age\" type=\"text\" class=\"form-control\" placeholder=\"age..\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\">Phone:</label>\r\n        <em *ngIf=\"customerForm.controls.phone.errors?.required\">Required</em>\r\n        <em *ngIf=\"customerForm.controls.phone.errors?.minlength || customerForm.controls.phone.errors?.maxlength \">Phone number min:9 max:15</em>\r\n        <em *ngIf=\"customerForm.controls.phone.errors?.mobNumExists\">Phone number already exists</em>\r\n        <input formControlName=\"phone\" id=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone..\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"PhotoImageUrl\">PhotoImageUrl:</label>\r\n        <em *ngIf=\"customerForm.controls.PhotoImageUrl.errors?.pattern\">Invalid Url</em>\r\n       <input formControlName=\"PhotoImageUrl\" id=\"PhotoImageUrl\" type=\"text\" class=\"form-control\" placeholder=\"Photo Image...\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"latitude\">latitude:</label>\r\n        <input formControlName=\"latitude\" id=\"latitude\" type=\"text\" class=\"form-control\" placeholder=\"latitude Image...\" />\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"getGeoLocation()\">Fill Location</button>\r\n      </div>  \r\n      <div class=\"form-group\" >\r\n        <label for=\"longitude\">longitude:</label>\r\n        <input formControlName=\"longitude\" id=\"longitude\" type=\"text\" class=\"form-control\" placeholder=\"longitude Image...\" />\r\n      </div>  \r\n      <div class=\"form-group\">\r\n        <label for=\"adhaarID\">adhaarID:</label>\r\n        <input formControlName=\"adhaarID\" id=\"adhaarID\" type=\"text\" class=\"form-control\" placeholder=\"adhaarID Image...\" />\r\n      </div>  \r\n      <div class=\"form-group\">\r\n        <label for=\"adhaarImage\">adhaarImage:</label>\r\n          <input formControlName=\"adhaarImage\" id=\"adhaarImage\" type=\"text\" class=\"form-control\" placeholder=\"adhaarImage Image...\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"referenceby\">referenceby:</label>\r\n        <input formControlName=\"referenceby\" id=\"referenceby\" type=\"text\" class=\"form-control\" placeholder=\"referenceby Image...\" />\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n    </form>\r\n  <div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/Handyman/Handyman-create.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Handyman/Handyman-create.component.ts ***!
    \*******************************************************/

  /*! exports provided: HandymanCreateComponent */

  /***/
  function srcAppHandymanHandymanCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandymanCreateComponent", function () {
      return HandymanCreateComponent;
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


    var _shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/Handyman.Service */
    "./src/app/Handyman/shared/Handyman.Service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/toastr.service */
    "./src/app/common/toastr.service.ts");
    /* harmony import */


    var _Validators_existingMobileNumberValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Validators/existingMobileNumberValidator */
    "./src/app/Validators/existingMobileNumberValidator.ts");

    var HandymanCreateComponent =
    /*#__PURE__*/
    function () {
      function HandymanCreateComponent(router, customerService, rediretrouter, toastr) {
        _classCallCheck(this, HandymanCreateComponent);

        this.router = router;
        this.customerService = customerService;
        this.rediretrouter = rediretrouter;
        this.toastr = toastr;
        this.URLValidPattern = '^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$';
        this.addMode = false;
      }

      _createClass(HandymanCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.params.forEach(function (params) {
            _this.customer = _this.customerService.getHandyman(+params['id']);
            _this.addMode = false;

            if (!_this.customer) {
              _this.addMode = false;

              _this.createEmptyCustomer();
            }
          });
          console.warn(' fname ' + this.customer.fname);
          this.InitFormControl();
        }
      }, {
        key: "InitFormControl",
        value: function InitFormControl() {
          /*
          this.fname = new FormControl ('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
          this.lname = new FormControl( '', Validators.required);
          this.phone = new FormControl( '', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]);
          this.PhotoImageUrl = new FormControl( '');
          this.age  = new FormControl('',
                [Validators.required, Validators.min(17) ,  Validators.max(199), Validators.pattern('^[0-9]*$')]);
          this.latitude  = new FormControl('');
          this.longitude  = new FormControl( '');
          this.adhaarID  = new FormControl('');
          this.adhaarImage  = new FormControl('');
          this.referenceby  = new FormControl('');
          */
          this.fname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.fname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z].*')]);
          this.lname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.lname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.phone, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)],
            asyncValidators: [Object(_Validators_existingMobileNumberValidator__WEBPACK_IMPORTED_MODULE_6__["existingMobileNumberValidator"])(this.customerService, this.customer.phone, this.addMode)],
            updateOn: 'blur'
          });
          this.PhotoImageUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.PhotoImageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern[this.URLValidPattern]);
          this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.age, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(17), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(199), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]);
          this.latitude = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.latitude);
          this.longitude = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.longitude);
          this.adhaarID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.adhaarID);
          this.adhaarImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.adhaarImage);
          this.referenceby = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.referenceby);
          this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fname: this.fname,
            lname: this.lname,
            phone: this.phone,
            PhotoImageUrl: this.PhotoImageUrl,
            age: this.age,
            latitude: this.latitude,
            longitude: this.longitude,
            adhaarID: this.adhaarID,
            adhaarImage: this.adhaarImage,
            referenceby: this.referenceby
          });
        }
      }, {
        key: "validateImageurl",
        value: function validateImageurl(val) {
          console.warn("Photo Image url changed.");
        }
      }, {
        key: "createEmptyCustomer",
        value: function createEmptyCustomer() {
          this.customer = {
            id: Math.floor(Math.random() * 100 + 1),
            fname: '',
            lname: '',
            PhotoImageUrl: '',
            age: 0,
            enrolledDate: new Date('9/26/2018'),
            yearsofExperience: 10,
            phone: '',
            location: {
              address1: 'T',
              address2: '',
              Landmark: '',
              city: '',
              country: '',
              zipcode: ''
            },
            latitude: '',
            longitude: '',
            adhaarID: '',
            adhaarImage: '',
            InsuranceImage: '',
            InsuranceProvider: '',
            InsuranceID: '',
            DrivingLicense: '',
            DrivingLicenseImage: '',
            referenceby: '',
            referencebyID: 0,
            ratingaverage: 0,
            serviceType: ''
          };
        } // Create empty customer

      }, {
        key: "saveCustomer",
        value: function saveCustomer(formValues) {
          if (!this.customerForm.valid) {
            return;
          }

          if (this.customer === undefined) {
            this.createEmptyCustomer();
          }

          this.customer.id = Math.floor(Math.random() * 100 + 1);
          this.customer.fname = formValues.fname;
          this.customer.lname = formValues.lname;
          this.customer.PhotoImageUrl = formValues.PhotoImageUrl;
          this.customer.age = formValues.age;
          this.customer.phone = formValues.phone;
          this.customer.location.address1 = '1057 DT';
          this.customer.location.address2 = 'address2';
          this.customer.location.Landmark = 'Next to NY tower';
          this.customer.location.city = 'London';
          this.customer.location.country = 'England';
          this.customer.location.zipcode = '623707';
          this.customer.latitude = formValues.latitude;
          this.customer.longitude = formValues.longitude;
          this.customer.referenceby = formValues.referenceby;
          this.customer.adhaarID = formValues.adhaarID;
          this.customer.adhaarImage = formValues.adhaarImage; //this.customer = Object.assign({}, this.customerForm.value);

          console.warn(' Cusotmer ID  :' + this.customer.id);
          this.customerService.saveHandyman(this.customer);
          this.toastr.success('Profile Saved');
        }
      }, {
        key: "validateFirstName",
        value: function validateFirstName() {
          return this.fname.valid || this.fname.untouched;
        }
      }, {
        key: "validateLastName",
        value: function validateLastName() {
          return this.lname.valid || this.lname.untouched;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.rediretrouter.navigate(['customer\list']);
        }
      }, {
        key: "getGeoLocation",
        value: function getGeoLocation() {
          if (navigator.geolocation) {
            var options = {
              timeout: 60000
            };
            navigator.geolocation.getCurrentPosition(this.fillPosition, this.errorHandler, options);
          } else {
            console.error('Geo Location not supported by this browser');
          }
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(err) {
          if (err.code === 1) {
            console.error('Access denied');
          } else if (err.code === 2) {
            console.error('Error: Position is unavailable!');
          }
        }
      }, {
        key: "fillPosition",
        value: function fillPosition(position) {
          this.longitude.setValue(position.coords.longitude);
          this.latitude.setValue(position.coords.latitude);
        }
      }]);

      return HandymanCreateComponent;
    }();

    HandymanCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_3__["HandymanService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_common_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"]]
        }]
      }];
    };

    HandymanCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Handyman-Create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Handyman/Handyman-Create.component.html")).default,
      styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :-moz-placeholder { color:#999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_common_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_3__["HandymanService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object])], HandymanCreateComponent);
    /***/
  },

  /***/
  "./src/app/Handyman/Handyman-list-resolver.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/Handyman/Handyman-list-resolver.service.ts ***!
    \************************************************************/

  /*! exports provided: HandymanListResolver */

  /***/
  function srcAppHandymanHandymanListResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandymanListResolver", function () {
      return HandymanListResolver;
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


    var _Handyman_shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Handyman/shared/Handyman.Service */
    "./src/app/Handyman/shared/Handyman.Service.ts");

    var HandymanListResolver =
    /*#__PURE__*/
    function () {
      function HandymanListResolver(handymanService) {
        _classCallCheck(this, HandymanListResolver);

        this.handymanService = handymanService;
      }

      _createClass(HandymanListResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.handymanService.getHandymen();
        }
      }]);

      return HandymanListResolver;
    }();

    HandymanListResolver.ctorParameters = function () {
      return [{
        type: _Handyman_shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"]
      }];
    };

    HandymanListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Handyman_shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"]])], HandymanListResolver);
    /***/
  },

  /***/
  "./src/app/Handyman/Handyman-list-thumpnail.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Handyman/Handyman-list-thumpnail.component.ts ***!
    \***************************************************************/

  /*! exports provided: HandymanThumbnailComponent */

  /***/
  function srcAppHandymanHandymanListThumpnailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandymanThumbnailComponent", function () {
      return HandymanThumbnailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HandymanThumbnailComponent = function HandymanThumbnailComponent() {
      _classCallCheck(this, HandymanThumbnailComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HandymanThumbnailComponent.prototype, "Handyman", void 0);
    HandymanThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "Handyman-thumbnail",
      template: "\n  <div [routerLink]=\"['/handyman/edit', Handyman.id]\" class=\"card well hoverwell thumbnail\" style=\"max-width: 15rem; max-height:25rem;\">\n    <img style=\"width:14rem; height:24rem;\" class=\"card-img-top Thumbnail rounded\" src=\"{{Handyman?.PhotoImageUrl}}\" alt=\"Handyman image\" >\n    <div class=\"card-body\"> <!-- card-img-overlay -->\n      <h4 class=\"card-title\">{{Handyman?.fname}} {{Handyman?.lname}} </h4>\n      <div class=\"card-text\">\n        Phone: {{Handyman?.phone}} <BR>\n        <div *ngIf=\"Handyman?.location\">\n          <span>Location: {{Handyman?.location?.Address1}}</span>\n          <span class=\"pad-left\">{{Handyman?.location?.city}}, {{Handyman?.location?.zipcode}}</span>\n        </div>\n      </div>\n      <ngb-rating rate=\"{{Handyman?.ratingaverage}}\" max=\"5\" [readonly]=\"true\" >\n         <ng-template let-fill=\"fill\" let-index=\"index\">\n             <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n        </ng-template>\n      </ngb-rating>\n      <!-- a  [routerLink]=\"['/handyman/edit', Handyman.id]\" class=\"btn btn-primary\">See Profile</a -->\n    </div>\n  </div>\n  <div>&nbsp;</div>\n  ",
      styles: ["\n    .thumbnail { min-height: 210px; }\n    .pad-left { margin-left: 10px; }\n    .well div { color: #bbb; }\n    .star {\n      font-size: 1.5rem;\n      color: #b0c4de;\n    }\n    .filled {\n      color: #1e90ff;\n    }\n    .bad {\n      color: #deb0b0;\n    }\n    .filled.bad {\n      color: #ff1e1e;\n    }\n    "]
    })], HandymanThumbnailComponent);
    /***/
  },

  /***/
  "./src/app/Handyman/Handyman-list.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Handyman/Handyman-list.component.ts ***!
    \*****************************************************/

  /*! exports provided: HandymanListComponent */

  /***/
  function srcAppHandymanHandymanListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandymanListComponent", function () {
      return HandymanListComponent;
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


    var _Handyman_shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Handyman/shared/Handyman.Service */
    "./src/app/Handyman/shared/Handyman.Service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HandymanListComponent =
    /*#__PURE__*/
    function () {
      function HandymanListComponent(handymanService, route) {
        _classCallCheck(this, HandymanListComponent);

        this.handymanService = handymanService;
        this.route = route;
      }

      _createClass(HandymanListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Handymen = this.route.snapshot.data['Handymen'];
        }
      }]);

      return HandymanListComponent;
    }();

    HandymanListComponent.ctorParameters = function () {
      return [{
        type: _Handyman_shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HandymanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <div>\n        <h1>Top Handymen</h1>\n        <hr/>\n        <div class=\"row\">\n        <div *ngFor=\"let handyman of Handymen\" class=\"col-md-3\">\n            <div class=\"card-deck\">\n                <Handyman-thumbnail [Handyman]=\"handyman\"></Handyman-thumbnail>\n             </div>\n        </div>\n        </div>\n    </div>\n    "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Handyman_shared_Handyman_Service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], HandymanListComponent);
    /***/
  },

  /***/
  "./src/app/Handyman/Handyman.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/Handyman/Handyman.module.ts ***!
    \*********************************************/

  /*! exports provided: HandymanModule */

  /***/
  function srcAppHandymanHandymanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandymanModule", function () {
      return HandymanModule;
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


    var _Handyman_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Handyman.routes */
    "./src/app/Handyman/Handyman.routes.ts");
    /* harmony import */


    var _Handyman_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Handyman-list.component */
    "./src/app/Handyman/Handyman-list.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared */
    "./src/app/Handyman/shared/index.ts");
    /* harmony import */


    var _Handyman_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Handyman-list-resolver.service */
    "./src/app/Handyman/Handyman-list-resolver.service.ts");
    /* harmony import */


    var _Handyman_list_thumpnail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Handyman-list-thumpnail.component */
    "./src/app/Handyman/Handyman-list-thumpnail.component.ts");
    /* harmony import */


    var _Handyman_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Handyman-create.component */
    "./src/app/Handyman/Handyman-create.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var HandymanModule = function HandymanModule() {
      _classCallCheck(this, HandymanModule);
    };

    HandymanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_Handyman_routes__WEBPACK_IMPORTED_MODULE_5__["HandymanRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]],
      declarations: [_Handyman_list_component__WEBPACK_IMPORTED_MODULE_6__["HandymanListComponent"], _Handyman_list_thumpnail_component__WEBPACK_IMPORTED_MODULE_9__["HandymanThumbnailComponent"], _Handyman_create_component__WEBPACK_IMPORTED_MODULE_10__["HandymanCreateComponent"]],
      providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["HandymanService"], _Handyman_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__["HandymanListResolver"]]
    })], HandymanModule);
    /***/
  },

  /***/
  "./src/app/Handyman/Handyman.routes.ts":
  /*!*********************************************!*\
    !*** ./src/app/Handyman/Handyman.routes.ts ***!
    \*********************************************/

  /*! exports provided: HandymanRoutes */

  /***/
  function srcAppHandymanHandymanRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandymanRoutes", function () {
      return HandymanRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Handyman_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Handyman-list.component */
    "./src/app/Handyman/Handyman-list.component.ts");
    /* harmony import */


    var _Handyman_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Handyman-list-resolver.service */
    "./src/app/Handyman/Handyman-list-resolver.service.ts");
    /* harmony import */


    var _Handyman_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Handyman-create.component */
    "./src/app/Handyman/Handyman-create.component.ts");
    /* harmony import */


    var _router_guard_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../router.guard.service/index */
    "./src/app/router.guard.service/index.ts");

    var HandymanRoutes = [{
      path: 'list',
      component: _Handyman_list_component__WEBPACK_IMPORTED_MODULE_1__["HandymanListComponent"],
      resolve: {
        Handymen: _Handyman_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__["HandymanListResolver"]
      }
    }, {
      path: 'edit/:id',
      component: _Handyman_create_component__WEBPACK_IMPORTED_MODULE_3__["HandymanCreateComponent"],
      canActivate: [_router_guard_service_index__WEBPACK_IMPORTED_MODULE_4__["AdminGuardService"]]
    }];
    /***/
  },

  /***/
  "./src/app/Handyman/shared/index.ts":
  /*!******************************************!*\
    !*** ./src/app/Handyman/shared/index.ts ***!
    \******************************************/

  /*! exports provided: HandymanService */

  /***/
  function srcAppHandymanSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Handyman_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Handyman.Service */
    "./src/app/Handyman/shared/Handyman.Service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HandymanService", function () {
      return _Handyman_Service__WEBPACK_IMPORTED_MODULE_1__["HandymanService"];
    });
    /***/

  }
}]);
//# sourceMappingURL=app-Handyman-Handyman-module-es5.js.map