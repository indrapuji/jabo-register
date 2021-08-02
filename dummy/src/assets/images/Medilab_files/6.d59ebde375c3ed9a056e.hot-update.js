webpackHotUpdate(6,{

/***/ "./src/views/pages/company/RegisterCompany.js":
/*!****************************************************!*\
  !*** ./src/views/pages/company/RegisterCompany.js ***!
  \****************************************************/
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







var _jsxFileName = "/Users/indrapujinovirwan/Documents/cms-medilab/client/src/views/pages/company/RegisterCompany.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();










var RegisterCompany = function RegisterCompany() {
  _s();

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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    nama: '',
    kode_perusahaan: '',
    alamat_1: '',
    alamat_2: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
    kode_pos: '',
    telepon: '',
    pic: '',
    email: ''
  }),
      _useState10 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      formData = _useState10[0],
      setFormData = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      url: "".concat(host, "/provinsi")
    }).then(function (_ref) {
      var data = _ref.data;
      setProv(data.provinsi);
    }).catch(function (err) {
      console.log(err);
    });
  }, []);

  var onProv = function onProv(e) {
    var obj = JSON.parse(e.target.value);
    setFormData(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, formData), {}, {
      provinsi: obj.nama
    }));
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      url: "".concat(host, "/kota?id_provinsi=").concat(obj.id)
    }).then(function (_ref2) {
      var data = _ref2.data;
      setCity(data.kota_kabupaten);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var onCity = function onCity(e) {
    var obj = JSON.parse(e.target.value);
    setFormData(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, formData), {}, {
      kota: obj.nama
    }));
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      url: "".concat(host, "/kecamatan?id_kota=").concat(obj.id)
    }).then(function (_ref3) {
      var data = _ref3.data;
      setKec(data.kecamatan);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var onKec = function onKec(e) {
    var obj = JSON.parse(e.target.value);
    setFormData(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, formData), {}, {
      kecamatan: obj.nama
    }));
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      url: "".concat(host, "/kelurahan?id_kecamatan=").concat(obj.id)
    }).then(function (_ref4) {
      var data = _ref4.data;
      setKel(data.kelurahan);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var onKel = function onKel(e) {
    var obj = JSON.parse(e.target.value);
    setFormData(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, formData), {}, {
      kelurahan: obj.nama
    }));
  };

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();

  var onFormChange = function onFormChange(event) {
    var _event$target = event.target,
        value = _event$target.value,
        name = _event$target.name;
    setFormData(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, formData), {}, Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value)));
  };

  var submitForm = /*#__PURE__*/function () {
    var _ref5 = Object(_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var nama, alamat, msg;
      return _Users_indrapujinovirwan_Documents_cms_medilab_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              nama = formData.nama, alamat = formData.alamat;

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
                method: 'POST',
                url: _utilities_HostUrl__WEBPACK_IMPORTED_MODULE_10__["default"] + '/company/create',
                data: formData,
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
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CRow"], {
      className: "justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
        xs: "12",
        md: "12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCard"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCardHeader"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("strong", {
              children: "Register Perusahaan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCardBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CForm"], {
              onSubmit: submitForm,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "7",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "text-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("small", {
                          children: "Nama Perusahaan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "nama",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "text-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("small", {
                          children: "Kode Perusahaan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "kode_perusahaan",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "7",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("small", {
                          children: "Alamat Perusahaan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        placeholder: "Jalan 1",
                        name: "alamat_1",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        placeholder: "Jalan 2",
                        name: "alamat_2",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onProv,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                          value: "0",
                          id: "test",
                          children: "Provinsi"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 205,
                          columnNumber: 27
                        }, _this), prov && prov.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 211,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onCity,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                          value: "0",
                          children: "Kota"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 27
                        }, _this), city && city.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 224,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onKec,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                          value: "0",
                          children: "Kecamatan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 27
                        }, _this), kec && kec.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 240,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 235,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CSelect"], {
                        custom: true,
                        size: "sm",
                        onChange: onKel,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                          value: "0",
                          children: "Kelurahan"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 27
                        }, _this), kel && kel.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                            value: JSON.stringify(item),
                            children: item.nama
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 33
                          }, _this);
                        })]
                      }, void 0, true, {
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
                    lineNumber: 232,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        placeholder: "Kode Pos",
                        name: "kode_pos",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                  xs: "5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("small", {
                          children: "Telepon"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 272,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "telepon",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("small", {
                          children: "PIC"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 282,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "pic",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CFormGroup"], {
                    row: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CLabel"], {
                        htmlFor: "textarea-input",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("small", {
                          children: "Email"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 292,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 291,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCol"], {
                      md: "10",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CInput"], {
                        custom: true,
                        size: "sm",
                        name: "email",
                        onChange: onFormChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CCardFooter"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_react__WEBPACK_IMPORTED_MODULE_6__["CButton"], {
                  type: "submit",
                  size: "sm",
                  color: "primary",
                  className: "float-right",
                  onClick: submitForm,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    name: "cil-scrubber"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 21
                  }, _this), " Simpan"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 5
  }, _this);
};

_s(RegisterCompany, "7Xkuo+sQNu8JYxBbK1k5gdquAMQ=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"]];
});

_c = RegisterCompany;
/* harmony default export */ __webpack_exports__["default"] = (RegisterCompany);

var _c;

__webpack_require__.$Refresh$.register(_c, "RegisterCompany");

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
//# sourceMappingURL=6.d59ebde375c3ed9a056e.hot-update.js.map