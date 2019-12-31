function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customer-customer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/Customer-Create.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/Customer-Create.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerCustomerCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h1>\r\n    <div  *ngIf =\"this.DataMode === 'Edit'\">Edit Customer </div>\r\n    <div *ngIf =\"this.DataMode === 'Add'\">Add Customer </div>\r\n  </h1>\r\n  <hr>\r\n  <div class=\"col-md-4\">\r\n    <form [formGroup]=\"customerForm\" (ngSubmit)=\"saveCustomer(customerForm.value)\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{'error' : !validateFirstName() }\">\r\n        <label for=\"fname\">First Name:</label>\r\n        <em *ngIf=\"!validateFirstName() && customerForm.controls.fname.errors.required\">Required</em>\r\n        <em *ngIf=\"!validateFirstName() && customerForm.controls.fname.errors.pattern\">Must start with a letter</em>\r\n        <input formControlName=\"fname\" id=\"fname\" type=\"text\" class=\"form-control\" placeholder=\"First Name...\" />\r\n      </div>\r\n      <div class=\"form-group\"  [ngClass]=\"{'error' : !validateLastName() }\">\r\n        <label for=\"lname\">Last Name:</label>\r\n        <em *ngIf=\"!validateLastName()\">Required</em>\r\n        <input formControlName=\"lname\" id=\"lname\" type=\"text\" class=\"form-control\" placeholder=\"Last Name...\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"age\">Age:</label>\r\n        <em *ngIf=\"customerForm.controls.age.errors?.required\">Required</em>\r\n        <em *ngIf=\"customerForm.controls.age.errors?.pattern\">Age accept numeric only</em>\r\n        <em *ngIf=\"customerForm.controls.age.errors?.max || customerForm.controls.age.errors?.min\">Maximum is 199</em>\r\n        <input formControlName=\"age\" id=\"age\" type=\"text\" class=\"form-control\" placeholder=\"age..\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\">Phone:</label>\r\n        <em *ngIf=\"customerForm.controls.phone.errors?.required\">Required</em>\r\n        <em *ngIf=\"customerForm.controls.phone.errors?.minlength || customerForm.controls.phone.errors?.maxlength \">Phone number min:9 max:15</em>\r\n        <input formControlName=\"phone\" id=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone..\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"PhotoImageUrl\">PhotoImageUrl:</label>\r\n        <input formControlName=\"PhotoImageUrl\" id=\"PhotoImageUrl\" type=\"text\" class=\"form-control\" placeholder=\"Photo Image...\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"latitude\">latitude:</label>\r\n        <input formControlName=\"latitude\" id=\"latitude\" type=\"text\" class=\"form-control\" placeholder=\"latitude Image...\" />\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"getGeoLocation()\">Fill Location</button>\r\n      </div>  \r\n      <div class=\"form-group\" >\r\n        <label for=\"longitude\">longitude:</label>\r\n        <input formControlName=\"longitude\" id=\"longitude\" type=\"text\" class=\"form-control\" placeholder=\"longitude Image...\" />\r\n      </div>  \r\n      <div class=\"form-group\">\r\n        <label for=\"adhaarID\">adhaarID:</label>\r\n        <input formControlName=\"adhaarID\" id=\"adhaarID\" type=\"text\" class=\"form-control\" placeholder=\"adhaarID Image...\" />\r\n      </div>  \r\n      <div class=\"form-group\">\r\n        <label for=\"adhaarImage\">adhaarImage:</label>\r\n          <input formControlName=\"adhaarImage\" id=\"adhaarImage\" type=\"text\" class=\"form-control\" placeholder=\"adhaarImage Image...\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"referenceby\">referenceby:</label>\r\n        <input formControlName=\"referenceby\" id=\"referenceby\" type=\"text\" class=\"form-control\" placeholder=\"referenceby Image...\" />\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n    </form>\r\n  <div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/customer/Customer-create.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/customer/Customer-create.component.ts ***!
    \*******************************************************/

  /*! exports provided: CustomerCreateComponent */

  /***/
  function srcAppCustomerCustomerCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerCreateComponent", function () {
      return CustomerCreateComponent;
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


    var _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/Customer.Service */
    "./src/app/customer/shared/Customer.Service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/toastr.service */
    "./src/app/common/toastr.service.ts");

    var CustomerCreateComponent =
    /*#__PURE__*/
    function () {
      function CustomerCreateComponent(router, customerService, rediretrouter, toastr) {
        _classCallCheck(this, CustomerCreateComponent);

        this.router = router;
        this.customerService = customerService;
        this.rediretrouter = rediretrouter;
        this.toastr = toastr;
        this.addMode = false;
        this.DataMode = 'Add';
      }

      _createClass(CustomerCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.params.forEach(function (params) {
            _this.customer = _this.customerService.getCustomer(+params['id']);
            _this.addMode = false;

            if (_this.customer) {
              _this.DataMode = 'Edit';
            } else {
              _this.createEmptyCustomer();
            }
          });
          this.InitFormControl();
        }
      }, {
        key: "InitFormControl",
        value: function InitFormControl() {
          this.fname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.fname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z].*')]);
          this.lname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.lname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]);
          this.PhotoImageUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.PhotoImageUrl);
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
        key: "createEmptyCustomer",
        value: function createEmptyCustomer() {
          this.customer = {
            id: Math.floor(Math.random() * 100 + 1),
            fname: '',
            lname: '',
            PhotoImageUrl: '',
            age: 0,
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
            referenceby: '',
            adhaarID: '',
            adhaarImage: ''
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
          this.customerService.saveCustomer(this.customer);
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

      return CustomerCreateComponent;
    }();

    CustomerCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
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

    CustomerCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Customer-Create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/Customer-Create.component.html")).default,
      styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :-moz-placeholder { color:#999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_common_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object])], CustomerCreateComponent);
    /***/
  },

  /***/
  "./src/app/customer/Customer-list-resolver.ts":
  /*!****************************************************!*\
    !*** ./src/app/customer/Customer-list-resolver.ts ***!
    \****************************************************/

  /*! exports provided: CustomerListResolver */

  /***/
  function srcAppCustomerCustomerListResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerListResolver", function () {
      return CustomerListResolver;
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


    var _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/Customer.Service */
    "./src/app/customer/shared/Customer.Service.ts");

    var CustomerListResolver =
    /*#__PURE__*/
    function () {
      function CustomerListResolver(customerService) {
        _classCallCheck(this, CustomerListResolver);

        this.customerService = customerService;
      }

      _createClass(CustomerListResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.customerService.getCustomers();
        }
      }]);

      return CustomerListResolver;
    }();

    CustomerListResolver.ctorParameters = function () {
      return [{
        type: _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
      }];
    };

    CustomerListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_Customer_Service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])], CustomerListResolver);
    /***/
  },

  /***/
  "./src/app/customer/Customer-list-thumpnail.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/customer/Customer-list-thumpnail.component.ts ***!
    \***************************************************************/

  /*! exports provided: CustomerThumbnailComponent */

  /***/
  function srcAppCustomerCustomerListThumpnailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerThumbnailComponent", function () {
      return CustomerThumbnailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerThumbnailComponent = function CustomerThumbnailComponent() {
      _classCallCheck(this, CustomerThumbnailComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomerThumbnailComponent.prototype, "customer", void 0);
    CustomerThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "customer-thumbnail",
      template: "\n\n  <div [routerLink]=\"['/customer/edit', customer.id]\" class=\"card well hoverwell thumbnail\" style=\"max-width: 15rem; max-height:25rem;\">\n  <img style=\"width:15rem; height:25rem;\" class=\"card-img-top img-fluid Thumbnail\" src=\"{{customer?.PhotoImageUrl}}\" alt=\"customer image\">\n  <div class=\"card-body\"> <!-- card-img-overlay -->\n    <h4 class=\"card-title\">{{customer?.fname}} {{customer?.lname}} </h4>\n    <div class=\"card-text\">\n      Phone: {{customer?.phone}} <BR>\n      <div *ngIf=\"customer?.location\">\n        <span>Location: {{customer?.location?.Address1}}</span>\n        <span class=\"pad-left\">{{customer?.location?.city}}, {{customer?.location?.zipcode}}</span>\n      </div>\n    </div>\n    <ngb-rating rate=\"{{3}}\" max=\"5\" readonly=\"true\"></ngb-rating>\n    <!-- a  [routerLink]=\"['/customer/edit', customer.id]\" class=\"btn btn-primary\">See Profile</a -->\n  </div>\n</div>\n<div>&nbsp;</div>\n",
      styles: ["\n    .thumbnail { min-height: 210px; }\n    .pad-left { margin-left: 10px; }\n    .well div { color: #bbb; }\n    .star {\n      font-size: 1.5rem;\n      color: #b0c4de;\n    }\n    .filled {\n      color: #1e90ff;\n    }\n    .bad {\n      color: #deb0b0;\n    }\n    .filled.bad {\n      color: #ff1e1e;\n    }\n    "]
    })], CustomerThumbnailComponent);
    /***/
  },

  /***/
  "./src/app/customer/Customer-list.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/Customer-list.component.ts ***!
    \*****************************************************/

  /*! exports provided: CustomersListComponent */

  /***/
  function srcAppCustomerCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function () {
      return CustomersListComponent;
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


    var _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/Customer.Service */
    "./src/app/customer/shared/Customer.Service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CustomersListComponent =
    /*#__PURE__*/
    function () {
      function CustomersListComponent(eventService, route) {
        _classCallCheck(this, CustomersListComponent);

        this.eventService = eventService;
        this.route = route;
      }

      _createClass(CustomersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customers = this.route.snapshot.data['customers'];
        }
      }]);

      return CustomersListComponent;
    }();

    CustomersListComponent.ctorParameters = function () {
      return [{
        type: _shared_Customer_Service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CustomersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <div>\n        <h1>Recently Enrolled Customers</h1>\n        <hr/>\n        <div class=\"row\">\n        <div *ngFor=\"let customer of customers\" class=\"col-md-3\">\n           <div class=\"card-deck\">\n             <customer-thumbnail [customer]=\"customer\"></customer-thumbnail>\n            </div>\n        </div>\n        </div>\n    </div>\n    "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_Customer_Service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CustomersListComponent);
    /***/
  },

  /***/
  "./src/app/customer/Customer.routes.ts":
  /*!*********************************************!*\
    !*** ./src/app/customer/Customer.routes.ts ***!
    \*********************************************/

  /*! exports provided: customerRoutes */

  /***/
  function srcAppCustomerCustomerRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customerRoutes", function () {
      return customerRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Customer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Customer-list.component */
    "./src/app/customer/Customer-list.component.ts");
    /* harmony import */


    var _Customer_list_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Customer-list-resolver */
    "./src/app/customer/Customer-list-resolver.ts");
    /* harmony import */


    var _Customer_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Customer-create.component */
    "./src/app/customer/Customer-create.component.ts");

    var customerRoutes = [{
      path: 'list',
      component: _Customer_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomersListComponent"],
      resolve: {
        customers: _Customer_list_resolver__WEBPACK_IMPORTED_MODULE_2__["CustomerListResolver"]
      }
    }, {
      path: 'edit/:id',
      component: _Customer_create_component__WEBPACK_IMPORTED_MODULE_3__["CustomerCreateComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/customer/customer.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/customer/customer.module.ts ***!
    \*********************************************/

  /*! exports provided: CustomerModule */

  /***/
  function srcAppCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
      return CustomerModule;
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


    var _Customer_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Customer.routes */
    "./src/app/customer/Customer.routes.ts");
    /* harmony import */


    var _Customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Customer-list.component */
    "./src/app/customer/Customer-list.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared */
    "./src/app/customer/shared/index.ts");
    /* harmony import */


    var _Customer_list_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Customer-list-resolver */
    "./src/app/customer/Customer-list-resolver.ts");
    /* harmony import */


    var _Customer_list_thumpnail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Customer-list-thumpnail.component */
    "./src/app/customer/Customer-list-thumpnail.component.ts");
    /* harmony import */


    var _Customer_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Customer-create.component */
    "./src/app/customer/Customer-create.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var CustomerModule = function CustomerModule() {
      _classCallCheck(this, CustomerModule);
    };

    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_Customer_routes__WEBPACK_IMPORTED_MODULE_5__["customerRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]],
      declarations: [_Customer_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomersListComponent"], _Customer_list_thumpnail_component__WEBPACK_IMPORTED_MODULE_9__["CustomerThumbnailComponent"], _Customer_create_component__WEBPACK_IMPORTED_MODULE_10__["CustomerCreateComponent"]],
      providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["CustomerService"], _Customer_list_resolver__WEBPACK_IMPORTED_MODULE_8__["CustomerListResolver"]]
    })], CustomerModule);
    /***/
  },

  /***/
  "./src/app/customer/shared/Customer.Service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/shared/Customer.Service.ts ***!
    \*****************************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppCustomerSharedCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CustomerService =
    /*#__PURE__*/
    function () {
      function CustomerService() {
        _classCallCheck(this, CustomerService);
      }

      _createClass(CustomerService, [{
        key: "getCustomers",
        value: function getCustomers() {
          var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          setTimeout(function () {
            subject.next(CUSTOMERS);
            subject.complete();
          }, 100);
          return subject;
        }
      }, {
        key: "getCustomer",
        value: function getCustomer(id) {
          return CUSTOMERS.find(function (customer) {
            return customer.id === id;
          });
        }
      }, {
        key: "saveCustomer",
        value: function saveCustomer(customer) {
          var index = CUSTOMERS.findIndex(function (x) {
            return x.id === customer.id;
          });

          if (index !== -1) {
            CUSTOMERS[index] = customer;
          } else {
            customer.id = 999;
            CUSTOMERS.push(customer);
          }
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer) {
          var index = CUSTOMERS.findIndex(function (x) {
            return x.id === customer.id;
          });

          if (index !== -1) {
            CUSTOMERS[index] = customer;
          } else {
            this.saveCustomer(customer);
          }
        }
      }]);

      return CustomerService;
    }();

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CustomerService);
    var CUSTOMERS = [{
      id: 1,
      fname: 'Angular Connect',
      lname: 'Angular Connect',
      PhotoImageUrl: '/assets/images/customer1.jpeg',
      age: 30,
      phone: '+919486903444',
      location: {
        address1: '1057 DT',
        address2: '',
        Landmark: '',
        city: 'London',
        country: 'England',
        zipcode: '623707'
      },
      latitude: '-1939489223',
      longitude: '-103030303',
      referenceby: '1',
      adhaarID: '9382839823',
      adhaarImage: 'http://localhost:3030/33003.jpg'
    }, {
      id: 2,
      fname: 'Nanda',
      lname: 'Baluchamy',
      PhotoImageUrl: '/assets/images/Customer2.jpeg',
      age: 12,
      phone: '+919486903343',
      location: {
        address1: '18615 4th AVE SE',
        address2: '',
        Landmark: '',
        city: 'Madurai',
        country: 'India',
        zipcode: '623707'
      },
      latitude: '-1939489223',
      longitude: '-103030303',
      referenceby: '1',
      adhaarID: '9382839823',
      adhaarImage: 'http://localhost:3030/33003.jpg'
    }];
    /***/
  },

  /***/
  "./src/app/customer/shared/index.ts":
  /*!******************************************!*\
    !*** ./src/app/customer/shared/index.ts ***!
    \******************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppCustomerSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Customer_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Customer.Service */
    "./src/app/customer/shared/Customer.Service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return _Customer_Service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"];
    });
    /***/

  }
}]);
//# sourceMappingURL=app-customer-customer-module-es5.js.map