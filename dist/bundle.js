/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BSTNode = function BSTNode(_ref) {
  var val = _ref.val,
      left = _ref.left,
      right = _ref.right,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? { left: 0, right: 0 } : _ref$height;
  return { val: val, left: left, right: right, height: height };
};

function BST() {
  var root = void 0,
      min = void 0,
      max = void 0;
  var createRoot = function createRoot(node) {
    root = node;
    return root;
  };
  var err = function err(message) {
    return console.log(message);
  };
  var setMin = function setMin(node) {
    min = !min || min.val < node.val ? min : node;
  };
  var setMax = function setMax(node) {
    max = !max || max.val > node.val ? max : node;
  };
  var setHeight = function setHeight(node, height) {};
  var insertNode = function insertNode(node, parent, direction) {
    parent[direction] = node;
    node.parent = parent[direction];
    setMin(node);
    setMax(node);
    setHeight(parent, 1);
    return node;
  };
  var insert = function insert(node) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : root;

    if (!root) return createRoot(node);
    var direction = node.val < parent.val ? 'left' : 'right';
    if (parent[direction]) return insert(node, parent[direction]);
    if (!parent[direction]) return insertNode(node, parent, direction);
  };

  var adjust = function adjust() {};

  var insertBSTNode = function insertBSTNode(val) {
    insert(BSTNode({ val: val }));
    adjust();
  };
  return { getRoot: function getRoot() {
      return root;
    }, getMin: function getMin() {
      return min;
    }, getMax: function getMax() {
      return max;
    }, insert: insertBSTNode };
}

exports.default = BST;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BST = __webpack_require__(0);

var _BST2 = _interopRequireDefault(_BST);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bst = (0, _BST2.default)();
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(10);
bst.insert(2);
bst.insert(1);

// document.querySelectorAll('p.result')[0].innerHTML = bst.getRoot().val
console.log(bst.getRoot().val);

/***/ })
/******/ ]);