(this["webpackJsonpcms-medilab"] = this["webpackJsonpcms-medilab"] || []).push([[5],{

/***/ "./src/components/NewAlert.js":
/*!************************************!*\
  !*** ./src/components/NewAlert.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var NewAlert = function NewAlert(_ref) {
  var status = _ref.status,
      message = _ref.message;
  return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    icon: "".concat(status),
    title: "".concat(message),
    showConfirmButton: false,
    timer: 1500
  });
};

_c = NewAlert;
/* harmony default export */ __webpack_exports__["default"] = (NewAlert);

var _c;

__webpack_require__.$Refresh$.register(_c, "NewAlert");

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

/***/ }),

/***/ "./src/utilities/HostUrl.js":
/*!**********************************!*\
  !*** ./src/utilities/HostUrl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var url = 'https://vps-e9ee8d2a.vps.ovh.ca'; // const url = 'http://localhost:3001';

/* harmony default export */ __webpack_exports__["default"] = (url);

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

/***/ }),

/***/ "./src/views/pages/company/EditCompany.js":
/*!************************************************!*\
  !*** ./src/views/pages/company/EditCompany.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utilities_HostUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utilities/HostUrl */ "./src/utilities/HostUrl.js");
/* harmony import */ var _components_NewAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/NewAlert */ "./src/components/NewAlert.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







var _jsxFileName = "/Users/indrapujinovirwan/Documents/cms-medilab/client/src/views/pages/company/EditCompany.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();











var EditCompany = function EditCompany() {
  _s();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useParams"])(),
      dataId = _useParams.dataId;

  var host = 'https://dev.farizdotid.com/api/daerahindonesia';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      prov = _useState2[0],
      setProv = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState4 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      city = _useState4[0],
      setCity = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState6 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      kec = _useState6[0],
      setKec = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState8 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      kel = _useState8[0],
      setKel = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState10 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      edit = _useState10[0],
      setEdit = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      method: 'GET',
      url: "".concat(_utilities_HostUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/company/single/").concat(dataId),
      headers: {
        token: localStorage.getItem('token')
      }
    }).then(function (_ref) {
      var data = _ref.data;
      setEdit({
        nama: data.nama,
        kode_perusahaan: data.kode_perusahaan,
        alamat_1: data.alamat_1,
        alamat_2: data.alamat_2,
        provinsi: data.provinsi,
        kota: data.kota,
        kecamatan: data.kecamatan,
        kelurahan: data.kelurahan,
        kode_pos: data.kode_pos,
        telepon: data.telepon,
        pic: data.pic,
        email: data.email
      });
    }).catch(function (err) {
      console.log(err);
    });
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      url: "".concat(host, "/provinsi")
    }).then(function (_ref2) {
      var data = _ref2.data;
      setProv(data.provinsi);
    }).catch(function (err) {
      console.log(err);
    }); // eslint-disable-next-line
  }, []);

  var onProv = function onProv(e) {
    var obj = JSON.parse(e.target.value);
    setEdit(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, edit), {}, {
      provinsi: obj.nama
    }));
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      method: 'GET',
      url: "".concat(host, "/kota?id_provinsi=").concat(obj.id)
    }).then(function (_ref3) {
      var data = _ref3.data;
      setCity(data.kota_kabupaten);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var onCity = function onCity(e) {
    var obj = JSON.parse(e.target.value);
    setEdit(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, edit), {}, {
      kota: obj.nama
    }));
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      method: 'GET',
      url: "".concat(host, "/kecamatan?id_kota=").concat(obj.id)
    }).then(function (_ref4) {
      var data = _ref4.data;
      setKec(data.kecamatan);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var onKec = function onKec(e) {
    var obj = JSON.parse(e.target.value);
    setEdit(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, edit), {}, {
      kecamatan: obj.nama
    }));
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      method: 'GET',
      url: "".concat(host, "/kelurahan?id_kecamatan=").concat(obj.id)
    }).then(function (_ref5) {
      var data = _ref5.data;
      setKel(data.kelurahan);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var onKel = function onKel(e) {
    var obj = JSON.parse(e.target.value);
    setEdit(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, edit), {}, {
      kelurahan: obj.nama
    }));
  };

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();

  var onFormChange = function onFormChange(event) {
    var _event$target = event.target,
        value = _event$target.value,
        name = _event$target.name;
    setEdit(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, edit), {}, Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value)));
  };

  var submitForm = /*#__PURE__*/function () {
    var _ref6 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var nama, alamat, msg;
      return _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              nama = edit.nama, alamat = edit.alamat;

              if (!(nama === '' || alamat === '')) {
                _context.next = 6;
                break;
              }

              Object(_components_NewAlert__WEBPACK_IMPORTED_MODULE_11__["default"])({
                status: 'error',
                message: 'Isi Semua Form'
              });
              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                method: 'PUT',
                url: "".concat(_utilities_HostUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/company/edit/").concat(dataId),
                data: edit,
                headers: {
                  token: localStorage.getItem('token')
                }
              });

            case 8:
              Object(_components_NewAlert__WEBPACK_IMPORTED_MODULE_11__["default"])({
                status: 'success',
                message: 'Berhasil'
              });
              history.push('/perusahaan');
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              msg = _context.t0.response.data.msg;
              Object(_components_NewAlert__WEBPACK_IMPORTED_MODULE_11__["default"])({
                status: 'error',
                message: msg
              });
              console.log(_context.t0.response.data);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function submitForm(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handdleDelete = function handdleDelete() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
      title: 'Yakin ingin hapus?',
      text: "".concat(edit.nama),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!'
    }).then( /*#__PURE__*/function () {
      var _ref7 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(result) {
        var msg;
        return _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!result.isConfirmed) {
                  _context2.next = 15;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                  method: 'DELETE',
                  url: "".concat(_utilities_HostUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/company/delete/").concat(dataId),
                  headers: {
                    token: localStorage.getItem('token')
                  }
                });

              case 4:
                Object(_components_NewAlert__WEBPACK_IMPORTED_MODULE_11__["default"])({
                  status: 'success',
                  message: 'Deleted'
                });
                history.push('/perusahaan');
                _context2.next = 13;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                msg = _context2.t0.response.data.msg;
                Object(_components_NewAlert__WEBPACK_IMPORTED_MODULE_11__["default"])({
                  status: 'error',
                  message: msg
                });
                console.log(_context2.t0.response.data);

              case 13:
                _context2.next = 16;
                break;

              case 15:
                Object(_components_NewAlert__WEBPACK_IMPORTED_MODULE_11__["default"])({
                  status: 'error',
                  message: 'Cancel'
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }));

      return function (_x2) {
        return _ref7.apply(this, arguments);
      };
    }());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CRow"], {
      className: "justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
        xs: "12",
        md: "12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCard"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCardHeader"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("strong", {
              children: "Edit Perusahaan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCardBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CForm"], {
              onSubmit: submitForm,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "7",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "text-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("small", {
                          children: "Nama Perusahaan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 213,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "nama",
                        value: edit.nama,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 217,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "text-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("small", {
                          children: "Kode Perusahaan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 223,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "kode_perusahaan",
                        value: edit.kode_perusahaan,
                        disabled: true,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "7",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("small", {
                          children: "Alamat Perusahaan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 238,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        placeholder: "Jalan 1",
                        name: "alamat_1",
                        value: edit.alamat_1,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        placeholder: "Jalan 2",
                        name: "alamat_2",
                        value: edit.alamat_2,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 248,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onProv,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                          value: "0",
                          id: "test",
                          children: edit.provinsi
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 256,
                          columnNumber: 27
                        }, _this), prov && prov.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 262,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 255,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onCity,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                          value: "0",
                          children: edit.kota
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 27
                        }, _this), city && city.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 270,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onKec,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                          value: "0",
                          children: edit.kecamatan
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 287,
                          columnNumber: 27
                        }, _this), kec && kec.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 291,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onKel,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                          value: "0",
                          children: edit.kelurahan
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 300,
                          columnNumber: 27
                        }, _this), kel && kel.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        placeholder: "Kode Pos",
                        name: "kode_pos",
                        value: edit.kode_pos,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 315,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 312,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("small", {
                          children: "Telepon"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 323,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "telepon",
                        value: edit.telepon,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 327,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("small", {
                          children: "PIC"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 333,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 332,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 331,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "pic",
                        value: edit.pic,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 337,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("small", {
                          children: "Email"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 343,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 342,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "email",
                        value: edit.email,
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 347,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 340,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 319,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCardFooter"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CButton"], {
                  size: "sm",
                  color: "danger",
                  className: "float-left",
                  onClick: handdleDelete,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    name: "cil-scrubber"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 21
                  }, _this), " Hapus"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CButton"], {
                  size: "sm",
                  type: "submit",
                  color: "primary",
                  className: "float-right",
                  onClick: submitForm,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    name: "cil-scrubber"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 21
                  }, _this), " Simpan"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 5
  }, _this);
};

_s(EditCompany, "cNOLcbGfC+5zVqjfLr/XAyY9t5Y=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useParams"], react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"]];
});

_c = EditCompany;
/* harmony default export */ __webpack_exports__["default"] = (EditCompany);

var _c;

__webpack_require__.$Refresh$.register(_c, "EditCompany");

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

}]);
//# sourceMappingURL=5.chunk.js.map