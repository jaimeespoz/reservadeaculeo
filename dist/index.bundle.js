/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


module.exports = function (cssWithMappingToString) {
  var list = [];
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/shared/footer/footer.js":
/*!*************************************!*\
  !*** ./src/shared/footer/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _src_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "./src/shared/footer/footer.css");
/* harmony import */ var _src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/images/Logo.png */ "./src/assets/images/Logo.png");



var container = document.createElement('div');
container.innerHTML = "\n<div class=\"footer\">   \n    <div class=\"container2\">\n        <div class=\"content\">\n            <div class=\"layout\">\n                <div class=\"panel_logo\">\n                    <a href=\"/\">\n                        <img src=\"".concat(_src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_2__, "\" class=\"img\" alt=\"\" />\n                    </a>\n                    <div class=\"resena\">\n                        <p class=\"resena-titulo\">Junta de Vecinos</p>\n                        <p class=\"resena-titulo\">Reserva de Aculeo</p>\n                        <p class=\"resena-otros\">Constitucion: Octubre-2024</p>\n                        <p class=\"resena-subtitulo\">Comuna de Paine</p>\n                        <p class=\"resena-subtitulo\">Region Metropolitana</p>\n                    </div>\n                </div>\n                <div class=\"panel_info\">\n                    <span class=\"panel_info_titulo\">Contacto<span>\n                    <span class=\"panel_info_subtitulo\">Direccion:</span>\n                    <span class=\"panel_info_texto\">Parcela xx</span>\n                    <span class=\"panel_info_texto\">Condominio Parque Cantillana</span>\n                    <span class=\"panel_info_texto\">(ex Alto Laguna)</span>\n                    <span class=\"panel_info_texto\">Ruta G-546 - Klm. 19,5</span>\n                    <span class=\"panel_info_texto\">Comuna de Paine</span>\n                    <span class=\"panel_info_subtitulo\">Email:<span>\n                    <span class=\"panel_info_texto\">contacto@reservadeaculeo.cl</span>\n                    <span class=\"panel_info_subtitulo\">Telefono:<span>\n                    <span class=\"panel_info_texto\">+56 9 1234 1234</span>\n                </div>\n                <div class=\"panel_info\">\n                    <span class=\"panel_info_titulo\">Incorporacion<span>\n                    <ul>\n                        <li>\n                            <a href=\"/enconstruccion.html\"><span>Proxima Reunion</span></a>\n                            <a href=\"/enconstruccion.html\"><span>Tema x Tema x Tema x</span></a>\n                            <a href=\"/enconstruccion.html\"><span>Tema y Tema y Tema y</span></a>\n                            <a href=\"/enconstruccion.html\"><span>Tema z Tema z Tema z</span></a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"panel_info\">\n                    <span class=\"panel_info_titulo\">Nuestra Comunidad<span>\n                    <ul>\n                        <li>\n                            <a href=\"/enconstruccion.html\"><span>Actividades</span></a>\n                            <a href=\"/enconstruccion.html\"><span>Tema x Tema x Tema x</span></a>\n                            <a href=\"/enconstruccion.html\"><span>Tema y Tema y Tema y</span></a>\n                            <a href=\"/enconstruccion.html\"><span>Tema z Tema z Tema z</span></a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n");
var footer = container;


/***/ }),

/***/ "./src/shared/navbar/navbar.js":
/*!*************************************!*\
  !*** ./src/shared/navbar/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navbar: () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _src_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.css */ "./src/shared/navbar/navbar.css");
/* harmony import */ var _src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/images/Logo.png */ "./src/assets/images/Logo.png");



var container = document.createElement('div');
container.innerHTML = "\n    <header class=\"header\">\n        <div class=\"logo\">\n            <img src=\"".concat(_src_assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_2__, "\" alt=Reserva de Aculeo\">\n        </div>\n        <nav>\n            <ul class=\"nav-links\">\n                <li><a href=\"/index.html\">Inicio</a></li>\n                <li><a href=\"/enconstruccion.html\">Quienes Somos</a></li>\n                <li><a href=\"/enconstruccion.html\">Proyectos</a></li>\n                <li><a href=\"/login.html\">Log In</a></li>\n            </ul>\n        </nav>\n        <a href=\"/contacto.html\" class=\"btn\"><button type=\"button\">Contacto</button></a>\n    </header>\n");
var navbar = container;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/shared/footer/footer.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/shared/footer/footer.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.footer {
  width: 100%;
  .container2 {
    background-color: rgb(6, 114, 203);
    .content {
      padding: 48px 18px;
      justify-content: center;
      .layout {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-evenly;
        gap: 4rem;
        .panel_logo {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          a {
            text-decoration: none;
            img {
              width: 240px;
              height: 240px;
            }
          }
          .resena {
            .resena-titulo {
              margin: 0;
              padding: 0;
              line-height: 100%;
              font-size: 1.8rem;
              font-weight: 600;
              text-wrap: nowrap;
              color: lightgray;
            }
            .resena-subtitulo {
              margin: 0;
              padding: 0;
              line-height: 100%;
              font-size: 1.1rem;
              font-weight: 500;
              text-wrap: nowrap;
              color: lightgray;
            }
            .resena-otros {
              margin: 12px;
              padding: 0;
              line-height: 100%;
              font-size: 0.95rem;
              font-weight: 400;
              text-wrap: nowrap;
              color: white;
            }
          }
        }
      }
    }
  }
}

.panel_info {
  display: inline-block;
  color: white;
  ul {
    list-style: none;
    padding: 18px 0px 18px 0px;
    li {
      margin: 6px 0px 6px 0px;
      line-height: 100%;
      font-weight: 400;
      color: white;
      a {
        text-decoration: none;
      }
      a:hover {
        color: darkgrey;
      }
      span {
        font-size: 0.95rem;
      }
    }
  }
}

.panel_info_titulo {
  margin: 12px 0px 12px 0px;
  font-size: 1.6rem;
  font-weight: 600;
}

.panel_info_subtitulo {
  margin: 24px 0px 12px 0px;
  font-size: 1.2rem;
  font-weight: 500;
}

.panel_info_texto {
  margin: 6px 0px 6px 0px;
  font-size: 1.05rem;
  font-weight: 400;
}

/*=============== BREAKPOINTS ===============*/
/*  */
/* 360×640 (móvil pequeño): 22,64%. */
/* 375×667 (móvil medio): 5%. */
/* 720×1280 (móvil grande): 2,74%. */
/* 1366×768 (ordenador portátil medio): 11,98%. */
/* 1440×900 (escritorio medio): 3,17%. */
/* 1920×1080 (escritorio grande): 7,35%. */
/*  */
@media screen and (min-width: 360px) {
  .footer {
    .container2 {
      /* background-color: purple; */
      margin-bottom: 12px;
      .content {
        .layout {
          padding: 6px 36px;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          .panel_logo {
            a {
              img {
                width: 120px;
                height: 120px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 375px) {
  .footer {
    .container2 {
      .content {
        .layout {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
}
@media screen and (min-width: 720px) {
  .footer {
    .container2 {
      /* background-color: orange; */
      .content {
        .layout {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .footer {
    .container2 {
      .content {
        .layout {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
}
@media screen and (min-width: 1366px) {
  .footer {
    .container2 {
      .content {
        .layout {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .footer {
    .container2 {
      .content {
        .layout {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .footer {
    .container2 {
      .content {
        .layout {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
}`, "",{"version":3,"sources":["webpack://./src/shared/footer/footer.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,WAAA;EACA;IACI,kCAAA;IAEA;MACI,kBAAA;MACA,uBAAA;MAEA;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,SAAA;QAEA;UACI,aAAA;UACA,mBAAA;UACA,uBAAA;UACA,mBAAA;UAEA;YACI,qBAAA;YACA;cACI,YAAA;cACA,aAAA;YAFhB;UACF;UAIU;YACI;cACI,SAAA;cACA,UAAA;cAEA,iBAAA;cACA,iBAAA;cACA,gBAAA;cACA,iBAAA;cACA,gBAAA;YAHhB;YAKY;cACI,SAAA;cACA,UAAA;cAEA,iBAAA;cACA,iBAAA;cACA,gBAAA;cACA,iBAAA;cACA,gBAAA;YAJhB;YAMY;cACI,YAAA;cACA,UAAA;cAEA,iBAAA;cACA,kBAAA;cACA,gBAAA;cACA,iBAAA;cACA,YAAA;YALhB;UACF;QACF;MACF;IACF;EACF;AACF;;AAQA;EACI,qBAAA;EACA,YAAA;EAEA;IACI,gBAAA;IACA,0BAAA;IAEA;MACI,uBAAA;MACA,iBAAA;MACA,gBAAA;MACA,YAAA;MAEA;QACI,qBAAA;MARV;MAWM;QACI,eAAA;MATV;MAWM;QACI,kBAAA;MATV;IACF;EACF;AACF;;AAYA;EACI,yBAAA;EACA,iBAAA;EACA,gBAAA;AATJ;;AAYA;EACI,yBAAA;EACA,iBAAA;EACA,gBAAA;AATJ;;AAWA;EACI,uBAAA;EACA,kBAAA;EACA,gBAAA;AARJ;;AAWA,8CAAA;AACA,KAAA;AACA,qCAAA;AACA,+BAAA;AACA,oCAAA;AACA,iDAAA;AACA,wCAAA;AACA,0CAAA;AACA,KAAA;AACA;EACI;IACI;MACI,8BAAA;MACA,mBAAA;MACA;QACI;UACI,iBAAA;UACA,qCAAA;UACA,SAAA;UACA;YACI;cACI;gBACI,YAAA;gBACA,aAAA;cARlB;YACF;UACF;QACF;MACF;IACF;EACF;AACF;AAWA;EACI;IACI;MACI;QACI;UACI,qCAAA;QATZ;MACF;IACF;EACF;AACF;AAYA;EACI;IACI;MACI,8BAAA;MACA;QACI;UACI,qCAAA;QAVZ;MACF;IACF;EACF;AACF;AAaA;EACI;IACI;MACI;QACI;UACI,qCAAA;QAXZ;MACF;IACF;EACF;AACF;AAcA;EACI;IACI;MACI;QACI;UACI,qCAAA;QAZZ;MACF;IACF;EACF;AACF;AAeA;EACI;IACI;MACI;QACI;UACI,qCAAA;QAbZ;MACF;IACF;EACF;AACF;AAgBA;EACI;IACI;MACI;QACI;UACI,qCAAA;QAdZ;MACF;IACF;EACF;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/shared/navbar/navbar.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/shared/navbar/navbar.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  background-color: #1b3039;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  height: 68px;
  padding: 5px 10%;
}

.header .logo {
  cursor: pointer;
}

.header .logo img {
  height: 70px;
  width: auto;
  transition: all 0.3s;
}

.header .logo img:hover {
  transform: scale(1.2);
}

.header .nav-links {
  list-style: none;
}

.header .nav-links li {
  display: inline-block;
  padding: 0 20px;
}

.header .nav-links li:hover {
  transform: scale(1.1);
}

.header .nav-links a {
  font-size: 700;
  color: #eceff1;
  text-decoration: none;
}

.header .nav-links li a:hover {
  color: #ffbc0c;
}

.header .btn button {
  font-weight: 700;
  color: #1b3039;
  padding: 9px 25px;
  background: #eceff1;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.header .btn button:hover {
  background-color: #e2f1f8;
  color: #ffbc0e;
  transform: scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/shared/navbar/navbar.css"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,oBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,qBAAA;EACA,eAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,cAAA;EACA,cAAA;EACA,qBAAA;AACJ;;AAEA;EACI,cAAA;AACJ;;AAEA;EACI,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,4BAAA;AACJ;;AAEA;EACI,yBAAA;EACA,cAAA;EACA,qBAAA;AACJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a,
img,
span,
input,
button,
textarea {
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  height: auto;
}

button {
  cursor: pointer;
}

/* input, */
textarea {
  border: 1px solid lightgrey;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
}

input,
textarea,
[contenteditable=true] {
  outline: none;
}

textarea {
  resize: vertical;
}

/*---------------------------------- #BASE -----------------------------------*/
:where(input, textarea)::-moz-placeholder {
  color: currentColor;
}
:where(input, textarea)::placeholder {
  color: currentColor;
}

button:disabled {
  pointer-events: none;
}

html {
  font-family: Roboto;
  font-size: 0.85rem;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: grey;
  color: #34495e;
  font-size: 1.05rem;
  line-height: 100%;
}

::-moz-selection {
  background-color: var(--primary);
  color: var(--on-primary);
}

::selection {
  background-color: var(--primary);
  color: var(--on-primary);
}

/*---------------------------------- #BASE -----------------------------------*/
.card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.card__img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  padding-bottom: 48px;
}

.card__modal {
  position: absolute;
  left: 0;
  bottom: -44%;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsl(213, 70%, 40%) 80%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card__modal p {
  margin: 0;
  padding: 0 18px;
  font-size: 0.813rem;
  color: rgb(250, 250, 250);
}

.modal-text {
  height: 120px;
  width: 100%;
  color: #34495e;
  overflow-y: auto;
  margin-block-end: 16px;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  /* background-color: var(--surface-container-low); */
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  /* background-color: var(--outline-variant); */
  border-radius: 4px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAGA;;;EAGI,SAAA;EACA,UAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,gBAAA;AAAJ;;AAGA;;;;;;EAMI,cAAA;AAAJ;;AAGA;EACI,cAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,YAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;;AAGA,WAAA;AACA;EACI,2BAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;AAAJ;;AAGA;;;EAGI,aAAA;AAAJ;;AAEA;EACI,gBAAA;AACJ;;AACA,+EAAA;AAEA;EACI,mBAAA;AACJ;AAFA;EACI,mBAAA;AACJ;;AAEA;EACI,oBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,wCAAA;AACJ;;AAEA;EACI,sBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,wBAAA;AACJ;;AAHA;EACI,gCAAA;EACA,wBAAA;AACJ;;AAEA,+EAAA;AAEA;EACI,kBAAA;EACA,mBAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,kFAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,SAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,UAAA;AAAJ;;AAGA;EACI,oDAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,8CAAA;EACA,kBAAA;AAAJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/home.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/home.css ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contenedor {
  position: relative;
  margin: 32px 48px 32px 48px;
  list-style-type: none;
  .contenido {
    display: inline-block;
    /* height: 100vh; */
    width: 100wh;
    /* margin: 32px 48px 32px 48px; */
    /* padding: 32px 48px 32px 48px; */
    border: 1px solid grey;
    border-radius: 12px;
    padding: 6px;
    background-color: rgb(255, 255, 255);
    /* gap: 2.5rem 4rem; */
  }
}

.wrapper {
  padding: 32px 48px 32px 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
}

.layer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  text-align: center;
}

.layer-dos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  text-align: center;
}

.titulares {
  .tit-ppal {
    margin: 12px;
    .tit-ppal-titulo {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 90%;
    }
    .tit-ppal-detalle {
      padding: 2px 2px 18px 2px;
      font-size: 1.05rem;
      font-weight: 400;
      line-height: 110%;
      text-align: justify;
    }
    .tit-ppal-imagen {
      margin: 0 auto;
      width: 100%;
      height: auto;
      border-radius: 6px;
    }
    p:hover {
      cursor: pointer;
    }
    img:hover {
      cursor: pointer;
    }
  }
}

.col-dos {
  margin: 12px 6px;
  flex-basis: 42%;
  .col-dos-imagen {
    margin: 0 auto;
    width: 100%;
    height: 160px;
    border-radius: 6px;
  }
  .col-dos-detalle {
    padding: 24px 2px 6px 2px;
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 110%;
    text-align: justify;
  }
  p:hover {
    cursor: pointer;
  }
  img:hover {
    cursor: pointer;
  }
}

.border {
  border: solid 1px rgb(6, 114, 203);
  border-radius: 8px;
}

.flex-row {
  position: relative;
}

.flex-row:after {
  position: absolute;
  z-index: 1;
}

/*=============== BREAKPOINTS ===============*/
@media screen and (max-width: 320px) {
  .container2 {
    .content {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}
@media screen and (min-width: 320px) {
  .container2 {
    .content {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}
@media screen and (min-width: 360px) {
  .contenedor {
    .contenido {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
  .titulares {
    .tit-ppal {
      /* margin: 12px; */
      .tit-ppal-titulo {
        /* font-size: 1.8rem;
        font-weight: 600;
        line-height: 90%; */
      }
      .tit-ppal-detalle {
        /* padding: 2px 2px 18px 2px;
        font-size: 1.05rem;
        font-weight: 400;
        line-height: 110%;
        text-align: justify; */
      }
      .tit-ppal-imagen {
        margin: 0 auto;
        width: 100%;
        height: auto;
        border-radius: 6px;
      }
    }
  }
}
@media screen and (min-width: 480px) {
  .contenedor {
    .contenido {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}
@media screen and (min-width: 960px) {
  .contenedor {
    .contenido {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .contenedor {
    .contenido {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}
@media screen and (min-width: 1366px) {
  .contenedor {
    .contenido {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}`, "",{"version":3,"sources":["webpack://./src/views/home.css"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,2BAAA;EACA,qBAAA;EAEA;IACI,qBAAA;IACA,mBAAA;IACA,YAAA;IACA,iCAAA;IACA,kCAAA;IACA,sBAAA;IACA,mBAAA;IACA,YAAA;IACA,oCAAA;IACA,sBAAA;EAAN;AACF;;AAGA;EACI,4BAAA;EACA,aAAA;EACA,qCAAA;EACA,6BAAA;EACA,mBAAA;EACA,SAAA;AAAJ;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;EACA,yBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;EACA,yBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI;IACI,YAAA;IAEA;MACI,iBAAA;MACA,gBAAA;MACA,gBAAA;IADR;IAGI;MACI,yBAAA;MACA,kBAAA;MACA,gBAAA;MACA,iBAAA;MACA,mBAAA;IADR;IAGI;MACI,cAAA;MACA,WAAA;MACA,YAAA;MACA,kBAAA;IADR;IAGI;MACI,eAAA;IADR;IAGI;MACI,eAAA;IADR;EACF;AACF;;AAIA;EACI,gBAAA;EACA,eAAA;EAEA;IACI,cAAA;IACA,WAAA;IACA,aAAA;IACA,kBAAA;EAFN;EAIE;IACI,yBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;EAFN;EAIE;IACI,eAAA;EAFN;EAIE;IACI,eAAA;EAFN;AACF;;AAKA;EACI,kCAAA;EACA,kBAAA;AAFJ;;AAKA;EACI,kBAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,UAAA;AAFJ;;AAKA,8CAAA;AACA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MAFV;IACF;EACF;AACF;AAKA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MAHV;IACF;EACF;AACF;AAMA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MAJV;IACF;EACF;EAOE;IACI;MACI,kBAAA;MAEA;QACI;;2BAAA;MAJV;MAQM;QACI;;;;8BAAA;MAFV;MAQM;QACI,cAAA;QACA,WAAA;QACA,YAAA;QACA,kBAAA;MANV;IACF;EACF;AACF;AASA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MAPV;IACF;EACF;AACF;AAUA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MARV;IACF;EACF;AACF;AAWA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MATV;IACF;EACF;AACF;AAYA;EACI;IACI;MACI;QACI,aAAA;QACA,qCAAA;QACA,6BAAA;QACA,mBAAA;MAVV;IACF;EACF;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/footer/footer.css":
/*!**************************************!*\
  !*** ./src/shared/footer/footer.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/shared/footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/navbar/navbar.css":
/*!**************************************!*\
  !*** ./src/shared/navbar/navbar.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/shared/navbar/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/home.css":
/*!****************************!*\
  !*** ./src/views/home.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/Logo.png":
/*!************************************!*\
  !*** ./src/assets/images/Logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/43983d098ea6cfc93654.png";

/***/ }),

/***/ "./src/assets/images/Semana-de-la-Chilenidad-2019.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/Semana-de-la-Chilenidad-2019.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/ddfc9975f69bf5bd266e.jpg";

/***/ }),

/***/ "./src/assets/images/copihues.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/copihues.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/b86ba622b2df6e9d847a.jpg";

/***/ }),

/***/ "./src/assets/images/foto-05.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/foto-05.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/158f6130d3503ef0a9f4.jpg";

/***/ }),

/***/ "./src/assets/images/foto-06.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/foto-06.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/986b800c8c182dd9d3f8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _src_views_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/views/home.css */ "./src/views/home.css");
/* harmony import */ var _src_assets_images_foto_05_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/images/foto-05.jpg */ "./src/assets/images/foto-05.jpg");
/* harmony import */ var _src_assets_images_foto_06_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/images/foto-06.jpg */ "./src/assets/images/foto-06.jpg");
/* harmony import */ var _src_assets_images_copihues_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/images/copihues.jpg */ "./src/assets/images/copihues.jpg");
/* harmony import */ var _src_assets_images_Semana_de_la_Chilenidad_2019_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/assets/images/Semana-de-la-Chilenidad-2019.jpg */ "./src/assets/images/Semana-de-la-Chilenidad-2019.jpg");
/* harmony import */ var _src_shared_navbar_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/shared/navbar/navbar */ "./src/shared/navbar/navbar.js");
/* harmony import */ var _src_shared_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/shared/footer/footer */ "./src/shared/footer/footer.js");








console.log('Home');


var container = document.createElement('div');
container.innerHTML = "\n    <div class=\"contenedor\">\n        <div class=\"contenido\">\n            <div class=\"wrapper\">\n                <div class=\"layer\">\n                    <div class=\"border titulares\">\n                        <div class=\"tit-ppal\">\n                            <p class=\"tit-ppal-titulo\">\n                                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                            </p>\n                            <p class=\"tit-ppal-detalle\">\n                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque totam sunt ad et optio,\n                                cupiditate unde, incidunt debitis voluptates maxime dolorum velit numquam illo similique\n                                obcaecati fugit vel accusantium fugiat.\n                            </p>\n                            <article class=\"card\">\n                                <img class=\"tit-ppal-imagen\" alt=\"\" src=\"".concat(_src_assets_images_Semana_de_la_Chilenidad_2019_jpg__WEBPACK_IMPORTED_MODULE_5__, "\" />\n                                <div class=\"card__modal\">\n                                    <p>\n                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -\n                                        Chile\n                                    </p>\n                                </div>\n                            </article>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                <div class=\"border layer-dos\">\n                    <div class=\"col-dos\">\n                        <div class=\"col-dos-imagen\">\n                            <article class=\"card\">\n                                <img class=\"col-dos-imagen\" alt=\"\" src=\"").concat(_src_assets_images_foto_05_jpg__WEBPACK_IMPORTED_MODULE_2__, "\" />\n                                <div class=\"card__modal\">\n                                    <p>\n                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -\n                                        Chile\n                                    </p>\n                                </div>\n                            </article>\n                        </div>\n                        <p class=\"col-dos-detalle\">\n                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi\n                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit\n                            numquam\n                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.\n                        </p>\n                    </div>\n                    <div class=\"col-dos\">\n                        <div class=\"col-dos-imagen\">\n                            <article class=\"card\">\n                                <img class=\"col-dos-imagen\" alt=\"\" src=\"").concat(_src_assets_images_foto_06_jpg__WEBPACK_IMPORTED_MODULE_3__, "\" />\n                                <div class=\"card__modal\">\n                                    <p>\n                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -\n                                        Chile\n                                    </p>\n                                </div>\n                            </article>\n                        </div>\n                        <p class=\"col-dos-detalle\">\n                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi\n                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit\n                            numquam\n                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.\n                        </p>\n                    </div>\n\n                </div>\n                <!--  -->\n                <div class=\"border layer-dos\">\n                    <div class=\"col-dos\">\n                        <div class=\"col-dos-imagen\">\n                            <article class=\"card\">\n                                <img class=\"col-dos-imagen\" alt=\"\" src=\"").concat(_src_assets_images_Semana_de_la_Chilenidad_2019_jpg__WEBPACK_IMPORTED_MODULE_5__, "\" />\n                                <div class=\"card__modal\">\n                                    <p>\n                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -\n                                        Chile\n                                    </p>\n                                </div>\n                            </article>\n                        </div>\n                        <p class=\"col-dos-detalle\">\n                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi\n                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit\n                            numquam\n                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.\n                        </p>\n                    </div>\n                    <div class=\"col-dos\">\n                        <div class=\"col-dos-imagen\">\n                            <article class=\"card\">\n                                <img class=\"col-dos-imagen\" alt=\"\" src=\"").concat(_src_assets_images_copihues_jpg__WEBPACK_IMPORTED_MODULE_4__, "\" />\n                                <div class=\"card__modal\">\n                                    <p>\n                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -\n                                        Chile\n                                    </p>\n                                </div>\n                            </article>\n                        </div>\n                        <p class=\"col-dos-detalle\">\n                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi\n                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit\n                            numquam\n                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n");
document.getElementById('navbar').appendChild(_src_shared_navbar_navbar__WEBPACK_IMPORTED_MODULE_6__.navbar);
document.getElementById('main').appendChild(container);
document.getElementById('footer').appendChild(_src_shared_footer_footer__WEBPACK_IMPORTED_MODULE_7__.footer);
var boton = document.createElement('button');
boton.innerText = 'volver';
boton.className = 'btn btn-primary btn-sm';
document.getElementById('main').appendChild(boton);
boton.addEventListener('click', function () {
  window.location = '/';
});
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map