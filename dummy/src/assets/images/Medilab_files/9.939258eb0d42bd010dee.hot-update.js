webpackHotUpdate(9,{

/***/ "./src/views/pages/company/Company.js":
/*!********************************************!*\
  !*** ./src/views/pages/company/Company.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utilities_HostUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/HostUrl */ "./src/utilities/HostUrl.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





var _jsxFileName = "/Users/indrapujinovirwan/Documents/cms-medilab/client/src/views/pages/company/Company.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();








var Company = function Company() {
  _s();

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var queryPage = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])().search.match(/page=([0-9]+)/, '');
  var currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(currentPage),
      _useState2 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState4 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      companyList = _useState4[0],
      setCompanyList = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getCompanyList();
  }, []);

  var getCompanyList = /*#__PURE__*/function () {
    var _ref = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$axios, data;

      return _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                method: 'GET',
                url: _utilities_HostUrl__WEBPACK_IMPORTED_MODULE_7__["default"] + '/company/all',
                headers: {
                  token: localStorage.getItem('token')
                }
              });

            case 3:
              _yield$axios = _context.sent;
              data = _yield$axios.data;
              setCompanyList(data);
              console.log(data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function getCompanyList() {
      return _ref.apply(this, arguments);
    };
  }();

  var changePage = function changePage(page) {
    getCompanyList(page);
  };

  var handdleEdit = function handdleEdit(id) {
    history.push("/perusahaan/edit/".concat(id));
  };

  var fields = [{
    key: 'nama',
    label: 'Nama Perusahaan',
    _style: {
      width: '25%'
    }
  }, {
    key: 'alamat_1',
    label: 'Alamat ',
    _style: {
      width: '25%'
    }
  }, {
    key: 'telepon',
    label: 'Telepon '
  }, {
    key: 'pic',
    label: 'PIC '
  }, {
    key: 'email',
    label: 'Email'
  }, {
    key: 'show_details',
    label: '',
    _style: {
      width: '5%'
    },
    sorter: false,
    filter: false
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CRow"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCol"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCard"], {
        accentColor: "success",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCardHeader"], {
          color: "success",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "Perusahaan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCol"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            style: {
              marginTop: 15
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CButton"], {
              color: "success",
              to: "/perusahaan/register",
              children: "Tambah"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), companyList && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCardBody"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CDataTable"], {
            items: companyList.data,
            fields: fields,
            hover: true,
            striped: true,
            bordered: true,
            size: "sm",
            scopedSlots: {
              show_details: function show_details(item, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CButton"], {
                    color: "warning" // variant="outline"
                    ,
                    shape: "pill",
                    size: "sm",
                    onClick: function onClick() {
                      handdleEdit(item.id);
                    },
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 23
                }, _this);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this), companyList.pages > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CPagination"], {
            activePage: companyList.currentPage,
            pages: companyList.pages,
            onActivePageChange: changePage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};

_s(Company, "XY+9+GTmtZVgHwZdRg1lBsRLXd8=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"]];
});

_c = Company;
/* harmony default export */ __webpack_exports__["default"] = (Company);

var _c;

__webpack_require__.$Refresh$.register(_c, "Company");

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
//# sourceMappingURL=9.939258eb0d42bd010dee.hot-update.js.map