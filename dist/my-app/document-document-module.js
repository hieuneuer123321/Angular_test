(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-document-module"],{

/***/ "LzWD":
/*!*****************************************************!*\
  !*** ./src/app/document/document-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DocumentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRoutingModule", function() { return DocumentRoutingModule; });
/* harmony import */ var _components_test1_test1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/test1/test1.component */ "dQN/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_document2_document2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/document2/document2.component */ "6juO");
/* harmony import */ var _components_test2_test2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/test2/test2.component */ "BvfN");
/* harmony import */ var _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/list-user/list-user.component */ "gi3F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"] },
    { path: 'document1', component: _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"] },
    { path: 'test1', component: _components_test1_test1_component__WEBPACK_IMPORTED_MODULE_0__["Test1Component"] },
    { path: 'test2', component: _components_test2_test2_component__WEBPACK_IMPORTED_MODULE_3__["Test2Component"] },
    { path: 'document2', component: _components_document2_document2_component__WEBPACK_IMPORTED_MODULE_2__["Document2Component"] },
];
class DocumentRoutingModule {
}
DocumentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DocumentRoutingModule });
DocumentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function DocumentRoutingModule_Factory(t) { return new (t || DocumentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DocumentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "nU9T":
/*!*********************************************!*\
  !*** ./src/app/document/document.module.ts ***!
  \*********************************************/
/*! exports provided: DocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentModule", function() { return DocumentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _document_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-routing.module */ "LzWD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DocumentModule {
}
DocumentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DocumentModule });
DocumentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function DocumentModule_Factory(t) { return new (t || DocumentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _document_routing_module__WEBPACK_IMPORTED_MODULE_1__["DocumentRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _document_routing_module__WEBPACK_IMPORTED_MODULE_1__["DocumentRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=document-document-module.js.map