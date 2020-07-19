(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <header>\r\n      <h3>\r\n          <span class=\"glyphicon glyphicon-user\"></span>\r\n          {{ customer.firstName }} {{ customer.lastName }}\r\n      </h3>\r\n  </header>\r\n  <br />\r\n  <form [formGroup]=\"customerForm\" (ngSubmit)=\"submit(customerForm)\" class=\"editForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label>First Name</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" />\r\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.firstName.untouched || customerForm.controls.firstName.valid\">First Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\r\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.lastName.untouched || customerForm.controls.lastName.valid\">Last Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Gender</label>\r\n      <br />\r\n      <div class=\"radio\">\r\n        <label>\r\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Male\" />\r\n          Male\r\n        </label>\r\n      </div>\r\n      <div class=\"radio\">\r\n        <label>\r\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Female\"  /> \r\n          Female\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.email.untouched || customerForm.controls.email.valid\">Email is required and must be valid</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Address</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\r\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.address.untouched || customerForm.controls.address.valid\">Address is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>City</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"city\" />\r\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.city.untouched || customerForm.controls.city.valid\">City is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>State</label>\r\n      <select class=\"form-control\" formControlName=\"stateId\">\r\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\r\n      </select>\r\n    </div>\r\n    <br />\r\n\r\n    <div *ngIf=\"customer\">\r\n      <div class=\"alert alert-warning\" *ngIf=\"customer._id && deleteMessageEnabled\">\r\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\r\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\r\n      </div>\r\n      <button class=\"btn btn-danger\" *ngIf=\"customer._id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\r\n\r\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\r\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\r\n\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <header>\r\n      <h3>\r\n          <span class=\"glyphicon glyphicon-user\"></span>\r\n          {{ customer.firstName }} {{ customer.lastName }}\r\n      </h3>\r\n  </header>\r\n  <br />\r\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label>First Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.untouched || firstName.valid\">First Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.untouched || lastName.valid\">Last Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Gender</label>\r\n      <br />\r\n      <div class=\"radio\">\r\n        <label>\r\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Male\" required />\r\n          Male\r\n        </label>\r\n      </div>\r\n      <div class=\"radio\">\r\n        <label>\r\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Female\" required /> \r\n          Female\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" />\r\n      <div class=\"alert alert-danger\" [hidden]=\"email.untouched || email.valid\">Email is required and must be valid</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Address</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"address.untouched || address.valid\">Address is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>City</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"city.untouched || city.valid\">City is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>State</label>\r\n      <select class=\"form-control\" \r\n              [(ngModel)]=\"customer.stateId\"\r\n              name=\"state\" \r\n              required>\r\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\r\n      </select>\r\n    </div>\r\n    <br />\r\n\r\n    <div *ngIf=\"customer\">\r\n      <div class=\"alert alert-warning\" *ngIf=\"customer._id && deleteMessageEnabled\">\r\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\r\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\r\n      </div>\r\n      <button class=\"btn btn-danger\" *ngIf=\"customer._id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\r\n\r\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\r\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\r\n\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row grid-container\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"table\">\r\n                <table class=\"table table-striped table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>&nbsp;</th>\r\n                            <th (click)=\"sort('firstName')\">First Name</th>\r\n                            <th (click)=\"sort('lastName')\">Last Name</th>\r\n                            <th (click)=\"sort('address')\">Address</th>\r\n                            <th (click)=\"sort('city')\">City</th>\r\n                            <th (click)=\"sort('state.name')\">State</th>\r\n                            <th (click)=\"sort('orderTotal')\">Order Total</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let customer of customers;trackBy:trackby.customer\">\r\n                            <td><img src=\"/assets/images/{{ customer.gender | lowercase }}.png\"\r\n                                    class=\"card-image\" alt=\"Customer Image\" /></td>\r\n                            <td><a [routerLink]=\"['/customers',customer._id]\">{{ customer.firstName | capitalize }}</a></td>\r\n                            <td>{{ customer.lastName | capitalize }}</td>\r\n                            <td>{{ customer.address }}</td>\r\n                            <td>{{ customer.city | trim }}</td>\r\n                            <td>{{ customer.state.name }}</td>\r\n                            <td>{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"!customers.length\">\r\n                            <td>&nbsp;</td>\r\n                            <td colspan=\"6\">No Records Found</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customers view indent\">\r\n    <div class=\"container\">\r\n        <header>\r\n            <h3>\r\n                <span class=\"glyphicon glyphicon-user\"></span>\r\n                {{ title }}\r\n            </h3>\r\n        </header>\r\n        <br />\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"navbar\">\r\n                    <app-filter-textbox (changed)=\"filterChanged($event)\"></app-filter-textbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <a class=\"btn btn-default\" [routerLink]=\"['/customers', '0']\">Add New Customer</a>\r\n            </div>\r\n        </div>\r\n    \r\n        <app-customers-grid [customers]=\"filteredCustomers\"></app-customers-grid>\r\n\r\n        <app-pagination [totalItems]=\"totalRecords\" \r\n            [pageSize]=\"pageSize\" \r\n            (pageChanged)=\"pageChanged($event)\"></app-pagination>\r\n          \r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/my-modal/my-modal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/my-modal/my-modal.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>You are from {{data.name}}</h1>\n\n<div mat-dialog-content>\n  <div>\n    <img src=\"../../../assets/images/B-FuA1GBLQg.jpg\" alt=\"image at full size\">\n  </div>\n</div>\n\n\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Get Food</button>\n    <button mat-button [mat-dialog-close]=\"data.city\" cdkFocusInitial>Get City</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- <app-posts-modal></app-posts-modal> -->\r\n\r\n<ol>\r\n  <li>\r\n    <mat-form-field>\r\n      <mat-label>Where do you stay?</mat-label>\r\n      <input matInput [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n  </li>\r\n  <li>\r\n    <button mat-raised-button (click)=\"openDialog()\">Pick city or food</button>\r\n  </li>\r\n  <li *ngIf=\"city\">\r\n    You chose: <i>{{city}}</i>\r\n  </li>\r\n  <li *ngIf=\"food_from_modal\">\r\n    I love {{food_from_modal}}\r\n  </li>\r\n</ol>\r\n\r\n<!-- <section id=\"info-section\">\r\n  <article *ngFor=\"let post of posts; even as isEven; trackBy: trackby.post\" [ngStyle]=\"styleImages(isEven)\">\r\n    <figure\r\n      [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + post.image + '.jpg)' }\"\r\n    ></figure>\r\n\r\n    <div>\r\n      <h2>{{ post.description | trim }}</h2>\r\n      <p>\r\n        {{ post.date }}\r\n      </p>\r\n    </div>\r\n  </article>\r\n\r\n</section> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav [hidden]=\"!isVisible\">\r\n  <ul class=\"pagination\">\r\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\r\n      <a aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n      </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\r\n      <a>{{ page }}</a>\r\n    </li>\r\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\r\n      <a aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"bg\"></div>\r\n\r\n<section id=\"landing\">\r\n    <h1>Travel Forest</h1>\r\n    <p>Travel hitchhiking unique experiences kayak group discount Budapest tour operator earth locals guest Barcelona diary. AirBnB package airmiles money bunkbeds people worldwide tour operator lodge euro recommendations.</p>\r\n    <button type=\"button\" name=\"button\" (click)=\"enterSite()\">Enter</button>\r\n</section>\r\n\r\n<div id=\"dimmed-bg\"></div>\r\n\r\n<section id=\"full-site\">\r\n\r\n    <aside id=\"register-side-bar\">\r\n        <div id=\"empty-section\"></div>\r\n        <section id=\"visible-section\">\r\n            <span id=\"call-num\"><i class=\"fas fa-phone\"></i>1-800-368-8289</span>\r\n            <h4 id=\"reg\">Register</h4>\r\n        </section>\r\n        <section id=\"form-section\">\r\n            <h2>Register your account!</h2>\r\n            <form action=\"index.html\" method=\"post\" autocomplete=\"off\">\r\n                <input type=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n                <input type=\"password\" name=\"pass\" placeholder=\"Password\" required>\r\n                <input type=\"password\" name=\"con_pass\" placeholder=\"Confirm Password\" required>\r\n                <input type=\"submit\" name=\"submit\" value=\"Register\">\r\n            </form>\r\n            <p>Already have an account? <a href=\"#\">Login</a>.</p>\r\n        </section>\r\n    </aside>\r\n\r\n    <section id=\"above-fold\">\r\n        <nav>\r\n            <ul>\r\n                <li><a href=\"#\">Travel Forest</a></li>\r\n                <li><a href=\"#\">Get Started</a></li>\r\n                <li><a href=\"#\">Deal of the Week</a></li>\r\n                <li><a href=\"#\">Testimonials</a></li>\r\n                <li><a href=\"#\">Become a Sponsor</a></li>\r\n            </ul>\r\n        </nav>\r\n\r\n        <article>\r\n            <h1>Book your next vacation with us!</h1>\r\n            <p>Value proposition network effects freemium return on investment analytics. Client beta strategy hypotheses freemium monetization hackathon. Ramen first mover advantage handshake launch party business-to-business seed round strategy.</p>\r\n            <button type=\"button\" name=\"button\">Get Started</button>\r\n        </article>\r\n    </section>\r\n\r\n    <section id=\"info-section\">\r\n        <article>\r\n            <figure></figure>\r\n            <div>\r\n                <h2>Travel Worldwide</h2>\r\n                <p>Berlin flexibility travel currency package housing frequent flyer adventure exchange rate gateway itinerary USA sailing airplane. Vienna budget guest New York City dollar Berlin Pacific.</p>\r\n            </div>\r\n        </article>\r\n        <article>\r\n            <figure></figure>\r\n            <div>\r\n                <h2>Huge Savings</h2>\r\n                <p>Stress free animals tour operator maps hiking money Russia bunkbeds passport. Cuba couchsurfing maps camper ticket itinerary.</p>\r\n            </div>\r\n        </article>\r\n        <article>\r\n            <figure></figure>\r\n            <div>\r\n                <h2>Discover New Cultures</h2>\r\n                <p>Explore national train Holland last minute Germany rural stay people worldwide. Airplane ticket South-America Rome translation hospitality. Cuba South-America discount apartment Budapest.</p>\r\n            </div>\r\n        </article>\r\n    </section>\r\n\r\n    <section id=\"current-users\">\r\n        <header>\r\n            <h4>Total Vacations Booked This Month</h4>\r\n            <h3 id=\"total-users\">106,011</h3>\r\n        </header>\r\n    </section>\r\n\r\n    <section id=\"locations\">\r\n        <h2>Already a member?</h2>\r\n        <a href=\"#\" id=\"header-link\">Book a vacation now!</a>\r\n        <input type=\"text\" name=\"search\" placeholder=\"Search Available Locations\" autocomplete=\"off\">\r\n        <h4>Find Location By Country</h4>\r\n        <ul>\r\n            <li><a href=\"#\">Spain</a></li>\r\n            <li><a href=\"#\">Morocco</a></li>\r\n            <li><a href=\"#\">Italy</a></li>\r\n            <li><a href=\"#\">India</a></li>\r\n            <li><a href=\"#\">United States</a></li>\r\n            <li><a href=\"#\">Thailand</a></li>\r\n            <li><a href=\"#\">Scotland</a></li>\r\n            <li><a href=\"#\">Greece</a></li>\r\n            <li><a href=\"#\">Sweden</a></li>\r\n            <li><a href=\"#\">Brazil</a></li>\r\n            <li><a href=\"#\">Denmark</a></li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section id=\"testimonials\">\r\n        <div id=\"testimonials-bg\"></div>\r\n\r\n        <article>\r\n            <header>\r\n                <h2>Our Satisfied Users</h2>\r\n                <h5>Rated <span>9.6/10</span><br> By our verified users</h5>\r\n            </header>\r\n\r\n            <section id=\"reviews\">\r\n                <div class=\"review\">\r\n                    <div class=\"reviewer-details\">\r\n                        <figure></figure>\r\n                        <div class=\"details\">\r\n                            <div class=\"name\">Greg Anderson</div>\r\n                            <div class=\"from\">Avid Forest Travel User</div>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"review-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <div class=\"reviewer-details\">\r\n                        <figure></figure>\r\n                        <div class=\"details\">\r\n                            <div class=\"name\">Suzie Smith</div>\r\n                            <div class=\"from\">CEO at GetBizzie</div>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"review-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                </div>\r\n                <div class=\"review\">\r\n                    <div class=\"reviewer-details\">\r\n                        <figure></figure>\r\n                        <div class=\"details\">\r\n                            <div class=\"name\">Marie Arden</div>\r\n                            <div class=\"from\">I'm a globetrotter!</div>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"review-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                </div>\r\n\r\n            </section>\r\n            <a href=\"#\">Leave a review</a>\r\n            <a href=\"#\">See all customer reviews</a>\r\n        </article>\r\n    </section>\r\n\r\n    <section id=\"weekly-deal\">\r\n        <h2>Deal of the week</h2>\r\n        <article id=\"deal\">\r\n            <div id=\"deal-details\">\r\n                <h3>Athens, Greece</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                <a href=\"#\">Claim your vacation now!</a>\r\n            </div>\r\n            <figure></figure>\r\n        </article>\r\n    </section>\r\n\r\n    <footer id=\"footer\">\r\n        <h5>Travel Forest</h5>\r\n        <h6>Find us on Social Media</h6>\r\n        <div id=\"social-icons\">\r\n            <img src=\"images/social/facebook.png\" alt=\"A facebook icon.\">\r\n            <img src=\"images/social/instagram.png\" alt=\"A instagram icon.\">\r\n            <img src=\"images/social/pinterest.png\" alt=\"A pinterest icon.\">\r\n            <img src=\"images/social/twitter.png\" alt=\"A twitter icon.\">\r\n            <img src=\"images/social/youtube.png\" alt=\"A youtube icon.\">\r\n        </div>\r\n        <hr>\r\n        <h6>Copyright 2020 - All Rights Reserved</h6>\r\n    </footer>\r\n\r\n\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<script\r\nsrc=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"script.js\" type=\"text/javascript\"></script>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
/* harmony import */ var _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customer-edit.component */ "./src/app/customers/customer-edit.component.ts");
/* harmony import */ var _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer-edit-reactive.component */ "./src/app/customers/customer-edit-reactive.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");









const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customers/:id', component: _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"] },
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"] },
    { path: '**', redirectTo: '/welcome' } //catch any unfound routes and redirect to home page
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule.components = [_customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"], _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditReactiveComponent"], _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__["CustomersGridComponent"],
    _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"]
];
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modals_my_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/my-modal/my-modal.component */ "./src/app/modals/my-modal/my-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"].components, _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _modals_my_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_9__["MyModalComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        entryComponents: [_modals_my_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_9__["MyModalComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _data_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _trackby_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackby.service */ "./src/app/core/trackby.service.ts");
/* harmony import */ var _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ensureModuleLoadedOnceGuard */ "./src/app/shared/ensureModuleLoadedOnceGuard.ts");


//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//core.module.ts.httpmodule file instead (simply rename it to the name 
//of this file to use it instead)






let CoreModule = class CoreModule extends _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__["EnsureModuleLoadedOnceGuard"] {
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            //Can use with Angular 4.3+ to 
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _data_filter_service__WEBPACK_IMPORTED_MODULE_4__["DataFilterService"], _sorter__WEBPACK_IMPORTED_MODULE_5__["Sorter"], _trackby_service__WEBPACK_IMPORTED_MODULE_6__["TrackByService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], CoreModule);

//Example of a custom XSRF class
//export class MyCookieXSRFStrategy implements XSRFStrategy {
//    constructor(
//        private _cookieName: string = 'XSRF-TOKEN', private _headerName: string = 'X-XSRF-TOKEN') { }
//    private getCookie(name: string) {
//        let ca: Array<string> = document.cookie.split(';');
//        let caLen: number = ca.length;
//        let cookieName = name + "=";
//        let c: string;
//        for (let i: number = 0; i < caLen; i += 1) {
//            c = ca[i].replace(/^\s\+/g, "");
//            if (c.indexOf(cookieName) == 0) {
//                return c.substring(cookieName.length, c.length);
//            }
//        }
//        return "";
//    }
//    configureRequest(req: Request) {
//        let xsrfToken = this.getCookie(this._cookieName);
//        alert(xsrfToken);
//        if (xsrfToken) {
//            req.headers.set(this._headerName, xsrfToken);
//        }
//    }
//}


/***/ }),

/***/ "./src/app/core/data-filter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/data-filter.service.ts ***!
  \*********************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let DataFilterService = class DataFilterService {
    filter(datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            const filtered = datasource.filter(item => {
                let match = false;
                for (const prop of filterProperties) {
                    let propVal = '';
                    //Account for nested properties like 'state.name'
                    if (prop.indexOf('.') > -1) {
                        propVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, item);
                        if (propVal) {
                            propVal = propVal.toString().toUpperCase();
                        }
                    }
                    else {
                        if (item[prop]) {
                            propVal = item[prop].toString().toUpperCase();
                        }
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    }
};
DataFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataFilterService);



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the
//data.service.ts file instead (simplify rename it to the name
//of this file to use it instead)



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/customers';
        this.baseStatesUrl = '/api/states';
        this.basePostsUrl = '/api/posts';
    }
    getCustomers() {
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((customers) => {
            this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomersPage(page, pageSize) {
        return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let customers = res.body;
            this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomer(id) {
        return this.http.get(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    insertCustomer(customer) {
        return this.http.post(this.baseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('insertCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateCustomer(customer) {
        return this.http.put(this.baseUrl + '/' + customer._id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('updateCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCustomer(id) {
        return this.http.delete(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getStates() {
        return this.http.get(this.baseStatesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    calculateCustomersOrderTotal(customers) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }
    getPosts() {
        return this.http.get(this.basePostsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getPostsPage(page, pageSize) {
        return this.http.get(`${this.basePostsUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let posts = res.body;
            return {
                results: posts,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getPost(id) {
        return this.http.get(this.basePostsUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    insertPost(post) {
        return this.http.post(this.basePostsUrl, post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('insertPost status: ' + data.status);
            return data.post;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updatePost(post) {
        return this.http.put(this.basePostsUrl + '/' + post._id, post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('updatePost status: ' + data.status);
            return data.post;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deletePost(id) {
        return this.http.delete(this.basePostsUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Node.js server error');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/core/sorter.ts":
/*!********************************!*\
  !*** ./src/app/core/sorter.ts ***!
  \********************************/
/*! exports provided: Sorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function() { return Sorter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let Sorter = class Sorter {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(collection, prop) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort((a, b) => {
            let aVal;
            let bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, a);
                bVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
};
Sorter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Sorter);



/***/ }),

/***/ "./src/app/core/trackby.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/trackby.service.ts ***!
  \*****************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackByService = class TrackByService {
    customer(index, customer) {
        return customer._id;
    }
};
TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrackByService);



/***/ }),

/***/ "./src/app/customers/customer-edit-reactive.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customers/customer-edit-reactive.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerEditReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditReactiveComponent", function() { return CustomerEditReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");






let CustomerEditReactiveComponent = class CustomerEditReactiveComponent {
    constructor(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
        this.buildForm();
    }
    getCustomer(id) {
        this.dataService.getCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
            this.buildForm();
        }, (err) => console.log(err));
    }
    buildForm() {
        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [this.customer.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: [this.customer.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.customer.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            address: [this.customer.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [this.customer.city, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stateId: [this.customer.stateId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    getStates() {
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    submit({ value, valid }) {
        value._id = this.customer._id;
        value.zip = this.customer.zip || 0;
        // var customer: ICustomer = {
        //   _id: this.customer._id,
        // };
        if (value._id) {
            this.dataService.updateCustomer(value)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to save customer';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertCustomer(value)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/customers']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => console.log(err));
    }
};
CustomerEditReactiveComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CustomerEditReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit-reactive',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit-reactive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html")).default
    })
], CustomerEditReactiveComponent);



/***/ }),

/***/ "./src/app/customers/customer-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/customer-edit.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");




let CustomerEditComponent = class CustomerEditComponent {
    constructor(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
    }
    getCustomer(id) {
        this.dataService.getCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
        }, (err) => console.log(err));
    }
    getStates() {
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    submit() {
        if (this.customer._id) {
            this.dataService.updateCustomer(this.customer)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to save customer';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertCustomer(this.customer)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => console.log(err));
    }
};
CustomerEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html")).default
    })
], CustomerEditComponent);



/***/ }),

/***/ "./src/app/customers/customers-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");




let CustomersGridComponent = class CustomersGridComponent {
    constructor(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.customers = [];
    }
    ngOnInit() {
    }
    sort(prop) {
        this.sorter.sort(this.customers, prop);
    }
};
CustomersGridComponent.ctorParameters = () => [
    { type: _core_sorter__WEBPACK_IMPORTED_MODULE_2__["Sorter"] },
    { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html")).default,
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], CustomersGridComponent);



/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");





let CustomersComponent = class CustomersComponent {
    constructor(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.customers = [];
        this.filteredCustomers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    ngOnInit() {
        this.title = 'Customers';
        this.getCustomersPage(1);
    }
    filterChanged(filterText) {
        if (filterText && this.customers) {
            let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
            this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.customers = this.filteredCustomers = response.results;
            this.totalRecords = response.totalRecords;
        }, (err) => console.log(err), () => console.log('getCustomersPage() retrieved customers'));
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/modals/my-modal/my-modal.component.css":
/*!********************************************************!*\
  !*** ./src/app/modals/my-modal/my-modal.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9teS1tb2RhbC9teS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modals/my-modal/my-modal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modals/my-modal/my-modal.component.ts ***!
  \*******************************************************/
/*! exports provided: MyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModalComponent", function() { return MyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");

// my-modal.component.ts


let MyModalComponent = class MyModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close({});
    }
};
MyModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MyModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/my-modal/my-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-modal.component.css */ "./src/app/modals/my-modal/my-modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MyModalComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body, button, input {\r\n  font-family: 'Questrial', sans-serif; }\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0; }\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  margin: 0; }\r\n\r\nh1, h2, h3, h4, h5, h6, p, figure {\r\n  font-weight: normal;\r\n  margin: 0; }\r\n\r\nbutton, input {\r\n  outline: none;\r\n  border: none;\r\n  color: inherit; }\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit; }\r\n\r\np, a, button, input {\r\n  font-size: 1.125rem; }\r\n\r\n@-webkit-keyframes intro-content {\r\n  0% {\r\n    opacity: 0; }\r\n  100% {\r\n    opacity: 1; } }\r\n\r\n@keyframes intro-content {\r\n  0% {\r\n    opacity: 0; }\r\n  100% {\r\n    opacity: 1; } }\r\n\r\n@-webkit-keyframes intro-header {\r\n  0% {\r\n    -webkit-transform: translateY(40px) scale(0.6);\r\n            transform: translateY(40px) scale(0.6); }\r\n  100% {\r\n    -webkit-transform: translate(0) scale(1);\r\n            transform: translate(0) scale(1); } }\r\n\r\n@keyframes intro-header {\r\n  0% {\r\n    -webkit-transform: translateY(40px) scale(0.6);\r\n            transform: translateY(40px) scale(0.6); }\r\n  100% {\r\n    -webkit-transform: translate(0) scale(1);\r\n            transform: translate(0) scale(1); } }\r\n\r\n#bg {\r\n  background-image: url('bg.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n  margin: 0;\r\n  position: fixed; }\r\n\r\n#landing {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  height: 100vh;\r\n  color: white;\r\n  -webkit-transition: all .4s;\r\n  transition: all .4s;\r\n  position: relative;\r\n  z-index: 10;\r\n  -webkit-animation-name: intro-content;\r\n          animation-name: intro-content;\r\n  -webkit-animation-duration: 1.4s;\r\n          animation-duration: 1.4s;\r\n  -webkit-animation-delay: .1s;\r\n          animation-delay: .1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both; }\r\n\r\n#landing h1 {\r\n    font-size: 3rem;\r\n    margin-bottom: 1rem;\r\n    -webkit-animation-name: intro-header;\r\n            animation-name: intro-header;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-delay: .1s;\r\n            animation-delay: .1s; }\r\n\r\n#landing p {\r\n    width: 36vw;\r\n    text-align: center;\r\n    line-height: 190%; }\r\n\r\n#landing button {\r\n    color: #425831;\r\n    background-color: white;\r\n    padding: .6em 4.2em;\r\n    border-radius: 4px;\r\n    margin-top: 0.875rem; }\r\n\r\n#landing button:hover {\r\n      opacity: .8; }\r\n\r\n#dimmed-bg {\r\n  height: 100vh;\r\n  width: 100%;\r\n  position: fixed;\r\n  background-color: rgba(20, 20, 20, 0.86);\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-transition: all .6s;\r\n  transition: all .6s;\r\n  -webkit-transform: translateX(-120vw);\r\n          transform: translateX(-120vw);\r\n  visibility: hidden; }\r\n\r\n#full-site {\r\n  visibility: hidden;\r\n  overflow: hidden;\r\n  max-height: 100vh;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0; }\r\n\r\n#above-fold {\r\n  position: relative;\r\n  z-index: 12;\r\n  color: white;\r\n  padding-left: 92px;\r\n  padding-top: 62px;\r\n  box-sizing: border-box;\r\n  width: 94%;\r\n  height: 100vh;\r\n  display: inline-block;\r\n  opacity: 0;\r\n  -webkit-transition: all 1s .5s;\r\n  transition: all 1s .5s; }\r\n\r\n#above-fold nav {\r\n    display: inline-block;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.38);\r\n    padding-bottom: 1.125rem;\r\n    padding-right: 4.5rem; }\r\n\r\n#above-fold nav li {\r\n      display: inline-block;\r\n      padding: 0 1.875rem; }\r\n\r\n#above-fold nav li:first-child {\r\n      padding-left: 0; }\r\n\r\n#above-fold nav a {\r\n      -webkit-transition: opacity .1s;\r\n      transition: opacity .1s; }\r\n\r\n#above-fold nav a:hover {\r\n        opacity: .8; }\r\n\r\n#above-fold article {\r\n    margin-top: 12.75rem; }\r\n\r\n#above-fold article h1 {\r\n      font-size: 2.25rem; }\r\n\r\n#above-fold article p {\r\n      margin: 3rem 0;\r\n      width: 40rem;\r\n      line-height: 200%; }\r\n\r\n#above-fold article button {\r\n      background-color: #404040;\r\n      color: #e8fff7;\r\n      padding: .8em 1.4em;\r\n      padding-right: 16em;\r\n      -webkit-transition: opacity .2s;\r\n      transition: opacity .2s; }\r\n\r\n#above-fold article button:hover {\r\n        opacity: .6; }\r\n\r\n#register-side-bar {\r\n  width: 170%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  position: absolute;\r\n  -webkit-transition: all 0.6s 1s;\r\n  transition: all 0.6s 1s;\r\n  -webkit-transform: translateX(200px);\r\n          transform: translateX(200px); }\r\n\r\n#register-side-bar #empty-section {\r\n    width: 94%;\r\n    height: 100vh; }\r\n\r\n#register-side-bar #visible-section {\r\n    width: 6%;\r\n    height: 100vh;\r\n    background-color: rgba(227, 227, 227, 0.08);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    color: #b3b3b3;\r\n    font-size: 1.125rem;\r\n    -webkit-transition: opacity 1.4s;\r\n    transition: opacity 1.4s; }\r\n\r\n#register-side-bar #visible-section span {\r\n      -webkit-writing-mode: vertical-rl;\r\n          -ms-writing-mode: tb-rl;\r\n              writing-mode: vertical-rl;\r\n      -webkit-text-orientation: upright;\r\n              text-orientation: upright;\r\n      margin: 8vh 0;\r\n      -webkit-transition: opacity .6s;\r\n      transition: opacity .6s; }\r\n\r\n#register-side-bar #visible-section span i {\r\n        font-size: 1.5rem;\r\n        margin-bottom: 0.875rem; }\r\n\r\n#register-side-bar #visible-section h4 {\r\n      -webkit-writing-mode: vertical-rl;\r\n          -ms-writing-mode: tb-rl;\r\n              writing-mode: vertical-rl;\r\n      -webkit-text-orientation: mixed;\r\n              text-orientation: mixed;\r\n      text-transform: uppercase;\r\n      letter-spacing: 2px;\r\n      -webkit-transition: opacity .6s;\r\n      transition: opacity .6s; }\r\n\r\n#register-side-bar #form-section {\r\n    background-color: rgba(227, 227, 227, 0.08);\r\n    height: 100vh;\r\n    box-sizing: border-box;\r\n    width: 70%;\r\n    color: white;\r\n    padding-top: 30vh; }\r\n\r\n#register-side-bar #form-section h2 {\r\n      font-size: 1.875rem;\r\n      margin-bottom: 3.25rem; }\r\n\r\n#register-side-bar #form-section input:not([type=\"submit\"]) {\r\n      display: block;\r\n      background-color: transparent;\r\n      border-bottom: 1px solid rgba(255, 255, 255, 0.8);\r\n      margin: 3.125rem 0;\r\n      padding: 6px 18px; }\r\n\r\n#register-side-bar #form-section input[type=\"submit\"] {\r\n      background-color: white;\r\n      color: #292929;\r\n      padding: .4em 5.4em;\r\n      border-radius: 4px;\r\n      margin-left: 8px;\r\n      margin-bottom: 4.125rem;\r\n      -webkit-transition: all .3s;\r\n      transition: all .3s; }\r\n\r\n#register-side-bar #form-section input[type=\"submit\"]:hover {\r\n        opacity: .8;\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1); }\r\n\r\n#register-side-bar #form-section ::-webkit-input-placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section ::-moz-placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section ::-ms-input-placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section ::placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section a {\r\n      color: #b29dff; }\r\n\r\n#register-side-bar #form-section a:hover {\r\n        opacity: .7; }\r\n\r\n#info-section {\r\n  color: #cfcfcf;\r\n  margin: 5.125rem; }\r\n\r\n#info-section article {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin: 2rem; }\r\n\r\n#info-section article figure {\r\n      width: 48%;\r\n      height: 13.875rem;\r\n      background-size: cover;\r\n      background-position: 50% 20%;\r\n      flex-shrink: 0;\r\n      -webkit-transition: all .3s;\r\n      transition: all .3s; }\r\n\r\n#info-section article figure:hover {\r\n        -webkit-transform: scale(1.04);\r\n                transform: scale(1.04); }\r\n\r\n#info-section article div {\r\n      margin-left: 5.125rem; }\r\n\r\n#info-section article div h2 {\r\n        font-size: 1.875rem;\r\n        margin-bottom: 0.5rem; }\r\n\r\n#info-section article div p {\r\n        font-size: 1rem;\r\n        width: 70%;\r\n        line-height: 220%; }\r\n\r\n/* #info-section article figure {\r\n    background-image: url(\"../../assets/images/images/info-1.jpg\"); }\r\n  #info-section article:nth-of-type(2) figure {\r\n    background-image: url(\"../../assets/images/images/info-2.jpg\"); }\r\n  #info-section article:nth-of-type(3) figure {\r\n    background-image: url(\"../../assets/images/images/info-3.jpg\"); }\r\n  #info-section article:nth-of-type(2) {\r\n    position: relative;\r\n    left: 60px;\r\n  } */\r\n\r\n#current-users {\r\n  width: 60%;\r\n  color: white;\r\n  margin: 12rem auto;\r\n  padding: 1.375rem 0;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.38);\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.38); }\r\n\r\n#current-users h3, #current-users h4 {\r\n    text-align: center; }\r\n\r\n#current-users h4 {\r\n    font-size: 2.25rem; }\r\n\r\n#current-users h3 {\r\n    font-size: 4.5rem;\r\n    margin-top: 0.75rem; }\r\n\r\n#locations {\r\n  margin: 7.5rem 0;\r\n  text-align: center;\r\n  color: white; }\r\n\r\n#locations h2 {\r\n    font-size: 2.25rem;\r\n    text-transform: uppercase; }\r\n\r\n#locations #header-link {\r\n    font-size: 1.75rem;\r\n    display: block;\r\n    color: #8a8a8a;\r\n    text-decoration: underline;\r\n    margin: 0.5rem 0 1.375rem; }\r\n\r\n#locations #header-link:hover {\r\n      opacity: .7; }\r\n\r\n#locations input {\r\n    background-color: Transparent;\r\n    width: 18.75rem;\r\n    padding: 0 1.125rem 0.625rem;\r\n    display: block;\r\n    text-align: center;\r\n    margin: 4.5rem auto;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.38); }\r\n\r\n#locations ::-webkit-input-placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations ::-moz-placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations ::-ms-input-placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations ::placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations h4 {\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px; }\r\n\r\n#locations ul {\r\n    width: 60%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin: 1.125rem auto; }\r\n\r\n#locations li {\r\n    color: rgba(255, 255, 255, 0.7);\r\n    font-size: 1.125rem;\r\n    list-style: none;\r\n    padding: 1.125rem 3.625rem; }\r\n\r\n#locations li a {\r\n      cursor: pointer; }\r\n\r\n#testimonials {\r\n  background-color: rgba(227, 227, 227, 0.08);\r\n  margin: 12.5rem 0;\r\n  position: relative; }\r\n\r\n#testimonials::before, #testimonials::after {\r\n    content: \"\";\r\n    height: 12vh;\r\n    background-color: rgba(227, 227, 227, 0.08);\r\n    position: absolute;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    border-right: 70vw solid white; }\r\n\r\n#testimonials::before {\r\n    -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);\r\n    bottom: 100%; }\r\n\r\n#testimonials::after {\r\n    -webkit-clip-path: polygon(0 100%, 100% 0, 100% 0, 0 0);\r\n            clip-path: polygon(0 100%, 100% 0, 100% 0, 0 0);\r\n    top: 100%; }\r\n\r\n#testimonials #testimonials-bg {\r\n    position: absolute;\r\n    width: 70vw;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: white; }\r\n\r\n#testimonials article {\r\n    position: relative;\r\n    z-index: 20;\r\n    padding: 6.75rem 0 4.75rem;\r\n    text-align: center; }\r\n\r\n#testimonials article h2 {\r\n      text-transform: uppercase;\r\n      font-size: 2.25rem;\r\n      margin-bottom: 1.5rem; }\r\n\r\n#testimonials article h5 {\r\n      font-size: 1.5rem; }\r\n\r\n#testimonials article h5 span {\r\n        font-size: 2.25rem;\r\n        color: #0d77bb; }\r\n\r\n#testimonials article #reviews {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      color: white;\r\n      margin: 2rem 1.5rem; }\r\n\r\n#testimonials article #reviews .review {\r\n        background-color: #0d77bb;\r\n        margin: 0 1.125rem;\r\n        padding: 1.5rem; }\r\n\r\n#testimonials article #reviews .review .reviewer-details {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          -webkit-box-align: center;\r\n                  align-items: center; }\r\n\r\n#testimonials article #reviews .review .reviewer-details figure {\r\n            border-radius: 50%;\r\n            background-size: cover;\r\n            height: 6.25rem;\r\n            width: 6.25rem; }\r\n\r\n#testimonials article #reviews .review .reviewer-details .details {\r\n            margin-left: 1.125rem;\r\n            letter-spacing: 1px; }\r\n\r\n#testimonials article #reviews .review .reviewer-details .details .name {\r\n              font-size: 1.125rem;\r\n              text-transform: uppercase;\r\n              margin-bottom: 0.375rem; }\r\n\r\n#testimonials article #reviews .review .reviewer-details .details .from {\r\n              font-size: 0.875rem;\r\n              text-align: left; }\r\n\r\n#testimonials article #reviews .review .review-text {\r\n          font-size: 1rem;\r\n          margin-top: 0.875rem;\r\n          text-align: left;\r\n          line-height: 240%; }\r\n\r\n#testimonials article #reviews .review:nth-of-type(1) figure {\r\n        background-image: url('face-1.jpg'); }\r\n\r\n#testimonials article #reviews .review:nth-of-type(2) figure {\r\n        background-image: url('face-2.jpg'); }\r\n\r\n#testimonials article #reviews .review:nth-of-type(3) figure {\r\n        background-image: url('face-3.jpg'); }\r\n\r\n#testimonials article #reviews .review:nth-of-type(2) {\r\n        background-color: #184a6a; }\r\n\r\n#testimonials article a {\r\n      display: block;\r\n      text-align: center;\r\n      color: #0d77bb;\r\n      margin-top: 0.5rem; }\r\n\r\n#testimonials article a:hover {\r\n        opacity: .7; }\r\n\r\n#weekly-deal {\r\n  margin: 7.5rem 0;\r\n  color: white; }\r\n\r\n#weekly-deal h2 {\r\n    background-color: rgba(13, 13, 13, 0.52);\r\n    font-size: 2.25rem;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 2.625rem;\r\n    padding-left: 21.25rem;\r\n    padding-right: 10rem;\r\n    margin-bottom: 0.625rem; }\r\n\r\n#weekly-deal #deal {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    justify-content: space-around; }\r\n\r\n#weekly-deal #deal #deal-details {\r\n      width: 30%;\r\n      padding-left: 11.25rem; }\r\n\r\n#weekly-deal #deal #deal-details h3 {\r\n        font-size: 2.25rem; }\r\n\r\n#weekly-deal #deal #deal-details p {\r\n        font-size: 1rem;\r\n        line-height: 180%;\r\n        margin: 1.25rem 0 2rem; }\r\n\r\n#weekly-deal #deal #deal-details a {\r\n        text-decoration: underline; }\r\n\r\n#weekly-deal #deal #deal-details a:hover {\r\n          opacity: .6; }\r\n\r\n#weekly-deal #deal figure {\r\n      background-image: url('greece.jpg');\r\n      background-size: cover;\r\n      height: 576px;\r\n      width: 44%;\r\n      box-shadow: -4px 4px 14px 3px rgba(80, 80, 80, 0.44);\r\n      -webkit-transition: all .5s;\r\n      transition: all .5s; }\r\n\r\n#weekly-deal #deal figure:hover {\r\n        -webkit-transform: scale(1.06);\r\n                transform: scale(1.06); }\r\n\r\n#footer {\r\n  color: white;\r\n  padding: 2.5rem 0;\r\n  background-color: rgba(13, 13, 13, 0.48);\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center; }\r\n\r\n#footer h5 {\r\n    font-size: 1.875rem;\r\n    margin: 1.875rem 0; }\r\n\r\n#footer hr {\r\n    width: 4%;\r\n    border: 1px solid rgba(255, 255, 255, 0.38);\r\n    border-top: none; }\r\n\r\n#footer h6 {\r\n    font-size: 1rem;\r\n    margin: 0.5rem 0; }\r\n\r\n#footer #social-icons {\r\n    padding: 0.75rem 0; }\r\n\r\n#footer #social-icons img {\r\n      width: 2.25rem;\r\n      padding: 0 0.25rem;\r\n      -webkit-transition: all .2s;\r\n      transition: all .2s; }\r\n\r\n#footer #social-icons img:hover {\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2); }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQyxFQUFFOztBQUV4QztFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUU7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFFOztBQUViO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVMsRUFBRTs7QUFFYjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYyxFQUFFOztBQUVsQjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUU7O0FBRWxCO0VBQ0UsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0U7SUFDRSxVQUFVLEVBQUU7RUFDZDtJQUNFLFVBQVUsRUFBRSxFQUFFOztBQUpsQjtFQUNFO0lBQ0UsVUFBVSxFQUFFO0VBQ2Q7SUFDRSxVQUFVLEVBQUUsRUFBRTs7QUFFbEI7RUFDRTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBRTtFQUMxQztJQUNFLHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBRSxFQUFFOztBQUp4QztFQUNFO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFFO0VBQzFDO0lBQ0Usd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFFLEVBQUU7O0FBRXhDO0VBQ0UsK0JBQTBEO0VBQzFELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qixn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QkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHVCQUF1QixFQUFFOztBQUMzQjtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNkJBQTZCLEVBQUU7O0FBQy9CO01BQ0UsVUFBVTtNQUNWLHNCQUFzQixFQUFFOztBQUN4QjtRQUNFLGtCQUFrQixFQUFFOztBQUN0QjtRQUNFLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsc0JBQXNCLEVBQUU7O0FBQzFCO1FBQ0UsMEJBQTBCLEVBQUU7O0FBQzVCO1VBQ0UsV0FBVyxFQUFFOztBQUNuQjtNQUNFLG1DQUE4RDtNQUM5RCxzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLFVBQVU7TUFDVixvREFBb0Q7TUFDcEQsMkJBQW1CO01BQW5CLG1CQUFtQixFQUFFOztBQUNyQjtRQUNFLDhCQUFzQjtnQkFBdEIsc0JBQXNCLEVBQUU7O0FBRWhDO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUU7O0FBQ3pCO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFFOztBQUN0QjtJQUNFLFNBQVM7SUFDVCwyQ0FBMkM7SUFDM0MsZ0JBQWdCLEVBQUU7O0FBQ3BCO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFOztBQUNwQjtJQUNFLGtCQUFrQixFQUFFOztBQUNwQjtNQUNFLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsMkJBQW1CO01BQW5CLG1CQUFtQixFQUFFOztBQUNyQjtRQUNFLDZCQUFxQjtnQkFBckIscUJBQXFCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgYnV0dG9uLCBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmOyB9XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7IH1cclxuXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGZpZ3VyZSB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW46IDA7IH1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0OyB9XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7IH1cclxuXHJcbnAsIGEsIGJ1dHRvbiwgaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07IH1cclxuXHJcbkBrZXlmcmFtZXMgaW50cm8tY29udGVudCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDsgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTsgfSB9XHJcblxyXG5Aa2V5ZnJhbWVzIGludHJvLWhlYWRlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpIHNjYWxlKDAuNik7IH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApIHNjYWxlKDEpOyB9IH1cclxuXHJcbiNiZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkOyB9XHJcblxyXG4jbGFuZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGludHJvLWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjFzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7IH1cclxuICAjbGFuZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGludHJvLWhlYWRlcjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC4xczsgfVxyXG4gICNsYW5kaW5nIHAge1xyXG4gICAgd2lkdGg6IDM2dnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTkwJTsgfVxyXG4gICNsYW5kaW5nIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzQyNTgzMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogLjZlbSA0LjJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDAuODc1cmVtOyB9XHJcbiAgICAjbGFuZGluZyBidXR0b246aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAuODsgfVxyXG5cclxuI2RpbW1lZC1iZyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjg2KTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjZzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwdncpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxyXG5cclxuI2Z1bGwtc2l0ZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwOyB9XHJcblxyXG4jYWJvdmUtZm9sZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDkycHg7XHJcbiAgcGFkZGluZy10b3A6IDYycHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogOTQlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIC41czsgfVxyXG4gICNhYm92ZS1mb2xkIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjEyNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQuNXJlbTsgfVxyXG4gICAgI2Fib3ZlLWZvbGQgbmF2IGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAwIDEuODc1cmVtOyB9XHJcbiAgICAjYWJvdmUtZm9sZCBuYXYgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxuICAgICNhYm92ZS1mb2xkIG5hdiBhIHtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7IH1cclxuICAgICAgI2Fib3ZlLWZvbGQgbmF2IGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IC44OyB9XHJcbiAgI2Fib3ZlLWZvbGQgYXJ0aWNsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMi43NXJlbTsgfVxyXG4gICAgI2Fib3ZlLWZvbGQgYXJ0aWNsZSBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTsgfVxyXG4gICAgI2Fib3ZlLWZvbGQgYXJ0aWNsZSBwIHtcclxuICAgICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICAgIHdpZHRoOiA0MHJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwMCU7IH1cclxuICAgICNhYm92ZS1mb2xkIGFydGljbGUgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcclxuICAgICAgY29sb3I6ICNlOGZmZjc7XHJcbiAgICAgIHBhZGRpbmc6IC44ZW0gMS40ZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2ZW07XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzOyB9XHJcbiAgICAgICNhYm92ZS1mb2xkIGFydGljbGUgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAuNjsgfVxyXG5cclxuI3JlZ2lzdGVyLXNpZGUtYmFyIHtcclxuICB3aWR0aDogMTcwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyAxcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpOyB9XHJcbiAgI3JlZ2lzdGVyLXNpZGUtYmFyICNlbXB0eS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOyB9XHJcbiAgI3JlZ2lzdGVyLXNpZGUtYmFyICN2aXNpYmxlLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNHM7IH1cclxuICAgICNyZWdpc3Rlci1zaWRlLWJhciAjdmlzaWJsZS1zZWN0aW9uIHNwYW4ge1xyXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDh2aCAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42czsgfVxyXG4gICAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI3Zpc2libGUtc2VjdGlvbiBzcGFuIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuODc1cmVtOyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI3Zpc2libGUtc2VjdGlvbiBoNCB7XHJcbiAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42czsgfVxyXG4gICNyZWdpc3Rlci1zaWRlLWJhciAjZm9ybS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wOCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzB2aDsgfVxyXG4gICAgI3JlZ2lzdGVyLXNpZGUtYmFyICNmb3JtLXNlY3Rpb24gaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzLjI1cmVtOyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI2Zvcm0tc2VjdGlvbiBpbnB1dDpub3QoW3R5cGU9XCJzdWJtaXRcIl0pIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICBtYXJnaW46IDMuMTI1cmVtIDA7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxOHB4OyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI2Zvcm0tc2VjdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICBwYWRkaW5nOiAuNGVtIDUuNGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQuMTI1cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XHJcbiAgICAgICNyZWdpc3Rlci1zaWRlLWJhciAjZm9ybS1zZWN0aW9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxyXG4gICAgI3JlZ2lzdGVyLXNpZGUtYmFyICNmb3JtLXNlY3Rpb24gOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0OyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI2Zvcm0tc2VjdGlvbiBhIHtcclxuICAgICAgY29sb3I6ICNiMjlkZmY7IH1cclxuICAgICAgI3JlZ2lzdGVyLXNpZGUtYmFyICNmb3JtLXNlY3Rpb24gYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7IH1cclxuXHJcbiNpbmZvLXNlY3Rpb24ge1xyXG4gIGNvbG9yOiAjY2ZjZmNmO1xyXG4gIG1hcmdpbjogNS4xMjVyZW07IH1cclxuICAjaW5mby1zZWN0aW9uIGFydGljbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07IH1cclxuICAgICNpbmZvLXNlY3Rpb24gYXJ0aWNsZSBmaWd1cmUge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gICAgICBoZWlnaHQ6IDEzLjg3NXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDIwJTtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cclxuICAgICAgI2luZm8tc2VjdGlvbiBhcnRpY2xlIGZpZ3VyZTpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgfVxyXG4gICAgI2luZm8tc2VjdGlvbiBhcnRpY2xlIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1LjEyNXJlbTsgfVxyXG4gICAgICAjaW5mby1zZWN0aW9uIGFydGljbGUgZGl2IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxyXG4gICAgICAjaW5mby1zZWN0aW9uIGFydGljbGUgZGl2IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMjAlOyB9XHJcblxyXG4gIC8qICNpbmZvLXNlY3Rpb24gYXJ0aWNsZSBmaWd1cmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvaW5mby0xLmpwZ1wiKTsgfVxyXG4gICNpbmZvLXNlY3Rpb24gYXJ0aWNsZTpudGgtb2YtdHlwZSgyKSBmaWd1cmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvaW5mby0yLmpwZ1wiKTsgfVxyXG4gICNpbmZvLXNlY3Rpb24gYXJ0aWNsZTpudGgtb2YtdHlwZSgzKSBmaWd1cmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvaW5mby0zLmpwZ1wiKTsgfVxyXG4gICNpbmZvLXNlY3Rpb24gYXJ0aWNsZTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gIH0gKi9cclxuXHJcbiNjdXJyZW50LXVzZXJzIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDEycmVtIGF1dG87XHJcbiAgcGFkZGluZzogMS4zNzVyZW0gMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTsgfVxyXG4gICNjdXJyZW50LXVzZXJzIGgzLCAjY3VycmVudC11c2VycyBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAjY3VycmVudC11c2VycyBoNCB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07IH1cclxuICAjY3VycmVudC11c2VycyBoMyB7XHJcbiAgICBmb250LXNpemU6IDQuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNzVyZW07IH1cclxuXHJcbiNsb2NhdGlvbnMge1xyXG4gIG1hcmdpbjogNy41cmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTsgfVxyXG4gICNsb2NhdGlvbnMgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4gICNsb2NhdGlvbnMgI2hlYWRlci1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbjogMC41cmVtIDAgMS4zNzVyZW07IH1cclxuICAgICNsb2NhdGlvbnMgI2hlYWRlci1saW5rOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogLjc7IH1cclxuICAjbG9jYXRpb25zIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xyXG4gICAgcGFkZGluZzogMCAxLjEyNXJlbSAwLjYyNXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA0LjVyZW0gYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzgpOyB9XHJcbiAgI2xvY2F0aW9ucyA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZDNkM2QzOyB9XHJcbiAgI2xvY2F0aW9ucyBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyB9XHJcbiAgI2xvY2F0aW9ucyB1bCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxLjEyNXJlbSBhdXRvOyB9XHJcbiAgI2xvY2F0aW9ucyBsaSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjEyNXJlbSAzLjYyNXJlbTsgfVxyXG4gICAgI2xvY2F0aW9ucyBsaSBhIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4jdGVzdGltb25pYWxzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMDgpO1xyXG4gIG1hcmdpbjogMTIuNXJlbSAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gICN0ZXN0aW1vbmlhbHM6OmJlZm9yZSwgI3Rlc3RpbW9uaWFsczo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMTJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wOCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmlnaHQ6IDcwdncgc29saWQgd2hpdGU7IH1cclxuICAjdGVzdGltb25pYWxzOjpiZWZvcmUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgICBib3R0b206IDEwMCU7IH1cclxuICAjdGVzdGltb25pYWxzOjphZnRlciB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMDAlLCAxMDAlIDAsIDEwMCUgMCwgMCAwKTtcclxuICAgIHRvcDogMTAwJTsgfVxyXG4gICN0ZXN0aW1vbmlhbHMgI3Rlc3RpbW9uaWFscy1iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cclxuICAjdGVzdGltb25pYWxzIGFydGljbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBwYWRkaW5nOiA2Ljc1cmVtIDAgNC43NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlIGgyIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cclxuICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyB9XHJcbiAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSBoNSBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICAgICAgY29sb3I6ICMwZDc3YmI7IH1cclxuICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAycmVtIDEuNXJlbTsgfVxyXG4gICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNzdiYjtcclxuICAgICAgICBtYXJnaW46IDAgMS4xMjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtOyB9XHJcbiAgICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXcgLnJldmlld2VyLWRldGFpbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgICAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyAucmV2aWV3IC5yZXZpZXdlci1kZXRhaWxzIGZpZ3VyZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2LjI1cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNi4yNXJlbTsgfVxyXG4gICAgICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXcgLnJldmlld2VyLWRldGFpbHMgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS4xMjVyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7IH1cclxuICAgICAgICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXcgLnJldmlld2VyLWRldGFpbHMgLmRldGFpbHMgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgfVxyXG4gICAgICAgICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldyAucmV2aWV3ZXItZGV0YWlscyAuZGV0YWlscyAuZnJvbSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XHJcbiAgICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXcgLnJldmlldy10ZXh0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuODc1cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNDAlOyB9XHJcbiAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyAucmV2aWV3Om50aC1vZi10eXBlKDEpIGZpZ3VyZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvZmFjZS0xLmpwZ1wiKTsgfVxyXG4gICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldzpudGgtb2YtdHlwZSgyKSBmaWd1cmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzL2ZhY2UtMi5qcGdcIik7IH1cclxuICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXc6bnRoLW9mLXR5cGUoMykgZmlndXJlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ltYWdlcy9mYWNlLTMuanBnXCIpOyB9XHJcbiAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyAucmV2aWV3Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg0YTZhOyB9XHJcbiAgICAjdGVzdGltb25pYWxzIGFydGljbGUgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMGQ3N2JiO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cclxuICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IC43OyB9XHJcblxyXG4jd2Vla2x5LWRlYWwge1xyXG4gIG1hcmdpbjogNy41cmVtIDA7XHJcbiAgY29sb3I6IHdoaXRlOyB9XHJcbiAgI3dlZWtseS1kZWFsIGgyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEzLCAxMywgMC41Mik7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAyLjYyNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMjEuMjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtOyB9XHJcbiAgI3dlZWtseS1kZWFsICNkZWFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cclxuICAgICN3ZWVrbHktZGVhbCAjZGVhbCAjZGVhbC1kZXRhaWxzIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMS4yNXJlbTsgfVxyXG4gICAgICAjd2Vla2x5LWRlYWwgI2RlYWwgI2RlYWwtZGV0YWlscyBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtOyB9XHJcbiAgICAgICN3ZWVrbHktZGVhbCAjZGVhbCAjZGVhbC1kZXRhaWxzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTgwJTtcclxuICAgICAgICBtYXJnaW46IDEuMjVyZW0gMCAycmVtOyB9XHJcbiAgICAgICN3ZWVrbHktZGVhbCAjZGVhbCAjZGVhbC1kZXRhaWxzIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcbiAgICAgICAgI3dlZWtseS1kZWFsICNkZWFsICNkZWFsLWRldGFpbHMgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAuNjsgfVxyXG4gICAgI3dlZWtseS1kZWFsICNkZWFsIGZpZ3VyZSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzL2dyZWVjZS5qcGdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGhlaWdodDogNTc2cHg7XHJcbiAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IC00cHggNHB4IDE0cHggM3B4IHJnYmEoODAsIDgwLCA4MCwgMC40NCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7IH1cclxuICAgICAgI3dlZWtseS1kZWFsICNkZWFsIGZpZ3VyZTpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgfVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEzLCAxMywgMC40OCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuICAjZm9vdGVyIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbiAgICBtYXJnaW46IDEuODc1cmVtIDA7IH1cclxuICAjZm9vdGVyIGhyIHtcclxuICAgIHdpZHRoOiA0JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zOCk7XHJcbiAgICBib3JkZXItdG9wOiBub25lOyB9XHJcbiAgI2Zvb3RlciBoNiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwOyB9XHJcbiAgI2Zvb3RlciAjc29jaWFsLWljb25zIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMDsgfVxyXG4gICAgI2Zvb3RlciAjc29jaWFsLWljb25zIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyLjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwIDAuMjVyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7IH1cclxuICAgICAgI2Zvb3RlciAjc29jaWFsLWljb25zIGltZzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _modals_my_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/my-modal/my-modal.component */ "./src/app/modals/my-modal/my-modal.component.ts");









let PostsComponent = class PostsComponent {
    constructor(router, dataService, dataFilter, sorter, trackby, dialog) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.sorter = sorter;
        this.trackby = trackby;
        this.dialog = dialog;
        this.imageUrl = "../../assets/images/";
        this.posts = [];
        this.filteredPosts = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    ngOnInit() {
        this.title = 'Posts';
        this.getPostsPage(1);
    }
    filterChanged(filterText) {
        if (filterText && this.posts) {
            let props = ['image', 'description', 'date'];
            this.filteredPosts = this.dataFilter.filter(this.posts, props, filterText);
        }
        else {
            this.filteredPosts = this.posts;
        }
    }
    pageChanged(page) {
        this.getPostsPage(page);
    }
    getPostsPage(page) {
        this.dataService.getPostsPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.posts = this.filteredPosts = response.results;
            this.totalRecords = response.totalRecords;
        }, (err) => console.log(err), () => console.log('getPostsPage() retrieved customers'));
    }
    sort(prop) {
        this.sorter.sort(this.posts, prop);
    }
    styleImages(isEven) {
        if (!isEven) {
            return {
                'position': 'relative',
                'left': '60px'
            };
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_modals_my_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_8__["MyModalComponent"], {
            width: '250px',
            data: { name: this.name, animal: this.city }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.city = result;
            this.food_from_modal = result.food;
        });
    }
};
PostsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"] },
    { type: _core_sorter__WEBPACK_IMPORTED_MODULE_5__["Sorter"] },
    { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_6__["TrackByService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/shared/ensureModuleLoadedOnceGuard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/ensureModuleLoadedOnceGuard.ts ***!
  \*******************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTextboxComponent = class FilterTextboxComponent {
    constructor() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterTextboxComponent.prototype, "changed", void 0);
FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-textbox',
        template: `
    <form>
         Filter:
         <input type="text" name="filter"
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `
    })
], FilterTextboxComponent);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\r\n  background-color: #027FF4;\r\n  border-color: #027FF4;\r\n}\r\n\r\n.pagination a {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3RkY0O1xyXG4gIGJvcmRlci1jb2xvcjogIzAyN0ZGNDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "pageSize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "totalItems", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
};
CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrimPipe = class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
};
TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
], TrimPipe);



/***/ }),

/***/ "./src/app/shared/property-resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/property-resolver.ts ***!
  \*********************************************/
/*! exports provided: propertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function() { return propertyResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class propertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ValidationService {
    static getValidatorErrorMessage(code) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
}


/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body, button, input {\r\n  font-family: 'Questrial', sans-serif; }\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0; }\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  margin: 0; }\r\n\r\nh1, h2, h3, h4, h5, h6, p, figure {\r\n  font-weight: normal;\r\n  margin: 0; }\r\n\r\nbutton, input {\r\n  outline: none;\r\n  border: none;\r\n  color: inherit; }\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit; }\r\n\r\np, a, button, input {\r\n  font-size: 1.125rem; }\r\n\r\n@-webkit-keyframes intro-content {\r\n  0% {\r\n    opacity: 0; }\r\n  100% {\r\n    opacity: 1; } }\r\n\r\n@keyframes intro-content {\r\n  0% {\r\n    opacity: 0; }\r\n  100% {\r\n    opacity: 1; } }\r\n\r\n@-webkit-keyframes intro-header {\r\n  0% {\r\n    -webkit-transform: translateY(40px) scale(0.6);\r\n            transform: translateY(40px) scale(0.6); }\r\n  100% {\r\n    -webkit-transform: translate(0) scale(1);\r\n            transform: translate(0) scale(1); } }\r\n\r\n@keyframes intro-header {\r\n  0% {\r\n    -webkit-transform: translateY(40px) scale(0.6);\r\n            transform: translateY(40px) scale(0.6); }\r\n  100% {\r\n    -webkit-transform: translate(0) scale(1);\r\n            transform: translate(0) scale(1); } }\r\n\r\n#bg {\r\n  background-image: url('bg.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n  margin: 0;\r\n  position: fixed; }\r\n\r\n#landing {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  height: 100vh;\r\n  color: white;\r\n  -webkit-transition: all .4s;\r\n  transition: all .4s;\r\n  position: relative;\r\n  z-index: 10;\r\n  -webkit-animation-name: intro-content;\r\n          animation-name: intro-content;\r\n  -webkit-animation-duration: 1.4s;\r\n          animation-duration: 1.4s;\r\n  -webkit-animation-delay: .1s;\r\n          animation-delay: .1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both; }\r\n\r\n#landing h1 {\r\n    font-size: 3rem;\r\n    margin-bottom: 1rem;\r\n    -webkit-animation-name: intro-header;\r\n            animation-name: intro-header;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-delay: .1s;\r\n            animation-delay: .1s; }\r\n\r\n#landing p {\r\n    width: 36vw;\r\n    text-align: center;\r\n    line-height: 190%; }\r\n\r\n#landing button {\r\n    color: #425831;\r\n    background-color: white;\r\n    padding: .6em 4.2em;\r\n    border-radius: 4px;\r\n    margin-top: 0.875rem; }\r\n\r\n#landing button:hover {\r\n      opacity: .8; }\r\n\r\n#dimmed-bg {\r\n  height: 100vh;\r\n  width: 100%;\r\n  position: fixed;\r\n  background-color: rgba(20, 20, 20, 0.86);\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-transition: all .6s;\r\n  transition: all .6s;\r\n  -webkit-transform: translateX(-120vw);\r\n          transform: translateX(-120vw);\r\n  visibility: hidden; }\r\n\r\n#full-site {\r\n  visibility: hidden;\r\n  overflow: hidden;\r\n  max-height: 100vh;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0; }\r\n\r\n#above-fold {\r\n  position: relative;\r\n  z-index: 12;\r\n  color: white;\r\n  padding-left: 92px;\r\n  padding-top: 62px;\r\n  box-sizing: border-box;\r\n  width: 94%;\r\n  height: 100vh;\r\n  display: inline-block;\r\n  opacity: 0;\r\n  -webkit-transition: all 1s .5s;\r\n  transition: all 1s .5s; }\r\n\r\n#above-fold nav {\r\n    display: inline-block;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.38);\r\n    padding-bottom: 1.125rem;\r\n    padding-right: 4.5rem; }\r\n\r\n#above-fold nav li {\r\n      display: inline-block;\r\n      padding: 0 1.875rem; }\r\n\r\n#above-fold nav li:first-child {\r\n      padding-left: 0; }\r\n\r\n#above-fold nav a {\r\n      -webkit-transition: opacity .1s;\r\n      transition: opacity .1s; }\r\n\r\n#above-fold nav a:hover {\r\n        opacity: .8; }\r\n\r\n#above-fold article {\r\n    margin-top: 12.75rem; }\r\n\r\n#above-fold article h1 {\r\n      font-size: 2.25rem; }\r\n\r\n#above-fold article p {\r\n      margin: 3rem 0;\r\n      width: 40rem;\r\n      line-height: 200%; }\r\n\r\n#above-fold article button {\r\n      background-color: #404040;\r\n      color: #e8fff7;\r\n      padding: .8em 1.4em;\r\n      padding-right: 16em;\r\n      -webkit-transition: opacity .2s;\r\n      transition: opacity .2s; }\r\n\r\n#above-fold article button:hover {\r\n        opacity: .6; }\r\n\r\n#register-side-bar {\r\n  width: 170%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  position: absolute;\r\n  -webkit-transition: all 0.6s 1s;\r\n  transition: all 0.6s 1s;\r\n  -webkit-transform: translateX(200px);\r\n          transform: translateX(200px); }\r\n\r\n#register-side-bar #empty-section {\r\n    width: 94%;\r\n    height: 100vh; }\r\n\r\n#register-side-bar #visible-section {\r\n    width: 6%;\r\n    height: 100vh;\r\n    background-color: rgba(227, 227, 227, 0.08);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    color: #b3b3b3;\r\n    font-size: 1.125rem;\r\n    -webkit-transition: opacity 1.4s;\r\n    transition: opacity 1.4s; }\r\n\r\n#register-side-bar #visible-section span {\r\n      -webkit-writing-mode: vertical-rl;\r\n          -ms-writing-mode: tb-rl;\r\n              writing-mode: vertical-rl;\r\n      -webkit-text-orientation: upright;\r\n              text-orientation: upright;\r\n      margin: 8vh 0;\r\n      -webkit-transition: opacity .6s;\r\n      transition: opacity .6s; }\r\n\r\n#register-side-bar #visible-section span i {\r\n        font-size: 1.5rem;\r\n        margin-bottom: 0.875rem; }\r\n\r\n#register-side-bar #visible-section h4 {\r\n      -webkit-writing-mode: vertical-rl;\r\n          -ms-writing-mode: tb-rl;\r\n              writing-mode: vertical-rl;\r\n      -webkit-text-orientation: mixed;\r\n              text-orientation: mixed;\r\n      text-transform: uppercase;\r\n      letter-spacing: 2px;\r\n      -webkit-transition: opacity .6s;\r\n      transition: opacity .6s; }\r\n\r\n#register-side-bar #form-section {\r\n    background-color: rgba(227, 227, 227, 0.08);\r\n    height: 100vh;\r\n    box-sizing: border-box;\r\n    width: 70%;\r\n    color: white;\r\n    padding-top: 30vh; }\r\n\r\n#register-side-bar #form-section h2 {\r\n      font-size: 1.875rem;\r\n      margin-bottom: 3.25rem; }\r\n\r\n#register-side-bar #form-section input:not([type=\"submit\"]) {\r\n      display: block;\r\n      background-color: transparent;\r\n      border-bottom: 1px solid rgba(255, 255, 255, 0.8);\r\n      margin: 3.125rem 0;\r\n      padding: 6px 18px; }\r\n\r\n#register-side-bar #form-section input[type=\"submit\"] {\r\n      background-color: white;\r\n      color: #292929;\r\n      padding: .4em 5.4em;\r\n      border-radius: 4px;\r\n      margin-left: 8px;\r\n      margin-bottom: 4.125rem;\r\n      -webkit-transition: all .3s;\r\n      transition: all .3s; }\r\n\r\n#register-side-bar #form-section input[type=\"submit\"]:hover {\r\n        opacity: .8;\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1); }\r\n\r\n#register-side-bar #form-section ::-webkit-input-placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section ::-moz-placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section ::-ms-input-placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section ::placeholder {\r\n      color: inherit; }\r\n\r\n#register-side-bar #form-section a {\r\n      color: #b29dff; }\r\n\r\n#register-side-bar #form-section a:hover {\r\n        opacity: .7; }\r\n\r\n#info-section {\r\n  color: #cfcfcf;\r\n  margin: 5.125rem; }\r\n\r\n#info-section article {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin: 2rem; }\r\n\r\n#info-section article figure {\r\n      width: 48%;\r\n      height: 13.875rem;\r\n      background-size: cover;\r\n      background-position: center;\r\n      flex-shrink: 0;\r\n      -webkit-transition: all .3s;\r\n      transition: all .3s; }\r\n\r\n#info-section article figure:hover {\r\n        -webkit-transform: scale(1.04);\r\n                transform: scale(1.04); }\r\n\r\n#info-section article div {\r\n      margin-left: 5.125rem; }\r\n\r\n#info-section article div h2 {\r\n        font-size: 1.875rem;\r\n        margin-bottom: 0.5rem; }\r\n\r\n#info-section article div p {\r\n        font-size: 1rem;\r\n        width: 70%;\r\n        line-height: 220%; }\r\n\r\n#info-section article:nth-of-type(1) figure {\r\n    background-image: url('info-1.jpg'); }\r\n\r\n#info-section article:nth-of-type(2) figure {\r\n    background-image: url('info-2.jpg'); }\r\n\r\n#info-section article:nth-of-type(3) figure {\r\n    background-image: url('info-3.jpg'); }\r\n\r\n#info-section article:nth-of-type(2) {\r\n    position: relative;\r\n    left: 60px; }\r\n\r\n#current-users {\r\n  width: 60%;\r\n  color: white;\r\n  margin: 12rem auto;\r\n  padding: 1.375rem 0;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.38);\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.38); }\r\n\r\n#current-users h3, #current-users h4 {\r\n    text-align: center; }\r\n\r\n#current-users h4 {\r\n    font-size: 2.25rem; }\r\n\r\n#current-users h3 {\r\n    font-size: 4.5rem;\r\n    margin-top: 0.75rem; }\r\n\r\n#locations {\r\n  margin: 7.5rem 0;\r\n  text-align: center;\r\n  color: white; }\r\n\r\n#locations h2 {\r\n    font-size: 2.25rem;\r\n    text-transform: uppercase; }\r\n\r\n#locations #header-link {\r\n    font-size: 1.75rem;\r\n    display: block;\r\n    color: #8a8a8a;\r\n    text-decoration: underline;\r\n    margin: 0.5rem 0 1.375rem; }\r\n\r\n#locations #header-link:hover {\r\n      opacity: .7; }\r\n\r\n#locations input {\r\n    background-color: Transparent;\r\n    width: 18.75rem;\r\n    padding: 0 1.125rem 0.625rem;\r\n    display: block;\r\n    text-align: center;\r\n    margin: 4.5rem auto;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.38); }\r\n\r\n#locations ::-webkit-input-placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations ::-moz-placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations ::-ms-input-placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations ::placeholder {\r\n    color: #d3d3d3; }\r\n\r\n#locations h4 {\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px; }\r\n\r\n#locations ul {\r\n    width: 60%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin: 1.125rem auto; }\r\n\r\n#locations li {\r\n    color: rgba(255, 255, 255, 0.7);\r\n    font-size: 1.125rem;\r\n    list-style: none;\r\n    padding: 1.125rem 3.625rem; }\r\n\r\n#locations li a {\r\n      cursor: pointer; }\r\n\r\n#testimonials {\r\n  background-color: rgba(227, 227, 227, 0.08);\r\n  margin: 12.5rem 0;\r\n  position: relative; }\r\n\r\n#testimonials::before, #testimonials::after {\r\n    content: \"\";\r\n    height: 12vh;\r\n    background-color: rgba(227, 227, 227, 0.08);\r\n    position: absolute;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    border-right: 70vw solid white; }\r\n\r\n#testimonials::before {\r\n    -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);\r\n    bottom: 100%; }\r\n\r\n#testimonials::after {\r\n    -webkit-clip-path: polygon(0 100%, 100% 0, 100% 0, 0 0);\r\n            clip-path: polygon(0 100%, 100% 0, 100% 0, 0 0);\r\n    top: 100%; }\r\n\r\n#testimonials #testimonials-bg {\r\n    position: absolute;\r\n    width: 70vw;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: white; }\r\n\r\n#testimonials article {\r\n    position: relative;\r\n    z-index: 20;\r\n    padding: 6.75rem 0 4.75rem;\r\n    text-align: center; }\r\n\r\n#testimonials article h2 {\r\n      text-transform: uppercase;\r\n      font-size: 2.25rem;\r\n      margin-bottom: 1.5rem; }\r\n\r\n#testimonials article h5 {\r\n      font-size: 1.5rem; }\r\n\r\n#testimonials article h5 span {\r\n        font-size: 2.25rem;\r\n        color: #0d77bb; }\r\n\r\n#testimonials article #reviews {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      color: white;\r\n      margin: 2rem 1.5rem; }\r\n\r\n#testimonials article #reviews .review {\r\n        background-color: #0d77bb;\r\n        margin: 0 1.125rem;\r\n        padding: 1.5rem; }\r\n\r\n#testimonials article #reviews .review .reviewer-details {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          -webkit-box-align: center;\r\n                  align-items: center; }\r\n\r\n#testimonials article #reviews .review .reviewer-details figure {\r\n            border-radius: 50%;\r\n            background-size: cover;\r\n            height: 6.25rem;\r\n            width: 6.25rem; }\r\n\r\n#testimonials article #reviews .review .reviewer-details .details {\r\n            margin-left: 1.125rem;\r\n            letter-spacing: 1px; }\r\n\r\n#testimonials article #reviews .review .reviewer-details .details .name {\r\n              font-size: 1.125rem;\r\n              text-transform: uppercase;\r\n              margin-bottom: 0.375rem; }\r\n\r\n#testimonials article #reviews .review .reviewer-details .details .from {\r\n              font-size: 0.875rem;\r\n              text-align: left; }\r\n\r\n#testimonials article #reviews .review .review-text {\r\n          font-size: 1rem;\r\n          margin-top: 0.875rem;\r\n          text-align: left;\r\n          line-height: 240%; }\r\n\r\n#testimonials article #reviews .review:nth-of-type(1) figure {\r\n        background-image: url('face-1.jpg'); }\r\n\r\n#testimonials article #reviews .review:nth-of-type(2) figure {\r\n        background-image: url('face-2.jpg'); }\r\n\r\n#testimonials article #reviews .review:nth-of-type(3) figure {\r\n        background-image: url('face-3.jpg'); }\r\n\r\n#testimonials article #reviews .review:nth-of-type(2) {\r\n        background-color: #184a6a; }\r\n\r\n#testimonials article a {\r\n      display: block;\r\n      text-align: center;\r\n      color: #0d77bb;\r\n      margin-top: 0.5rem; }\r\n\r\n#testimonials article a:hover {\r\n        opacity: .7; }\r\n\r\n#weekly-deal {\r\n  margin: 7.5rem 0;\r\n  color: white; }\r\n\r\n#weekly-deal h2 {\r\n    background-color: rgba(13, 13, 13, 0.52);\r\n    font-size: 2.25rem;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 2.625rem;\r\n    padding-left: 21.25rem;\r\n    padding-right: 10rem;\r\n    margin-bottom: 0.625rem; }\r\n\r\n#weekly-deal #deal {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    justify-content: space-around; }\r\n\r\n#weekly-deal #deal #deal-details {\r\n      width: 30%;\r\n      padding-left: 11.25rem; }\r\n\r\n#weekly-deal #deal #deal-details h3 {\r\n        font-size: 2.25rem; }\r\n\r\n#weekly-deal #deal #deal-details p {\r\n        font-size: 1rem;\r\n        line-height: 180%;\r\n        margin: 1.25rem 0 2rem; }\r\n\r\n#weekly-deal #deal #deal-details a {\r\n        text-decoration: underline; }\r\n\r\n#weekly-deal #deal #deal-details a:hover {\r\n          opacity: .6; }\r\n\r\n#weekly-deal #deal figure {\r\n      background-image: url('greece.jpg');\r\n      background-size: cover;\r\n      height: 576px;\r\n      width: 44%;\r\n      box-shadow: -4px 4px 14px 3px rgba(80, 80, 80, 0.44);\r\n      -webkit-transition: all .5s;\r\n      transition: all .5s; }\r\n\r\n#weekly-deal #deal figure:hover {\r\n        -webkit-transform: scale(1.06);\r\n                transform: scale(1.06); }\r\n\r\n#footer {\r\n  color: white;\r\n  padding: 2.5rem 0;\r\n  background-color: rgba(13, 13, 13, 0.48);\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center; }\r\n\r\n#footer h5 {\r\n    font-size: 1.875rem;\r\n    margin: 1.875rem 0; }\r\n\r\n#footer hr {\r\n    width: 4%;\r\n    border: 1px solid rgba(255, 255, 255, 0.38);\r\n    border-top: none; }\r\n\r\n#footer h6 {\r\n    font-size: 1rem;\r\n    margin: 0.5rem 0; }\r\n\r\n#footer #social-icons {\r\n    padding: 0.75rem 0; }\r\n\r\n#footer #social-icons img {\r\n      width: 2.25rem;\r\n      padding: 0 0.25rem;\r\n      -webkit-transition: all .2s;\r\n      transition: all .2s; }\r\n\r\n#footer #social-icons img:hover {\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2); }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0MsRUFBRTs7QUFFeEM7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFFOztBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBRTs7QUFFYjtFQUNFLG1CQUFtQjtFQUNuQixTQUFTLEVBQUU7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYyxFQUFFOztBQUVsQjtFQUNFLG1CQUFtQixFQUFFOztBQUV2QjtFQUNFO0lBQ0UsVUFBVSxFQUFFO0VBQ2Q7SUFDRSxVQUFVLEVBQUUsRUFBRTs7QUFKbEI7RUFDRTtJQUNFLFVBQVUsRUFBRTtFQUNkO0lBQ0UsVUFBVSxFQUFFLEVBQUU7O0FBRWxCO0VBQ0U7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDLEVBQUU7RUFDMUM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUUsRUFBRTs7QUFKeEM7RUFDRTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBRTtFQUMxQztJQUNFLHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBRSxFQUFFOztBQUV4QztFQUNFLCtCQUEwRDtFQUMxRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUU7O0FBRW5CO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFD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L3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgYnV0dG9uLCBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmOyB9XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7IH1cclxuXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGZpZ3VyZSB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW46IDA7IH1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0OyB9XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7IH1cclxuXHJcbnAsIGEsIGJ1dHRvbiwgaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07IH1cclxuXHJcbkBrZXlmcmFtZXMgaW50cm8tY29udGVudCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDsgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTsgfSB9XHJcblxyXG5Aa2V5ZnJhbWVzIGludHJvLWhlYWRlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpIHNjYWxlKDAuNik7IH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApIHNjYWxlKDEpOyB9IH1cclxuXHJcbiNiZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkOyB9XHJcblxyXG4jbGFuZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGludHJvLWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjFzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7IH1cclxuICAjbGFuZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGludHJvLWhlYWRlcjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC4xczsgfVxyXG4gICNsYW5kaW5nIHAge1xyXG4gICAgd2lkdGg6IDM2dnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTkwJTsgfVxyXG4gICNsYW5kaW5nIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzQyNTgzMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogLjZlbSA0LjJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDAuODc1cmVtOyB9XHJcbiAgICAjbGFuZGluZyBidXR0b246aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAuODsgfVxyXG5cclxuI2RpbW1lZC1iZyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjg2KTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjZzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwdncpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxyXG5cclxuI2Z1bGwtc2l0ZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwOyB9XHJcblxyXG4jYWJvdmUtZm9sZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDkycHg7XHJcbiAgcGFkZGluZy10b3A6IDYycHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogOTQlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIC41czsgfVxyXG4gICNhYm92ZS1mb2xkIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjEyNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQuNXJlbTsgfVxyXG4gICAgI2Fib3ZlLWZvbGQgbmF2IGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAwIDEuODc1cmVtOyB9XHJcbiAgICAjYWJvdmUtZm9sZCBuYXYgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxuICAgICNhYm92ZS1mb2xkIG5hdiBhIHtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7IH1cclxuICAgICAgI2Fib3ZlLWZvbGQgbmF2IGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IC44OyB9XHJcbiAgI2Fib3ZlLWZvbGQgYXJ0aWNsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMi43NXJlbTsgfVxyXG4gICAgI2Fib3ZlLWZvbGQgYXJ0aWNsZSBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTsgfVxyXG4gICAgI2Fib3ZlLWZvbGQgYXJ0aWNsZSBwIHtcclxuICAgICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICAgIHdpZHRoOiA0MHJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwMCU7IH1cclxuICAgICNhYm92ZS1mb2xkIGFydGljbGUgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcclxuICAgICAgY29sb3I6ICNlOGZmZjc7XHJcbiAgICAgIHBhZGRpbmc6IC44ZW0gMS40ZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2ZW07XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzOyB9XHJcbiAgICAgICNhYm92ZS1mb2xkIGFydGljbGUgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAuNjsgfVxyXG5cclxuI3JlZ2lzdGVyLXNpZGUtYmFyIHtcclxuICB3aWR0aDogMTcwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyAxcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpOyB9XHJcbiAgI3JlZ2lzdGVyLXNpZGUtYmFyICNlbXB0eS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOyB9XHJcbiAgI3JlZ2lzdGVyLXNpZGUtYmFyICN2aXNpYmxlLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNHM7IH1cclxuICAgICNyZWdpc3Rlci1zaWRlLWJhciAjdmlzaWJsZS1zZWN0aW9uIHNwYW4ge1xyXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDh2aCAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42czsgfVxyXG4gICAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI3Zpc2libGUtc2VjdGlvbiBzcGFuIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuODc1cmVtOyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI3Zpc2libGUtc2VjdGlvbiBoNCB7XHJcbiAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42czsgfVxyXG4gICNyZWdpc3Rlci1zaWRlLWJhciAjZm9ybS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wOCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzB2aDsgfVxyXG4gICAgI3JlZ2lzdGVyLXNpZGUtYmFyICNmb3JtLXNlY3Rpb24gaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzLjI1cmVtOyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI2Zvcm0tc2VjdGlvbiBpbnB1dDpub3QoW3R5cGU9XCJzdWJtaXRcIl0pIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICBtYXJnaW46IDMuMTI1cmVtIDA7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxOHB4OyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI2Zvcm0tc2VjdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICBwYWRkaW5nOiAuNGVtIDUuNGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQuMTI1cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XHJcbiAgICAgICNyZWdpc3Rlci1zaWRlLWJhciAjZm9ybS1zZWN0aW9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxyXG4gICAgI3JlZ2lzdGVyLXNpZGUtYmFyICNmb3JtLXNlY3Rpb24gOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0OyB9XHJcbiAgICAjcmVnaXN0ZXItc2lkZS1iYXIgI2Zvcm0tc2VjdGlvbiBhIHtcclxuICAgICAgY29sb3I6ICNiMjlkZmY7IH1cclxuICAgICAgI3JlZ2lzdGVyLXNpZGUtYmFyICNmb3JtLXNlY3Rpb24gYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7IH1cclxuXHJcbiNpbmZvLXNlY3Rpb24ge1xyXG4gIGNvbG9yOiAjY2ZjZmNmO1xyXG4gIG1hcmdpbjogNS4xMjVyZW07IH1cclxuICAjaW5mby1zZWN0aW9uIGFydGljbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07IH1cclxuICAgICNpbmZvLXNlY3Rpb24gYXJ0aWNsZSBmaWd1cmUge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gICAgICBoZWlnaHQ6IDEzLjg3NXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxyXG4gICAgICAjaW5mby1zZWN0aW9uIGFydGljbGUgZmlndXJlOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyB9XHJcbiAgICAjaW5mby1zZWN0aW9uIGFydGljbGUgZGl2IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUuMTI1cmVtOyB9XHJcbiAgICAgICNpbmZvLXNlY3Rpb24gYXJ0aWNsZSBkaXYgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XHJcbiAgICAgICNpbmZvLXNlY3Rpb24gYXJ0aWNsZSBkaXYgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIyMCU7IH1cclxuICAjaW5mby1zZWN0aW9uIGFydGljbGU6bnRoLW9mLXR5cGUoMSkgZmlndXJlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzL2luZm8tMS5qcGdcIik7IH1cclxuICAjaW5mby1zZWN0aW9uIGFydGljbGU6bnRoLW9mLXR5cGUoMikgZmlndXJlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzL2luZm8tMi5qcGdcIik7IH1cclxuICAjaW5mby1zZWN0aW9uIGFydGljbGU6bnRoLW9mLXR5cGUoMykgZmlndXJlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzL2luZm8tMy5qcGdcIik7IH1cclxuICAjaW5mby1zZWN0aW9uIGFydGljbGU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNjBweDsgfVxyXG5cclxuI2N1cnJlbnQtdXNlcnMge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTJyZW0gYXV0bztcclxuICBwYWRkaW5nOiAxLjM3NXJlbSAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzgpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzgpOyB9XHJcbiAgI2N1cnJlbnQtdXNlcnMgaDMsICNjdXJyZW50LXVzZXJzIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICNjdXJyZW50LXVzZXJzIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTsgfVxyXG4gICNjdXJyZW50LXVzZXJzIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTsgfVxyXG5cclxuI2xvY2F0aW9ucyB7XHJcbiAgbWFyZ2luOiA3LjVyZW0gMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlOyB9XHJcbiAgI2xvY2F0aW9ucyBoMiB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XHJcbiAgI2xvY2F0aW9ucyAjaGVhZGVyLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzhhOGE4YTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAxLjM3NXJlbTsgfVxyXG4gICAgI2xvY2F0aW9ucyAjaGVhZGVyLWxpbms6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAuNzsgfVxyXG4gICNsb2NhdGlvbnMgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTguNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEuMTI1cmVtIDAuNjI1cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQuNXJlbSBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zOCk7IH1cclxuICAjbG9jYXRpb25zIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNkM2QzZDM7IH1cclxuICAjbG9jYXRpb25zIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7IH1cclxuICAjbG9jYXRpb25zIHVsIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEuMTI1cmVtIGF1dG87IH1cclxuICAjbG9jYXRpb25zIGxpIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMTI1cmVtIDMuNjI1cmVtOyB9XHJcbiAgICAjbG9jYXRpb25zIGxpIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cclxuXHJcbiN0ZXN0aW1vbmlhbHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wOCk7XHJcbiAgbWFyZ2luOiAxMi41cmVtIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgI3Rlc3RpbW9uaWFsczo6YmVmb3JlLCAjdGVzdGltb25pYWxzOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxMnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjA4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yaWdodDogNzB2dyBzb2xpZCB3aGl0ZTsgfVxyXG4gICN0ZXN0aW1vbmlhbHM6OmJlZm9yZSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIGJvdHRvbTogMTAwJTsgfVxyXG4gICN0ZXN0aW1vbmlhbHM6OmFmdGVyIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwMCUsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xyXG4gICAgdG9wOiAxMDAlOyB9XHJcbiAgI3Rlc3RpbW9uaWFscyAjdGVzdGltb25pYWxzLWJnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxyXG4gICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHBhZGRpbmc6IDYuNzVyZW0gMCA0Ljc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAjdGVzdGltb25pYWxzIGFydGljbGUgaDIge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxyXG4gICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07IH1cclxuICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlIGg1IHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgICBjb2xvcjogIzBkNzdiYjsgfVxyXG4gICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW46IDJyZW0gMS41cmVtOyB9XHJcbiAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyAucmV2aWV3IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ3N2JiO1xyXG4gICAgICAgIG1hcmdpbjogMCAxLjEyNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07IH1cclxuICAgICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldyAucmV2aWV3ZXItZGV0YWlscyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXcgLnJldmlld2VyLWRldGFpbHMgZmlndXJlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYuMjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA2LjI1cmVtOyB9XHJcbiAgICAgICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldyAucmV2aWV3ZXItZGV0YWlscyAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjEyNXJlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgfVxyXG4gICAgICAgICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldyAucmV2aWV3ZXItZGV0YWlscyAuZGV0YWlscyAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyB9XHJcbiAgICAgICAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyAucmV2aWV3IC5yZXZpZXdlci1kZXRhaWxzIC5kZXRhaWxzIC5mcm9tIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cclxuICAgICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldyAucmV2aWV3LXRleHQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC44NzVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0MCU7IH1cclxuICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXc6bnRoLW9mLXR5cGUoMSkgZmlndXJlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ltYWdlcy9mYWNlLTEuanBnXCIpOyB9XHJcbiAgICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSAjcmV2aWV3cyAucmV2aWV3Om50aC1vZi10eXBlKDIpIGZpZ3VyZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvZmFjZS0yLmpwZ1wiKTsgfVxyXG4gICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgI3Jldmlld3MgLnJldmlldzpudGgtb2YtdHlwZSgzKSBmaWd1cmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzL2ZhY2UtMy5qcGdcIik7IH1cclxuICAgICAgI3Rlc3RpbW9uaWFscyBhcnRpY2xlICNyZXZpZXdzIC5yZXZpZXc6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODRhNmE7IH1cclxuICAgICN0ZXN0aW1vbmlhbHMgYXJ0aWNsZSBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMwZDc3YmI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxyXG4gICAgICAjdGVzdGltb25pYWxzIGFydGljbGUgYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7IH1cclxuXHJcbiN3ZWVrbHktZGVhbCB7XHJcbiAgbWFyZ2luOiA3LjVyZW0gMDtcclxuICBjb2xvcjogd2hpdGU7IH1cclxuICAjd2Vla2x5LWRlYWwgaDIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTMsIDEzLCAwLjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDIuNjI1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMS4yNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07IH1cclxuICAjd2Vla2x5LWRlYWwgI2RlYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxyXG4gICAgI3dlZWtseS1kZWFsICNkZWFsICNkZWFsLWRldGFpbHMge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDExLjI1cmVtOyB9XHJcbiAgICAgICN3ZWVrbHktZGVhbCAjZGVhbCAjZGVhbC1kZXRhaWxzIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07IH1cclxuICAgICAgI3dlZWtseS1kZWFsICNkZWFsICNkZWFsLWRldGFpbHMgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxODAlO1xyXG4gICAgICAgIG1hcmdpbjogMS4yNXJlbSAwIDJyZW07IH1cclxuICAgICAgI3dlZWtseS1kZWFsICNkZWFsICNkZWFsLWRldGFpbHMgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuICAgICAgICAjd2Vla2x5LWRlYWwgI2RlYWwgI2RlYWwtZGV0YWlscyBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IC42OyB9XHJcbiAgICAjd2Vla2x5LWRlYWwgI2RlYWwgZmlndXJlIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZXMvZ3JlZWNlLmpwZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgaGVpZ2h0OiA1NzZweDtcclxuICAgICAgd2lkdGg6IDQ0JTtcclxuICAgICAgYm94LXNoYWRvdzogLTRweCA0cHggMTRweCAzcHggcmdiYSg4MCwgODAsIDgwLCAwLjQ0KTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC41czsgfVxyXG4gICAgICAjd2Vla2x5LWRlYWwgI2RlYWwgZmlndXJlOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyB9XHJcblxyXG4jZm9vdGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTMsIDEzLCAwLjQ4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxyXG4gICNmb290ZXIgaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICAgIG1hcmdpbjogMS44NzVyZW0gMDsgfVxyXG4gICNmb290ZXIgaHIge1xyXG4gICAgd2lkdGg6IDQlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7IH1cclxuICAjZm9vdGVyIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7IH1cclxuICAjZm9vdGVyICNzb2NpYWwtaWNvbnMge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAwOyB9XHJcbiAgICAjZm9vdGVyICNzb2NpYWwtaWNvbnMgaW1nIHtcclxuICAgICAgd2lkdGg6IDIuMjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsgfVxyXG4gICAgICAjZm9vdGVyICNzb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
    enterSite() {
        console.log("clicked");
        document.getElementById('landing').style.transform = "translate(-200vw)";
        document.getElementById('dimmed-bg').style.visibility = "visible";
        document.getElementById('dimmed-bg').style.transform = "translate(0)";
        document.getElementById('above-fold').style.opacity = "1";
        document.getElementById('full-site').style.visibility = "visible";
        document.getElementById('full-site').style.overflow = "visible";
        document.getElementById('full-site').style.maxHeight = "auto";
        document.getElementById('full-site').style.overflow = "visible";
        document.getElementById('register-side-bar').style.transform = "translate(0)";
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    })
], WelcomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xisco\Documents\AngularProject\AngularCLI-NodeJS-MongoDB-CustomersService-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map