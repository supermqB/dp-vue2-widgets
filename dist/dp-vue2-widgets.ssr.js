'use strict';Object.defineProperty(exports,'__esModule',{value:true});function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}//
//
//
//
//

var script$r = {
  props: {
    title: String,
    size: {
      type: String /*l1, l2, l3*/,
      default: function _default() {
        return 'l1';
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$r = script$r;

/* template */
var __vue_render__$s = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "title_wrapper"
  }, [_vm._ssrNode("<div" + _vm._ssrClass(null, ['title', _vm.size]) + " data-v-aaba8496>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</div>")]);
};
var __vue_staticRenderFns__$s = [];

/* style */
var __vue_inject_styles__$s = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-aaba8496_0", {
    source: ".title_wrapper .title[data-v-aaba8496]{display:inline-block;color:#2f63b9;padding:6px;margin:0 6px;border-bottom:2px solid #2f63b9}.title_wrapper .title.l1[data-v-aaba8496]{font-size:16px;height:40px;box-sizing:border-box;padding:12px 6px;font-weight:700}.title_wrapper .title.l2[data-v-aaba8496]{font-size:13px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$s = "data-v-aaba8496";
/* module identifier */
var __vue_module_identifier__$s = "data-v-aaba8496";
/* functional template */
var __vue_is_functional_template__$s = false;
/* style inject shadow dom */

var __vue_component__$s = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$s,
  staticRenderFns: __vue_staticRenderFns__$s
}, __vue_inject_styles__$s, __vue_script__$r, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$q = {
  props: {
    btnCfgs: {
      type: Array,
      default: function _default() {
        return [[{
          name: 'search',
          label: '筛 选',
          props: {
            disabled: true
          }
        }, {
          name: 'adv_search',
          label: '检 索'
        }, {
          name: 'export',
          label: '导 出'
        }], [{
          name: 'approve',
          label: '通 过'
        }, {
          name: 'revoke',
          label: '退 回'
        }], [{
          name: 'add',
          label: '新 增'
        }, {
          name: 'import',
          label: '导 入'
        }], [{
          name: 'delete',
          label: '删 除'
        }]];
      }
    }
  },
  methods: {
    btnClickHandler: function btnClickHandler(name) {
      console.log(name);
      this.$emit("".concat(name, "Clicked"));
    }
  }
};/* script */
var __vue_script__$q = script$q;

/* template */
var __vue_render__$r = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "btn_grp_wrapper"
  }, _vm._l(_vm.btnCfgs, function (btnGrp, idx) {
    return _vm._ssrNode("<div class=\"group\">", "</div>", _vm._l(btnGrp, function (btnCfg) {
      return _c('el-button', _vm._b({
        key: btnCfg.name,
        attrs: {
          "type": "primary",
          "plain": ""
        },
        on: {
          "click": function click($event) {
            return _vm.btnClickHandler(btnCfg.name);
          }
        }
      }, 'el-button', btnCfg.props, false), [_vm._v(_vm._s(btnCfg.label))]);
    }), 1);
  }), 0);
};
var __vue_staticRenderFns__$r = [];

/* style */
var __vue_inject_styles__$r = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5d96ea77_0", {
    source: ".btn_grp_wrapper{display:flex;padding:0 6px;height:100%;align-items:center}.btn_grp_wrapper .group{height:28px;line-height:24px}.btn_grp_wrapper .group .el-button+.el-button{margin-left:6px}.btn_grp_wrapper .group+.group{border-left:1px solid #95a8c7;padding-left:6px;margin-left:6px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$r = undefined;
/* module identifier */
var __vue_module_identifier__$r = "data-v-5d96ea77";
/* functional template */
var __vue_is_functional_template__$r = false;
/* style inject shadow dom */

var __vue_component__$r = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$r,
  staticRenderFns: __vue_staticRenderFns__$r
}, __vue_inject_styles__$r, __vue_script__$q, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$p = {
  props: {
    tableConfig: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tableData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    currentRow: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    pageInfo: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    multipleSelect: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    isShowRadio: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    isShowSelection: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    selectable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    bottomTip: {
      type: String,
      default: function _default() {
        return "";
      }
    }
  },
  data: function data() {
    return {
      selectedIdx: 0
    };
  },
  watch: {
    currentRow: function currentRow(row) {
      this.setCurrentRow(row);
    }
  },
  methods: {
    rowAction: function rowAction(_ref, callback) {
      _ref.rowIdx;
        var row = _ref.row;
        _ref.column;
      if (!callback) return;
      callback(row.index, this.tableData, row);
    },
    rowChangeHandler: function rowChangeHandler(rowData) {
      if (rowData == null) {
        return;
      }
      this.selectedIdx = rowData.index;
      this.$emit('row-changed', rowData);
    },
    selChgHandler: function selChgHandler(selection) {
      this.$emit('selection-changed', selection);
    },
    sizeChangeHandler: function sizeChangeHandler(pageSize) {
      this.pageInfo.pageSize = pageSize;
      this.$emit('page-changed', {
        pageSize: pageSize,
        curPage: 1
      });
    },
    pageChangeHandler: function pageChangeHandler(currentPage) {
      this.pageInfo.curPage = currentPage;
      this.$emit('page-changed', {
        curPage: currentPage
      });
    },
    setCurrentRow: function setCurrentRow(row) {
      this.$refs.el_table.setCurrentRow(row);
    },
    typeProps: function typeProps(propDefs, row) {
      var props = {};
      for (var key in propDefs) {
        props[key] = typeof propDefs[key] == 'function' ? propDefs[key](row) : propDefs[key];
      }
      return props;
    }
  }
};/* script */
var __vue_script__$p = script$p;

/* template */
var __vue_render__$q = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "el_table_wrapper"
  }, [_vm._ssrNode("<div class=\"table_container\" data-v-34b594de>", "</div>", [_c('el-table', {
    ref: "el_table",
    attrs: {
      "data": _vm.tableData,
      "height": "100%",
      "width": "100%",
      "highlight-current-row": "",
      "border": "",
      "stripe": ""
    },
    on: {
      "current-change": _vm.rowChangeHandler,
      "selection-change": _vm.selChgHandler
    }
  }, [_vm.multipleSelect && _vm.isShowSelection ? _c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "30",
      "fixed": "",
      "selectable": _vm.selectable
    }
  }) : _vm.isShowSelection ? _c('el-table-column', {
    attrs: {
      "width": "30",
      "fixed": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var row = ref.row;
        var $index = ref.$index;
        return [_vm.isShowRadio ? _c('el-radio', {
          attrs: {
            "label": row.index
          },
          model: {
            value: _vm.selectedIdx,
            callback: function callback($$v) {
              _vm.selectedIdx = $$v;
            },
            expression: "selectedIdx"
          }
        }) : _c('span', [_vm._v(_vm._s($index + 1))])];
      }
    }])
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.tableConfig, function (col) {
    return _c('el-table-column', _vm._b({
      key: col.colConfig.property,
      attrs: {
        "show-overflow-tooltip": ""
      },
      scopedSlots: _vm._u([col.actions != null ? {
        key: "default",
        fn: function fn(ref) {
          var rowIdx = ref.$index;
          var row = ref.row;
          var column = ref.column;
          return _vm._l(col.actions, function (action) {
            return _c(action.type, _vm._b({
              key: action.id,
              tag: "component",
              nativeOn: {
                "click": function click($event) {
                  $event.preventDefault();
                  return _vm.rowAction({
                    rowIdx: rowIdx,
                    row: row,
                    column: column
                  }, action.callback);
                }
              },
              model: {
                value: row[action.id],
                callback: function callback($$v) {
                  _vm.$set(row, action.id, $$v);
                },
                expression: "row[action.id]"
              }
            }, 'component', _vm.typeProps(action.typeProps, row), false), [_vm._v("\n            " + _vm._s(typeof action.name == 'function' ? action.name(row) : action.name) + "\n          ")]);
          });
        }
      } : null], null, true)
    }, 'el-table-column', col.colConfig, false));
  })], 2)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"table_footer\" data-v-34b594de>", "</div>", [_vm._ssrNode("<div class=\"bottomTip\" data-v-34b594de>" + _vm._s(_vm.bottomTip) + "</div> "), _vm.pageInfo != null ? _c('el-pagination', {
    attrs: {
      "current-page": _vm.pageInfo.curPage,
      "page-sizes": [5, 10, 20, 50],
      "page-size": _vm.pageInfo.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.pageInfo.totalSize
    },
    on: {
      "size-change": _vm.sizeChangeHandler,
      "current-change": _vm.pageChangeHandler,
      "update:currentPage": function updateCurrentPage($event) {
        return _vm.$set(_vm.pageInfo, "curPage", $event);
      },
      "update:current-page": function updateCurrentPage($event) {
        return _vm.$set(_vm.pageInfo, "curPage", $event);
      }
    }
  }) : _vm._e()], 2)], 2);
};
var __vue_staticRenderFns__$q = [];

/* style */
var __vue_inject_styles__$q = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-34b594de_0", {
    source: ".el_table_wrapper[data-v-34b594de]{height:100%;display:flex;flex-direction:column}.el_table_wrapper .table_container[data-v-34b594de]{flex-grow:1;padding:6px 6px 0 6px;box-sizing:border-box}",
    map: undefined,
    media: undefined
  }), inject("data-v-34b594de_1", {
    source: ".el-table__body tr.current-row>td{background-color:#f2f6ff!important}.el_table_wrapper .table_container{height:300px;overflow:auto}.el_table_wrapper .table_container .el-table{font-size:13px}.el_table_wrapper .table_container .el-table .el-table__body-wrapper.is-scrolling-right{padding-right:6px}.el_table_wrapper .table_container .el-table .el-table_1_column_1 .el-radio__label{display:none}.el_table_wrapper .table_container .el-table .cell .el-button{padding:0}.el_table_wrapper .table_footer{display:flex;align-items:center;justify-content:space-between;padding:0 6px}.el_table_wrapper .table_footer .bottomTip{font-size:12px;color:#9c9c9c}.el_table_wrapper .table_footer .bottomTip .highlight{color:red}.el_table_wrapper .table_footer .el-pagination .el-select .el-input{width:85px}.el_table_wrapper .table_footer .el-input--mini .el-input__inner{height:20px;line-height:20px}.el_table_wrapper .table_footer .el-pagination__editor.el-input{width:40px}.el_table_wrapper .table_footer .el-pagination__editor.el-input .el-input__inner{height:20px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$q = "data-v-34b594de";
/* module identifier */
var __vue_module_identifier__$q = "data-v-34b594de";
/* functional template */
var __vue_is_functional_template__$q = false;
/* style inject shadow dom */

var __vue_component__$q = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$q,
  staticRenderFns: __vue_staticRenderFns__$q
}, __vue_inject_styles__$q, __vue_script__$p, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, false, undefined, createInjectorSSR, undefined);function keysObject(ar, keyName, defaultValName) {
  var re = {};
  ar.forEach(function (item) {
    re[item[keyName]] = item[defaultValName];
  });
  return re;
}
function isEmpty(val) {
  if (val == null) return true;
  if (typeof val == 'string' && val.trim() == '') {
    return true;
  }
  return false;
}
function toFixedNumStr(num, digits) {
  var numArr = (num + '').split('');
  return [].concat(_toConsumableArray(new Array(digits - numArr.length).fill(0)), _toConsumableArray(numArr)).join('');
}
function toPrecentStr(num) {
  return "".concat(parseInt(num * 100) / 100, "%");
}
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function keysClone(data, value) {
  Object.keys(data).forEach(function (key) {
    if (key in value) {
      data[key] = value[key];
    }
  });
}
function getMax(value) {
  var prefix = value.slice(0, -2);
  var code = parseInt(value.slice(-2)) + 1;
  return "".concat(prefix).concat(code < 10 ? '0' + code.toString() : code);
}
function getMaxNumber(value, len) {
  var max = (parseInt(value) + 1).toString();
  for (var i = max.length; i < len; i++) {
    max = "0".concat(max);
  }
  return max;
}
function treeTraverse(tree, func) {
  var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  tree.forEach(function (node) {
    !deep && func(node);
    node.children && treeTraverse(node.children, func, deep);
    deep && func(node);
  });
}
function treeFilter(tree, filterFunc, processFunc) {
  var filteredArr = [];
  tree.forEach(function (node) {
    if (filterFunc(node)) {
      var tNode = _objectSpread2({}, node);
      if (tNode.children) {
        tNode.children = treeFilter(tNode.children, filterFunc, processFunc);
        !tNode.children.length && delete tNode.children;
      }
      filteredArr.push(!processFunc ? tNode : processFunc(tNode));
    }
  });
  return filteredArr;
}
function treeSome(tree, func) {
  return tree.some(function (node) {
    var nodeCheck = func(node);
    if (!nodeCheck && node.children) {
      return treeSome(node.children, func);
    }
    return nodeCheck;
  });
}
function treeFind(tree, func) {
  var findObj = null;
  var _iterator = _createForOfIteratorHelper(tree),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      if (func(node)) {
        return node;
      }
      if (node.children) {
        findObj = treeFind(node.children, func);
      }
      if (findObj) return findObj;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function getTreeParentNodes(tree, key) {
  if (!tree) return [];
  var _iterator2 = _createForOfIteratorHelper(tree),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var node = _step2.value;
      if (node.id === key) {
        return [node];
      } else {
        var res = getTreeParentNodes(node.children, key);
        if (res && res.length) return [node].concat(_toConsumableArray(res));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return [];
}
function reMapTree(tree, func) {
  if (!tree) return null;
  return tree.map(function (node) {
    var children = reMapTree(node.children, func);
    return Object.assign({}, func ? func(node) : node, {
      children: children
    });
  });
}
function getFirstActiveNode(tree, type) {
  if (!tree) return null;
  var _iterator3 = _createForOfIteratorHelper(tree),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var node = _step3.value;
      if (node.state && (!type || type === node.type)) {
        return node;
      } else {
        var res = getFirstActiveNode(node.children, type);
        if (res) return res;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return null;
}
function getFirstNode(tree, type) {
  if (!tree) return null;
  var _iterator4 = _createForOfIteratorHelper(tree),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var node = _step4.value;
      if (!type || type === node.type) {
        return node;
      } else {
        var res = getFirstNode(node.children, type);
        if (res) return res;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return null;
}
function getFirstLeafNode(tree, type) {
  if (!tree) return null;
  var _iterator5 = _createForOfIteratorHelper(tree),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var node = _step5.value;
      if (!node.children && (!type || type === node.type)) {
        return node;
      } else {
        var res = getFirstLeafNode(node.children, type);
        if (res) return res;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return null;
}
var objectKeysToNull = function objectKeysToNull(obj) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  Object.keys(obj).forEach(function (key) {
    if (exclude.indexOf(key) === -1) {
      obj[key] = null;
    }
  });
};

// export function getFirstLeaf(tree, checkFunc) {
//   if (!tree) return null
//   for (const node of tree) {
//     return !node.children && checkFunc(node)
//       ? getFirstLeaf(node.children, checkFunc)
//       : node
//   }
//   return tree.find(node => )
// }
var lang=/*#__PURE__*/Object.freeze({__proto__:null,keysObject:keysObject,isEmpty:isEmpty,toFixedNumStr:toFixedNumStr,toPrecentStr:toPrecentStr,clone:clone,keysClone:keysClone,getMax:getMax,getMaxNumber:getMaxNumber,treeTraverse:treeTraverse,treeFilter:treeFilter,treeSome:treeSome,treeFind:treeFind,getTreeParentNodes:getTreeParentNodes,reMapTree:reMapTree,getFirstActiveNode:getFirstActiveNode,getFirstNode:getFirstNode,getFirstLeafNode:getFirstLeafNode,objectKeysToNull:objectKeysToNull});var wan = 9999;
var yi = 99999999;
function unitFmt(num) {
  // num = 1 * num
  if (num > yi) {
    return (num / 100000000).toFixed(2) + '亿';
  }
  if (num > wan) {
    return (num / 10000).toFixed(2) + '万';
  }
  return num + '';
}
function stdTimeFmt(time) {
  if (time.indexOf('.') == -1) return time;
  return time.substr(0, time.indexOf('.'));
}var format=/*#__PURE__*/Object.freeze({__proto__:null,unitFmt:unitFmt,stdTimeFmt:stdTimeFmt});var reMapFunc = function reMapFunc(node) {
  var id = node.id,
    state = node.state,
    type = node.type;
  var ids = id.split('-');
  return Object.assign({}, node, {
    type: type ? type : ids[0],
    state: !!(state * 1)
  });
};
var script$o = {
  name: 'SideCatalog',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      } // id, label, state 非必填(true, false), number 非必要
    },

    currentNodeKey: {
      type: String,
      default: ''
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    disabledTypes: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    searchText: {
      type: String,
      default: ''
    }
  },
  computed: {
    treeList: function treeList() {
      return reMapTree(this.data, reMapFunc);
    }
  },
  methods: {
    unitFmt: function unitFmt$1(num) {
      return unitFmt(num);
    },
    isDisabledByType: function isDisabledByType(type) {
      if (!this.disabledTypes.length) {
        return false;
      } else {
        return this.disabledTypes.indexOf(type) > -1;
      }
    },
    filter: function filter(val) {
      if (this.$refs.sideTree) this.$refs.sideTree.filter(val);
    },
    handleNodeClick: function handleNodeClick(node) {
      this.emitItemSelected();
    },
    filterNodeMethod: function filterNodeMethod(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) > -1;
    },
    setCurrent: function setCurrent() {
      var _this = this;
      this.$nextTick(function () {
        _this.$refs.sideTree.setCurrentKey(_this.currentNodeKey);
        var selected = _this.$refs.sideTree.getCurrentNode();
        if (selected && _this.$refs.sideTree.getNode(selected) && _this.$refs.sideTree.getNode(selected).parent) {
          _this.expandParents(_this.$refs.sideTree.getNode(selected).parent);
        }
        _this.emitItemSelected();
        _this.filter(_this.searchText);
      });
    },
    expandParents: function expandParents(node) {
      node.expanded = true;
      if (node.parent) {
        this.expandParents(node.parent);
      }
    },
    emitItemSelected: function emitItemSelected() {
      var _this2 = this;
      setTimeout(function () {
        if (_this2.$refs.sideTree) {
          var node = _this2.$refs.sideTree.getCurrentNode();
          if (!node) return;
          var list = getTreeParentNodes(_this2.treeList, node.id);
          var id = node.id,
            type = node.type,
            label = node.label;
          var ids = id.split('-');
          _this2.$emit('onItemSelected', {
            id: ids.length > 1 ? ids[1] : ids[0],
            type: type,
            label: label,
            list: list.map(function (item) {
              return item.id;
            }).join('.')
          });
          _this2.$emit('onNodeSelected', _objectSpread2({}, node));
        }
      });
    }
  },
  watch: {
    searchText: {
      handler: function handler() {
        this.filter(this.searchText);
      }
    },
    currentNodeKey: {
      handler: function handler() {
        this.setCurrent();
      },
      immediate: true
    },
    data: function data() {
      this.setCurrent();
    }
  }
};/* script */
var __vue_script__$o = script$o;

/* template */
var __vue_render__$p = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dpui_sideCatalog_wrapper"
  }, [_c('el-tree', {
    ref: "sideTree",
    staticClass: "treeWrap",
    attrs: {
      "node-key": "id",
      "current-node-key": _vm.currentNodeKey,
      "filter-node-method": _vm.filterNodeMethod,
      "data": _vm.treeList,
      "expand-on-click-node": false,
      "default-expand-all": _vm.defaultExpandAll,
      "indent": 11,
      "highlight-current": ""
    },
    on: {
      "node-click": _vm.handleNodeClick
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var data = ref.data;
        var node = ref.node;
        return _c('div', {
          staticClass: "treeNode",
          on: {
            "click": function click(event) {
              return _vm.isDisabledByType(data.type) ? event.stopPropagation() : null;
            }
          }
        }, [_c('p', {
          staticClass: "label"
        }, [_c('span', [data.state ? _c('i') : _c('span', {
          staticClass: "blank"
        }), _vm._v(" "), _c('span', [_vm._v(_vm._s(data.label))])]), _vm._v(" "), _c('span', [_vm._v(_vm._s('number' in data ? _vm.unitFmt(data.number) : ''))])]), _vm._v(" "), !node.isLeaf ? _c('div', {
          staticClass: "disabled"
        }) : _vm._e()]);
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$p = [];

/* style */
var __vue_inject_styles__$p = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1f95d644_0", {
    source: ".wrap[data-v-1f95d644]{width:100%;height:100%;overflow-x:hidden;display:flex;flex-direction:column}.wrap .treeWrap[data-v-1f95d644]{flex:1;overflow:auto}.treeNode[data-v-1f95d644]{width:100%;height:100%;padding-top:2px;padding-right:10px;display:flex;box-sizing:border-box;justify-content:space-between;align-items:center;font-size:13px}.treeNode .label[data-v-1f95d644]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;justify-content:space-between;align-items:center}.treeNode .label i[data-v-1f95d644]{display:inline-block;width:5px;height:5px;margin-right:3px;margin-bottom:2px;border-radius:5px;background-color:#f56c6c}.treeNode .label .blank[data-v-1f95d644]{display:inline-block;margin-right:3px;margin-bottom:2px;width:5px;height:5px}.disabled[data-v-1f95d644]{position:absolute;left:0;width:100%;height:100%;z-index:10}[data-v-1f95d644] .el-tree-node__content{height:36px;position:relative}[data-v-1f95d644] .el-tree-node__content>.el-tree-node__expand-icon{z-index:12;padding:4px;display:inline-block}[data-v-1f95d644] .el-tree-node.is-current>.el-tree-node__content{background-color:#f2f6ff!important}[data-v-1f95d644] .el-tree-node:focus>.el-tree-node__content{background-color:transparent}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$p = "data-v-1f95d644";
/* module identifier */
var __vue_module_identifier__$p = "data-v-1f95d644";
/* functional template */
var __vue_is_functional_template__$p = false;
/* style inject shadow dom */

var __vue_component__$p = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$p,
  staticRenderFns: __vue_staticRenderFns__$p
}, __vue_inject_styles__$p, __vue_script__$o, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$n = {
  props: {
    formData: Object,
    formCfg: Array,
    formRule: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    prepareOpt: function prepareOpt(opt) {
      return opt.label != null ? _objectSpread2(_objectSpread2({}, opt), {}, {
        key: opt.value
      }) : {
        key: opt,
        label: opt,
        value: opt
      };
    },
    resetFields: function resetFields() {
      this.$refs.el_form.resetFields();
    },
    validate: function validate() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.$refs.el_form.validate(function (valid, errObj) {
          resolve({
            valid: valid,
            errObj: errObj
          });
        });
      });
    },
    clearValidate: function clearValidate() {
      this.$refs.el_form.clearValidate();
    }
  }
};/* script */
var __vue_script__$n = script$n;

/* template */
var __vue_render__$o = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('el-form', {
    ref: "el_form",
    attrs: {
      "model": _vm.formData,
      "rules": _vm.formRule,
      "show-message": false
    }
  }, _vm._l(_vm.formCfg, function (cfg) {
    return _c('el-form-item', {
      key: cfg.id,
      class: cfg.clazzName,
      attrs: {
        "label": cfg.label,
        "prop": cfg.id
      }
    }, [_c(cfg.type, _vm._g(_vm._b({
      tag: "component",
      model: {
        value: _vm.formData[cfg.id],
        callback: function callback($$v) {
          _vm.$set(_vm.formData, cfg.id, $$v);
        },
        expression: "formData[cfg.id]"
      }
    }, 'component', cfg.elOptions, false), cfg.elEvents), _vm._l(cfg.options, function (opt, index) {
      return _c('el-option', _vm._b({
        key: index
      }, 'el-option', _vm.prepareOpt(opt), false));
    }), 1)], 1);
  }), 1);
};
var __vue_staticRenderFns__$o = [];

/* style */
var __vue_inject_styles__$o = undefined;
/* scoped */
var __vue_scope_id__$o = undefined;
/* module identifier */
var __vue_module_identifier__$o = "data-v-6e150d10";
/* functional template */
var __vue_is_functional_template__$o = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$o = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$o,
  staticRenderFns: __vue_staticRenderFns__$o
}, __vue_inject_styles__$o, __vue_script__$n, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, false, undefined, undefined, undefined);var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var lodash = createCommonjsModule(function (module, exports) {
(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined$1;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined$1 : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined$1 : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined$1) {
        result = result === undefined$1 ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined$1 : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined$1,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1,
        symIterator = Symbol ? Symbol.iterator : undefined$1,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined$1,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1,
        symbolToString = symbolProto ? symbolProto.toString : undefined$1;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined$1;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined$1;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined$1 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined$1) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined$1) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined$1 : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined$1;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined$1 && !eq(object[key], value)) ||
          (value === undefined$1 && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined$1 && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined$1 : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined$1) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined$1) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined$1) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined$1 : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined$1 && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined$1, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined$1
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined$1 || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined$1;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined$1 ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined$1;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined$1 : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined$1 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined$1
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined$1 && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined$1;

          if (newValue === undefined$1) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined$1;

      var isCommon = newValue === undefined$1;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined$1;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
          if (newValue === undefined$1) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined$1;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined$1,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined$1;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined$1 ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined$1,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined$1,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined$1;

        if (newValue === undefined$1) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined$1,
            guard = length > 2 ? sources[2] : undefined$1;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined$1;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined$1 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined$1;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined$1,
            args, holders, undefined$1, undefined$1, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined$1;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined$1;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined$1 : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined$1 && other === undefined$1) {
          return defaultValue;
        }
        if (value !== undefined$1) {
          result = value;
        }
        if (other !== undefined$1) {
          if (result === undefined$1) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined$1 ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined$1;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined$1 ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined$1,
          newHoldersRight = isCurry ? undefined$1 : holders,
          newPartials = isCurry ? partials : undefined$1,
          newPartialsRight = isCurry ? undefined$1 : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined$1, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined$1;
      }
      ary = ary === undefined$1 ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined$1 ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined$1;
      }
      var data = isBindKey ? undefined$1 : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined$1
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined$1, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined$1 ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined$1 : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined$1;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined$1) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined$1
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined$1, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined$1;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined$1;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined$1,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined$1 || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined$1 ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined$1, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined$1 ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined$1)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined$1;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined$1, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined$1) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined$1 ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined$1;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined$1;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined$1, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined$1;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined$1) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined$1;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined$1, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined$1 ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return (array && array.length) ? baseUniq(array, undefined$1, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined$1, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined$1;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined$1;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined$1
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined$1);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined$1) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined$1 : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined$1;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined$1
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined$1;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined$1 ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined$1 : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined$1)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined$1;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined$1 : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined$1;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined$1 : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined$1 : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined$1;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined$1 || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined$1;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined$1;
        return result;
      }

      function cancel() {
        if (timerId !== undefined$1) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined$1;
      }

      function flush() {
        return timerId === undefined$1 ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined$1) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined$1) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined$1 ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      var result = customizer ? customizer(value, other) : undefined$1;
      return result === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined$1;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined$1;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined$1 ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined$1, customDefaultsMerge);
      return apply(mergeWith, undefined$1, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined$1 : baseGet(object, path);
      return result === undefined$1 ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined$1;
      }
      while (++index < length) {
        var value = object == null ? undefined$1 : object[toKey(path[index])];
        if (value === undefined$1) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined$1) {
        upper = lower;
        lower = undefined$1;
      }
      if (upper !== undefined$1) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined$1) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined$1) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined$1;
      }
      if (floating === undefined$1) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined$1;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined$1;
        }
      }
      if (lower === undefined$1 && upper === undefined$1) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined$1) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined$1
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined$1)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined$1;
      }
      limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined$1;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined$1, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined$1) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined$1 ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined$1 : pattern;

      if (pattern === undefined$1) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined$1, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined$1 : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined$1;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined$1;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined$1;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined$1;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined$1) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined$1 });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined$1
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(commonjsGlobal));
});var script$m = {
  props: {
    inputConfigs: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      searchForm: {},
      lastSearchForm: {
        searchText: ''
      }
    };
  },
  computed: {
    searchFormConfig: function searchFormConfig() {
      var cfg = [].concat(_toConsumableArray(this.inputConfigs), [{
        type: 'el-input',
        label: '',
        id: 'searchText',
        elOptions: {
          clearable: true,
          placeholder: '请输入',
          suffixIcon: 'el-icon-search'
        }
      }]);
      this.searchForm = keysObject(cfg, 'id', 'defaultValue');
      return cfg;
    }
  },
  watch: {
    searchForm: {
      handler: function handler(newForm) {
        var _this = this;
        if (Object.entries(newForm).some(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            ok = _ref2[0],
            ov = _ref2[1];
          return _this.lastSearchForm[ok] != ov;
        })) {
          this.__onSearch();
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.__onSearch = lodash.debounce(function () {
      _this2.onSearch();
    }, 500);
  },
  methods: {
    onSearch: function onSearch() {
      var lastSearchForm = this.lastSearchForm = _objectSpread2({}, this.searchForm);
      this.$emit('onSearch', lastSearchForm);
    }
  },
  components: {
    Form: __vue_component__$o
  }
};/* script */
var __vue_script__$m = script$m;

/* template */
var __vue_render__$n = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dpui_searchBar"
  }, [_c('Form', {
    attrs: {
      "formCfg": _vm.searchFormConfig,
      "formData": _vm.searchForm
    }
  }), _vm._ssrNode(" "), _c('el-button', {
    staticClass: "searchBtn",
    attrs: {
      "type": "primary",
      "plain": ""
    },
    on: {
      "click": _vm.onSearch
    }
  }, [_vm._v("检索"), _c('span', {
    staticClass: "filter"
  })])], 2);
};
var __vue_staticRenderFns__$n = [];

/* style */
var __vue_inject_styles__$n = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-49e23094_0", {
    source: ".dpui_searchBar[data-v-49e23094]{display:flex;align-items:center;height:100%}.dpui_searchBar[data-v-49e23094] .el-form{display:flex}.dpui_searchBar[data-v-49e23094] .el-form .el-form-item{margin-right:4px;margin-bottom:0}.dpui_searchBar .searchBtn[data-v-49e23094]{padding:5px 8px}.dpui_searchBar .searchBtn .filter[data-v-49e23094]{display:inline-block;position:relative;margin-left:2px;top:1px;left:1px;height:12px;width:12px;background-image:url(../assets/images/icons/filter.png)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$n = "data-v-49e23094";
/* module identifier */
var __vue_module_identifier__$n = "data-v-49e23094";
/* functional template */
var __vue_is_functional_template__$n = false;
/* style inject shadow dom */

var __vue_component__$n = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$n,
  staticRenderFns: __vue_staticRenderFns__$n
}, __vue_inject_styles__$n, __vue_script__$m, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, false, undefined, createInjectorSSR, undefined);var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAABOElEQVQoFWM0SNm18j8DgxfD//9ACg9gBAKG/+tYgMpMmBmYQs/NddmBRzmDUfJO37+MjD1MTCxMQMbffsOU3RXYNAAtZtRP3Vnzl4Ghm5mBMYARpMg4bTf/37//lwKZ38QE/yfu6nH/ChJ3yNrP8/7nrwVAx3AyMzFGnZ3l+pEJJAFinJ/j6svIwHjz1XvGZSAxEPjw6/cOoMNvBMi4+oLUgMTANoAYMGCQvOv9hblugiCnGKTuesvEyJD17x/DLJA8UPE9FphCXDQ/K9uWz3/+OYDkgX79TFDDp99/Hf79/1cMNfANQQ3/mRjuMfxh2A7WwMT4nqAGxr8MLP+Y/rOBNDD+Z2DD9HTKrv0MDP9vsTOwNf/8//sCMABEoM6BWILMAbE5eXmAyYThwY//v07/Z2RYgC4PAO+kcziBu3W7AAAAAElFTkSuQmCC";
var script$l = {
  model: {
    prop: 'searchForm',
    event: 'onChanged'
  },
  props: {
    inputConfigs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    searchForm: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      searchIcon: img$1,
      lastSearchForm: {
        searchText: ''
      }
    };
  },
  computed: {
    searchFormConfig: function searchFormConfig() {
      return [].concat(_toConsumableArray(this.inputConfigs), [{
        type: 'el-input',
        label: '',
        id: 'searchText',
        elOptions: {
          clearable: true,
          placeholder: '请输入',
          suffixIcon: 'el-icon-search'
        }
      }]);
    }
  },
  watch: {
    searchForm: {
      handler: function handler(newForm) {
        var _this = this;
        if (Object.entries(newForm).some(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            ok = _ref2[0],
            ov = _ref2[1];
          return _this.lastSearchForm[ok] != ov;
        })) {
          this.lastSearchForm = _objectSpread2({}, this.searchForm);
          this.$emit('onChanged', _objectSpread2({}, newForm));
          this.__onSearch();
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.__onSearch = lodash.debounce(function () {
      _this2.onSearch();
    }, 500);
  },
  methods: {
    onSearch: function onSearch() {
      this.$emit('onSearch', this.lastSearchForm);
    }
  },
  components: {
    Form: __vue_component__$o
  }
};/* script */
var __vue_script__$l = script$l;

/* template */
var __vue_render__$m = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dpui_searchBar"
  }, [_c('Form', {
    attrs: {
      "formCfg": _vm.searchFormConfig,
      "formData": _vm.searchForm
    }
  }), _vm._ssrNode(" "), _c('dp-icon-button', {
    staticClass: "searchBtn",
    attrs: {
      "text": "检索",
      "icon": _vm.searchIcon
    },
    on: {
      "click": _vm.onSearch
    }
  })], 2);
};
var __vue_staticRenderFns__$m = [];

/* style */
var __vue_inject_styles__$m = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2aea6dfd_0", {
    source: ".dpui_searchBar[data-v-2aea6dfd]{display:flex;align-items:center;height:100%}.dpui_searchBar[data-v-2aea6dfd]  .el-form{display:flex}.dpui_searchBar[data-v-2aea6dfd]  .el-form .el-form-item{margin-right:4px;margin-bottom:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$m = "data-v-2aea6dfd";
/* module identifier */
var __vue_module_identifier__$m = "data-v-2aea6dfd";
/* functional template */
var __vue_is_functional_template__$m = false;
/* style inject shadow dom */

var __vue_component__$m = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$m,
  staticRenderFns: __vue_staticRenderFns__$m
}, __vue_inject_styles__$m, __vue_script__$l, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, false, undefined, createInjectorSSR, undefined);//
var script$k = {
  props: {
    options: {
      type: Array,
      default: function _default() {
        return [{
          label: '值域种类',
          unit: '个',
          data: [12, 200]
        }, {
          label: '代码数量',
          unit: '种',
          data: [12, 20]
        }, {
          label: '赋值数量',
          unit: '个',
          data: [12, 300]
        }, {
          label: '异常统计',
          unit: '次',
          data: [0, 20000]
        }];
      } // label, unit
    }
  },

  methods: {
    unitFmt: function unitFmt$1(number) {
      return unitFmt(number);
    }
  }
};/* script */
var __vue_script__$k = script$k;

/* template */
var __vue_render__$l = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', [_vm._t("default"), _vm._ssrNode(" <ul data-v-37a385d9>" + _vm._ssrList(_vm.options, function (item, index) {
    return "<li data-v-37a385d9><span class=\"label\" data-v-37a385d9>" + _vm._ssrEscape(_vm._s(item.label + ":")) + "</span> <span class=\"value\" data-v-37a385d9>" + (item['data'] ? "<span data-v-37a385d9><span class=\"numerator\" data-v-37a385d9>" + _vm._ssrEscape(_vm._s("" + _vm.unitFmt(item['data'][0]))) + "</span> " + (item['data'][1] ? "<span data-v-37a385d9>" + _vm._ssrEscape(_vm._s("/" + _vm.unitFmt(item['data'][1]))) + "</span>" : "<!---->") + "</span>" : "<span data-v-37a385d9></span>") + " <span class=\"unit\" data-v-37a385d9>" + _vm._ssrEscape(_vm._s(item.unit)) + "</span></span></li>";
  }) + "</ul>")], 2);
};
var __vue_staticRenderFns__$l = [];

/* style */
var __vue_inject_styles__$l = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-37a385d9_0", {
    source: "ul[data-v-37a385d9]{padding:3px 1px 5px 12px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center;font-size:12px}ul li[data-v-37a385d9]{padding:6px;width:50%;max-width:150px;display:flex;align-items:center}ul li .label[data-v-37a385d9]{color:#999}ul li .value[data-v-37a385d9]{padding-left:6px}ul li .numerator[data-v-37a385d9]{color:#2f63b9}ul li .unit[data-v-37a385d9]{margin-left:3px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$l = "data-v-37a385d9";
/* module identifier */
var __vue_module_identifier__$l = "data-v-37a385d9";
/* functional template */
var __vue_is_functional_template__$l = false;
/* style inject shadow dom */

var __vue_component__$l = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$k, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, undefined, createInjectorSSR, undefined);//
var script$j = {
  props: {
    title: String,
    enableConfirm: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    closeAfterConfirm: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleOpen: function toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    finishHandler: function finishHandler() {
      this.$emit('dialog-complete');
      this.closeAfterConfirm && this.toggleOpen();
    },
    onClosed: function onClosed() {
      this.$emit('dialog-closed');
    }
  },
  components: {
    Title: __vue_component__$s
  }
};/* script */
var __vue_script__$j = script$j;

/* template */
var __vue_render__$k = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('el-dialog', {
    staticClass: "dp_dialog",
    attrs: {
      "visible": _vm.isOpen,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.isOpen = $event;
      },
      "closed": _vm.onClosed
    }
  }, [_vm._t("default", function () {
    return [_vm._v("test slot")];
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Title', {
    staticClass: "dpui_dialogTitle",
    attrs: {
      "title": _vm.title
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function click($event) {
        _vm.isOpen = false;
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": !_vm.enableConfirm
    },
    on: {
      "click": _vm.finishHandler
    }
  }, [_vm._v("确定")])], 1)], 2);
};
var __vue_staticRenderFns__$k = [];

/* style */
var __vue_inject_styles__$k = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2349442e_0", {
    source: ".dpui_dialogTitle{height:23px!important;position:relative;bottom:4px}.dpui_dialogTitle .dp-subtitle__text{font-size:15px;top:5px;color:#333}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$k = undefined;
/* module identifier */
var __vue_module_identifier__$k = "data-v-2349442e";
/* functional template */
var __vue_is_functional_template__$k = false;
/* style inject shadow dom */

var __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$j, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//

var script$i = {
  name: 'CatalogButtons',
  props: {
    list: {
      type: Array,
      default: function _default() {
        return ['add', 'delete'];
      }
    }
  },
  data: function data() {
    return {
      labels: {
        add: '添加',
        delete: '删除'
      }
    };
  },
  methods: {
    emit: function emit(event) {
      this.$emit(event);
    }
  }
};/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$j = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('ul', {
    staticClass: "dpui_catalogbuttons_wraper"
  }, [_vm._ssrNode(_vm._ssrList(_vm.list, function (item) {
    return "<li" + _vm._ssrAttr("title", _vm.labels[item]) + _vm._ssrClass(null, item) + " data-v-428d9105></li>";
  }))]);
};
var __vue_staticRenderFns__$j = [];

/* style */
var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-428d9105_0", {
    source: "ul[data-v-428d9105]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}ul li[data-v-428d9105]{width:16px;height:16px;margin-left:2px;cursor:pointer;background-size:cover}ul li.add[data-v-428d9105]{background-image:url(../assets/images/icons/add.svg)}ul li.add[data-v-428d9105]:hover{background-image:url(../assets/images/icons/add_hover.svg)}ul li.delete[data-v-428d9105]{background-image:url(../assets/images/icons/delete.svg)}ul li.delete[data-v-428d9105]:hover{background-image:url(../assets/images/icons/delete_hover.svg)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$j = "data-v-428d9105";
/* module identifier */
var __vue_module_identifier__$j = "data-v-428d9105";
/* functional template */
var __vue_is_functional_template__$j = false;
/* style inject shadow dom */

var __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$i, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$h = {
  name: 'DpLayoutRoot',
  props: {
    minWidth: {
      type: String,
      default: '1366px'
    },
    headerHeight: {
      type: String,
      default: '51px'
    },
    footerHeight: {
      type: String,
      default: '32px'
    }
  },
  computed: {
    hasSlot: function hasSlot() {
      return {
        header: typeof this.$slots.header !== 'undefined',
        main: typeof this.$slots.main !== 'undefined',
        footer: typeof this.$slots.footer !== 'undefined'
      };
    }
  }
};/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$i = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('el-container', {
    staticClass: "dp-layout-root",
    style: {
      minWidth: _vm.minWidth
    }
  }, [_vm.hasSlot.header ? _c('el-header', {
    attrs: {
      "height": _vm.headerHeight
    }
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm.hasSlot.main ? _c('el-main', [_vm._t("main")], 2) : _vm._e(), _vm._v(" "), _vm.hasSlot.footer ? _c('el-footer', {
    attrs: {
      "height": _vm.footerHeight
    }
  }, [_vm._t("footer")], 2) : _vm._e()], 1);
};
var __vue_staticRenderFns__$i = [];

/* style */
var __vue_inject_styles__$i = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-159fcbf0_0", {
    source: ".el-container.dp-layout-root{height:100%}.el-container.dp-layout-root .el-footer,.el-container.dp-layout-root .el-header,.el-container.dp-layout-root .el-main{padding:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$i = undefined;
/* module identifier */
var __vue_module_identifier__$i = "data-v-159fcbf0";
/* functional template */
var __vue_is_functional_template__$i = false;
/* style inject shadow dom */

var __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$h, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$g = {
  name: 'DpLayoutContainer',
  props: {
    asideLeftWidth: {
      type: String,
      default: '25%'
    },
    asideLeftMaxWidth: {
      type: String,
      default: 'auto'
    },
    asideRightWidth: {
      type: String,
      default: '35%'
    },
    mainBottomHeight: {
      type: String,
      default: '50%'
    }
  },
  computed: {
    hasSlot: function hasSlot() {
      return {
        asideLeft: typeof this.$slots.asideLeft !== 'undefined',
        asideRight: typeof this.$slots.asideRight !== 'undefined',
        main: typeof this.$slots.main !== 'undefined',
        mainBottom: typeof this.$slots.mainBottom !== 'undefined'
      };
    }
  }
};/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$h = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('el-container', {
    staticClass: "dp-layout-container"
  }, [_vm.hasSlot.asideLeft ? _c('el-aside', {
    staticClass: "aside-left",
    style: {
      maxWidth: _vm.asideLeftMaxWidth
    },
    attrs: {
      "width": _vm.asideLeftWidth
    }
  }, [_vm._t("asideLeft")], 2) : _vm._e(), _vm._v(" "), _vm.hasSlot.main ? _c('el-main', [!_vm.hasSlot.mainBottom ? [_vm._t("main")] : [_c('el-container', {
    attrs: {
      "direction": "vertical"
    }
  }, [_c('el-main', [_vm._t("main")], 2), _vm._v(" "), _c('el-main', {
    style: {
      flexBasis: _vm.mainBottomHeight
    }
  }, [_vm._t("mainBottom")], 2)], 1)]], 2) : _vm._e(), _vm._v(" "), _vm.hasSlot.asideRight ? _c('el-aside', {
    staticClass: "aside-right",
    attrs: {
      "width": _vm.asideRightWidth
    }
  }, [_vm._t("asideRight")], 2) : _vm._e()], 1);
};
var __vue_staticRenderFns__$h = [];

/* style */
var __vue_inject_styles__$h = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6d779d19_0", {
    source: ".el-container.dp-layout-container{height:100%;background-color:#eef0f5}.el-container.dp-layout-container .el-aside,.el-container.dp-layout-container .el-main{background-color:#fff;position:relative}.el-container.dp-layout-container .el-main{padding:0}.el-container.dp-layout-container .el-aside.aside-left{border-right:1px solid #e5e5e5}.el-container.dp-layout-container .el-aside.aside-right{border-left:1px solid #e5e5e5}.el-container.dp-layout-container .el-container.is-vertical{height:100%;background-color:#eef0f5}.el-container.dp-layout-container .el-container.is-vertical .el-main{padding:0;background-color:#fff;flex-basis:0%;flex-grow:1;flex-shrink:0;min-height:0}.el-container.dp-layout-container .el-container.is-vertical .el-main+.el-main{flex-grow:0;flex-shrink:1;flex-basis:50%;min-height:0;border-top:1px solid #e5e5e5}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$h = undefined;
/* module identifier */
var __vue_module_identifier__$h = "data-v-6d779d19";
/* functional template */
var __vue_is_functional_template__$h = false;
/* style inject shadow dom */

var __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$g, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//

var script$f = {
  name: 'HeaderTitle',
  props: {
    titleText: String
  }
};/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$g = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "header-title"
  }, [_vm._ssrNode("<div class=\"header-title__logo\" data-v-5bb36298></div> <div class=\"header-title__text\" data-v-5bb36298>" + _vm._ssrEscape(_vm._s(_vm.titleText)) + "</div>")]);
};
var __vue_staticRenderFns__$g = [];

/* style */
var __vue_inject_styles__$g = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5bb36298_0", {
    source: ".header-title[data-v-5bb36298]{position:relative;width:128px;display:flex;align-items:center;justify-content:space-between}.header-title__logo[data-v-5bb36298]{margin-left:16px;width:20px;height:20px;border-radius:50%;background:#d8d8d8;border:1px solid #979797}.header-title__text[data-v-5bb36298]{font-family:PingFangSC-Medium;font-size:16px;color:#fff;letter-spacing:.16px;width:124px;line-height:22px;margin-left:12px;white-space:nowrap}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$g = "data-v-5bb36298";
/* module identifier */
var __vue_module_identifier__$g = "data-v-5bb36298";
/* functional template */
var __vue_is_functional_template__$g = false;
/* style inject shadow dom */

var __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$f, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$e = {
  name: 'menuItem',
  props: {
    item: Object
  }
};/* script */
var __vue_script__$e = script$e;

/* template */
var __vue_render__$f = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('span', {
    staticClass: "menu-item"
  }, [!_vm.item.children || _vm.item.children.length == 0 ? [_c('el-menu-item', {
    key: _vm.item.value,
    attrs: {
      "index": _vm.item.value,
      "redirect": _vm.item.redirect
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.item.label))])])] : _vm._e(), _vm._ssrNode(" "), _vm.item.children && _vm.item.children.length > 0 ? [_c('el-submenu', {
    key: _vm.item.value,
    attrs: {
      "index": _vm.item.value,
      "popper-class": "dp-header-nav--popup",
      "show-timeout": 0,
      "hide-timeout": 0
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('span', [_vm._v(_vm._s(_vm.item.label))])]), _vm._v(" "), _vm._l(_vm.item.children, function (subitem) {
    return [_c('menuItem', {
      key: subitem.value,
      attrs: {
        "item": subitem
      }
    })];
  })], 2)] : _vm._e()], 2);
};
var __vue_staticRenderFns__$f = [];

/* style */
var __vue_inject_styles__$f = undefined;
/* scoped */
var __vue_scope_id__$f = undefined;
/* module identifier */
var __vue_module_identifier__$f = "data-v-7961916b";
/* functional template */
var __vue_is_functional_template__$f = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$e, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);//
var script$d = {
  name: 'DpHeaderNav',
  props: {
    menuItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: '#2F63B9'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    activeTextColor: {
      type: String,
      default: '#fff'
    },
    activeIndex: {
      type: String,
      default: ''
    }
  },
  components: {
    menuItem: __vue_component__$f
  },
  methods: {
    handleSelect: function handleSelect(index, indexPath, item) {
      this.$emit('select', index, indexPath, item);
    }
  }
};/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$e = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dp-header-nav"
  }, [_c('el-menu', {
    attrs: {
      "default-active": _vm.activeIndex,
      "mode": "horizontal",
      "background-color": _vm.backgroundColor,
      "text-color": _vm.textColor,
      "active-text-color": _vm.activeTextColor
    },
    on: {
      "select": _vm.handleSelect
    }
  }, [_vm._l(_vm.menuItems, function (item) {
    return [_c('menuItem', {
      key: item.value,
      attrs: {
        "item": item
      }
    })];
  })], 2)], 1);
};
var __vue_staticRenderFns__$e = [];

/* style */
var __vue_inject_styles__$e = undefined;
/* scoped */
var __vue_scope_id__$e = undefined;
/* module identifier */
var __vue_module_identifier__$e = "data-v-7d624804";
/* functional template */
var __vue_is_functional_template__$e = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$d, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);//
var script$c = {
  name: 'HeaderMenu',
  components: {
    DpHeaderNav: __vue_component__$e
  },
  props: {
    items: Array
  },
  computed: {
    activeIndex: function activeIndex() {
      return this.$route.name;
    }
  },
  methods: {
    handleSelect: function handleSelect(idx, idxPath, item) {
      var _item$$attrs;
      if (idx != null) {
        this.$router.push({
          name: idx
        });
      } else if ((_item$$attrs = item.$attrs) !== null && _item$$attrs !== void 0 && _item$$attrs.redirect) {
        var _item$$attrs2;
        this.$router.push({
          path: (_item$$attrs2 = item.$attrs) === null || _item$$attrs2 === void 0 ? void 0 : _item$$attrs2.redirect
        });
      }
      // this.$router.push({ name: idx })
    }
  }
};/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$d = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "header-menu"
  }, [_c('dp-header-nav', {
    attrs: {
      "menu-items": _vm.items,
      "active-index": _vm.activeIndex
    },
    on: {
      "select": _vm.handleSelect
    }
  })], 1);
};
var __vue_staticRenderFns__$d = [];

/* style */
var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-403a06b3_0", {
    source: ".header-menu[data-v-403a06b3]{text-align:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$d = "data-v-403a06b3";
/* module identifier */
var __vue_module_identifier__$d = "data-v-403a06b3";
/* functional template */
var __vue_is_functional_template__$d = false;
/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$c, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$b = {
  name: 'HeaderUser',
  props: {
    logoutEvent: Function
  },
  methods: {
    handleCommand: function handleCommand(command) {
      if (command == 'logout') {
        if (this.logoutEvent !== null) {
          this.logoutEvent();
        }
      }
    }
  }
};/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$c = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "header-user"
  }, [_c('el-dropdown', {
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_c('div', {
    staticClass: "header-user__avatar"
  }, [_c('i', {
    staticClass: "el-icon-user-solid"
  })])]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "logout"
    }
  }, [_c('span', [_vm._v("退出")])])], 1)], 1)], 1);
};
var __vue_staticRenderFns__$c = [];

/* style */
var __vue_inject_styles__$c = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-155d0989_0", {
    source: ".header-user[data-v-155d0989]{width:56px;display:flex;align-items:center}.header-user__info[data-v-155d0989]{color:#fff;margin:16px}.header-user__avatar[data-v-155d0989]{width:16px;height:16px;padding:4px;border-radius:50%;margin-right:20px}.header-user__avatar i[data-v-155d0989]{font-size:16px;color:rgba(255,255,255,.7)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$c = "data-v-155d0989";
/* module identifier */
var __vue_module_identifier__$c = "data-v-155d0989";
/* functional template */
var __vue_is_functional_template__$c = false;
/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$b, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, createInjectorSSR, undefined);//
var script$a = {
  name: 'AppHeader',
  components: {
    HeaderTitle: __vue_component__$g,
    HeaderMenu: __vue_component__$d,
    HeaderUser: __vue_component__$c
  },
  props: {
    titleText: String,
    menuItems: Array,
    logoutEvent: Function
  }
};/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$b = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "header"
  }, [_c('HeaderTitle', {
    staticClass: "header-title",
    attrs: {
      "titleText": _vm.titleText
    }
  }), _vm._ssrNode(" "), _c('HeaderMenu', {
    staticClass: "header-menu",
    attrs: {
      "items": _vm.menuItems
    }
  }), _vm._ssrNode(" "), _c('HeaderUser', {
    staticClass: "header-user",
    attrs: {
      "logoutEvent": _vm.logoutEvent
    }
  })], 2);
};
var __vue_staticRenderFns__$b = [];

/* style */
var __vue_inject_styles__$b = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2d57ea9a_0", {
    source: ".header[data-v-2d57ea9a]{height:100%;background:#2f63b9;display:flex;justify-content:space-between}.header-title[data-v-2d57ea9a]{justify-content:flex-start;width:280px;flex:none}.header-user[data-v-2d57ea9a]{justify-content:flex-end;width:200px;flex:none}.header-menu[data-v-2d57ea9a]{flex-grow:1;overflow:auto}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$b = "data-v-2d57ea9a";
/* module identifier */
var __vue_module_identifier__$b = "data-v-2d57ea9a";
/* functional template */
var __vue_is_functional_template__$b = false;
/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$a, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//

var script$9 = {
  name: 'AppMain'
};/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$a = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('transition', {
    attrs: {
      "name": "app-fade",
      "mode": "out-in"
    }
  }, [_c('keep-alive', [_c('router-view')], 1)], 1);
};
var __vue_staticRenderFns__$a = [];

/* style */
var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-19482ed0_0", {
    source: ".app-fade-enter{opacity:0}.app-fade-leave{opacity:1}.app-fade-enter-active{transition:opacity .1s}.app-fade-leave-active{opacity:0;transition:opacity .1s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$a = undefined;
/* module identifier */
var __vue_module_identifier__$a = "data-v-19482ed0";
/* functional template */
var __vue_is_functional_template__$a = false;
/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$9, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//

var script$8 = {
  name: 'AppFooter'
};/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$9 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"tags\" data-v-b31e7a1c></div> <div class=\"version\" data-v-b31e7a1c>联仁健康医疗大数据科技股份有限公司 V1.1.0</div>")]);
};
var __vue_staticRenderFns__$9 = [];

/* style */
var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-b31e7a1c_0", {
    source: ".footer[data-v-b31e7a1c]{height:32px;background:#fff;display:flex;justify-content:space-between;border-top:1px solid #f5f5f5;z-index:9;box-sizing:border-box}.footer .tabs[data-v-b31e7a1c]{justify-content:flex-start}.footer .version[data-v-b31e7a1c]{justify-content:flex-end;width:300px;font-family:PingFangSC-Regular;font-size:12px;padding-right:16px;line-height:31px;color:rgba(0,0,0,.45);text-align:right}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$9 = "data-v-b31e7a1c";
/* module identifier */
var __vue_module_identifier__$9 = "data-v-b31e7a1c";
/* functional template */
var __vue_is_functional_template__$9 = false;
/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$8, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, createInjectorSSR, undefined);//
var script$7 = {
  name: 'DefaultLayout',
  components: {
    AppHeader: __vue_component__$b,
    AppMain: __vue_component__$a,
    AppFooter: __vue_component__$9,
    DpLayoutRoot: __vue_component__$i
  },
  props: {
    titleText: {
      type: String,
      default: '项目标题'
    },
    menuItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    logoutEvent: Function
  }
};/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$8 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('dp-layout-root', {
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c('AppHeader', {
          attrs: {
            "titleText": _vm.titleText,
            "menuItems": _vm.menuItems,
            "logoutEvent": _vm.logoutEvent
          }
        })];
      },
      proxy: true
    }, {
      key: "main",
      fn: function fn() {
        return [_c('AppMain')];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c('AppFooter')];
      },
      proxy: true
    }])
  });
};
var __vue_staticRenderFns__$8 = [];

/* style */
var __vue_inject_styles__$8 = undefined;
/* scoped */
var __vue_scope_id__$8 = undefined;
/* module identifier */
var __vue_module_identifier__$8 = "data-v-57a3adfe";
/* functional template */
var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$7, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);/* script */

/* template */
var __vue_render__$7 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('keep-alive', [_c('router-view')], 1);
};
var __vue_staticRenderFns__$7 = [];

/* style */
var __vue_inject_styles__$7 = undefined;
/* scoped */
var __vue_scope_id__$7 = undefined;
/* module identifier */
var __vue_module_identifier__$7 = "data-v-5383b356";
/* functional template */
var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, {}, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);//
//
//
//
//
//
//

var script$6 = {
  name: 'DpDefaultPage',
  props: {
    text: {
      type: String,
      default: '建设中...'
    }
  }
};/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dp-default-page"
  }, [_vm._ssrNode("<div>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div>")]);
};
var __vue_staticRenderFns__$6 = [];

/* style */
var __vue_inject_styles__$6 = undefined;
/* scoped */
var __vue_scope_id__$6 = undefined;
/* module identifier */
var __vue_module_identifier__$6 = "data-v-83955f6c";
/* functional template */
var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);var img = "data:image/jpeg;base64,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or8xP6ACiilAJNANiAZ4qVUA5NOAAFLQZSmFFFFBAUUUVSjcAowT0pQpPSpgoWtUrANVMcmn0UUwCiiigAoopQCelACVKqY5NKFC06gylMKKKKCAooooAKKKKACiiigAooooAKeqZ5NOVMcmn1pGHczlPsFFFFaGYUUU9VzyaAEVS1TAY4oooAKKKKACiiigmUrBRRRQZN3CiilAJOBQI7e0+IGvWtsLc+XKQMBnBLfoRn8q5a8u7rUblry+cvI/UmqyqFp1b1MTUmlGTujnpYSlTblCNmwqaC5uLZt9tI0beqkg/pUNFYp21Ru0noy1cX17d/8AH1M8uP77Fv5mqtFFPWTuxaRWgUUUVqo2MnK4UoBPApQpNSgAdKUpWEIqAdadRRUqN9WAUUUVoZyn2Cun8K6EuuX5SckQxDc+Opz0H41zFegfD/UYLW+lspiFM4XaT6rnj8c114GEZVYqexwY+c40ZShuekroOipD5AtYtvTlQT+fX9a8q8YeHItGmS5ssiCXjaedrDtn0Ne2V5h8Q9RgZIdMjILq3mNjtxgfnmvoMzoU/Yt2tbY+aymvV9skndPc8uooor5Q+wCilAJ6VKqgc0CcrDVT1qSiigxbuFFFFAgoopQCeBWkYdwEqRU7mnKgHWnUSn2AKKKKhK4BRRRWsY2AKKKKoTlYKKUAk1KFC0GLdxFTHJp9FFAgooooAKKKKACiiigAoop6pnk0CbsIqk1KAB0paKDJyuFFFFBIUUUUAFFFFABRRRQAUUUUAf/X/v4ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z";
//
var script$5 = {
  name: 'DpLoginPage',
  props: {
    appTitle: {
      type: String,
      default: '系统名称'
    },
    pwdEncrypt: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      bgImg: img,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          message: '请输入您的账号'
        }],
        password: [{
          required: true,
          trigger: 'blur',
          message: '请输入您的密码'
        }]
      },
      loading: false
    };
  },
  methods: {
    handleLogin: function handleLogin() {
      var _this = this;
      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          var sha512 = require('js-sha512').sha512;
          var data = {
            username: _this.loginForm.username,
            password: _this.loginForm.password
          };
          if (_this.pwdEncrypt) {
            data.password = sha512(data.password);
          }
          _this.$emit('submit', data);
        }
      });
    }
  }
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dp-login-page",
    style: {
      backgroundImage: 'url(' + _vm.bgImg + ')'
    }
  }, [_vm._ssrNode("<header class=\"login-logo\" data-v-6c91326c><span data-v-6c91326c>" + _vm._ssrEscape(_vm._s(_vm.appTitle)) + "</span></header> "), _vm._ssrNode("<section class=\"login-middle\" data-v-6c91326c>", "</section>", [_vm._ssrNode("<article class=\"intro\" data-v-6c91326c><p class=\"title\" data-v-6c91326c>让数据更简便，让管理更高效</p> <p data-v-6c91326c>健康医疗数字化服务运营商</p> <i class=\"triangle\" data-v-6c91326c></i></article> "), _c('el-form', {
    ref: "loginForm",
    staticClass: "login-form",
    attrs: {
      "model": _vm.loginForm,
      "rules": _vm.loginRules
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("用户登录")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "medium",
      "type": "text",
      "auto-complete": "off",
      "placeholder": "请输入用户名"
    },
    model: {
      value: _vm.loginForm.username,
      callback: function callback($$v) {
        _vm.$set(_vm.loginForm, "username", $$v);
      },
      expression: "loginForm.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "medium",
      "type": "password",
      "auto-complete": "off",
      "placeholder": "请输入密码"
    },
    nativeOn: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.handleLogin.apply(null, arguments);
      }
    },
    model: {
      value: _vm.loginForm.password,
      callback: function callback($$v) {
        _vm.$set(_vm.loginForm, "password", $$v);
      },
      expression: "loginForm.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "100%",
      "height": "48px",
      "margin-bottom": "16px"
    }
  }, [_c('el-button', {
    staticClass: "login-btn-login",
    attrs: {
      "loading": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    nativeOn: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.handleLogin.apply(null, arguments);
      }
    }
  }, [!_vm.loading ? _c('span', [_vm._v("登 录")]) : _c('span', [_vm._v("登 录 中...")])])], 1)], 1)], 2), _vm._ssrNode(" <footer class=\"login-footer\" data-v-6c91326c><span data-v-6c91326c>Copyright © 2018-2022 lianren.vip All Rights Reserved</span></footer>")], 2);
};
var __vue_staticRenderFns__$5 = [];

/* style */
var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6c91326c_0", {
    source: ".dp-login-page[data-v-6c91326c]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;background-size:cover}.dp-login-page .login-logo[data-v-6c91326c]{display:flex;align-items:center;height:88px;padding:20px 0;margin-left:1.46%}.dp-login-page .login-logo img[data-v-6c91326c]{width:26px}.dp-login-page .login-logo span[data-v-6c91326c]{padding-left:10px;font-family:PingFangSC-Semibold;font-size:20px;color:#fff;font-weight:600}.dp-login-page .login-middle[data-v-6c91326c]{flex:1;display:flex;justify-content:space-between;align-self:center;align-items:center;width:76.65%;margin-left:8px}.dp-login-page .login-middle .intro[data-v-6c91326c]{display:flex;flex-direction:column;justify-content:flex-start}.dp-login-page .login-middle .intro img[data-v-6c91326c]{width:52px;margin-bottom:34px}.dp-login-page .login-middle .intro p[data-v-6c91326c]{margin-bottom:10px;font-family:PingFangSC-Regular;font-size:18px;color:#fff;font-weight:400}.dp-login-page .login-middle .intro .title[data-v-6c91326c]{font-family:PingFangSC-Semibold;font-size:40px;color:#fff;font-weight:600}.dp-login-page .login-middle .intro .triangle[data-v-6c91326c]{margin-top:30px}.dp-login-page .login-form[data-v-6c91326c]{background:rgba(255,255,255,.24);box-shadow:0 0 38px 0 rgba(22,42,46,.14);border-radius:8px;width:380px;padding:30px}.dp-login-page .login-form .title[data-v-6c91326c]{margin:0 auto 30px auto;text-align:center;color:#fff;font-size:28px;font-weight:600}.dp-login-page .login-form .el-form-item[data-v-6c91326c]{margin-bottom:24px}.dp-login-page .login-form .el-input[data-v-6c91326c]{height:36px;font-size:14px}.dp-login-page .login-form .el-input input[data-v-6c91326c]{height:36px}.dp-login-page .login-form .login-code[data-v-6c91326c]{width:33%;height:36px;float:right}.dp-login-page .login-form .login-code img[data-v-6c91326c]{float:right;cursor:pointer;vertical-align:middle}.dp-login-page .login-form .login-code-img[data-v-6c91326c]{height:100%;border-radius:6px}.dp-login-page .login-form .login-btn-login[data-v-6c91326c]{width:100%;height:48px;background-image:linear-gradient(270deg,#0ccaf0 0,#01abe5 100%);border:none;font-family:PingFangSC-Semibold;font-size:20px;color:#fff;font-weight:600;text-align:center}.dp-login-page .login-form .login-remember-pwd[data-v-6c91326c]{margin:0;color:#fff}.dp-login-page .login-form .login-remember-pwd[data-v-6c91326c]  .el-checkbox__inner{width:12px;height:12px;background-color:transparent;border-color:#e7e7e7}.dp-login-page .login-form .login-remember-pwd[data-v-6c91326c]  .el-checkbox__label{font-size:12px}.dp-login-page .login-form .login-remember-pwd[data-v-6c91326c]  .el-checkbox__input.is-checked+.el-checkbox__label{color:#fff;font-weight:700}.dp-login-page .login-tip[data-v-6c91326c]{font-size:13px;text-align:center;color:#bfbfbf}.dp-login-page .login-footer[data-v-6c91326c]{display:flex;justify-content:center;align-items:flex-end;height:108px;padding-bottom:20px;line-height:12px;width:100%;text-align:center;font-family:PingFangSC-Regular;color:#fff;font-size:12px;letter-spacing:1px}@media (max-width:1200px){.dp-login-page .login-middle .intro .title[data-v-6c91326c]{font-size:36px}}@media (max-width:768px){.dp-login-page .login-middle[data-v-6c91326c]{justify-content:center;margin-left:0}.dp-login-page .login-middle .intro[data-v-6c91326c]{display:none}}@media (max-width:1024px){.dp-login-page .login-middle .intro img[data-v-6c91326c]{width:44px;margin-bottom:28px}.dp-login-page .login-middle .intro p[data-v-6c91326c]{font-size:14px}.dp-login-page .login-middle .intro .title[data-v-6c91326c]{font-size:28px}.dp-login-page .login-middle .intro .triangle[data-v-6c91326c]{margin-top:26px}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$5 = "data-v-6c91326c";
/* module identifier */
var __vue_module_identifier__$5 = "data-v-6c91326c";
/* functional template */
var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//

var script$4 = {
  name: 'tableColumn',
  props: {
    item: Object
  },
  data: function data() {
    return {};
  },
  methods: {}
};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('el-table-column', _vm._b({
    attrs: {
      "show-overflow-tooltip": true
    }
  }, 'el-table-column', _vm.item, false), [_vm.item.children ? _vm._l(_vm.item.children, function (i) {
    return _c('tableColumn', {
      key: i.prop,
      attrs: {
        "item": i
      }
    });
  }) : _vm._e()], 2);
};
var __vue_staticRenderFns__$4 = [];

/* style */
var __vue_inject_styles__$4 = undefined;
/* scoped */
var __vue_scope_id__$4 = "data-v-63049128";
/* module identifier */
var __vue_module_identifier__$4 = "data-v-63049128";
/* functional template */
var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);//
var script$3 = {
  components: {
    tableColumn: __vue_component__$4
  },
  props: {
    tableTitle: {
      // 多表头
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      // 数据
      type: Array,
      default: function _default() {
        return [];
      }
    },
    lastColIndex: {
      // 最后一行合并的列数
      type: Number,
      default: 1
    },
    lastColText: {
      type: String,
      default: '合计'
    },
    callback: {
      // 自定义合并
      default: null
    },
    columnIndex: {
      // 需要修改的列（暂时不用,默认0）
      type: [Number, Array],
      default: 0
    }
  },
  data: function data() {
    return {
      rowArr: [] // 合并行集合
    };
  },

  computed: {
    groupBy: function groupBy() {
      // 合并行的依据字段
      return this.tableTitle[0].prop;
    },
    lastCloArr: function lastCloArr() {
      // 最后一行合并列集合
      var arr = [];
      for (var i = 1; i < this.lastColIndex; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  watch: {
    'data.length': {
      handler: function handler() {
        this.getarr();
      },
      immediate: true
    }
  },
  methods: {
    getarr: function getarr() {
      // 判断
      var data = this.data;
      var pos = 0;
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.rowArr.push(1);
          pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i][this.groupBy] === data[i - 1][this.groupBy]) {
            this.rowArr[pos] += 1;
            this.rowArr.push(0);
          } else {
            this.rowArr.push(1);
            pos = i;
          }
        }
      }
    },
    // 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性
    spanMethod: function spanMethod(_ref) {
      var row = _ref.row,
        column = _ref.column,
        rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex;
      if (typeof this.callback === 'function') {
        // 有自定义使用自定义
        return this.callback({
          row: row,
          column: column,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      } else {
        // 默认处理
        // 处理最后一行合并列col
        if (row[this.groupBy] === this.lastColText) {
          if (columnIndex === 0) {
            return {
              rowspan: 1,
              colspan: this.lastColIndex
            };
          }
          if (this.lastCloArr.includes(columnIndex)) {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
        // 处理合并行row
        if (Array.isArray(this.columnIndex) && this.columnIndex.includes(columnIndex) || columnIndex === this.columnIndex) {
          var _row = this.rowArr[rowIndex];
          var _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          };
        }
      }
    }
  }
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "table-container"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "height": "100%",
      "data": _vm.data,
      "span-method": _vm.spanMethod
    }
  }, _vm._l(_vm.tableTitle, function (item) {
    return _c('tableColumn', {
      key: item.prop,
      attrs: {
        "item": item
      }
    });
  }), 1)], 1);
};
var __vue_staticRenderFns__$3 = [];

/* style */
var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-32865fd8_0", {
    source: ".table-container[data-v-32865fd8]{height:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$3 = "data-v-32865fd8";
/* module identifier */
var __vue_module_identifier__$3 = "data-v-32865fd8";
/* functional template */
var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//

var script$2 = {
  name: 'DpTitle',
  props: {
    text: {
      type: String,
      default: '标题内容'
    }
  }
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dp-title"
  }, [_vm._ssrNode("<div class=\"dp-title__text\" data-v-69faa863>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div>")]);
};
var __vue_staticRenderFns__$2 = [];

/* style */
var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-69faa863_0", {
    source: ".dp-title[data-v-69faa863]{height:40px;box-sizing:border-box;border-bottom:1px solid #e5e5e5;position:relative}.dp-title__text[data-v-69faa863]{color:#333;height:39px;font-size:15px;line-height:39px;padding-left:12px}.dp-title__text[data-v-69faa863]:before{content:\" \";position:absolute;width:4px;height:13px;background-color:#2f63b9;left:4px;top:14px}.dp-title__wrapper[data-v-69faa863]{position:absolute;height:calc(100% + 1px);display:inline-block;box-sizing:border-box;padding-left:6px;padding-right:16px;border-bottom:2px solid #2f63b9}.dp-title__wrapper-text[data-v-69faa863]{color:#333;font-size:15px;font-weight:700;position:relative;top:50%;transform:translateY(-50%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$2 = "data-v-69faa863";
/* module identifier */
var __vue_module_identifier__$2 = "data-v-69faa863";
/* functional template */
var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//

var script$1 = {
  name: 'DpSubtitle',
  props: {
    text: {
      type: String,
      default: '标题内容'
    }
  }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "dp-subtitle"
  }, [_vm._ssrNode("<div class=\"dp-subtitle__text\" data-v-25fe7820>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div> <div class=\"dp-subtitle__line\" data-v-25fe7820></div>")]);
};
var __vue_staticRenderFns__$1 = [];

/* style */
var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-25fe7820_0", {
    source: ".dp-subtitle[data-v-25fe7820]{height:40px;display:flex;align-items:center}.dp-subtitle__text[data-v-25fe7820]{font-size:13px;padding-left:12px;padding-right:10px;color:#333}.dp-subtitle__line[data-v-25fe7820]{flex:1;content:\" \";display:block;border-bottom:1px solid #f1f1f4}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$1 = "data-v-25fe7820";
/* module identifier */
var __vue_module_identifier__$1 = "data-v-25fe7820";
/* functional template */
var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'DpIconButton',
  props: {
    text: String,
    icon: String,
    disabled: Boolean
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    }
  }
};/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('el-button', {
    staticClass: "icon-button",
    attrs: {
      "type": "primary",
      "plain": "",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('span', {
    staticClass: "icon-button__text"
  }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
    staticClass: "icon-button__icon"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon
    }
  })])]);
};
var __vue_staticRenderFns__ = [];

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-afbf66be_0", {
    source: ".icon-button[data-v-afbf66be]{padding-left:8px;padding-right:8px}.icon-button[data-v-afbf66be] >span{min-width:auto;display:flex}.icon-button__text[data-v-afbf66be]{min-width:26px;display:block}.icon-button__icon[data-v-afbf66be]{margin-left:3px;width:12px;height:12px;display:block;flex:0 0 12px;position:relative}.icon-button__icon>img[data-v-afbf66be]{position:absolute;top:1px}.icon-button.is-disabled .icon-button__icon[data-v-afbf66be]{opacity:.5}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__ = "data-v-afbf66be";
/* module identifier */
var __vue_module_identifier__ = "data-v-afbf66be";
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Title:__vue_component__$s,ButtonGroup:__vue_component__$r,DpButtonGroup:__vue_component__$r,GeneralTable:__vue_component__$q,DpGeneralTable:__vue_component__$q,SideCatalog:__vue_component__$p,DpSideCatalog:__vue_component__$p,Form:__vue_component__$o,DpForm:__vue_component__$o,SearchBar:__vue_component__$n,DpSearchBar:__vue_component__$m,Statistics:__vue_component__$l,DpStatistics:__vue_component__$l,Dialog:__vue_component__$k,DpDialog:__vue_component__$k,CatalogButtons:__vue_component__$j,DpCatalogButtons:__vue_component__$j,DpLayoutRoot:__vue_component__$i,DpLayoutContainer:__vue_component__$h,DpLayout:__vue_component__$8,DpLayoutBlank:__vue_component__$7,DpHeaderNav:__vue_component__$e,DpDefaultPage:__vue_component__$6,DpLoginPage:__vue_component__$5,DpStatisticsTable:__vue_component__$3,DpTitle:__vue_component__$2,DpSubtitle:__vue_component__$1,DpIconButton:__vue_component__});// install function executed by Vue.use()
var install = function installDpVue2Widgets(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];
    Vue.component(componentName, component);
  });
};var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,Title:__vue_component__$s,ButtonGroup:__vue_component__$r,DpButtonGroup:__vue_component__$r,GeneralTable:__vue_component__$q,DpGeneralTable:__vue_component__$q,SideCatalog:__vue_component__$p,DpSideCatalog:__vue_component__$p,Form:__vue_component__$o,DpForm:__vue_component__$o,SearchBar:__vue_component__$n,DpSearchBar:__vue_component__$m,Statistics:__vue_component__$l,DpStatistics:__vue_component__$l,Dialog:__vue_component__$k,DpDialog:__vue_component__$k,CatalogButtons:__vue_component__$j,DpCatalogButtons:__vue_component__$j,DpLayoutRoot:__vue_component__$i,DpLayoutContainer:__vue_component__$h,DpLayout:__vue_component__$8,DpLayoutBlank:__vue_component__$7,DpHeaderNav:__vue_component__$e,DpDefaultPage:__vue_component__$6,DpLoginPage:__vue_component__$5,DpStatisticsTable:__vue_component__$3,DpTitle:__vue_component__$2,DpSubtitle:__vue_component__$1,DpIconButton:__vue_component__});var generateMenuItems = function generateMenuItems(routesConfig) {
  var items = [];
  routesConfig.map(function (v) {
    if (v.hidden !== true) {
      items.push({
        value: v.name,
        label: v.meta && v.meta.title ? v.meta.title : v.name,
        children: v.children ? generateMenuItems(v.children) : undefined
      });
    }
  });
  return items;
};
var generateRouter = function generateRouter(config) {
  var VueRouter = config.VueRouter,
    _config$routesConfig = config.routesConfig,
    routesConfig = _config$routesConfig === void 0 ? [] : _config$routesConfig,
    _config$blankRoutesCo = config.blankRoutesConfig,
    blankRoutesConfig = _config$blankRoutesCo === void 0 ? [] : _config$blankRoutesCo,
    _config$isQiankun = config.isQiankun,
    isQiankun = _config$isQiankun === void 0 ? window.__POWERED_BY_QIANKUN__ : _config$isQiankun,
    _config$layout = config.layout,
    layout = _config$layout === void 0 ? __vue_component__$8 : _config$layout,
    _config$logoutEvent = config.logoutEvent,
    logoutEvent = _config$logoutEvent === void 0 ? function () {} : _config$logoutEvent,
    _config$title = config.title,
    title = _config$title === void 0 ? '' : _config$title,
    _config$base = config.base,
    base = _config$base === void 0 ? window.__POWERED_BY_QIANKUN__ ? process.env.VUE_APP_QIANKUN_ROUTER_BASE : process.env.VUE_APP_REAL_ROUTER_BASE : _config$base;
  if (!!isQiankun) {
    layout = __vue_component__$7;
  }
  var redirectName = routesConfig[0] ? routesConfig[0].name : '';
  var router = new VueRouter({
    mode: 'history',
    base: base,
    routes: [{
      path: '/',
      redirect: {
        name: redirectName
      },
      component: layout,
      props: {
        titleText: title,
        menuItems: generateMenuItems(routesConfig),
        logoutEvent: logoutEvent
      },
      children: routesConfig
    }].concat(blankRoutesConfig).concat([{
      path: '*',
      hidden: true,
      component: layout,
      children: [{
        path: '*',
        name: '404',
        meta: {
          title: '404'
        },
        component: __vue_component__$6
      }]
    }])
  });
  var originalPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(function (err) {
      return err;
    });
  };
  return router;
};var vueRouter=/*#__PURE__*/Object.freeze({__proto__:null,generateRouter:generateRouter});var index = {
  lang: lang,
  format: format,
  vueRouter: vueRouter
};Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    componentName = _ref2[0],
    component = _ref2[1];
  if (componentName !== "default") {
    install[componentName] = component;
  }
});exports.ButtonGroup=__vue_component__$r;exports.CatalogButtons=__vue_component__$j;exports.Dialog=__vue_component__$k;exports.DpButtonGroup=__vue_component__$r;exports.DpCatalogButtons=__vue_component__$j;exports.DpDefaultPage=__vue_component__$6;exports.DpDialog=__vue_component__$k;exports.DpForm=__vue_component__$o;exports.DpGeneralTable=__vue_component__$q;exports.DpHeaderNav=__vue_component__$e;exports.DpIconButton=__vue_component__;exports.DpLayout=__vue_component__$8;exports.DpLayoutBlank=__vue_component__$7;exports.DpLayoutContainer=__vue_component__$h;exports.DpLayoutRoot=__vue_component__$i;exports.DpLoginPage=__vue_component__$5;exports.DpSearchBar=__vue_component__$m;exports.DpSideCatalog=__vue_component__$p;exports.DpStatistics=__vue_component__$l;exports.DpStatisticsTable=__vue_component__$3;exports.DpSubtitle=__vue_component__$1;exports.DpTitle=__vue_component__$2;exports.Form=__vue_component__$o;exports.GeneralTable=__vue_component__$q;exports.SearchBar=__vue_component__$n;exports.SideCatalog=__vue_component__$p;exports.Statistics=__vue_component__$l;exports.Title=__vue_component__$s;exports["default"]=install;exports.utils=index;