webpackHotUpdate(3,{

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./views/dashboard/Dashboard */ "./src/views/dashboard/Dashboard.js"));
});
_c2 = Dashboard;
var Company = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c3 = function _c3() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./views/pages/company/Company */ "./src/views/pages/company/Company.js"));
});
_c4 = Company;
var CompanyReg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c5 = function _c5() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./views/pages/company/RegisterCompany */ "./src/views/pages/company/RegisterCompany.js"));
});
_c6 = CompanyReg;
var CompanyEdit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c7 = function _c7() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./views/pages/company/EditCompany */ "./src/views/pages/company/EditCompany.js"));
});
_c8 = CompanyEdit;
var Employee = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c9 = function _c9() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./views/pages/employee/Employee */ "./src/views/pages/employee/Employee.js"));
});
_c10 = Employee;
var EmployeeReg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c11 = function _c11() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./views/pages/employee/RegisterEmployee */ "./src/views/pages/employee/RegisterEmployee.js"));
});
_c12 = EmployeeReg;
var Riwayat = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(_c13 = function _c13() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./views/pages/riwayat/Riwayat */ "./src/views/pages/riwayat/Riwayat.js"));
});
_c14 = Riwayat;
var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/perusahaan',
  exact: true,
  name: 'Perusahaan',
  component: Company
}, {
  path: '/perusahaan/register',
  exact: true,
  name: 'Register',
  component: CompanyReg
}, {
  path: '/perusahaan/edit/:dataId',
  exact: true,
  name: 'Edit',
  component: CompanyEdit
}, {
  path: '/karyawan',
  exact: true,
  name: 'Karyawan',
  component: Employee
}, {
  path: '/karyawan/register',
  exact: true,
  name: 'Register',
  component: EmployeeReg
}, {
  path: '/riwayat',
  exact: true,
  name: 'Master Riwayat',
  component: Riwayat
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

__webpack_require__.$Refresh$.register(_c, "Dashboard$React.lazy");
__webpack_require__.$Refresh$.register(_c2, "Dashboard");
__webpack_require__.$Refresh$.register(_c3, "Company$React.lazy");
__webpack_require__.$Refresh$.register(_c4, "Company");
__webpack_require__.$Refresh$.register(_c5, "CompanyReg$React.lazy");
__webpack_require__.$Refresh$.register(_c6, "CompanyReg");
__webpack_require__.$Refresh$.register(_c7, "CompanyEdit$React.lazy");
__webpack_require__.$Refresh$.register(_c8, "CompanyEdit");
__webpack_require__.$Refresh$.register(_c9, "Employee$React.lazy");
__webpack_require__.$Refresh$.register(_c10, "Employee");
__webpack_require__.$Refresh$.register(_c11, "EmployeeReg$React.lazy");
__webpack_require__.$Refresh$.register(_c12, "EmployeeReg");
__webpack_require__.$Refresh$.register(_c13, "Riwayat$React.lazy");
__webpack_require__.$Refresh$.register(_c14, "Riwayat");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=3.a6681a35affacf6ac05e.hot-update.js.map