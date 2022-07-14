(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\G Manoj kumar reddy\Downloads\testaws\SecureQuiz-master\quiz\src\main.ts */"zUnb");


/***/ }),

/***/ "0/SE":
/*!************************************************************!*\
  !*** ./src/app/teacher/createquiz/createquiz.component.ts ***!
  \************************************************************/
/*! exports provided: CreatequizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatequizComponent", function() { return CreatequizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreatequizComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.msg);
} }
class CreatequizComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
    }
    ngOnInit() {
    }
    createQuiz(f) {
        this.teacherService.createQuiz(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/teacher/uploadquiz']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
CreatequizComponent.ɵfac = function CreatequizComponent_Factory(t) { return new (t || CreatequizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreatequizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatequizComponent, selectors: [["app-createquiz"]], decls: 17, vars: 2, consts: [[1, "container", "mt-5"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "quizname"], ["type", "text", "name", "quizname", "autocomplete", "off", "id", "quizname", "ngModel", "", "required", "", 1, "form-control"], ["quizname", "ngModel"], ["for", "description"], ["type", "text", "autocomplete", "off", "name", "description", "id", "description", "ngModel", "", "required", "", 1, "form-control"], ["description", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function CreatequizComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatequizComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createQuiz(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quizname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreatequizComponent_p_16_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["label[_ngcontent-%COMP%]{\n  font-size: 17px;\n  padding: 10px 0;\n}\n\nbutton[_ngcontent-%COMP%]{\n\n  margin-top: 20px;\n}\n\n.btn-primary[_ngcontent-%COMP%]{\n  background-color: #0a192f;\n  font-weight: 600;\n  outline: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jcmVhdGVxdWl6L2NyZWF0ZXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY3JlYXRlcXVpei9jcmVhdGVxdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmJ1dHRvbntcblxuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnRuLXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatequizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createquiz',
                templateUrl: './createquiz.component.html',
                styleUrls: ['./createquiz.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "11p2":
/*!****************************************************!*\
  !*** ./src/app/admin/teacher/teacher.component.ts ***!
  \****************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function TeacherComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TeacherComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TeacherComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherComponent_ng_template_11_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.block(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.unblock(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r9.blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r9.blocked);
} }
function TeacherComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TeacherComponent_ng_template_11_ng_template_1_tr_12_Template, 11, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.users);
} }
function TeacherComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeacherComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherComponent_ng_template_11_ng_template_1_Template, 13, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class TeacherComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.msg = [];
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.seeteacher()
            .subscribe(data => {
            if (data['user']) {
                this.loading = false;
                this.users = data['user'];
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.adminService.blockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.adminService.unblockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
TeacherComponent.ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["app-teacher"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-link", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["aria-hidden", "true", 1, "fa", "fa-unlock"]], template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeacherComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeacherComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeacherComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%]{\n  font-family: 'Montserrat', sans-serif;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 150px;\n  margin-bottom: 250px;\n  margin-left: auto;\n  margin-right: auto;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\ntext-align: center;\nvertical-align: middle;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n\nwidth: 100%;\nheight: 100%;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\n}\nbutton[_ngcontent-%COMP%]{\n  outline: none;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #0a192f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xuKntcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cbi50YWJsZXtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxudGgsdGR7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaHRtbCxib2R5e1xuXG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5idXR0b257XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0LGg1e1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYTE5MmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher',
                templateUrl: './teacher.component.html',
                styleUrls: ['./teacher.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "17Sp":
/*!**************************************!*\
  !*** ./src/app/admin/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class AdminGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('admin') == "yes") {
                if (localStorage.getItem('teacher') == "no") {
                    if (localStorage.getItem('student') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "1M0h":
/*!****************************************************************!*\
  !*** ./src/app/admin/view-question/view-question.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuestionComponent", function() { return ViewQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function ViewQuestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ViewQuestionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ViewQuestionComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Question in the Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewQuestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r13 + 1, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r12.optionText);
} }
function ViewQuestionComponent_ng_template_10_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewQuestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_ng_template_10_ng_template_1_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const one_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.delete(one_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Q", j_r10 + 1, " - ", one_r9.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", one_r9.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer :- ", one_r9.answer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.del);
} }
function ViewQuestionComponent_ng_template_10_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewQuestionComponent_ng_template_10_ng_template_1_div_0_Template, 13, 5, "div", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allQuestions);
} }
function ViewQuestionComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewQuestionComponent_ng_template_10_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewQuestionComponent_ng_template_10_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class ViewQuestionComponent {
    // authSubscription: Subscription;
    constructor(admminService, router) {
        this.admminService = admminService;
        this.router = router;
        this.empty = true;
    }
    ngOnInit() {
        this.load = true;
        this.empty = true;
        if (this.admminService.getQuizId() == undefined) {
            this.router.navigate(['/admin/adminhome']);
        }
        else {
            if (this.admminService.getDelete() == undefined) {
                this.router.navigate(['/admin/adminhome']);
            }
            else {
                this.del = this.admminService.getDelete();
                this.quizid = this.admminService.getQuizId();
                this.getAllQuestions(this.quizid);
            }
        }
    }
    delete(one) {
        this.admminService.deleteQuestion(one._id)
            .subscribe(data => {
            this.getAllQuestions(this.quizid);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    getAllQuestions(quizid) {
        // console.log("hahaha");
        // console.log(quizid);
        this.admminService.getAllQuestion(quizid)
            .subscribe(data => {
            if (data['msg']) {
                this.allQuestions = data['msg'];
                this.load = false;
                if (!this.allQuestions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
ViewQuestionComponent.ɵfac = function ViewQuestionComponent_Factory(t) { return new (t || ViewQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewQuestionComponent, selectors: [["app-view-question"]], decls: 12, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [4, "ngFor", "ngForOf"], [1, "container", "mt-sm-5", "my-1"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], [1, "options"], [1, "d-flex", "align-items-center", "py-2", 2, "position", "relative", "margin-top", "20px"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"]], template: function ViewQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewQuestionComponent_div_7_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewQuestionComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewQuestionComponent_ng_template_10_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n.container[_ngcontent-%COMP%] {\n    background-color:#f1f1f1;\n    color: #0a192f;\n    border-radius: 10px;\n    padding: 20px;\n    font-family: 'Montserrat', sans-serif;\n    max-width: 800px;\n\n}\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    font-size: 32px;\n}\n.question[_ngcontent-%COMP%] {\n    width: 100%;\n    color: #0a192f;\n\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n.options[_ngcontent-%COMP%] {\n    position: relative;\n}\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n    font-size: 16px;\n    font-weight: bold;\n    cursor: pointer;\n}\nspan[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-weight: bolder;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy1xdWVzdGlvbi92aWV3LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjtBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7O0FBRXBCO0FBR0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlldy1xdWVzdGlvbi92aWV3LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxufVxuXG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTtcbiAgICBjb2xvcjogIzBhMTkyZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuXG59XG5cblxuLmNvbnRhaW5lcj5wIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5xdWVzdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwYTE5MmY7XG5cbn1cbmg0LGg1e1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcHRpb25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNvcHRpb25zIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNwYW57XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-question',
                templateUrl: './view-question.component.html',
                styleUrls: ['./view-question.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "4+a0":
/*!********************************************************!*\
  !*** ./src/app/index/indexmain/indexmain.component.ts ***!
  \********************************************************/
/*! exports provided: IndexmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexmainComponent", function() { return IndexmainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indexnav/indexnav.component */ "l08C");
/* harmony import */ var _indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indexheader/indexheader.component */ "MTG3");




class IndexmainComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexmainComponent.ɵfac = function IndexmainComponent_Factory(t) { return new (t || IndexmainComponent)(); };
IndexmainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexmainComponent, selectors: [["app-indexmain"]], decls: 2, vars: 0, template: function IndexmainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexheader");
    } }, directives: [_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"], _indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_2__["IndexheaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4bWFpbi9pbmRleG1haW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexmainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indexmain',
                templateUrl: './indexmain.component.html',
                styleUrls: ['./indexmain.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5xLU":
/*!******************************************************************!*\
  !*** ./src/app/error/notfound-error/notfound-error.component.ts ***!
  \******************************************************************/
/*! exports provided: NotfoundErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundErrorComponent", function() { return NotfoundErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");



class NotfoundErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundErrorComponent.ɵfac = function NotfoundErrorComponent_Factory(t) { return new (t || NotfoundErrorComponent)(); };
NotfoundErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundErrorComponent, selectors: [["app-notfound-error"]], decls: 6, vars: 0, consts: [[2, "overflow-x", "hidden"], [1, "text-center", "mt-5", 2, "color", "#2f2e41"], [1, "d-flex", "justify-content-center", "mt-3"], ["src", "https://storage.googleapis.com/canteen-assets/index/404y.svg", "alt", "", 1, "img-fluid", 2, "max-height", "500px"]], template: function NotfoundErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! we can't find that page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"]], styles: ["*[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  h3[_ngcontent-%COMP%]{\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Ivbm90Zm91bmQtZXJyb3Ivbm90Zm91bmQtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9ub3Rmb3VuZC1lcnJvci9ub3Rmb3VuZC1lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBoM3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound-error',
                templateUrl: './notfound-error.component.html',
                styleUrls: ['./notfound-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8fTH":
/*!**************************************************************!*\
  !*** ./src/app/teacher/seequestion/seequestion.component.ts ***!
  \**************************************************************/
/*! exports provided: SeequestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeequestionComponent", function() { return SeequestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function SeequestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SeequestionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function SeequestionComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Question in the Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SeequestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r13 + 1, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r12.optionText);
} }
function SeequestionComponent_ng_template_10_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SeequestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeequestionComponent_ng_template_10_ng_template_1_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const one_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.delete(one_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Q", j_r10 + 1, " - ", one_r9.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", one_r9.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer :- ", one_r9.answer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.del);
} }
function SeequestionComponent_ng_template_10_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeequestionComponent_ng_template_10_ng_template_1_div_0_Template, 13, 5, "div", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allQuestions);
} }
function SeequestionComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeequestionComponent_ng_template_10_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeequestionComponent_ng_template_10_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class SeequestionComponent {
    // authSubscription: Subscription;
    constructor(teacherService, router, route) {
        this.teacherService = teacherService;
        this.router = router;
        this.route = route;
        this.empty = true;
    }
    ngOnInit() {
        this.load = true;
        this.empty = true;
        if (this.teacherService.getQuizId() == undefined) {
            this.router.navigate(['/teacher/teacherhome']);
        }
        else {
            if (this.teacherService.getDelete() == undefined) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.del = this.teacherService.getDelete();
                this.quizid = this.teacherService.getQuizId();
                // console.log(this.del);
                this.getAllQuestions(this.quizid);
            }
        }
        // this.authSubscription = this.route.queryParams.subscribe(
        //   (params: Params) => {
        //     console.log("heyy");
        //     console.log(params);
        //   });
    }
    delete(one) {
        this.teacherService.deleteQuestion(one._id)
            .subscribe(data => {
            // console.log(data);
            this.getAllQuestions(this.quizid);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    getAllQuestions(quizid) {
        // console.log("hahaha");
        // console.log(quizid);
        this.teacherService.getAllQuestion(quizid)
            .subscribe(data => {
            if (data['msg']) {
                this.allQuestions = data['msg'];
                this.load = false;
                if (!this.allQuestions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // this.one =  this.allQuestions[0]
            // console.log(this.allQuestions);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
SeequestionComponent.ɵfac = function SeequestionComponent_Factory(t) { return new (t || SeequestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SeequestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeequestionComponent, selectors: [["app-seequestion"]], decls: 12, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [4, "ngFor", "ngForOf"], [1, "container", "mt-sm-5", "my-1"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], [1, "options"], [1, "d-flex", "align-items-center", "py-2", 2, "position", "relative", "margin-top", "20px"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"]], template: function SeequestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SeequestionComponent_div_7_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SeequestionComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SeequestionComponent_ng_template_10_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n.container[_ngcontent-%COMP%] {\n    background-color:#f1f1f1;\n    color: #0a192f;\n    border-radius: 10px;\n    padding: 20px;\n    font-family: 'Montserrat', sans-serif;\n    max-width: 800px;\n\n}\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    font-size: 32px;\n}\n.question[_ngcontent-%COMP%] {\n    width: 100%;\n    color: #0a192f;\n\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n.options[_ngcontent-%COMP%] {\n    position: relative;\n}\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n    font-size: 16px;\n    font-weight: bold;\n    cursor: pointer;\n}\nspan[_ngcontent-%COMP%]{\n  padding: 10px;\n  font-weight: bolder;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9zZWVxdWVzdGlvbi9zZWVxdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7O0FBRWxCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvc2VlcXVlc3Rpb24vc2VlcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG5cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO1xuICAgIGNvbG9yOiAjMGExOTJmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIG1heC13aWR0aDogODAwcHg7XG5cbn1cblxuXG4uY29udGFpbmVyPnAge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzBhMTkyZjtcblxufVxuaDQsaDV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9wdGlvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI29wdGlvbnMgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc3BhbntcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeequestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seequestion',
                templateUrl: './seequestion.component.html',
                styleUrls: ['./seequestion.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "9fHA":
/*!************************************************************!*\
  !*** ./src/app/teacher/uploadquiz/uploadquiz.component.ts ***!
  \************************************************************/
/*! exports provided: UploadquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadquizComponent", function() { return UploadquizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function UploadquizComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function UploadquizComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function UploadquizComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any created Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadquizComponent_ng_template_11_ng_template_1_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.msg, " ");
} }
function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.viewQuestion(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.viewQuestion(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.add(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.upload(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.delete(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.quizdescription);
} }
function UploadquizComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UploadquizComponent_ng_template_11_ng_template_1_p_0_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "See Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template, 19, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.avail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.quiz);
} }
function UploadquizComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UploadquizComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadquizComponent_ng_template_11_ng_template_1_Template, 20, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class UploadquizComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.getuploadquiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.quiz = data['quiz'];
                if (!this.quiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    add(quiz) {
        this.teacherService.setQuizId(quiz._id);
        this.router.navigate(['/teacher/addquestion']);
    }
    upload(quiz) {
        // console.log("upload");
        // console.log(quiz);
        // console.log(quiz._id);
        this.teacherService.uploadquiz(quiz._id)
            .subscribe(data => {
            // this.quiz = data['quiz']
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['message']) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.msg = "something went wrong!!";
                this.avail = true;
                return;
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    delete(quiz) {
        this.teacherService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.teacherService.setQuizId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestion']);
    }
}
UploadquizComponent.ɵfac = function UploadquizComponent_Factory(t) { return new (t || UploadquizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UploadquizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadquizComponent, selectors: [["app-uploadquiz"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["style", "color: red;font-weight: bold;font-size: 20px;text-align: center;margin-top: 50px;", 4, "ngIf"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "color", "red", "font-weight", "bold", "font-size", "20px", "text-align", "center", "margin-top", "50px"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f", 3, "click"]], template: function UploadquizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadquizComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UploadquizComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadquizComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%]{\n  font-family: 'Montserrat', sans-serif;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 150px;\n  margin-bottom: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  color: #0a192f;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\ntext-align: center;\n\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n\nwidth: 100%;\nheight: 100%;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\n}\nbutton[_ngcontent-%COMP%]{\n  outline: none;\n\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #0a192f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci91cGxvYWRxdWl6L3VwbG9hZHF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFDL0UsNkdBQTZHO0FBQzdHO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QjtBQUVBO0VBQ0UsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL3VwbG9hZHF1aXovdXBsb2FkcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcbip7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG4udGFibGV7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6ICMwYTE5MmY7XG59XG50aCx0ZHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbi8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG59XG5odG1sLGJvZHl7XG5cbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmJ1dHRvbntcbiAgb3V0bGluZTogbm9uZTtcblxufVxuaDQsaDV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBhMTkyZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadquizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uploadquiz',
                templateUrl: './uploadquiz.component.html',
                styleUrls: ['./uploadquiz.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AJ6+":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/admin/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    seestudent() {
        return this.http.get(this.baseUri + "seestudent", { headers: this.headers });
    }
    seeteacher() {
        return this.http.get(this.baseUri + "seeteacher", { headers: this.headers });
    }
    blockuser(id) {
        return this.http.delete(this.baseUri + "blockuser/" + id, { headers: this.headers });
    }
    unblockuser(id) {
        return this.http.delete(this.baseUri + "unblockuser/" + id, { headers: this.headers });
    }
    getAllQuiz() {
        return this.http.get(this.baseUri + "getallquiz", { headers: this.headers });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    setDelete(data) {
        this.delete = data;
    }
    getDelete() {
        return this.delete;
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    deletequiz(id) {
        return this.http.delete(this.baseUri + "deletequiz/" + id, { headers: this.headers });
    }
    deleteQuestion(id) {
        return this.http.delete(this.baseUri + "deletequestion/" + id, { headers: this.headers });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BWLr":
/*!**************************************************************!*\
  !*** ./src/app/error/server-error/server-error.component.ts ***!
  \**************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");



class ServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(); };
ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 6, vars: 0, consts: [[2, "overflow-x", "hidden"], [1, "text-center", "mt-5", "animated", "pulse", "infinite", 2, "color", "#2f2e41"], [1, "d-flex", "justify-content-center", "mt-3"], ["src", "https://storage.googleapis.com/canteen-assets/index/serverError.svg", "alt", "", 1, "img-fluid", 2, "max-height", "500px"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! Server Down / Server Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"]], styles: ["*[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  h3[_ngcontent-%COMP%]{\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Ivc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaDN7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-error',
                templateUrl: './server-error.component.html',
                styleUrls: ['./server-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BvBR":
/*!***************************************************************!*\
  !*** ./src/app/auth/login-teacher/login-teacher.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginTeacherComponent", function() { return LoginTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");

// import { catchError, retry } from 'rxjs/operators';







function LoginTeacherComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.msg);
} }
function LoginTeacherComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.msg);
} }
const _c0 = function () { return ["/reset"]; };
class LoginTeacherComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-in-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").addClass("sign-up-mode");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-up-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").removeClass("sign-up-mode");
            });
        });
    }
    signinup() {
        // console.log("hello1");
        this.msg = "";
        this.avail = false;
    }
    onSubmitRegister(f) {
        // for (var val of this.arr) {
        //   var a = val['email'];
        //   var b = f.controls.email.value;
        //   if (a == b) {
        //     this.msg = "User already exist with this user name (email)!!";
        //     this.avail = true;
        //     return;
        //   }
        // }
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password   doesn't match";
            this.avail = true;
            return;
        }
        if (!f.valid) {
            this.msg = "Invalid Form Fields";
            this.avail = true;
            return;
        }
        this.authService.registerTeacher(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            // this.authService.msg = "successfully registered a user!";
            window.location.reload();
            this.router.navigate(['/teacher']);
        }, error => { this.router.navigate(['/error']); });
    }
    onSubmitLogin(f) {
        if (!f.valid) {
            this.msg = "Invalid Email or Password";
            this.avail = true;
            return;
        }
        this.authService.login(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['role'] == "admin") {
                // console.log("admin");
                localStorage.setItem('token', data['token']);
                localStorage.setItem('admin', 'yes');
                localStorage.setItem('student', 'no');
                localStorage.setItem('teacher', 'no');
                // this.router.navigate(['/admin']);
                // this.router.navigate(['/']);
                this.router.navigate(['/admin/adminhome']);
            }
            else if (data['role'] == "student") {
                // console.log("student")
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    // console.log("not blocked");
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'yes');
                    localStorage.setItem('teacher', 'no');
                    this.router.navigate(['/student/studenthome']);
                }
                // this.router.navigate(['/']);
            }
            else {
                // console.log("teacher");
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'no');
                    localStorage.setItem('teacher', 'yes');
                    this.router.navigate(['/teacher/teacherhome']);
                }
            }
        }, error => { this.router.navigate(['/error']); });
    }
}
LoginTeacherComponent.ɵfac = function LoginTeacherComponent_Factory(t) { return new (t || LoginTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginTeacherComponent, selectors: [["app-login-teacher"]], decls: 62, vars: 6, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p1", "ngModel"], ["type", "submit", "value", "Login", 1, "btn", "solid", 3, "disabled"], [1, "social-text", 2, "font-weight", "bold"], [3, "routerLink"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "sign-in-form", 3, "ngSubmit"], ["f", "ngForm"], ["type", "email", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "email", "", "spellcheck", "false", "ngModel", "", "required", ""], [1, "fas", "fa-phone"], ["type", "text", "placeholder", "Mobile no", "name", "phone", "pattern", "^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "ngModel", "", "required", ""], ["phone", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Re-enter Password", "name", "p2", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p2", "ngModel"], ["type", "submit", "value", "Sign up", 1, "btn", 3, "disabled"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-in-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/r.svg", "alt", "", 1, "image"], [1, "panel", "right-panel"], ["id", "sign-up-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/l.svg", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function LoginTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginTeacherComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginTeacherComponent_p_20_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginTeacherComponent_Template_form_ngSubmit_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx.onSubmitRegister(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Faculty Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LoginTeacherComponent_p_42_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "One of us ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginTeacherComponent_Template_button_click_50_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Faculty ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginTeacherComponent_Template_button_click_59_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.containerr[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 92vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color:#0a192f;\n  margin-bottom: 10px;\n  \n\t animation: vibrate-1 1.5s linear infinite both;\n}\n\n@keyframes vibrate-1 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n  transition: 0.4s ease;\n}\n\n.input-field[_ngcontent-%COMP%]:hover{\n  transform: translateY(-5px);\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #0a192f;\n  \n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color:#0a192f;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: #0a192f;\n}\n\na[_ngcontent-%COMP%]:hover\n{\n  text-decoration: none;\n  color: #0a192f;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #0a192f;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n\n\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #020b18;\n  animation: heartbeat 1.5s ease-in-out infinite both;\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    animation-timing-function: ease-out;\n  }\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.containerr[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  \n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\n  \n\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .containerr[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3 / 4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .containerr[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-bottom: 2px solid red;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi10ZWFjaGVyL2xvZ2luLXRlYWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7O0FBRTdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFFOUMsOENBQThDO0FBQ3ZEOztBQTRCQTtFQUNFO0lBRVUsdUJBQXVCO0VBQ2pDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLGdDQUFnQztFQUMxQztFQUNBO0lBRVUsOEJBQThCO0VBQ3hDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLHVCQUF1QjtFQUNqQztBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjs7O0FBR2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBRXpCLG1EQUFtRDtBQUNyRDs7QUFxQ0E7RUFDRTtJQUVVLG1CQUFtQjtJQUVuQiwrQkFBK0I7SUFFL0IsbUNBQW1DO0VBQzdDO0VBQ0E7SUFFVSxzQkFBc0I7SUFFdEIsa0NBQWtDO0VBQzVDO0VBQ0E7SUFFVSxzQkFBc0I7SUFFdEIsbUNBQW1DO0VBQzdDO0VBQ0E7SUFFVSxzQkFBc0I7SUFFdEIsa0NBQWtDO0VBQzVDO0VBQ0E7SUFFVSxtQkFBbUI7SUFFbkIsbUNBQW1DO0VBQzdDO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0IseUVBQXlFO0VBQ3pFLGtFQUFrRTtFQUNsRSx5RUFBeUU7O0VBRXpFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsNEJBQTRCO0FBQzlCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsK0JBQStCO0VBQ2pDOztFQUVBOztJQUVFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSw2QkFBNkI7RUFDL0I7O0VBRUE7O0lBRUUsMEJBQTBCO0VBQzVCOztFQUVBOztJQUVFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLE9BQU87SUFDUCw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4tdGVhY2hlci9sb2dpbi10ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lcnIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA5MnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9ybXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaWduaW4tc2lnbnVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDc1JTtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNpdGlvbjogMXMgMC43cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHotaW5kZXg6IDU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHJlbSA1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwLjdzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuZm9ybS5zaWduLXVwLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5mb3JtLnNpZ24taW4tZm9ybSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBjb2xvcjojMGExOTJmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAvKiB0ZXh0LXNoYWRvdzogNHB4IDZweCAyNXB4IHJnYmEoMTAsIDI1LCA0NywgMSk7ICAgKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IHZpYnJhdGUtMSAxLjVzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG59XG5cbiBALXdlYmtpdC1rZXlmcmFtZXMgdmlicmF0ZS0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHZpYnJhdGUtMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICB9XG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuXG4uaW5wdXQtZmllbGQge1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cbi5pbnB1dC1maWVsZDpob3ZlcntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwwLDAsMC43KTtcbn1cblxuLmlucHV0LWZpZWxkIGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzBhMTkyZjtcbiAgLyogY29sb3I6IHBhbGVncmVlbjsgKi9cbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjojMGExOTJmO1xufVxuXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zb2NpYWwtdGV4dCB7XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMGExOTJmO1xufVxuYTpob3Zlclxue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMGExOTJmO1xufVxuLnNvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAuNDVyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zb2NpYWwtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjNDQ4MWViO1xuICBib3JkZXItY29sb3I6ICM0NDgxZWI7XG59XG5cblxuLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuXG5cbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBiMTg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XG59XG5cblxuIEAtd2Via2l0LWtleWZyYW1lcyBoZWFydGJlYXQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuXG5cblxuLnBhbmVscy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cblxuLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMDBweDtcbiAgd2lkdGg6IDIwMDBweDtcbiAgdG9wOiAtMTAlO1xuICByaWdodDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM0NDgxZWIgMCUsICMwNGJlZmUgMTAwJSk7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzBhMTkyZiAwJSwgIzBjMWIyYiAxMDAlKTtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNTUyNSAwJSwgI2U0NzgyMCAxMDAlKTsgKi9cblxuICB0cmFuc2l0aW9uOiAxLjhzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDY7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA2O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcGFkZGluZzogM3JlbSAxMiUgMnJlbSAxNyU7XG59XG5cbi5wYW5lbCAuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbn1cblxuLnBhbmVsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGFuZWwgcCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogMC43cmVtIDA7XG59XG5cbi5idG4udHJhbnNwYXJlbnQge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MDBweCk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIHJpZ2h0OiA1MiU7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLXVwLWZvcm0ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLWluLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAuY29udGFpbmVyciB7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuc2lnbmluLXNpZ251cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA5NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IDFzIDAuOHMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAuc2lnbmluLXNpZ251cCxcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAucGFuZWxzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgfVxuXG4gIC5wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIH1cblxuICAucmlnaHQtcGFuZWwge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgfVxuXG4gIC5sZWZ0LXBhbmVsIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICB9XG5cbiAgLnBhbmVsIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgfVxuXG4gIC5wYW5lbCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAucGFuZWwgcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cblxuICAuYnRuLnRyYW5zcGFyZW50IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgICB3aWR0aDogMTUwMHB4O1xuICAgIGhlaWdodDogMTUwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgYm90dG9tOiA2OCU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gICAgYm90dG9tOiAzMiU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gIH1cblxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG5cbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbiAgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICB0b3A6IDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucGFuZWwgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB9XG4gIC5jb250YWluZXJyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFpbmVycjpiZWZvcmUge1xuICAgIGJvdHRvbTogNzIlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIGJvdHRvbTogMjglO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuXG4uaW5wdXQtZmllbGQgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-teacher',
                templateUrl: './login-teacher.component.html',
                styleUrls: ['./login-teacher.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "EMjD":
/*!***************************************************************************!*\
  !*** ./src/app/auth/reset-password-done/reset-password-done.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordDoneComponent", function() { return ResetPasswordDoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResetPasswordDoneComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.msg);
} }
class ResetPasswordDoneComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
    }
    onSubmitResetpasswordDone(f) {
        if (!f.valid) {
            this.msg = "Invalid form data!!";
            this.avail = true;
            return;
        }
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password doesn't match";
            this.avail = true;
            return;
        }
        this.authService.resetpassworddone(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/']);
        }, error => { this.router.navigate(['/error']); });
        // this.msg = "hellp";
        // this.avail = true;
    }
}
ResetPasswordDoneComponent.ɵfac = function ResetPasswordDoneComponent_Factory(t) { return new (t || ResetPasswordDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ResetPasswordDoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordDoneComponent, selectors: [["app-reset-password-done"]], decls: 37, vars: 2, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "text", "placeholder", "Enter Otp", "name", "otp", "pattern", "[0-9]{4}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "maxlength", "4"], ["otp", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p1", "ngModel"], ["type", "password", "placeholder", "Re-enter Password", "name", "p2", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p2", "ngModel"], ["type", "submit", "value", "submit", 1, "btn", "solid", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "panel", "right-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent"], ["src", "../../../assets/img/forgotpassword.svg", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function ResetPasswordDoneComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordDoneComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitResetpasswordDone(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResetPasswordDoneComponent_p_25_Template, 2, 1, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Attention here!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Once you have submitted the request to reset your password, you will receive an email. Follow the instructions in the email and your password will be reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Don't Worry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.containerr[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 92vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n\n}\n\n@keyframes tilt-in-fwd-tr {\n  0% {\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\n    opacity: 1;\n  }\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color:#0a192f;\n  margin-bottom: 10px;\n  \n\t animation: vibrate-1 1.5s linear infinite both;\n}\n\n@keyframes vibrate-1 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n  transition: 0.4s ease;\n}\n\n.input-field[_ngcontent-%COMP%]:hover{\n  transform: translateY(-5px);\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #0a192f;\n  \n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color:#0a192f;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #0a192f;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n\n\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #020b18;\n  animation: heartbeat 1.5s ease-in-out infinite both;\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    animation-timing-function: ease-out;\n  }\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.containerr[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  \n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\n  \n\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .containerr[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3 / 4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .containerr[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-bottom: 2px solid red;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC1kb25lL3Jlc2V0LXBhc3N3b3JkLWRvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7O0FBRTdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPOzs7QUFHVDs7QUFjQTtFQUNFO0lBRVUscUZBQXFGO0lBQzdGLFVBQVU7RUFDWjtFQUNBO0lBRVUsb0VBQW9FO0lBQzVFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFFZiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscURBQXFEO0VBRTlDLDhDQUE4QztBQUN2RDs7QUE0QkE7RUFDRTtJQUVVLHVCQUF1QjtFQUNqQztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSxnQ0FBZ0M7RUFDMUM7RUFDQTtJQUVVLDhCQUE4QjtFQUN4QztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSx1QkFBdUI7RUFDakM7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7O0VBRWQsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFFekIsbURBQW1EO0FBQ3JEOztBQXFDQTtFQUNFO0lBRVUsbUJBQW1CO0lBRW5CLCtCQUErQjtJQUUvQixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLG1CQUFtQjtJQUVuQixtQ0FBbUM7RUFDN0M7QUFDRjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQix5RUFBeUU7RUFDekUsa0VBQWtFO0VBQ2xFLHlFQUF5RTs7RUFFekUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7RUFDakM7O0VBRUE7O0lBRUUsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLDZCQUE2QjtFQUMvQjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsT0FBTztJQUNQLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0Y7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC1kb25lL3Jlc2V0LXBhc3N3b3JkLWRvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSxcbmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDkydmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3Jtcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB0aWx0LWluLWZ3ZC10ciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGlsdC1pbi1md2QtdHIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDM1ZGVnKSB0cmFuc2xhdGUoMzAwcHgsIC0zMDBweCkgc2tldygtMzVkZWcsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zaWduaW4tc2lnbnVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDc1JTtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNpdGlvbjogMXMgMC43cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHotaW5kZXg6IDU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHJlbSA1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwLjdzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHRpbHQtaW4tZndkLXRyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuICBhbmltYXRpb246IHRpbHQtaW4tZndkLXRyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG5mb3JtLnNpZ24tdXAtZm9ybSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbmZvcm0uc2lnbi1pbi1mb3JtIHtcbiAgei1pbmRleDogMjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGNvbG9yOiMwYTE5MmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC8qIHRleHQtc2hhZG93OiA0cHggNnB4IDI1cHggcmdiYSgxMCwgMjUsIDQ3LCAxKTsgICAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiB2aWJyYXRlLTEgMS41cyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbn1cblxuIEAtd2Via2l0LWtleWZyYW1lcyB2aWJyYXRlLTEge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDEwcHggMDtcblxuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbiAgcGFkZGluZzogMCAwLjRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuLmlucHV0LWZpZWxkOmhvdmVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLDAsMCwwLjcpO1xufVxuXG4uaW5wdXQtZmllbGQgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGNvbG9yOiAjMGExOTJmO1xuICAvKiBjb2xvcjogcGFsZWdyZWVuOyAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmlucHV0LWZpZWxkIGlucHV0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiMwYTE5MmY7XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvY2lhbC10ZXh0IHtcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAuNDVyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zb2NpYWwtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjNDQ4MWViO1xuICBib3JkZXItY29sb3I6ICM0NDgxZWI7XG59XG5cblxuLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuXG5cbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBiMTg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XG59XG5cblxuIEAtd2Via2l0LWtleWZyYW1lcyBoZWFydGJlYXQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuXG5cblxuLnBhbmVscy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cblxuLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMDBweDtcbiAgd2lkdGg6IDIwMDBweDtcbiAgdG9wOiAtMTAlO1xuICByaWdodDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM0NDgxZWIgMCUsICMwNGJlZmUgMTAwJSk7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzBhMTkyZiAwJSwgIzBjMWIyYiAxMDAlKTtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNTUyNSAwJSwgI2U0NzgyMCAxMDAlKTsgKi9cblxuICB0cmFuc2l0aW9uOiAxLjhzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDY7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA2O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcGFkZGluZzogM3JlbSAxMiUgMnJlbSAxNyU7XG59XG5cbi5wYW5lbCAuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbn1cblxuLnBhbmVsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGFuZWwgcCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogMC43cmVtIDA7XG59XG5cbi5idG4udHJhbnNwYXJlbnQge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MDBweCk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIHJpZ2h0OiA1MiU7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLXVwLWZvcm0ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLWluLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAuY29udGFpbmVyciB7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuc2lnbmluLXNpZ251cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA5NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IDFzIDAuOHMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAuc2lnbmluLXNpZ251cCxcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAucGFuZWxzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgfVxuXG4gIC5wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIH1cblxuICAucmlnaHQtcGFuZWwge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgfVxuXG4gIC5sZWZ0LXBhbmVsIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICB9XG5cbiAgLnBhbmVsIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgfVxuXG4gIC5wYW5lbCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAucGFuZWwgcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cblxuICAuYnRuLnRyYW5zcGFyZW50IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgICB3aWR0aDogMTUwMHB4O1xuICAgIGhlaWdodDogMTUwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgYm90dG9tOiA2OCU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gICAgYm90dG9tOiAzMiU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gIH1cblxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG5cbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbiAgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICB0b3A6IDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucGFuZWwgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB9XG4gIC5jb250YWluZXJyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFpbmVycjpiZWZvcmUge1xuICAgIGJvdHRvbTogNzIlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIGJvdHRvbTogMjglO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuXG5cblxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xuICB3aWR0aDogMzAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordDoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password-done',
                templateUrl: './reset-password-done.component.html',
                styleUrls: ['./reset-password-done.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "EcT0":
/*!************************************************************!*\
  !*** ./src/app/student/studentnav/studentnav.component.ts ***!
  \************************************************************/
/*! exports provided: StudentnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentnavComponent", function() { return StudentnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");




const _c0 = function () { return ["/student/studenthome"]; };
const _c1 = function () { return ["/"]; };
class StudentnavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
}
StudentnavComponent.ɵfac = function StudentnavComponent_Factory(t) { return new (t || StudentnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
StudentnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentnavComponent, selectors: [["app-studentnav"]], decls: 15, vars: 4, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "click"]], template: function StudentnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentnavComponent_Template_a_click_13_listener() { return ctx.logoutuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\n  background-color: #0A192F;\n  color: #fff;\n  min-height: 75px;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  position: relative;\n  padding: 14px 0 5px;\n  margin: 0 25px;\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Audiowide' ,cursive;\n  font-size: 15px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\n  content: '';\n  position: absolute;\n\n  bottom: 0;\n\n  transform: translateX(-100%) scaleX(0);\n  -webkit-transform: translateX(-100%) scaleX(0);\n  transform-origin: 50% 50%;\n\n\n  width: 100%;\n  height: 2px;\n\n  background-color:#fff;\n  transition: transform 250ms;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\n\n  transform: translateX(-100%) scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50bmF2L3N0dWRlbnRuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudG5hdi9zdHVkZW50bmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qLS0tLS0tLS0tLS0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cblxuLm5hdmJhciB1bCBsaXtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbnVsIGxpIGF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTRweCAwIDVweDtcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnICxjdXJzaXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB1bCBsaSBhOmFmdGVye1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGJvdHRvbTogMDtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcblxuXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xufVxuXG4ubmF2YmFyIHVsIGxpIGE6aG92ZXI6YWZ0ZXJ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentnav',
                templateUrl: './studentnav.component.html',
                styleUrls: ['./studentnav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Gyf/":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);




class WebsocketService {
    constructor() {
        this.url = "http://localhost:3000";
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.url);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IPfh":
/*!*********************************************!*\
  !*** ./src/app/services/teacher.service.ts ***!
  \*********************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TeacherService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/teacher/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    createQuiz(body) {
        return this.http.post(this.baseUri + "createquiz", body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    getuploadquiz() {
        return this.http.get(this.baseUri + "getuploadquiz", { headers: this.headers });
    }
    gethomequiz() {
        return this.http.get(this.baseUri + "gethomequiz", { headers: this.headers });
    }
    seestudent() {
        return this.http.get(this.baseUri + "seestudent", { headers: this.headers });
    }
    blockuser(id) {
        return this.http.delete(this.baseUri + "blockuser/" + id, { headers: this.headers });
    }
    unblockuser(id) {
        return this.http.delete(this.baseUri + "unblockuser/" + id, { headers: this.headers });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    deletequiz(id) {
        return this.http.delete(this.baseUri + "deletequiz/" + id, { headers: this.headers });
    }
    uploadquiz(body) {
        return this.http.post(this.baseUri + "uploadquiz", { id: body }, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    addQuestion(body) {
        return this.http.post(this.baseUri + "addquestion", body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    deleteQuestion(id) {
        return this.http.delete(this.baseUri + "deletequestion/" + id, { headers: this.headers });
    }
    setDelete(data) {
        this.delete = data;
    }
    getDelete() {
        return this.delete;
    }
}
TeacherService.ɵfac = function TeacherService_Factory(t) { return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeacherService, factory: TeacherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeacherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "IbWB":
/*!**************************************************************!*\
  !*** ./src/app/teacher/seestudents/seestudents.component.ts ***!
  \**************************************************************/
/*! exports provided: SeestudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeestudentsComponent", function() { return SeestudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function SeestudentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SeestudentsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function SeestudentsComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.block(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.unblock(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r9.blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r9.blocked);
} }
function SeestudentsComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template, 11, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.users);
} }
function SeestudentsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeestudentsComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeestudentsComponent_ng_template_11_ng_template_1_Template, 13, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class SeestudentsComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.seestudent()
            .subscribe(data => {
            if (data['user']) {
                this.users = data['user'];
                this.loading = false;
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.teacherService.blockuser(userid).subscribe(data => {
            // console.log(data);
            // this.adminService.avail = true;
            // this.adminService.msg = "Successfully Blocked User!!!";
            // this.router.navigate(['/admin']);
            this.getdata();
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.teacherService.unblockuser(userid).subscribe(data => {
            this.getdata();
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
SeestudentsComponent.ɵfac = function SeestudentsComponent_Factory(t) { return new (t || SeestudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SeestudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeestudentsComponent, selectors: [["app-seestudents"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-link", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["aria-hidden", "true", 1, "fa", "fa-unlock"]], template: function SeestudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SeestudentsComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SeestudentsComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SeestudentsComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%]{\n  font-family: 'Montserrat', sans-serif;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 150px;\n  margin-bottom: 250px;\n  margin-left: auto;\n  margin-right: auto;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\ntext-align: center;\nvertical-align: middle;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n\nwidth: 100%;\nheight: 100%;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\n}\nbutton[_ngcontent-%COMP%]{\n  outline: none;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #0a192f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9zZWVzdHVkZW50cy9zZWVzdHVkZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvc2Vlc3R1ZGVudHMvc2Vlc3R1ZGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XG4qe1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuLnRhYmxle1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG50aCx0ZHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5odG1sLGJvZHl7XG5cbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmJ1dHRvbntcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaDQsaDV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBhMTkyZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeestudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seestudents',
                templateUrl: './seestudents.component.html',
                styleUrls: ['./seestudents.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "JmRu":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class StudentService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/student/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    getAllQuiz() {
        return this.http.get(this.baseUri + "getallquiz", { headers: this.headers });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    block() {
        return this.http.put(this.baseUri + "blockme", {}, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "MTG3":
/*!************************************************************!*\
  !*** ./src/app/index/indexheader/indexheader.component.ts ***!
  \************************************************************/
/*! exports provided: IndexheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexheaderComponent", function() { return IndexheaderComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");





class IndexheaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        // this.check();
    }
    check() {
        this.authService.check().subscribe(data => {
            console.log(data);
        }, (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                this.authService.logoutUser();
                this.router.navigate(['/']);
            }
            console.log(error);
        });
    }
}
IndexheaderComponent.ɵfac = function IndexheaderComponent_Factory(t) { return new (t || IndexheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
IndexheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexheaderComponent, selectors: [["app-indexheader"]], decls: 11, vars: 0, consts: [["lang", "en"], [1, "masthead"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12", "text-center"], [1, "font-weight-light"], [1, "lead"]], template: function IndexheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Welcome to Online Quiz!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "It ain't that I'm questionin' you. To take part in any quiz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: #fff;\n\n}\n\n.masthead[_ngcontent-%COMP%] {\n  height:89.5vh;\n  color: #0A192F;\n  overflow-y: hidden;\n  min-height: 500px;\n  background-image: url('bg.jfif');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  font-family: 'Space Mono', monospace;\n\n}\n\n.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  animation: focus-in-contract-bck 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\n.lead[_ngcontent-%COMP%]{\n    color: #0A192F;\n    font-weight: bold;\n    letter-spacing: 2px;\n}\n\n@keyframes focus-in-contract-bck {\n  0% {\n    letter-spacing: 1em;\n    transform: translateZ(300px);\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(12px);\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXhoZWFkZXIvaW5kZXhoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0NBQW9EO0VBQ3BELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9DQUFvQzs7QUFFdEM7O0FBQ0E7RUFFRSxpRkFBaUY7QUFDbkY7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFtQkE7RUFDRTtJQUNFLG1CQUFtQjtJQUVYLDRCQUE0QjtJQUU1QixrQkFBa0I7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFFVSwyQkFBMkI7SUFFM0IsZUFBZTtJQUN2QixVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4aGVhZGVyL2luZGV4aGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxufVxuXG4ubWFzdGhlYWQge1xuICBoZWlnaHQ6ODkuNXZoO1xuICBjb2xvcjogIzBBMTkyRjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnLmpmaWYnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XG5cbn1cbi5tYXN0aGVhZCBoMXtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0LWJjayAycyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApICBib3RoO1xuICBhbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0LWJjayAycyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG4ubGVhZHtcbiAgICBjb2xvcjogIzBBMTkyRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3QtYmNrIHtcbiAgMCUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDMwMHB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3QtYmNrIHtcbiAgMCUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDMwMHB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-indexheader',
                templateUrl: './indexheader.component.html',
                styleUrls: ['./indexheader.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "N/mo":
/*!****************************************************!*\
  !*** ./src/app/admin/student/student.component.ts ***!
  \****************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function StudentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function StudentComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function StudentComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentComponent_ng_template_11_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.block(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.unblock(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r9.blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r9.blocked);
} }
function StudentComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentComponent_ng_template_11_ng_template_1_tr_12_Template, 11, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.users);
} }
function StudentComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentComponent_ng_template_11_ng_template_1_Template, 13, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class StudentComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.msg = [];
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.seestudent()
            .subscribe(data => {
            if (data['user']) {
                this.loading = false;
                this.users = data['user'];
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.adminService.blockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.adminService.unblockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["app-student"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-link", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["aria-hidden", "true", 1, "fa", "fa-unlock"]], template: function StudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%]{\n  font-family: 'Montserrat', sans-serif;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 150px;\n  margin-bottom: 250px;\n  margin-left: auto;\n  margin-right: auto;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\ntext-align: center;\nvertical-align: middle;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n\nwidth: 100%;\nheight: 100%;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\n}\nbutton[_ngcontent-%COMP%]{\n  outline: none;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #0a192f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xuKntcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cbi50YWJsZXtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxudGgsdGR7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaHRtbCxib2R5e1xuXG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5idXR0b257XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0LGg1e1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYTE5MmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student',
                templateUrl: './student.component.html',
                styleUrls: ['./student.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "NgLx":
/*!**************************************************************!*\
  !*** ./src/app/teacher/addquestion/addquestion.component.ts ***!
  \**************************************************************/
/*! exports provided: AddquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionComponent", function() { return AddquestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddquestionComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.msg);
} }
class AddquestionComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.options = [];
    }
    ngOnInit() {
        if (this.teacherService.getQuizId() == undefined) {
            this.router.navigate(['/teacher/uploadquiz']);
        }
        else {
            this.quizid = this.teacherService.getQuizId();
        }
    }
    addQuestion(f) {
        this.options.push({ optionValue: '1', optionText: f.controls.optionA.value });
        this.options.push({ optionValue: '2', optionText: f.controls.optionB.value });
        this.options.push({ optionValue: '3', optionText: f.controls.optionC.value });
        this.options.push({ optionValue: '4', optionText: f.controls.optionD.value });
        // console.log(this.options);
        this.obj = { quizid: this.quizid, options: this.options, questionText: f.controls.questionText.value, answer: f.controls.answer.value };
        // console.log(this.obj);
        this.teacherService.addQuestion(this.obj)
            .subscribe(data => {
            // console.log(data);
            this.router.navigate(['/teacher/uploadquiz']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
AddquestionComponent.ɵfac = function AddquestionComponent_Factory(t) { return new (t || AddquestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddquestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddquestionComponent, selectors: [["app-addquestion"]], decls: 47, vars: 2, consts: [[1, "container", "mt-5"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "questionText"], ["type", "text", "name", "questionText", "autocomplete", "off", "id", "questionText", "ngModel", "", "required", "", 1, "form-control"], ["questionText", "ngModel"], ["for", "optionA"], ["type", "text", "name", "optionA", "autocomplete", "off", "id", "optionA", "ngModel", "", "required", "", 1, "form-control"], ["optionA", "ngModel"], ["for", "optionB"], ["type", "text", "name", "optionB", "autocomplete", "off", "id", "optionB", "ngModel", "", "required", "", 1, "form-control"], ["optionB", "ngModel"], ["for", "optionC"], ["type", "text", "name", "optionC", "autocomplete", "off", "id", "optionC", "ngModel", "", "required", "", 1, "form-control"], ["optionC", "ngModel"], ["for", "optionD"], ["type", "text", "name", "optionD", "autocomplete", "off", "id", "optionD", "ngModel", "", "required", "", 1, "form-control"], ["optionD", "ngModel"], [1, "form-group", 2, "margin-top", "10px"], ["for", "answer"], ["type", "radio", "value", "1", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["answer", "ngModel"], ["type", "radio", "value", "2", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["type", "radio", "value", "3", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["type", "radio", "value", "4", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function AddquestionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddquestionComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.addQuestion(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Option1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Option2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Option3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 24, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 25, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AddquestionComponent_p_46_Template, 2, 1, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["label[_ngcontent-%COMP%]{\n  font-size: 17px;\n  padding: 10px 0;\n}\n\nbutton[_ngcontent-%COMP%]{\n\n  margin-top: 20px;\n}\n\n.btn-primary[_ngcontent-%COMP%]{\n  background-color: #0a192f;\n  font-weight: 600;\n  outline: none;\n  border: none;\n}\n\n\n\ninput[type=\"radio\"][_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9hZGRxdWVzdGlvbi9hZGRxdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL2FkZHF1ZXN0aW9uL2FkZHF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmJ1dHRvbntcblxuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnRuLXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogaW5wdXQgKi9cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddquestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addquestion',
                templateUrl: './addquestion.component.html',
                styleUrls: ['./addquestion.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "NxgW":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "O94/":
/*!******************************************************!*\
  !*** ./src/app/admin/adminnav/adminnav.component.ts ***!
  \******************************************************/
/*! exports provided: AdminnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminnavComponent", function() { return AdminnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");




const _c0 = function () { return ["/admin/adminhome"]; };
const _c1 = function () { return ["/admin/viewstudent"]; };
const _c2 = function () { return ["/admin/viewteacher"]; };
const _c3 = function () { return ["/"]; };
class AdminnavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
}
AdminnavComponent.ɵfac = function AdminnavComponent_Factory(t) { return new (t || AdminnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AdminnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminnavComponent, selectors: [["app-adminnav"]], decls: 21, vars: 8, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "click"]], template: function AdminnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "view Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "view Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnavComponent_Template_a_click_19_listener() { return ctx.logoutuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\n  background-color: #0A192F;\n  color: #fff;\n  min-height: 75px;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  position: relative;\n  padding: 14px 0 5px;\n  margin: 0 25px;\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Audiowide' ,cursive;\n  font-size: 15px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\n  content: '';\n  position: absolute;\n\n  bottom: 0;\n\n  transform: translateX(-100%) scaleX(0);\n  -webkit-transform: translateX(-100%) scaleX(0);\n  transform-origin: 50% 50%;\n\n\n  width: 100%;\n  height: 2px;\n\n  background-color:#fff;\n  transition: transform 250ms;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\n\n  transform: translateX(-100%) scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5uYXYvYWRtaW5uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWlubmF2L2FkbWlubmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qLS0tLS0tLS0tLS0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cbi5uYXZiYXIgdWwgbGl7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG51bCBsaSBhe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE0cHggMCA1cHg7XG4gIG1hcmdpbjogMCAyNXB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJyAsY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIgdWwgbGkgYTphZnRlcntcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBib3R0b206IDA7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMCk7XG5cblxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcblxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcbn1cblxuLm5hdmJhciB1bCBsaSBhOmhvdmVyOmFmdGVye1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminnav',
                templateUrl: './adminnav.component.html',
                styleUrls: ['./adminnav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "O94Z":
/*!******************************************************!*\
  !*** ./src/app/loading/loading/loading.component.ts ***!
  \******************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 5, vars: 0, consts: [[1, "loading"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", 2, "position", "absolute", "top", "50%", "color", "#0a192f"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'quiz';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UkjL":
/*!**************************************************************!*\
  !*** ./src/app/teacher/teacherhome/teacherhome.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherhomeComponent", function() { return TeacherhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function TeacherhomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TeacherhomeComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TeacherhomeComponent_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any uploaded Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const q_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.viewQuestion(q_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const q_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.delete(q_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r9.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r9.quizdescription, " ");
} }
function TeacherhomeComponent_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "See Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template, 13, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.quiz);
} }
function TeacherhomeComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeacherhomeComponent_ng_template_13_div_0_Template, 10, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherhomeComponent_ng_template_13_ng_template_1_Template, 15, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class TeacherhomeComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.gethomequiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.quiz = data['quiz'];
                this.loading = false;
                // console.log(this.quiz.length);
                if (!this.quiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.teacherService.setQuizId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestion']);
    }
    delete(quiz) {
        this.teacherService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
TeacherhomeComponent.ɵfac = function TeacherhomeComponent_Factory(t) { return new (t || TeacherhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherhomeComponent, selectors: [["app-teacherhome"]], decls: 15, vars: 3, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f"], [1, "btn", "btn-danger", 3, "click"]], template: function TeacherhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello, world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeacherhomeComponent_div_10_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeacherhomeComponent_ng_template_11_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeacherhomeComponent_ng_template_13_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%]{\n  font-family: 'Montserrat', sans-serif;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 150px;\n  margin-bottom: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  color: #0a192f;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\ntext-align: center;\nvertical-align: middle;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n\nwidth: 100%;\nheight: 100%;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\n}\nbutton[_ngcontent-%COMP%]{\n  outline: none;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n  color: #0a192f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVyaG9tZS90ZWFjaGVyaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci90ZWFjaGVyaG9tZS90ZWFjaGVyaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcbip7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG4udGFibGV7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6ICMwYTE5MmY7XG59XG50aCx0ZHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5odG1sLGJvZHl7XG5cbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmJ1dHRvbntcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaDQsaDV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBhMTkyZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacherhome',
                templateUrl: './teacherhome.component.html',
                styleUrls: ['./teacherhome.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _index_indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/indexheader/indexheader.component */ "MTG3");
/* harmony import */ var _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/indexmain/indexmain.component */ "4+a0");
/* harmony import */ var _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login-teacher/login-teacher.component */ "BvBR");
/* harmony import */ var _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login-student/login-student.component */ "wFJB");
/* harmony import */ var _admin_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.guard */ "17Sp");
/* harmony import */ var _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/teacher.guard */ "zqFa");
/* harmony import */ var _student_student_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student/student.guard */ "tn5a");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/token-interceptor.service */ "NxgW");
/* harmony import */ var _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/reset/reset.component */ "y7II");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ "xT/v");
/* harmony import */ var _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/reset-password-done/reset-password-done.component */ "EMjD");
/* harmony import */ var _index_temp_temp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index/temp/temp.component */ "mp5M");
/* harmony import */ var _index_t_t_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index/t/t.component */ "mdn8");
/* harmony import */ var _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./teacher/teacherhome/teacherhome.component */ "UkjL");
/* harmony import */ var _admin_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/adminnav/adminnav.component */ "O94/");
/* harmony import */ var _teacher_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teacher/teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _student_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./student/studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/adminhome/adminhome.component */ "mjI7");
/* harmony import */ var _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./student/studenthome/studenthome.component */ "qAPG");
/* harmony import */ var _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./teacher/createquiz/createquiz.component */ "0/SE");
/* harmony import */ var _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./teacher/uploadquiz/uploadquiz.component */ "9fHA");
/* harmony import */ var _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./teacher/seestudents/seestudents.component */ "IbWB");
/* harmony import */ var _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./teacher/addquestion/addquestion.component */ "NgLx");
/* harmony import */ var _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./teacher/seequestion/seequestion.component */ "8fTH");
/* harmony import */ var _admin_student_student_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/student/student.component */ "N/mo");
/* harmony import */ var _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/teacher/teacher.component */ "11p2");
/* harmony import */ var _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./error/notfound-error/notfound-error.component */ "5xLU");
/* harmony import */ var _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./error/server-error/server-error.component */ "BWLr");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./loading/loading/loading.component */ "O94Z");
/* harmony import */ var _msgbox_msgbox_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./msgbox/msgbox.component */ "ZNcC");
/* harmony import */ var _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/view-question/view-question.component */ "1M0h");
/* harmony import */ var _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./student/playquiz/playquiz.component */ "hPIn");
/* harmony import */ var _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./error/cheating/cheating.component */ "fauK");












































// import { WebcamModule } from 'ngx-webcam';
//  import { NgxCaptchaModule } from 'ngx-captcha';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"], _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["TeacherGuard"], _student_student_guard__WEBPACK_IMPORTED_MODULE_15__["StudentGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // WebcamModule,
            // RecaptchaMo
            // NgxCaptchaModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_8__["IndexnavComponent"],
        _index_indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_9__["IndexheaderComponent"],
        _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_10__["IndexmainComponent"],
        _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_11__["LoginTeacherComponent"],
        _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_12__["LoginStudentComponent"],
        _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_17__["ResetComponent"],
        _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordComponent"],
        _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordDoneComponent"],
        _index_temp_temp_component__WEBPACK_IMPORTED_MODULE_20__["TempComponent"],
        _index_t_t_component__WEBPACK_IMPORTED_MODULE_21__["TComponent"],
        _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_22__["TeacherhomeComponent"],
        _admin_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_23__["AdminnavComponent"],
        _teacher_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_24__["TeachernavComponent"],
        _student_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_25__["StudentnavComponent"],
        _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_26__["AdminhomeComponent"],
        _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_27__["StudenthomeComponent"],
        _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_28__["CreatequizComponent"],
        _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_29__["UploadquizComponent"],
        _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_30__["SeestudentsComponent"],
        _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_31__["AddquestionComponent"],
        _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_32__["SeequestionComponent"],
        _admin_student_student_component__WEBPACK_IMPORTED_MODULE_33__["StudentComponent"],
        _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_34__["TeacherComponent"],
        _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_35__["NotfoundErrorComponent"],
        _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_36__["ServerErrorComponent"],
        _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_37__["LoadingComponent"],
        _msgbox_msgbox_component__WEBPACK_IMPORTED_MODULE_38__["MsgboxComponent"],
        _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_39__["ViewQuestionComponent"],
        _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_40__["PlayquizComponent"],
        _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_41__["CheatingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // WebcamModule,
        // RecaptchaMo
        // NgxCaptchaModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_8__["IndexnavComponent"],
                    _index_indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_9__["IndexheaderComponent"],
                    _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_10__["IndexmainComponent"],
                    _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_11__["LoginTeacherComponent"],
                    _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_12__["LoginStudentComponent"],
                    _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_17__["ResetComponent"],
                    _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordComponent"],
                    _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordDoneComponent"],
                    _index_temp_temp_component__WEBPACK_IMPORTED_MODULE_20__["TempComponent"],
                    _index_t_t_component__WEBPACK_IMPORTED_MODULE_21__["TComponent"],
                    _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_22__["TeacherhomeComponent"],
                    _admin_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_23__["AdminnavComponent"],
                    _teacher_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_24__["TeachernavComponent"],
                    _student_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_25__["StudentnavComponent"],
                    _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_26__["AdminhomeComponent"],
                    _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_27__["StudenthomeComponent"],
                    _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_28__["CreatequizComponent"],
                    _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_29__["UploadquizComponent"],
                    _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_30__["SeestudentsComponent"],
                    _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_31__["AddquestionComponent"],
                    _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_32__["SeequestionComponent"],
                    _admin_student_student_component__WEBPACK_IMPORTED_MODULE_33__["StudentComponent"],
                    _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_34__["TeacherComponent"],
                    _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_35__["NotfoundErrorComponent"],
                    _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_36__["ServerErrorComponent"],
                    _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_37__["LoadingComponent"],
                    _msgbox_msgbox_component__WEBPACK_IMPORTED_MODULE_38__["MsgboxComponent"],
                    _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_39__["ViewQuestionComponent"],
                    _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_40__["PlayquizComponent"],
                    _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_41__["CheatingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // WebcamModule,
                    // RecaptchaMo
                    // NgxCaptchaModule,
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                ],
                providers: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"], _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["TeacherGuard"], _student_student_guard__WEBPACK_IMPORTED_MODULE_15__["StudentGuard"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZNcC":
/*!********************************************!*\
  !*** ./src/app/msgbox/msgbox.component.ts ***!
  \********************************************/
/*! exports provided: MsgboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgboxComponent", function() { return MsgboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class MsgboxComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.box').fadeOut(4000);
        });
    }
}
MsgboxComponent.ɵfac = function MsgboxComponent_Factory(t) { return new (t || MsgboxComponent)(); };
MsgboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MsgboxComponent, selectors: [["app-msgbox"]], inputs: { message: "message", styl: "styl" }, decls: 4, vars: 4, consts: [[1, "box"], [1, "error", 3, "ngStyle"]], template: function MsgboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.message), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".box[_ngcontent-%COMP%] {\n  position:fixed;\n   bottom: 20px;\n   right: 20px;\n  color: #f1f1f1;\n}\n.error[_ngcontent-%COMP%] {\n  min-width: min(400px, 70vw);\n  max-width: 1000px;\n  opacity: 0;\n  transform: translateY(50px);\n  animation: animate 400ms forwards var(--animation-function);\n}\n.box[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  margin: 1rem;\n  white-space: nowrap;\n  \n  overflow: hidden;\n  border-radius: 5px;\n  padding: 1rem 1rem;\n}\n@keyframes animate {\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@media (max-width: 650px) {\n  .error[_ngcontent-%COMP%] {\n    background: rgb(240, 71, 71);\n    transform: translateY(-50px);\n    white-space: normal;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNnYm94L21zZ2JveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztHQUNiLFlBQVk7R0FDWixXQUFXO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDJEQUEyRDtBQUM3RDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFHQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1QjtBQUNGO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tc2dib3gvbXNnYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gICBib3R0b206IDIwcHg7XG4gICByaWdodDogMjBweDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG4uZXJyb3Ige1xuICBtaW4td2lkdGg6IG1pbig0MDBweCwgNzB2dyk7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSA0MDBtcyBmb3J3YXJkcyB2YXIoLS1hbmltYXRpb24tZnVuY3Rpb24pO1xufVxuLmJveCAuZXJyb3Ige1xuICBtYXJnaW46IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDcxLCA3MSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsgboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-msgbox',
                templateUrl: './msgbox.component.html',
                styleUrls: ['./msgbox.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fauK":
/*!******************************************************!*\
  !*** ./src/app/error/cheating/cheating.component.ts ***!
  \******************************************************/
/*! exports provided: CheatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatingComponent", function() { return CheatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");



class CheatingComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheatingComponent.ɵfac = function CheatingComponent_Factory(t) { return new (t || CheatingComponent)(); };
CheatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheatingComponent, selectors: [["app-cheating"]], decls: 6, vars: 0, consts: [[2, "overflow-x", "hidden"], [1, "text-center", "mt-5", 2, "color", "#2f2e41"], [1, "d-flex", "justify-content-center", "mt-3"], ["src", "../../../assets/img/cheat.svg", "alt", "", 1, "img-fluid", 2, "max-height", "500px"]], template: function CheatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hmmm ! Seems Like You Cheated !!! Your Login is Blocked. Unblock yourself by contacting Admin or Teacher. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"]], styles: ["*[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  h4[_ngcontent-%COMP%]{\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvY2hlYXRpbmcvY2hlYXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9jaGVhdGluZy9jaGVhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBoNHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cheating',
                templateUrl: './cheating.component.html',
                styleUrls: ['./cheating.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hPIn":
/*!********************************************************!*\
  !*** ./src/app/student/playquiz/playquiz.component.ts ***!
  \********************************************************/
/*! exports provided: PlayquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayquizComponent", function() { return PlayquizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");








function PlayquizComponent_app_studentnav_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentnav");
} }
function PlayquizComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PlayquizComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function PlayquizComponent_ng_template_10_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlayquizComponent_ng_template_10_div_12_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.answer(ctx_r11.oneQuestion.questionId, user_r9.optionValue); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.optionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r9.optionValue);
} }
function PlayquizComponent_ng_template_10_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayquizComponent_ng_template_10_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayquizComponent_ng_template_10_div_13_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.lastsubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.flageLast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.flageLast);
} }
function PlayquizComponent_ng_template_10_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have scored ", ctx_r8.score, "/", ctx_r8.totalQuestion, "");
} }
function PlayquizComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayquizComponent_ng_template_10_div_12_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayquizComponent_ng_template_10_div_13_Template, 7, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayquizComponent_ng_template_10_h4_14_Template, 2, 2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CONGRATULATIONS!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayquizComponent_ng_template_10_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.navigatehome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CONTINUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r5.questionCounter, " of ", ctx_r5.totalQuestion, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timeleft 00:", ctx_r5.timePerQuestion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. ", ctx_r5.oneQuestion.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.oneQuestion.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.finalsubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.finalsubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have scored ", ctx_r5.score, "/", ctx_r5.totalQuestion, "");
} }
class PlayquizComponent {
    constructor(studentService, authService, router) {
        this.studentService = studentService;
        this.authService = authService;
        this.router = router;
        this.solutionArray = [];
        this.ansOfOneQuestion = [];
        this.ansKey = [];
        this.time = 10;
        this.score = 0;
        this.flageLast = false;
        this.questionCounter = 1;
        this.finishflag = false;
        this.finalsubmit = false;
    }
    ngOnInit() {
        // this.toggleFullScreen(document.body)
        this.load = true;
        if (this.studentService.getQuizId() == undefined) {
            this.router.navigate(['/student/studenthome']);
        }
        else {
            this.quizid = this.studentService.getQuizId();
            this.getAllQuestions(this.quizid);
            this.myurl = this.router.url;
            // console.log(this.myurl);
            window.addEventListener('blur', event => {
                if (this.myurl === "/student/playquiz" && this.finalsubmit == false) {
                    this.block();
                }
            });
            window.addEventListener('resize', event => {
                if (this.myurl === "/student/playquiz" && this.finalsubmit == false) {
                    this.block();
                }
            });
        }
    }
    getAllQuestions(quizid) {
        this.studentService.getAllQuestion(quizid)
            .subscribe(data => {
            if (data['msg']) {
                this.load = false;
                this.allQuestions = data['msg'];
                this.createAns();
                this.shuffleQuestion();
                this.timePerQuestion = this.time;
                this.totalQuestion = this.allQuestions.length;
                this.oneQuestion = this.allQuestions[0];
                this.countdown();
            }
            // console.log(this.allQuestions);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    shuffleQuestion() {
        var m = this.allQuestions.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.allQuestions[m];
            this.allQuestions[m] = this.allQuestions[i];
            this.allQuestions[i] = t;
        }
        this.shuffleOption();
    }
    shuffleOption() {
        for (let i = 0; i < this.allQuestions.length; i++) {
            var x = this.allQuestions[i].options;
            var m = 4, t, j;
            while (m) {
                j = Math.floor(Math.random() * m--);
                t = x[m];
                x[m] = x[j];
                x[j] = t;
            }
        }
    }
    createAns() {
        for (let index = 0; index < this.allQuestions.length; index++) {
            const id = this.allQuestions[index].questionId;
            const ans = this.allQuestions[index].answer;
            this.ansKey.push({ qid: id, ans: ans });
        }
        // console.log("key");
        // console.log(this.ansKey);
    }
    countdown() {
        this.interval = setInterval(() => {
            if (this.timePerQuestion > 0) {
                this.timePerQuestion--;
            }
            if (this.timePerQuestion == 0) {
                // reset
                if (this.questionCounter + 1 <= this.totalQuestion) {
                    this.oneQuestion = this.allQuestions[this.questionCounter];
                    this.questionCounter++;
                    if (this.questionCounter == this.totalQuestion) {
                        this.flageLast = true;
                    }
                    this.timePerQuestion = this.time;
                    // console.log("reset timer");
                }
                else {
                    // this.router.navigate(['/']);
                    this.myStopFunction(this.interval);
                    // localStorage.removeItem('load');
                    // console.log("timeout");
                    this.finalsubmit = true;
                    this.getScore();
                }
            }
        }, 1000);
        // console.log("hloo");
    }
    myStopFunction(a) {
        clearInterval(a);
    }
    nextQuestion() {
        // console.log("button clicked");
        if (this.questionCounter != this.totalQuestion) {
            this.questionCounter++;
            if (this.questionCounter == this.totalQuestion) {
                this.flageLast = true;
            }
            this.oneQuestion = this.allQuestions[this.questionCounter - 1];
            this.timePerQuestion = this.time;
        }
        if (this.questionCounter > this.totalQuestion) {
            // this.router.navigate(['/']);
            this.myStopFunction(this.interval);
            // this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
            //   .subscribe(
            //     data => {
            //       if (data['msg']) {
            //         console.log('data of msh');
            //         console.log(data['msg']);
            //       }
            //     },
            //     error => { console.error(error); }
            //   )
        }
    }
    navigatehome() {
        this.router.navigate(['/student/studenthome']);
    }
    answer(qid, ans) {
        this.temp = this.ansOfOneQuestion.pop();
        if (this.temp) {
            if (this.temp.qid != qid) {
                this.ansOfOneQuestion.push(this.temp);
            }
        }
        this.ansOfOneQuestion.push({ qid: qid, ans: ans });
    }
    getScore() {
        for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
            for (let j = 0; j < this.ansKey.length; j++) {
                if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
                    if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
                        this.score++;
                    }
                }
            }
        }
    }
    lastsubmit() {
        this.finalsubmit = true;
        // localStorage.removeItem('load');
        this.myStopFunction(this.interval);
        this.getScore();
    }
    block() {
        this.studentService.block().subscribe(data => {
            // console.log(data);
            if (data['message']) {
                this.authService.logoutUser();
                this.router.navigate(['/cheat']);
            }
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
PlayquizComponent.ɵfac = function PlayquizComponent_Factory(t) { return new (t || PlayquizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PlayquizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayquizComponent, selectors: [["app-playquiz"]], decls: 12, vars: 4, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [1, "container", "mt-sm-5", "my-1"], [1, "bg-white", "p-3", "border-bottom"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "mcq"], [1, "text-danger"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2", "h5"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center pt-3", "style", "position: relative;margin-top: 20px;margin-bottom: 20px;", 4, "ngIf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "card"], [1, "text-right", "cross"], [1, "fa", "fa-times"], [1, "card-body", "text-center"], ["src", "../../../assets/img/achivement.svg", 1, "img-fluid"], [1, "btn", "btn-out", "btn-square", "continue", "mt-5", 2, "cursor", "pointer", 3, "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"], [1, "options"], ["type", "radio", "name", "option", 3, "value", "change"], [1, "checkmark"], [1, "d-flex", "align-items-center", "pt-3", 2, "position", "relative", "margin-top", "20px", "margin-bottom", "20px"], [1, "clsbtnleft"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "clsbtnright"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function PlayquizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayquizComponent_app_studentnav_6_Template, 1, 0, "app-studentnav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayquizComponent_div_7_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayquizComponent_ng_template_8_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayquizComponent_ng_template_10_Template, 28, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalsubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r2)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_5__["StudentnavComponent"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n.container[_ngcontent-%COMP%] {\n    background-color:#f1f1f1;\n    color: #0a192f;\n    border-radius: 10px;\n    padding: 20px;\n    font-family: 'Montserrat', sans-serif;\n    max-width: 800px;\n\n}\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    font-size: 32px;\n}\n.question[_ngcontent-%COMP%] {\n    width: 100%;\n    color: #0a192f;\n\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n.options[_ngcontent-%COMP%] {\n    position: relative;\n    padding-left: 40px;\n}\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n    font-size: 16px;\n    font-weight: bold;\n    cursor: pointer;\n}\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n.clsbtnleft[_ngcontent-%COMP%]\n{\n    position: absolute;\n    left: 35%;\n\n}\n.clsbtnright[_ngcontent-%COMP%]\n{\n\n    position: absolute;\n    right: 30%;\n}\n.checkmark[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -1px;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #f1f1f1;\n    border: 2px solid #0a192f;\n    border-radius: 50%;\n}\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n}\n.options[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    \n    display: block;\n    background: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 300ms ease-in-out 0s;\n}\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\n    background: #0a192f;\n    transition: 300ms ease-in-out 0s;\n}\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n@media(max-width:720px) {\n\n    .clsbtnleft[_ngcontent-%COMP%]\n    {\n        left:30%;\n    }\n    .clsbtnright[_ngcontent-%COMP%]\n    {\n        right: 30%;\n    }\n}\n@media(max-width:576px) {\n    .question[_ngcontent-%COMP%] {\n        width: 100%;\n        word-spacing: 2px;\n    }\n    .clsbtnleft[_ngcontent-%COMP%]\n    {\n        left:20%;\n    }\n    .clsbtnright[_ngcontent-%COMP%]\n    {\n        right: 20%;\n    }\n}\n@media(max-width:356px) {\n\n    .clsbtnleft[_ngcontent-%COMP%]\n    {\n        left:10%;\n    }\n    .clsbtnright[_ngcontent-%COMP%]\n    {\n        right: 10%;\n    }\n}\n.card[_ngcontent-%COMP%]{\n\n  color: #0a192f;\n  font-family: \"Poppins\", sans-serif;\n\n}\n.mt-100[_ngcontent-%COMP%] {\n    margin-top: 100px\n}\np[_ngcontent-%COMP%] {\n    font-size: 14px\n}\nh4[_ngcontent-%COMP%] {\n    margin-top: 18px\n}\n.cross[_ngcontent-%COMP%] {\n    padding: 10px;\n    color: #0a192f;\n    cursor: pointer\n}\n.continue[_ngcontent-%COMP%]:focus {\n    outline: none\n}\n.continue[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    text-transform: capitalize;\n    font-size: 13px;\n    padding: 8px 19px;\n    cursor: pointer;\n    color: #fff;\n    background-color: #0a192f\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9wbGF5cXVpei9wbGF5cXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7O0FBRWxCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjtBQUNBOzs7SUFHSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSDs7SUFFSTs7UUFFSSxRQUFRO0lBQ1o7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksUUFBUTtJQUNaO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0FBQ0o7QUFDQTs7SUFFSTs7UUFFSSxRQUFRO0lBQ1o7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUlBOztFQUVFLGNBQWM7RUFDZCxrQ0FBa0M7O0FBRXBDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3BsYXlxdWl6L3BsYXlxdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7ICovXG59XG5cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO1xuICAgIGNvbG9yOiAjMGExOTJmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIG1heC13aWR0aDogODAwcHg7XG5cbn1cblxuXG4uY29udGFpbmVyPnAge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzBhMTkyZjtcblxufVxuaDQsaDV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9wdGlvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbiNvcHRpb25zIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcHRpb25zIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY2xzYnRubGVmdFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNSU7XG5cbn1cbi5jbHNidG5yaWdodFxue1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMCU7XG59XG4uY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzBhMTkyZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vcHRpb25zIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vcHRpb25zIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIC8qIGNvbG9yOiByZWQ7ICovXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2Vkfi5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQ6ICMwYTE5MmY7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuXG4vKiAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgY29sb3I6ICNkZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiZjczO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMWJmNzM7XG59XG5cbi5idG4tc3VjY2VzcyB7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYmY3Mztcbn0gKi9cblxuQG1lZGlhKG1heC13aWR0aDo3MjBweCkge1xuXG4gICAgLmNsc2J0bmxlZnRcbiAgICB7XG4gICAgICAgIGxlZnQ6MzAlO1xuICAgIH1cbiAgICAuY2xzYnRucmlnaHRcbiAgICB7XG4gICAgICAgIHJpZ2h0OiAzMCU7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgLnF1ZXN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgIH1cbiAgICAuY2xzYnRubGVmdFxuICAgIHtcbiAgICAgICAgbGVmdDoyMCU7XG4gICAgfVxuICAgIC5jbHNidG5yaWdodFxuICAgIHtcbiAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjM1NnB4KSB7XG5cbiAgICAuY2xzYnRubGVmdFxuICAgIHtcbiAgICAgICAgbGVmdDoxMCU7XG4gICAgfVxuICAgIC5jbHNidG5yaWdodFxuICAgIHtcbiAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICB9XG59XG5cblxuXG4uY2FyZHtcblxuICBjb2xvcjogIzBhMTkyZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuXG59XG4ubXQtMTAwIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxufVxucCB7XG4gICAgZm9udC1zaXplOiAxNHB4XG59XG5cbmg0IHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4XG59XG5cbi5jcm9zcyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogIzBhMTkyZjtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmNvbnRpbnVlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lXG59XG5cbi5jb250aW51ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA4cHggMTlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZlxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayquizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playquiz',
                templateUrl: './playquiz.component.html',
                styleUrls: ['./playquiz.component.css']
            }]
    }], function () { return [{ type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "l08C":
/*!******************************************************!*\
  !*** ./src/app/index/indexnav/indexnav.component.ts ***!
  \******************************************************/
/*! exports provided: IndexnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexnavComponent", function() { return IndexnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/student"]; };
const _c2 = function () { return ["/teacher"]; };
class IndexnavComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexnavComponent.ɵfac = function IndexnavComponent_Factory(t) { return new (t || IndexnavComponent)(); };
IndexnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexnavComponent, selectors: [["app-indexnav"]], decls: 18, vars: 6, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function IndexnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\n  background-color: #0A192F;\n  color: #fff;\n  min-height: 75px;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  position: relative;\n  padding: 14px 0 5px;\n  margin: 0 25px;\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Audiowide' ,cursive;\n  font-size: 15px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\n  content: '';\n  position: absolute;\n\n  bottom: 0;\n\n  transform: translateX(-100%) scaleX(0);\n  -webkit-transform: translateX(-100%) scaleX(0);\n  transform-origin: 50% 50%;\n\n\n  width: 100%;\n  height: 2px;\n\n  background-color:#fff;\n  transition: transform 250ms;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\n\n  transform: translateX(-100%) scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXhuYXYvaW5kZXhuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4bmF2L2luZGV4bmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qLS0tLS0tLS0tLS0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cbi5uYXZiYXIgdWwgbGl7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG51bCBsaSBhe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE0cHggMCA1cHg7XG4gIG1hcmdpbjogMCAyNXB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJyAsY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIgdWwgbGkgYTphZnRlcntcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBib3R0b206IDA7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMCk7XG5cblxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcblxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcbn1cblxuLm5hdmJhciB1bCBsaSBhOmhvdmVyOmFmdGVye1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indexnav',
                templateUrl: './indexnav.component.html',
                styleUrls: ['./indexnav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    registerStudent(body) {
        return this.http.post('http://127.0.0.1:3000/registerstudnet', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    registerTeacher(body) {
        return this.http.post('http://127.0.0.1:3000/registerteacher', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    login(body) {
        return this.http.post('http://127.0.0.1:3000/login', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    reset(body) {
        return this.http.post('http://127.0.0.1:3000/reset', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    resetpassworddone(body) {
        return this.http.post('http://127.0.0.1:3000/reset-password-done', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    check() {
        return this.http.get(this.baseUri + "/check", { headers: this.headers });
    }
    testdone(body) {
        return this.http.post('http://127.0.0.1:3000/testdone', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    testblock() {
        return this.http.post('http://127.0.0.1:3000/testblock', {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mdn8":
/*!****************************************!*\
  !*** ./src/app/index/t/t.component.ts ***!
  \****************************************/
/*! exports provided: TComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TComponent", function() { return TComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { WebcamImage } from 'ngx-webcam';
// import { Subject, Observable } from 'rxjs';
class TComponent {
    constructor() {
        // ngZone:NgZone
        //   window['onSignIn'] = user => ngZone.run(()=>{
        //     this.dosomething(user);
        // })
    }
    // dosomething(googleuser)
    // {
    //   console.log(googleuser);
    // }
    // public webcamImage: WebcamImage = null;
    // // webcam snapshot trigger
    // private trigger: Subject<void> = new Subject<void>();
    // triggerSnapshot(): void {
    //   this.trigger.next();
    // }
    // handleImage(webcamImage: WebcamImage): void {
    //   console.info('received webcam image', webcamImage);
    //   this.webcamImage = webcamImage;
    // }
    // public get triggerObservable(): Observable<void> {
    //   return this.trigger.asObservable();
    // }
    ngOnInit() {
    }
}
TComponent.ɵfac = function TComponent_Factory(t) { return new (t || TComponent)(); };
TComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TComponent, selectors: [["app-t"]], decls: 10, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [1, "container"], [1, "container-fluid"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLScWt_aPtooQqQR-eQWxE2oMm_m34zOh0b-Spd2WJZmsTI46fQ/viewform?embedded=true", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function TComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loading\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["iframe[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvdC90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvdC90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWV7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-t',
                templateUrl: './t.component.html',
                styleUrls: ['./t.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mjI7":
/*!********************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome.component.ts ***!
  \********************************************************/
/*! exports provided: AdminhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function() { return AdminhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function AdminhomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function AdminhomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function AdminhomeComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.viewQuestion(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.delete(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizdescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.owneremail);
} }
function AdminhomeComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quiz Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quiz Creater's Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template, 15, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allquiz);
} }
function AdminhomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminhomeComponent_ng_template_4_div_0_Template, 10, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminhomeComponent_ng_template_4_ng_template_1_Template, 20, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class AdminhomeComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.getAllQuiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.allquiz = data['quiz'];
                if (!this.allquiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            // console.error(error);
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.adminService.setQuizId(q._id);
        this.adminService.setDelete(q.upload);
        this.router.navigate(['/admin/seequestion']);
    }
    delete(quiz) {
        this.adminService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
AdminhomeComponent.ɵfac = function AdminhomeComponent_Factory(t) { return new (t || AdminhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminhomeComponent, selectors: [["app-adminhome"]], decls: 6, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["id", "container", 1, "container"], [1, "col-12"], [1, "table", "table-image"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f"], [1, "btn", "btn-danger", 2, "color", "#f1f1f1", 3, "click"]], template: function AdminhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminhomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminhomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminhomeComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\n  color: #0a192f;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 2rem 0rem;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  margin-bottom: 200px;\n}\nh4[_ngcontent-%COMP%] {\n  margin: 2rem 0rem 1rem;\n}\n.table-image[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-image[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\n  text-align: center;\n  }\nthead[_ngcontent-%COMP%]{\n  font-size: 18px;\n}\ntd[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 17px;\n  }\nimg[_ngcontent-%COMP%]{\n  transition: 0.5s all ease-in-out;\n}\nimg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.04);\n  }\n#edit[_ngcontent-%COMP%]{\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n#edit[_ngcontent-%COMP%]:hover{\n  color: #285aa5;\n  transform: scale(1.3);\n}\n#delete[_ngcontent-%COMP%]{\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n#delete[_ngcontent-%COMP%]:hover{\n  color: tomato;\n  transform: scale(1.3);\n}\n#plus[_ngcontent-%COMP%]{\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n#plus[_ngcontent-%COMP%]:hover{\n  color: #285aa5;\n  transform: scale(1.3);\n}\n@media (max-width: 767px) {\n  #container[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGO0VBQ0UsZUFBZTtBQUNqQjtBQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjtFQUNFLGdDQUFnQztBQUNsQztBQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgY29sb3I6ICMwYTE5MmY7XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xufVxuLnRhYmxle1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbn1cbmg0IHtcbiAgbWFyZ2luOiAycmVtIDByZW0gMXJlbTtcbn1cblxuLnRhYmxlLWltYWdlIHRkLFxuLnRhYmxlLWltYWdlIHRoIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGgsdGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxudGhlYWR7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiAgdGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5pbWd7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuICBpbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG4gIH1cbiNlZGl0e1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xufVxuI2VkaXQ6aG92ZXJ7XG4gIGNvbG9yOiAjMjg1YWE1O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbiNkZWxldGV7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbiNkZWxldGU6aG92ZXJ7XG4gIGNvbG9yOiB0b21hdG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuI3BsdXN7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbiNwbHVzOmhvdmVye1xuICBjb2xvcjogIzI4NWFhNTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI2NvbnRhaW5lcntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminhome',
                templateUrl: './adminhome.component.html',
                styleUrls: ['./adminhome.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mlVf":
/*!************************************************************!*\
  !*** ./src/app/teacher/teachernav/teachernav.component.ts ***!
  \************************************************************/
/*! exports provided: TeachernavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachernavComponent", function() { return TeachernavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");




const _c0 = function () { return ["/teacher/teacherhome"]; };
const _c1 = function () { return ["/teacher/createquiz"]; };
const _c2 = function () { return ["/teacher/uploadquiz"]; };
const _c3 = function () { return ["/teacher/seestudentes"]; };
const _c4 = function () { return ["/"]; };
class TeachernavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
}
TeachernavComponent.ɵfac = function TeachernavComponent_Factory(t) { return new (t || TeachernavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
TeachernavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeachernavComponent, selectors: [["app-teachernav"]], decls: 24, vars: 10, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "click"]], template: function TeachernavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upload Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "See Studentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachernavComponent_Template_a_click_22_listener() { return ctx.logoutuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\n  background-color: #0A192F;\n  color: #fff;\n  min-height: 75px;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  position: relative;\n  padding: 14px 0 5px;\n  margin: 0 25px;\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Audiowide' ,cursive;\n  font-size: 15px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\n  content: '';\n  position: absolute;\n\n  bottom: 0;\n\n  transform: translateX(-100%) scaleX(0);\n  -webkit-transform: translateX(-100%) scaleX(0);\n  transform-origin: 50% 50%;\n\n\n  width: 100%;\n  height: 2px;\n\n  background-color:#fff;\n  transition: transform 250ms;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\n\n  transform: translateX(-100%) scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVybmF2L3RlYWNoZXJuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvdGVhY2hlcm5hdi90ZWFjaGVybmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qLS0tLS0tLS0tLS0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cblxuLm5hdmJhciB1bCBsaXtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbnVsIGxpIGF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTRweCAwIDVweDtcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnICxjdXJzaXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB1bCBsaSBhOmFmdGVye1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGJvdHRvbTogMDtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcblxuXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xufVxuXG4ubmF2YmFyIHVsIGxpIGE6aG92ZXI6YWZ0ZXJ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachernavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teachernav',
                templateUrl: './teachernav.component.html',
                styleUrls: ['./teachernav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "mp5M":
/*!**********************************************!*\
  !*** ./src/app/index/temp/temp.component.ts ***!
  \**********************************************/
/*! exports provided: TempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempComponent", function() { return TempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "Gyf/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TempComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TempComponent_div_18_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.answer(ctx_r4.oneQuestion.questionId, user_r2.optionValue); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.optionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r2.optionValue);
} }
function TempComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TempComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TempComponent_div_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.lastsubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.flageLast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.flageLast);
} }
class TempComponent {
    constructor(router, authService, webSocketService) {
        this.router = router;
        this.authService = authService;
        this.webSocketService = webSocketService;
        // 0:<span *ngIf="timeLeft < 10">0</span>{{ timeLeft }}
        this.solutionArray = [];
        this.ansOfOneQuestion = [];
        this.ansKey = [];
        this.time = 10;
        this.score = 0;
        this.flageLast = false;
        this.questionCounter = 1;
        this.finishflag = false;
        this.finalsubmit = false;
        // submitAvail:any = true;
        this.allQuestions = [
            {
                questionId: 1,
                questionText: 'a?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '1',
            },
            {
                questionId: 2,
                questionText: 'b?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '2',
            },
            {
                questionId: 3,
                questionText: 'c?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '3',
            },
            {
                questionId: 4,
                questionText: 'd?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '4',
            }
        ];
    }
    ngOnInit() {
        // window.addEventListener('blur', event => {
        //   this.router.navigate(['/']);
        // localStorage.removeItem('load');
        // });
        // window.addEventListener('resize', event => {
        //   this.router.navigate(['/']);
        // localStorage.removeItem('load');
        // });
        console.log("loacal");
        console.log();
        if (!localStorage.getItem('load')) {
            localStorage.setItem('load', '1');
        }
        else {
            alert("you reloaded this page");
        }
        this.createAns();
        this.shuffleQuestion();
        this.webSocketService.listen('test event').subscribe((data) => {
            console.log(data);
        });
        this.timePerQuestion = this.time;
        this.totalQuestion = this.allQuestions.length;
        this.oneQuestion = this.allQuestions[0];
        this.countdown();
    }
    shuffleQuestion() {
        var m = this.allQuestions.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.allQuestions[m];
            this.allQuestions[m] = this.allQuestions[i];
            this.allQuestions[i] = t;
        }
        this.shuffleOption();
    }
    shuffleOption() {
        for (let i = 0; i < this.allQuestions.length; i++) {
            var x = this.allQuestions[i].options;
            var m = 4, t, j;
            while (m) {
                j = Math.floor(Math.random() * m--);
                t = x[m];
                x[m] = x[j];
                x[j] = t;
            }
        }
    }
    createAns() {
        for (let index = 0; index < this.allQuestions.length; index++) {
            const id = this.allQuestions[index].questionId;
            const ans = this.allQuestions[index].answer;
            this.ansKey.push({ qid: id, ans: ans });
        }
        // console.log("key");
        // console.log(this.ansKey);
    }
    countdown() {
        this.interval = setInterval(() => {
            if (this.timePerQuestion > 0) {
                this.timePerQuestion--;
            }
            if (this.timePerQuestion == 0) {
                // reset
                if (this.questionCounter + 1 <= this.totalQuestion) {
                    this.oneQuestion = this.allQuestions[this.questionCounter];
                    this.questionCounter++;
                    if (this.questionCounter == this.totalQuestion) {
                        this.flageLast = true;
                    }
                    this.timePerQuestion = this.time;
                    console.log("reset timer");
                }
                else {
                    // this.router.navigate(['/']);
                    this.myStopFunction(this.interval);
                    localStorage.removeItem('load');
                    this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
                        .subscribe(data => {
                        if (data['msg']) {
                            console.log('data of msh');
                            console.log(data['msg']);
                            // this.msg = ;
                            // this.avail = true;
                            // return;
                        }
                        // this.router.navigate(['/teacher/teacherhome']);
                    }, error => { console.error(error); });
                }
            }
        }, 1000);
        // console.log("hloo");
    }
    myStopFunction(a) {
        clearInterval(a);
    }
    nextQuestion() {
        // console.log("button clicked");
        if (this.questionCounter != this.totalQuestion) {
            this.questionCounter++;
            if (this.questionCounter == this.totalQuestion) {
                this.flageLast = true;
            }
            this.oneQuestion = this.allQuestions[this.questionCounter - 1];
            this.timePerQuestion = this.time;
        }
        if (this.questionCounter > this.totalQuestion) {
            // this.router.navigate(['/']);
            this.myStopFunction(this.interval);
            this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
                .subscribe(data => {
                if (data['msg']) {
                    console.log('data of msh');
                    console.log(data['msg']);
                    // this.msg = ;
                    // this.avail = true;
                    // return;
                }
                // this.router.navigate(['/teacher/teacherhome']);
                //            this.router.navigate(['/']);
            }, error => { console.error(error); });
        }
    }
    navigatehome() {
        console.log("naa");
    }
    answer(qid, ans) {
        this.temp = this.ansOfOneQuestion.pop();
        if (this.temp) {
            if (this.temp.qid != qid) {
                this.ansOfOneQuestion.push(this.temp);
            }
        }
        this.ansOfOneQuestion.push({ qid: qid, ans: ans });
        // console.log(this.ansOfOneQuestion);
    }
    getScore() {
        // console.log("in get score");
        // console.log(this.ansKey);
        // console.log(this.ansOfOneQuestion);
        for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
            for (let j = 0; j < this.ansKey.length; j++) {
                if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
                    if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
                        this.score++;
                    }
                }
            }
        }
        // console.log("yyour score is ", this.score);
    }
    lastsubmit() {
        this.finalsubmit = true;
        localStorage.removeItem('load');
        this.myStopFunction(this.interval);
        this.getScore();
        this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
            .subscribe(data => {
            if (data['msg']) {
                console.log('data of msh');
                console.log(data['msg']);
                // this.msg = ;
                // this.avail = true;
                // return;
            }
            // this.router.navigate(['/teacher/teacherhome']);
            //            this.router.navigate(['/']);
        }, error => { console.error(error); });
    }
}
TempComponent.ɵfac = function TempComponent_Factory(t) { return new (t || TempComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
TempComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TempComponent, selectors: [["app-temp"]], decls: 33, vars: 8, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [1, "container", "mt-sm-5", "my-1"], [1, "bg-white", "p-3", "border-bottom"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "mcq"], [1, "text-danger"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2", "h5"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center pt-3", "style", "position: relative;margin-top: 20px;margin-bottom: 20px;", 4, "ngIf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "card"], [1, "text-right", "cross"], [1, "fa", "fa-times"], [1, "card-body", "text-center"], ["src", "../../../assets/img/achivement.svg", 1, "img-fluid"], [1, "btn", "btn-out", "btn-square", "continue", "mt-5", 2, "cursor", "pointer", 3, "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"], [1, "options"], ["type", "radio", "name", "option", 3, "value", "change"], [1, "checkmark"], [1, "d-flex", "align-items-center", "pt-3", 2, "position", "relative", "margin-top", "20px", "margin-bottom", "20px"], [1, "clsbtnleft"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "clsbtnright"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function TempComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TempComponent_div_18_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TempComponent_div_19_Template, 7, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CONGRATULATIONS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TempComponent_Template_button_click_31_listener() { return ctx.navigatehome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx.questionCounter, " of ", ctx.totalQuestion, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timeleft 00:", ctx.timePerQuestion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. ", ctx.oneQuestion.questionText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.oneQuestion.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.finalsubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have scored ", ctx.score, "/", ctx.totalQuestion, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n.container[_ngcontent-%COMP%] {\n    background-color:#f1f1f1;\n    color: #0a192f;\n    border-radius: 10px;\n    padding: 20px;\n    font-family: 'Montserrat', sans-serif;\n    max-width: 800px;\n\n}\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    font-size: 32px;\n}\n.question[_ngcontent-%COMP%] {\n    width: 100%;\n    color: #0a192f;\n\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n.options[_ngcontent-%COMP%] {\n    position: relative;\n    padding-left: 40px;\n}\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n    font-size: 16px;\n    font-weight: bold;\n    cursor: pointer;\n}\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n.clsbtnleft[_ngcontent-%COMP%]\n{\n    position: absolute;\n    left: 35%;\n\n}\n.clsbtnright[_ngcontent-%COMP%]\n{\n\n    position: absolute;\n    right: 30%;\n}\n.checkmark[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -1px;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #f1f1f1;\n    border: 2px solid #0a192f;\n    border-radius: 50%;\n}\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n}\n.options[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    \n    display: block;\n    background: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 300ms ease-in-out 0s;\n}\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\n    background: #0a192f;\n    transition: 300ms ease-in-out 0s;\n}\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n@media(max-width:720px) {\n\n    .clsbtnleft[_ngcontent-%COMP%]\n    {\n        left:30%;\n    }\n    .clsbtnright[_ngcontent-%COMP%]\n    {\n        right: 30%;\n    }\n}\n@media(max-width:576px) {\n    .question[_ngcontent-%COMP%] {\n        width: 100%;\n        word-spacing: 2px;\n    }\n    .clsbtnleft[_ngcontent-%COMP%]\n    {\n        left:20%;\n    }\n    .clsbtnright[_ngcontent-%COMP%]\n    {\n        right: 20%;\n    }\n}\n@media(max-width:356px) {\n\n    .clsbtnleft[_ngcontent-%COMP%]\n    {\n        left:10%;\n    }\n    .clsbtnright[_ngcontent-%COMP%]\n    {\n        right: 10%;\n    }\n}\n.card[_ngcontent-%COMP%]{\n\n  color: #0a192f;\n  font-family: \"Poppins\", sans-serif;\n\n}\n.mt-100[_ngcontent-%COMP%] {\n    margin-top: 100px\n}\np[_ngcontent-%COMP%] {\n    font-size: 14px\n}\nh4[_ngcontent-%COMP%] {\n    margin-top: 18px\n}\n.cross[_ngcontent-%COMP%] {\n    padding: 10px;\n    color: #0a192f;\n    cursor: pointer\n}\n.continue[_ngcontent-%COMP%]:focus {\n    outline: none\n}\n.continue[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    text-transform: capitalize;\n    font-size: 13px;\n    padding: 8px 19px;\n    cursor: pointer;\n    color: #fff;\n    background-color: #0a192f\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvdGVtcC90ZW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7O0FBRXBCO0FBR0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixTQUFTOztBQUViO0FBQ0E7OztJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVIOztJQUVJOztRQUVJLFFBQVE7SUFDWjtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxRQUFRO0lBQ1o7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBOztJQUVJOztRQUVJLFFBQVE7SUFDWjtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKO0FBSUE7O0VBRUUsY0FBYztFQUNkLGtDQUFrQzs7QUFFcEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1g7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3RlbXAvdGVtcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyAqL1xufVxuXG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTtcbiAgICBjb2xvcjogIzBhMTkyZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuXG59XG5cblxuLmNvbnRhaW5lcj5wIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5xdWVzdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwYTE5MmY7XG5cbn1cbmg0LGg1e1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcHRpb25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4jb3B0aW9ucyBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3B0aW9ucyBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNsc2J0bmxlZnRcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzUlO1xuXG59XG4uY2xzYnRucmlnaHRcbntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzAlO1xufVxuLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTFweDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYTE5MmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3B0aW9ucyBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3B0aW9ucyAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4ub3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGExOTJmO1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4ub3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbn1cblxuLyogLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYmY3MztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjFiZjczO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWJmNzM7XG59ICovXG5cbkBtZWRpYShtYXgtd2lkdGg6NzIwcHgpIHtcblxuICAgIC5jbHNidG5sZWZ0XG4gICAge1xuICAgICAgICBsZWZ0OjMwJTtcbiAgICB9XG4gICAgLmNsc2J0bnJpZ2h0XG4gICAge1xuICAgICAgICByaWdodDogMzAlO1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDo1NzZweCkge1xuICAgIC5xdWVzdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgICB9XG4gICAgLmNsc2J0bmxlZnRcbiAgICB7XG4gICAgICAgIGxlZnQ6MjAlO1xuICAgIH1cbiAgICAuY2xzYnRucmlnaHRcbiAgICB7XG4gICAgICAgIHJpZ2h0OiAyMCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDozNTZweCkge1xuXG4gICAgLmNsc2J0bmxlZnRcbiAgICB7XG4gICAgICAgIGxlZnQ6MTAlO1xuICAgIH1cbiAgICAuY2xzYnRucmlnaHRcbiAgICB7XG4gICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgfVxufVxuXG5cblxuLmNhcmR7XG5cbiAgY29sb3I6ICMwYTE5MmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcblxufVxuLm10LTEwMCB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHhcbn1cbnAge1xuICAgIGZvbnQtc2l6ZTogMTRweFxufVxuXG5oNCB7XG4gICAgbWFyZ2luLXRvcDogMThweFxufVxuXG4uY3Jvc3Mge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICMwYTE5MmY7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5jb250aW51ZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZVxufVxuXG4uY29udGludWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogOHB4IDE5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmZcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TempComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-temp',
                templateUrl: './temp.component.html',
                styleUrls: ['./temp.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "qAPG":
/*!**************************************************************!*\
  !*** ./src/app/student/studenthome/studenthome.component.ts ***!
  \**************************************************************/
/*! exports provided: StudenthomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudenthomeComponent", function() { return StudenthomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "Gyf/");
/* harmony import */ var _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");








function StudenthomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function StudenthomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function StudenthomeComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any uploaded Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudenthomeComponent_ng_template_4_ng_template_1_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudenthomeComponent_ng_template_4_ng_template_1_tr_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.playquiz(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Play Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizdescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.owneremail);
} }
function StudenthomeComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quiz Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quiz Creater's Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudenthomeComponent_ng_template_4_ng_template_1_tr_17_Template, 12, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allquiz);
} }
function StudenthomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudenthomeComponent_ng_template_4_div_0_Template, 10, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudenthomeComponent_ng_template_4_ng_template_1_Template, 18, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class StudenthomeComponent {
    constructor(studentService, router, webSocketService) {
        this.studentService = studentService;
        this.router = router;
        this.webSocketService = webSocketService;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.webSocketService.listen('quizcrud').subscribe((data) => {
            this.getdata();
        });
        this.getdata();
    }
    getdata() {
        this.studentService.getAllQuiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.allquiz = data['quiz'];
                // console.log(this.allquiz.length);
                if (!this.allquiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    playquiz(item) {
        this.studentService.setQuizId(item._id);
        this.router.navigate(['/student/playquiz']);
    }
}
StudenthomeComponent.ɵfac = function StudenthomeComponent_Factory(t) { return new (t || StudenthomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
StudenthomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudenthomeComponent, selectors: [["app-studenthome"]], decls: 6, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["id", "container", 1, "container"], [1, "col-12"], [1, "table", "table-image"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"]], template: function StudenthomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudenthomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudenthomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudenthomeComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_4__["StudentnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\n  color: #0a192f;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 2rem 0rem;\n}\n.table[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  margin-bottom: 200px;\n}\nh4[_ngcontent-%COMP%] {\n  margin: 2rem 0rem 1rem;\n}\n.table-image[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-image[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\n  text-align: center;\n  }\nthead[_ngcontent-%COMP%]{\n  font-size: 18px;\n}\ntd[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 17px;\n  }\nimg[_ngcontent-%COMP%]{\n  transition: 0.5s all ease-in-out;\n}\nimg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.04);\n  }\n#edit[_ngcontent-%COMP%]{\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n#edit[_ngcontent-%COMP%]:hover{\n  color: #285aa5;\n  transform: scale(1.3);\n}\n#delete[_ngcontent-%COMP%]{\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n#delete[_ngcontent-%COMP%]:hover{\n  color: tomato;\n  transform: scale(1.3);\n}\n#plus[_ngcontent-%COMP%]{\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n#plus[_ngcontent-%COMP%]:hover{\n  color: #285aa5;\n  transform: scale(1.3);\n}\n@media (max-width: 767px) {\n  #container[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50aG9tZS9zdHVkZW50aG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGO0VBQ0UsZUFBZTtBQUNqQjtBQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjtFQUNFLGdDQUFnQztBQUNsQztBQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50aG9tZS9zdHVkZW50aG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgY29sb3I6ICMwYTE5MmY7XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xufVxuLnRhYmxle1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbn1cbmg0IHtcbiAgbWFyZ2luOiAycmVtIDByZW0gMXJlbTtcbn1cblxuLnRhYmxlLWltYWdlIHRkLFxuLnRhYmxlLWltYWdlIHRoIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGgsdGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxudGhlYWR7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiAgdGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5pbWd7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuICBpbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG4gIH1cbiNlZGl0e1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xufVxuI2VkaXQ6aG92ZXJ7XG4gIGNvbG9yOiAjMjg1YWE1O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbiNkZWxldGV7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbiNkZWxldGU6aG92ZXJ7XG4gIGNvbG9yOiB0b21hdG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuI3BsdXN7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbiNwbHVzOmhvdmVye1xuICBjb2xvcjogIzI4NWFhNTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI2NvbnRhaW5lcntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudenthomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studenthome',
                templateUrl: './studenthome.component.html',
                styleUrls: ['./studenthome.component.css']
            }]
    }], function () { return [{ type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "tn5a":
/*!******************************************!*\
  !*** ./src/app/student/student.guard.ts ***!
  \******************************************/
/*! exports provided: StudentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGuard", function() { return StudentGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class StudentGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('student') == "yes") {
                if (localStorage.getItem('admin') == "no") {
                    if (localStorage.getItem('teacher') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
}
StudentGuard.ɵfac = function StudentGuard_Factory(t) { return new (t || StudentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
StudentGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentGuard, factory: StudentGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login-student/login-student.component */ "wFJB");
/* harmony import */ var _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login-teacher/login-teacher.component */ "BvBR");
/* harmony import */ var _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/reset-password-done/reset-password-done.component */ "EMjD");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ "xT/v");
/* harmony import */ var _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/reset/reset.component */ "y7II");
/* harmony import */ var _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/indexmain/indexmain.component */ "4+a0");
/* harmony import */ var _student_student_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.guard */ "tn5a");
/* harmony import */ var _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher/teacher.guard */ "zqFa");
/* harmony import */ var _admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.guard */ "17Sp");
/* harmony import */ var _index_t_t_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/t/t.component */ "mdn8");
/* harmony import */ var _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher/teacherhome/teacherhome.component */ "UkjL");
/* harmony import */ var _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teacher/createquiz/createquiz.component */ "0/SE");
/* harmony import */ var _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/uploadquiz/uploadquiz.component */ "9fHA");
/* harmony import */ var _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teacher/seestudents/seestudents.component */ "IbWB");
/* harmony import */ var _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./teacher/addquestion/addquestion.component */ "NgLx");
/* harmony import */ var _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teacher/seequestion/seequestion.component */ "8fTH");
/* harmony import */ var _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student/studenthome/studenthome.component */ "qAPG");
/* harmony import */ var _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/adminhome/adminhome.component */ "mjI7");
/* harmony import */ var _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error/notfound-error/notfound-error.component */ "5xLU");
/* harmony import */ var _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./error/server-error/server-error.component */ "BWLr");
/* harmony import */ var _admin_student_student_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/student/student.component */ "N/mo");
/* harmony import */ var _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/teacher/teacher.component */ "11p2");
/* harmony import */ var _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/view-question/view-question.component */ "1M0h");
/* harmony import */ var _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error/cheating/cheating.component */ "fauK");
/* harmony import */ var _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./student/playquiz/playquiz.component */ "hPIn");







// import { IndexheaderComponent } from './index/indexheader/indexheader.component';






















const routes = [
    // root
    { path: '', component: _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_7__["IndexmainComponent"] },
    // login register
    { path: 'teacher', component: _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_3__["LoginTeacherComponent"] },
    { path: 'student', component: _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_2__["LoginStudentComponent"] },
    //forgot password
    { path: 'reset', component: _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"] },
    { path: 'reset-password', component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
    { path: 'reset-password-done', component: _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordDoneComponent"] },
    // testing
    { path: 'a', component: _index_t_t_component__WEBPACK_IMPORTED_MODULE_11__["TComponent"] },
    // { path: 't', component: CheatingComponent},
    // { path: 'b', component: IndexheaderComponent },
    // teacher
    { path: 'teacher/teacherhome', component: _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_12__["TeacherhomeComponent"], canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]] },
    { path: 'teacher/createquiz', component: _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_13__["CreatequizComponent"], canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]] },
    { path: 'teacher/uploadquiz', component: _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_14__["UploadquizComponent"], canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]] },
    { path: 'teacher/seestudentes', component: _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_15__["SeestudentsComponent"], canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]] },
    { path: 'teacher/addquestion', component: _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_16__["AddquestionComponent"], canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]] },
    { path: 'teacher/seequestion', component: _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_17__["SeequestionComponent"], canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]] },
    // student
    { path: 'student/studenthome', component: _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_18__["StudenthomeComponent"], canActivate: [_student_student_guard__WEBPACK_IMPORTED_MODULE_8__["StudentGuard"]] },
    { path: 'student/playquiz', component: _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_26__["PlayquizComponent"], canActivate: [_student_student_guard__WEBPACK_IMPORTED_MODULE_8__["StudentGuard"]] },
    // admin
    { path: 'admin/adminhome', component: _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_19__["AdminhomeComponent"], canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]] },
    { path: 'admin/viewstudent', component: _admin_student_student_component__WEBPACK_IMPORTED_MODULE_22__["StudentComponent"], canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]] },
    { path: 'admin/viewteacher', component: _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_23__["TeacherComponent"], canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]] },
    { path: 'admin/seequestion', component: _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_24__["ViewQuestionComponent"], canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]] },
    // error
    { path: 'cheat', component: _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_25__["CheatingComponent"] },
    { path: 'error', component: _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_21__["ServerErrorComponent"] },
    { path: '**', component: _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_20__["NotfoundErrorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wFJB":
/*!***************************************************************!*\
  !*** ./src/app/auth/login-student/login-student.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStudentComponent", function() { return LoginStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginStudentComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.msg);
} }
function LoginStudentComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.msg);
} }
const _c0 = function () { return ["/reset"]; };
class LoginStudentComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-in-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").removeClass("sign-up-mode");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-up-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").addClass("sign-up-mode");
            });
        });
    }
    onSubmitRegister(f) {
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password   doesn't match";
            this.avail = true;
            return;
        }
        if (!f.valid) {
            this.msg = "Invalid Form Fields";
            this.avail = true;
            return;
        }
        this.authService.registerStudent(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            // this.authService.msg = "successfully registered a user!";
            window.location.reload();
            this.router.navigate(['/student']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    onSubmitLogin(f) {
        if (!f.valid) {
            this.msg = "Invalid Email or Password";
            this.avail = true;
            return;
        }
        this.authService.login(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['role'] == "admin") {
                // console.log("admin");
                localStorage.setItem('token', data['token']);
                localStorage.setItem('admin', 'yes');
                localStorage.setItem('student', 'no');
                localStorage.setItem('teacher', 'no');
                this.router.navigate(['/admin/adminhome']);
            }
            else if (data['role'] == "student") {
                // console.log("student")
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    // console.log("not blocked");
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'yes');
                    localStorage.setItem('teacher', 'no');
                    this.router.navigate(['/student/studenthome']);
                }
                // this.router.navigate(['/a']);
            }
            else {
                // console.log("teacher");
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'no');
                    localStorage.setItem('teacher', 'yes');
                    this.router.navigate(['/teacher/teacherhome']);
                }
            }
        }, error => { this.router.navigate(['/error']); });
    }
    signinup() {
        // console.log("hello1");
        this.msg = "";
        this.avail = false;
    }
}
LoginStudentComponent.ɵfac = function LoginStudentComponent_Factory(t) { return new (t || LoginStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginStudentComponent, selectors: [["app-login-student"]], decls: 62, vars: 6, consts: [[1, "containerr"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-in-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p1", "ngModel"], ["type", "submit", "value", "Login", 1, "btn", "solid", 3, "disabled"], [1, "social-text", 2, "font-weight", "bold"], [3, "routerLink"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "sign-up-form", 3, "ngSubmit"], ["f", "ngForm"], ["type", "email", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "email", "", "spellcheck", "false", "ngModel", "", "required", ""], [1, "fas", "fa-phone"], ["type", "text", "placeholder", "Mobile no", "name", "phone", "pattern", "^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "ngModel", "", "required", ""], ["phone", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Re-enter Password", "name", "p2", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p2", "ngModel"], ["type", "submit", "value", "Sign up", 1, "btn", 3, "disabled"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/l.svg", "alt", "", 1, "image"], [1, "panel", "right-panel"], ["id", "sign-in-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/r.svg", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function LoginStudentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginStudentComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginStudentComponent_p_20_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginStudentComponent_Template_form_ngSubmit_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx.onSubmitRegister(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Student Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LoginStudentComponent_p_42_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "New Student ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginStudentComponent_Template_button_click_50_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "One of us ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginStudentComponent_Template_button_click_59_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.containerr[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height:92vh;\n  overflow: hidden;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: #0a192f;\n}\n\na[_ngcontent-%COMP%]:hover\n{\n  text-decoration: none;\n  color: #0a192f;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color:#0a192f;\n  margin-bottom: 10px;\n  \n\t animation: vibrate-1 1.5s linear infinite both;\n}\n\n@keyframes vibrate-1 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n  transition: 0.4s ease;\n}\n\n.input-field[_ngcontent-%COMP%]:hover{\n  transform: translateY(-5px);\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #0a192f;\n  \n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color:#0a192f;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #0a192f;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n\n\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #020b18;\n  color: #fff;\n  animation: heartbeat 1.5s ease-in-out infinite both;\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    animation-timing-function: ease-out;\n  }\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.containerr[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  \n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\n  \n\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .containerr[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3 / 4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .containerr[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-bottom: 2px solid red;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1zdHVkZW50L2xvZ2luLXN0dWRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7O0FBRTdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUU5Qyw4Q0FBOEM7QUFDdkQ7O0FBNEJBO0VBQ0U7SUFFVSx1QkFBdUI7RUFDakM7RUFDQTtJQUVVLCtCQUErQjtFQUN6QztFQUNBO0lBRVUsZ0NBQWdDO0VBQzFDO0VBQ0E7SUFFVSw4QkFBOEI7RUFDeEM7RUFDQTtJQUVVLCtCQUErQjtFQUN6QztFQUNBO0lBRVUsdUJBQXVCO0VBQ2pDO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjOztFQUVkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjs7O0FBR2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFFWCxtREFBbUQ7QUFDckQ7O0FBcUNBO0VBQ0U7SUFFVSxtQkFBbUI7SUFFbkIsK0JBQStCO0lBRS9CLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsbUJBQW1CO0lBRW5CLG1DQUFtQztFQUM3QztBQUNGOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHlFQUF5RTtFQUN6RSxrRUFBa0U7RUFDbEUseUVBQXlFOztFQUV6RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDRCQUE0QjtBQUM5Qjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLCtCQUErQjtFQUNqQzs7RUFFQTs7SUFFRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFDRjs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luLXN0dWRlbnQvbG9naW4tc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LFxuaW5wdXQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXJyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDo5MnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzBhMTkyZjtcbn1cbmE6aG92ZXJcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzBhMTkyZjtcbn1cbi5mb3Jtcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNpZ25pbi1zaWdudXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNzUlO1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2l0aW9uOiAxcyAwLjdzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgei1pbmRleDogNTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwcmVtIDVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIDAuN3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG5mb3JtLnNpZ24tdXAtZm9ybSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbmZvcm0uc2lnbi1pbi1mb3JtIHtcbiAgei1pbmRleDogMjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGNvbG9yOiMwYTE5MmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC8qIHRleHQtc2hhZG93OiA0cHggNnB4IDI1cHggcmdiYSgxMCwgMjUsIDQ3LCAxKTsgICAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiB2aWJyYXRlLTEgMS41cyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbn1cblxuIEAtd2Via2l0LWtleWZyYW1lcyB2aWJyYXRlLTEge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDEwcHggMDtcblxuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbiAgcGFkZGluZzogMCAwLjRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuLmlucHV0LWZpZWxkOmhvdmVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLDAsMCwwLjcpO1xufVxuXG4uaW5wdXQtZmllbGQgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGNvbG9yOiAjMGExOTJmO1xuICAvKiBjb2xvcjogcGFsZWdyZWVuOyAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmlucHV0LWZpZWxkIGlucHV0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiMwYTE5MmY7XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvY2lhbC10ZXh0IHtcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAuNDVyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zb2NpYWwtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjNDQ4MWViO1xuICBib3JkZXItY29sb3I6ICM0NDgxZWI7XG59XG5cblxuLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuXG5cbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBiMTg7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhcnRiZWF0IDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xufVxuXG5cbiBALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRiZWF0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDMzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDMzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cblxuXG5cbi5wYW5lbHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5jb250YWluZXJyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMDAwcHg7XG4gIHdpZHRoOiAyMDAwcHg7XG4gIHRvcDogLTEwJTtcbiAgcmlnaHQ6IDQ4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNDQ4MWViIDAlLCAjMDRiZWZlIDEwMCUpOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMwYTE5MmYgMCUsICMwYzFiMmIgMTAwJSk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmMTU1MjUgMCUsICNlNDc4MjAgMTAwJSk7ICovXG5cbiAgdHJhbnNpdGlvbjogMS44cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA2O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogNjtcbn1cblxuLmxlZnQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBwYWRkaW5nOiAzcmVtIDE3JSAycmVtIDEyJTtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBhZGRpbmc6IDNyZW0gMTIlIDJyZW0gMTclO1xufVxuXG4ucGFuZWwgLmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5wYW5lbCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBhbmVsIHAge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xufVxuXG4uYnRuLnRyYW5zcGFyZW50IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yaWdodC1wYW5lbCAuaW1hZ2UsXG4ucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODAwcHgpO1xufVxuXG4vKiBBTklNQVRJT04gKi9cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICByaWdodDogNTIlO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCk7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi1pbi1mb3JtIHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgLmNvbnRhaW5lcnIge1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLnNpZ25pbi1zaWdudXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogOTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiAxcyAwLjhzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnNpZ25pbi1zaWdudXAsXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XG4gICAgbGVmdDogNTAlO1xuICB9XG5cbiAgLnBhbmVscy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIH1cblxuICAucGFuZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyLjVyZW0gOCU7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICB9XG5cbiAgLnJpZ2h0LXBhbmVsIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gIH1cblxuICAubGVmdC1wYW5lbCB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgfVxuXG4gIC5wYW5lbCAuY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIH1cblxuICAucGFuZWwgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnBhbmVsIHAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB9XG5cbiAgLmJ0bi50cmFuc3BhcmVudCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC5jb250YWluZXJyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDE1MDBweDtcbiAgICBoZWlnaHQ6IDE1MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgbGVmdDogMzAlO1xuICAgIGJvdHRvbTogNjglO1xuICAgIHJpZ2h0OiBpbml0aWFsO1xuICAgIHRvcDogaW5pdGlhbDtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgIGJvdHRvbTogMzIlO1xuICAgIHJpZ2h0OiBpbml0aWFsO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuXG4gIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4gIC5yaWdodC1wYW5lbCAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XG4gICAgdG9wOiA1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgZm9ybSB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnBhbmVsIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxuICAuY29udGFpbmVyciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgICBib3R0b206IDcyJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgICBib3R0b206IDI4JTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbn1cblxuXG5cbi5pbnB1dC1maWVsZCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-student',
                templateUrl: './login-student.component.html',
                styleUrls: ['./login-student.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "xT/v":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/reset-password-done"]; };
class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 23, vars: 2, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form"], [1, "title"], [1, "social-text", 2, "font-weight", "bold"], [3, "routerLink"], ["type", "button", "value", "click here", 1, "btn", "solid"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "panel", "right-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent"], ["src", "../../../assets/img/forgotpassword.svg", "alt", "", 1, "image"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please check your mail and click below button for reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Attention here!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Once you have submitted the request to reset your password, you will receive an email. Follow the instructions in the email and your password will be reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Don't Worry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.containerr[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 92vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n\n}\n\n@keyframes tilt-in-fwd-tr {\n  0% {\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\n    opacity: 1;\n  }\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color:#0a192f;\n  margin-bottom: 10px;\n  \n\t animation: vibrate-1 1.5s linear infinite both;\n}\n\n@keyframes vibrate-1 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n  transition: 0.4s ease;\n}\n\n.input-field[_ngcontent-%COMP%]:hover{\n  transform: translateY(-5px);\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #0a192f;\n  \n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color:#0a192f;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #0a192f;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n\n\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #020b18;\n  animation: heartbeat 1.5s ease-in-out infinite both;\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    animation-timing-function: ease-out;\n  }\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.containerr[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  \n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\n  \n\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .containerr[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3 / 4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .containerr[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-bottom: 2px solid red;\n  width: 300px;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: #0a192f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZHQUE2Rzs7QUFFN0c7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87OztBQUdUOztBQWNBO0VBQ0U7SUFFVSxxRkFBcUY7SUFDN0YsVUFBVTtFQUNaO0VBQ0E7SUFFVSxvRUFBb0U7SUFDNUUsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUVmLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFFOUMsOENBQThDO0FBQ3ZEOztBQTRCQTtFQUNFO0lBRVUsdUJBQXVCO0VBQ2pDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLGdDQUFnQztFQUMxQztFQUNBO0lBRVUsOEJBQThCO0VBQ3hDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLHVCQUF1QjtFQUNqQztBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUV6QixtREFBbUQ7QUFDckQ7O0FBcUNBO0VBQ0U7SUFFVSxtQkFBbUI7SUFFbkIsK0JBQStCO0lBRS9CLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsbUJBQW1CO0lBRW5CLG1DQUFtQztFQUM3QztBQUNGOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHlFQUF5RTtFQUN6RSxrRUFBa0U7RUFDbEUseUVBQXlFOztFQUV6RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDRCQUE0QjtBQUM5Qjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLCtCQUErQjtFQUNqQzs7RUFFQTs7SUFFRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFDRjs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSxcbmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDkydmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3Jtcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB0aWx0LWluLWZ3ZC10ciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGlsdC1pbi1md2QtdHIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDM1ZGVnKSB0cmFuc2xhdGUoMzAwcHgsIC0zMDBweCkgc2tldygtMzVkZWcsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zaWduaW4tc2lnbnVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDc1JTtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNpdGlvbjogMXMgMC43cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHotaW5kZXg6IDU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHJlbSA1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwLjdzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHRpbHQtaW4tZndkLXRyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuICBhbmltYXRpb246IHRpbHQtaW4tZndkLXRyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG5mb3JtLnNpZ24tdXAtZm9ybSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbmZvcm0uc2lnbi1pbi1mb3JtIHtcbiAgei1pbmRleDogMjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGNvbG9yOiMwYTE5MmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC8qIHRleHQtc2hhZG93OiA0cHggNnB4IDI1cHggcmdiYSgxMCwgMjUsIDQ3LCAxKTsgICAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiB2aWJyYXRlLTEgMS41cyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbn1cblxuIEAtd2Via2l0LWtleWZyYW1lcyB2aWJyYXRlLTEge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDEwcHggMDtcblxuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbiAgcGFkZGluZzogMCAwLjRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuLmlucHV0LWZpZWxkOmhvdmVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLDAsMCwwLjcpO1xufVxuXG4uaW5wdXQtZmllbGQgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGNvbG9yOiAjMGExOTJmO1xuICAvKiBjb2xvcjogcGFsZWdyZWVuOyAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmlucHV0LWZpZWxkIGlucHV0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiMwYTE5MmY7XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvY2lhbC10ZXh0IHtcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAuNDVyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zb2NpYWwtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjNDQ4MWViO1xuICBib3JkZXItY29sb3I6ICM0NDgxZWI7XG59XG5cblxuLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuXG5cbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBiMTg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XG59XG5cblxuIEAtd2Via2l0LWtleWZyYW1lcyBoZWFydGJlYXQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuXG5cblxuLnBhbmVscy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cblxuLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMDBweDtcbiAgd2lkdGg6IDIwMDBweDtcbiAgdG9wOiAtMTAlO1xuICByaWdodDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM0NDgxZWIgMCUsICMwNGJlZmUgMTAwJSk7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzBhMTkyZiAwJSwgIzBjMWIyYiAxMDAlKTtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNTUyNSAwJSwgI2U0NzgyMCAxMDAlKTsgKi9cblxuICB0cmFuc2l0aW9uOiAxLjhzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDY7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cblxuLnBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA2O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcGFkZGluZzogM3JlbSAxMiUgMnJlbSAxNyU7XG59XG5cbi5wYW5lbCAuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbn1cblxuLnBhbmVsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGFuZWwgcCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogMC43cmVtIDA7XG59XG5cbi5idG4udHJhbnNwYXJlbnQge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MDBweCk7XG59XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIHJpZ2h0OiA1MiU7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLXVwLWZvcm0ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLWluLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAuY29udGFpbmVyciB7XG4gICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuc2lnbmluLXNpZ251cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA5NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IDFzIDAuOHMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAuc2lnbmluLXNpZ251cCxcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAucGFuZWxzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgfVxuXG4gIC5wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIH1cblxuICAucmlnaHQtcGFuZWwge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgfVxuXG4gIC5sZWZ0LXBhbmVsIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICB9XG5cbiAgLnBhbmVsIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgfVxuXG4gIC5wYW5lbCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAucGFuZWwgcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cblxuICAuYnRuLnRyYW5zcGFyZW50IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgICB3aWR0aDogMTUwMHB4O1xuICAgIGhlaWdodDogMTUwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgYm90dG9tOiA2OCU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gICAgYm90dG9tOiAzMiU7XG4gICAgcmlnaHQ6IGluaXRpYWw7XG4gIH1cblxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG5cbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcbiAgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcbiAgICB0b3A6IDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucGFuZWwgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB9XG4gIC5jb250YWluZXJyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFpbmVycjpiZWZvcmUge1xuICAgIGJvdHRvbTogNzIlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIGJvdHRvbTogMjglO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuXG5cblxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwYTE5MmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "y7II":
/*!***********************************************!*\
  !*** ./src/app/auth/reset/reset.component.ts ***!
  \***********************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResetComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.msg);
} }
class ResetComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
    }
    onSubmitForgot(f) {
        // console.log("f submit");
        this.authService.reset(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            else {
                this.router.navigate(['/reset-password']);
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
ResetComponent.ɵfac = function ResetComponent_Factory(t) { return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetComponent, selectors: [["app-reset"]], decls: 25, vars: 2, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], ["type", "submit", "value", "Send mail", 1, "btn", "solid", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "panel", "right-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent"], ["src", "../../../assets/img/forgotpassword.svg", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function ResetComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitForgot(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetComponent_p_13_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Attention here!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Once you have submitted the request to reset your password, you will receive an email. Follow the instructions in the email and your password will be reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Don't Worry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.containerr[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 92vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n\n}\n\n@keyframes tilt-in-fwd-tr {\n  0% {\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\n    opacity: 1;\n  }\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color:#0a192f;\n  margin-bottom: 10px;\n  \n\t animation: vibrate-1 1.5s linear infinite both;\n}\n\n@keyframes vibrate-1 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n  }\n  40% {\n    transform: translate(-2px, -2px);\n  }\n  60% {\n    transform: translate(2px, 2px);\n  }\n  80% {\n    transform: translate(2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n  transition: 0.4s ease;\n}\n\n.input-field[_ngcontent-%COMP%]:hover{\n  transform: translateY(-5px);\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #0a192f;\n  \n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color:#0a192f;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #0a192f;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n\n\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #020b18;\n  animation: heartbeat 1.5s ease-in-out infinite both;\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    animation-timing-function: ease-out;\n  }\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.containerr[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  \n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\n  \n\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .containerr[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1 / 2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3 / 4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1 / 2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .containerr[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .containerr[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-bottom: 2px solid red;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZHQUE2Rzs7QUFFN0c7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87OztBQUdUOztBQWNBO0VBQ0U7SUFFVSxxRkFBcUY7SUFDN0YsVUFBVTtFQUNaO0VBQ0E7SUFFVSxvRUFBb0U7SUFDNUUsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUVmLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFFOUMsOENBQThDO0FBQ3ZEOztBQTRCQTtFQUNFO0lBRVUsdUJBQXVCO0VBQ2pDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLGdDQUFnQztFQUMxQztFQUNBO0lBRVUsOEJBQThCO0VBQ3hDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLHVCQUF1QjtFQUNqQztBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUV6QixtREFBbUQ7QUFDckQ7O0FBcUNBO0VBQ0U7SUFFVSxtQkFBbUI7SUFFbkIsK0JBQStCO0lBRS9CLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsbUJBQW1CO0lBRW5CLG1DQUFtQztFQUM3QztBQUNGOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHlFQUF5RTtFQUN6RSxrRUFBa0U7RUFDbEUseUVBQXlFOztFQUV6RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDRCQUE0QjtBQUM5Qjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLCtCQUErQjtFQUNqQzs7RUFFQTs7SUFFRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFDRjs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lcnIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA5MnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9ybXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGlsdC1pbi1md2QtdHIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDM1ZGVnKSB0cmFuc2xhdGUoMzAwcHgsIC0zMDBweCkgc2tldygtMzVkZWcsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRpbHQtaW4tZndkLXRyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDM1ZGVnKSB0cmFuc2xhdGUoMzAwcHgsIC0zMDBweCkgc2tldygtMzVkZWcsIDEwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2lnbmluLXNpZ251cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBsZWZ0OiA3NSU7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zaXRpb246IDFzIDAuN3MgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB6LWluZGV4OiA1O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDByZW0gNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0aWx0LWluLWZ3ZC10ciAwLjZzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiAgYW5pbWF0aW9uOiB0aWx0LWluLWZ3ZC10ciAwLjZzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuZm9ybS5zaWduLXVwLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5mb3JtLnNpZ24taW4tZm9ybSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBjb2xvcjojMGExOTJmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAvKiB0ZXh0LXNoYWRvdzogNHB4IDZweCAyNXB4IHJnYmEoMTAsIDI1LCA0NywgMSk7ICAgKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IHZpYnJhdGUtMSAxLjVzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG59XG5cbiBALXdlYmtpdC1rZXlmcmFtZXMgdmlicmF0ZS0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHZpYnJhdGUtMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICB9XG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuXG4uaW5wdXQtZmllbGQge1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbn1cbi5pbnB1dC1maWVsZDpob3ZlcntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwwLDAsMC43KTtcbn1cblxuLmlucHV0LWZpZWxkIGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzBhMTkyZjtcbiAgLyogY29sb3I6IHBhbGVncmVlbjsgKi9cbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5pbnB1dC1maWVsZCBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjojMGExOTJmO1xufVxuXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zb2NpYWwtdGV4dCB7XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zb2NpYWwtbWVkaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1pY29uIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICB3aWR0aDogNDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwLjQ1cmVtO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc29jaWFsLWljb246aG92ZXIge1xuICBjb2xvcjogIzQ0ODFlYjtcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4MWViO1xufVxuXG5cbi5idG4ge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA0OXB4O1xuICBib3JkZXItcmFkaXVzOiA0OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcblxuXG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwYjE4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhcnRiZWF0IDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xufVxuXG5cbiBALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRiZWF0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDMzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDMzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cblxuXG5cbi5wYW5lbHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5jb250YWluZXJyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMDAwcHg7XG4gIHdpZHRoOiAyMDAwcHg7XG4gIHRvcDogLTEwJTtcbiAgcmlnaHQ6IDQ4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNDQ4MWViIDAlLCAjMDRiZWZlIDEwMCUpOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMwYTE5MmYgMCUsICMwYzFiMmIgMTAwJSk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmMTU1MjUgMCUsICNlNDc4MjAgMTAwJSk7ICovXG5cbiAgdHJhbnNpdGlvbjogMS44cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA2O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogNjtcbn1cblxuLmxlZnQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBwYWRkaW5nOiAzcmVtIDE3JSAycmVtIDEyJTtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBhZGRpbmc6IDNyZW0gMTIlIDJyZW0gMTclO1xufVxuXG4ucGFuZWwgLmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5wYW5lbCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBhbmVsIHAge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xufVxuXG4uYnRuLnRyYW5zcGFyZW50IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yaWdodC1wYW5lbCAuaW1hZ2UsXG4ucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODAwcHgpO1xufVxuXG4vKiBBTklNQVRJT04gKi9cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICByaWdodDogNTIlO1xufVxuXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCk7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi1pbi1mb3JtIHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgLmNvbnRhaW5lcnIge1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLnNpZ25pbi1zaWdudXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogOTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiAxcyAwLjhzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnNpZ25pbi1zaWdudXAsXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XG4gICAgbGVmdDogNTAlO1xuICB9XG5cbiAgLnBhbmVscy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIH1cblxuICAucGFuZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyLjVyZW0gOCU7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICB9XG5cbiAgLnJpZ2h0LXBhbmVsIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gIH1cblxuICAubGVmdC1wYW5lbCB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgfVxuXG4gIC5wYW5lbCAuY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIH1cblxuICAucGFuZWwgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnBhbmVsIHAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB9XG5cbiAgLmJ0bi50cmFuc3BhcmVudCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC5jb250YWluZXJyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDE1MDBweDtcbiAgICBoZWlnaHQ6IDE1MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgbGVmdDogMzAlO1xuICAgIGJvdHRvbTogNjglO1xuICAgIHJpZ2h0OiBpbml0aWFsO1xuICAgIHRvcDogaW5pdGlhbDtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgIGJvdHRvbTogMzIlO1xuICAgIHJpZ2h0OiBpbml0aWFsO1xuICB9XG5cbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuXG4gIC5yaWdodC1wYW5lbCAuaW1hZ2UsXG4gIC5yaWdodC1wYW5lbCAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XG4gICAgdG9wOiA1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgZm9ybSB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnBhbmVsIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxuICAuY29udGFpbmVyciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcbiAgICBib3R0b206IDcyJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cblxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcbiAgICBib3R0b206IDI4JTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbn1cblxuXG5cbi5pbnB1dC1maWVsZCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbiAgd2lkdGg6IDMwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset',
                templateUrl: './reset.component.html',
                styleUrls: ['./reset.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqFa":
/*!******************************************!*\
  !*** ./src/app/teacher/teacher.guard.ts ***!
  \******************************************/
/*! exports provided: TeacherGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGuard", function() { return TeacherGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class TeacherGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('teacher') == "yes") {
                if (localStorage.getItem('admin') == "no") {
                    if (localStorage.getItem('student') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
}
TeacherGuard.ɵfac = function TeacherGuard_Factory(t) { return new (t || TeacherGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
TeacherGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeacherGuard, factory: TeacherGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map