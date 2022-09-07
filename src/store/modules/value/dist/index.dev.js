"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lang = require("@/utils/lang");

var _initState = _interopRequireDefault(require("./initState"));

var _task = _interopRequireDefault(require("./task"));

var _const = require("@/utils/const");

var _pops = require("@/utils/pops");

var _value = require("@/api/value");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var dictForm = _initState["default"].dictForm,
    versionForm = _initState["default"].versionForm,
    dictVersionForm = _initState["default"].dictVersionForm,
    dictValueForm = _initState["default"].dictValueForm,
    searchForm = _initState["default"].searchForm,
    adSearchForm = _initState["default"].adSearchForm;

var processCatalog = function processCatalog(list) {
  return list.map(function (item) {
    var sourceType = item.sourceType,
        sourceTypeCode = item.sourceTypeCode,
        valueDictCatalogEntityList = item.valueDictCatalogEntityList;
    return {
      id: sourceType,
      label: sourceType,
      sourceTypeCode: item.sourceTypeCode,
      state: valueDictCatalogEntityList.some(function (it) {
        return it.suspectedState === '1';
      }) ? _const.INCOMESTATE : _const.COMPLETESTATE,
      children: valueDictCatalogEntityList.map(function (it) {
        return {
          id: "".concat(sourceTypeCode, ",").concat(it.nameEn),
          label: it.nameCn,
          nameEn: it.nameEn,
          nameCn: it.nameCn,
          sourceType: sourceType,
          sourceTypeCode: sourceTypeCode,
          state: it.suspectedState === '1' ? _const.INCOMESTATE : _const.COMPLETESTATE
        };
      })
    };
  });
};

var state = {
  dictList: [],
  versionList: [],
  dictValueList: [],
  currentDict: '',
  currentSourceTypeCode: '',
  currentVersion: '',
  currentVersionInfo: {},
  currentDictValue: '',
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  dictForm: Object.assign({}, dictForm),
  versionForm: Object.assign({}, versionForm),
  dictVersionForm: Object.assign({}, dictVersionForm),
  dictValueForm: {},
  searchForm: Object.assign({}, searchForm),
  adSearchForm: Object.assign({}, adSearchForm),
  classList: []
};
var getters = {
  currentVersionItem: function currentVersionItem(state) {
    if (!state.currentVersion) return null;
    return state.versionList.find(function (item) {
      return item.id === state.currentVersion;
    });
  },
  currentDictItem: function currentDictItem(state) {
    if (!state.currentDict) return {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = state.dictList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var res = item.children.find(function (it) {
          return state.currentDict === it.id;
        });

        if (res) {
          state.currentSourceTypeCode = res.sourceTypeCode;
          return Object.assign({}, res, {
            sourceType: item.label
          });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return {};
  },
  sourceTypeOptions: function sourceTypeOptions(state) {
    return state.dictList.map(function (item) {
      return {
        label: item.label,
        value: item.sourceTypeCode
      };
    });
  },
  tableConfig: function tableConfig(state) {
    if (!state.currentVersionInfo || !state.currentVersionInfo.valueDictColumnList || !state.currentVersionInfo.valueDictColumnList.length) return [{
      colConfig: {
        property: '',
        label: '',
        minWidth: 150
      }
    }];
    return state.currentVersionInfo.valueDictColumnList.map(function (item) {
      return {
        colConfig: {
          property: item.nameEn,
          label: item.nameCn,
          minWidth: 150
        }
      };
    });
  },
  dictValueFormCfg: function dictValueFormCfg(state) {
    if (!state.currentVersionInfo || !state.currentVersionInfo.valueDictColumnList) return [];
    return state.currentVersionInfo.valueDictColumnList.map(function (item) {
      return {
        type: 'el-input',
        label: item.nameCn,
        id: item.nameEn,
        elOptions: {
          disabled: item.nameEn === 'term_code',
          style: {
            width: '260px'
          }
        }
      };
    });
  },
  versionOptions: function versionOptions(state) {
    var res = state.versionList.map(function (item) {
      return {
        id: item.id,
        label: item.label,
        value: item.label
      };
    });
    return res;
  }
};
var mutations = {
  setDictList: function setDictList(state, list) {
    state.dictList = !list ? [] : list;
  },
  setVersionList: function setVersionList(state, list) {
    state.versionList = !list ? [] : list;
  },
  setDictValueList: function setDictValueList(state, list) {
    state.dictValueList = !list ? [] : list;
  },
  setDictForm: function setDictForm(state, form) {
    if (!form) {
      state.dictForm = Object.assign({}, dictForm);
    } else {
      (0, _lang.keysClone)(state.dictForm, form);
    }
  },
  setVersionForm: function setVersionForm(state, _ref) {
    var nameCn = _ref.nameCn;
    state.versionForm = Object.assign({}, versionForm);
    state.versionForm.dictName = nameCn;
  },
  setDictVersionForm: function setDictVersionForm(state, _ref2) {
    var nameCn = _ref2.nameCn,
        nameEn = _ref2.nameEn,
        sourceTypeCode = _ref2.sourceTypeCode;
    var master = state.versionList.find(function (item) {
      return item.isMaster;
    });
    var current = state.versionList.find(function (item) {
      return item.id === state.currentVersion;
    });
    state.dictVersionForm.masterVersion = master.label;
    state.dictVersionForm.version = current.label;
    state.dictVersionForm.nameCn = nameCn;
    state.dictVersionForm.nameEn = nameEn;
    state.dictVersionForm.state = state.currentVersionInfo.state;
    state.dictVersionForm.sourceTypeCode = sourceTypeCode;
    state.dictVersionForm.sourceBasis = state.currentVersionInfo.sourceBasis;
  },
  setDictValueForm: function setDictValueForm(state, form) {
    if (!form) {
      state.dictValueForm = Object.assign({}, dictValueForm);
    } else {
      state.dictValueForm = form;
    }
  },
  setCurrentDict: function setCurrentDict(state, value) {
    if (value) {
      state.currentDict = value;
    } else {
      if (state.dictList && state.dictList.length && state.dictList[0].children.length) {
        // state.currentDict = state.dictList[0].children[0].id
        // state.currentDict = '3,dict_marriage'
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = state.dictList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = item.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var it = _step3.value;

                if (it.state === _const.INCOMESTATE) {
                  state.currentDict = it.id;
                  return;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        state.currentDict = state.dictList[0].children[0].id;
      }
    }
  },
  setCurrentVersion: function setCurrentVersion(state, version) {
    if (!version) {
      var master = state.versionList.find(function (item) {
        return item.isMaster;
      });
      state.currentVersion = master.id;
    } else {
      state.currentVersion = version;
    }
  },
  setCurrentDictValue: function setCurrentDictValue(state, row) {
    if (!row) {
      state.currentDictValue = state.dictValueList[0];
    } else {
      state.currentDictValue = row;
    }
  },
  setSearchForm: function setSearchForm(state, form) {
    if (!form) {
      state.searchForm = Object.assign({}, searchForm);
    } else {
      (0, _lang.keysClone)(state.searchForm, form);
    }
  },
  setPageInfo: function setPageInfo(state, pageInfo) {
    (0, _lang.keysClone)(state.pageInfo, pageInfo);
  }
};
var actions = {
  onDictChange: function onDictChange(_ref3, _ref4) {
    var commit, dispatch, id;
    return regeneratorRuntime.async(function onDictChange$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref3.commit, dispatch = _ref3.dispatch;
            id = _ref4.id;
            commit('setDictValueList');
            state.currentVersionInfo = {};
            commit('setCurrentDict', id);
            _context.next = 7;
            return regeneratorRuntime.awrap(dispatch('queryVersion'));

          case 7:
            commit('setCurrentVersion');
            dispatch('queryVersionInfo');
            dispatch('querySuspect', {
              id: state.currentVersion
            });
            _context.next = 12;
            return regeneratorRuntime.awrap(dispatch('queryDictValue'));

          case 12:
            commit('setCurrentDictValue');

          case 13:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  onPageInfoChange: function onPageInfoChange(_ref5, value) {
    var commit, dispatch;
    return regeneratorRuntime.async(function onPageInfoChange$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref5.commit, dispatch = _ref5.dispatch;
            commit('setDictValueList');
            commit('setPageInfo', value);
            _context2.next = 5;
            return regeneratorRuntime.awrap(dispatch('queryDictValue'));

          case 5:
            commit('setCurrentDictValue');

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  onVersionChange: function onVersionChange(_ref6, value) {
    var commit, dispatch;
    return regeneratorRuntime.async(function onVersionChange$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref6.commit, dispatch = _ref6.dispatch;
            commit('setCurrentVersion', value);
            _context3.next = 4;
            return regeneratorRuntime.awrap(dispatch('queryVersionInfo'));

          case 4:
            dispatch('queryDictValue');
            dispatch('querySuspect', {
              id: value
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  initValue: function initValue(_ref7) {
    var commit, dispatch;
    return regeneratorRuntime.async(function initValue$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref7.commit, dispatch = _ref7.dispatch;
            _context4.next = 3;
            return regeneratorRuntime.awrap(dispatch('queryDict'));

          case 3:
            commit('setCurrentDict');
            _context4.next = 6;
            return regeneratorRuntime.awrap(dispatch('queryVersion'));

          case 6:
            commit('setCurrentVersion');
            _context4.next = 9;
            return regeneratorRuntime.awrap(dispatch('queryVersionInfo'));

          case 9:
            dispatch('querySuspect', {
              id: state.currentVersion
            });
            dispatch('queryDictValue');
            commit('setCurrentDictValue');
            dispatch('queryClass');

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  queryDict: function queryDict(_ref8) {
    var commit, _ref9, value;

    return regeneratorRuntime.async(function queryDict$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref8.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _value.getCatalogApi)());

          case 3:
            _ref9 = _context5.sent;
            value = _ref9.value;
            commit('setDictList', processCatalog(value));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  queryVersion: function queryVersion(_ref10) {
    var state, _state$currentDict$sp, _state$currentDict$sp2, sourceTypeCode, dictId, _ref11, value;

    return regeneratorRuntime.async(function queryVersion$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            state = _ref10.state;
            _state$currentDict$sp = state.currentDict.split(','), _state$currentDict$sp2 = _slicedToArray(_state$currentDict$sp, 2), sourceTypeCode = _state$currentDict$sp2[0], dictId = _state$currentDict$sp2[1];
            _context6.next = 4;
            return regeneratorRuntime.awrap((0, _value.getVersionListApi)(dictId, sourceTypeCode));

          case 4:
            _ref11 = _context6.sent;
            value = _ref11.value;
            state.versionList = value.map(function (item) {
              var id = item.id,
                  mainlineFlag = item.mainlineFlag,
                  version = item.version;
              return {
                id: id,
                label: version,
                value: id,
                isMaster: mainlineFlag === '1'
              };
            });

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  queryVersionInfo: function queryVersionInfo() {
    var _ref12, value;

    return regeneratorRuntime.async(function queryVersionInfo$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (state.currentVersion) {
              _context7.next = 2;
              break;
            }

            return _context7.abrupt("return");

          case 2:
            _context7.next = 4;
            return regeneratorRuntime.awrap((0, _value.getVersionDetailApi)(state.currentVersion));

          case 4:
            _ref12 = _context7.sent;
            value = _ref12.value;
            state.currentVersionInfo = value;
            state.currentVersionInfo.valueDictColumnList = value.valueDictColumnList.sort(function (pre, next) {
              return pre.seqNo - next.seqNo;
            });

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  queryClass: function queryClass(_ref13) {
    var _ref14, value;

    return regeneratorRuntime.async(function queryClass$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _objectDestructuringEmpty(_ref13);

            _context8.next = 3;
            return regeneratorRuntime.awrap((0, _value.getClassifyCodeApi)());

          case 3:
            _ref14 = _context8.sent;
            value = _ref14.value;
            state.classList = value.map(function (item) {
              return {
                id: item.code,
                label: item.name,
                value: item.code,
                children: item.dictClassifyVoList.map(function (it) {
                  return {
                    id: it.code,
                    label: it.name,
                    value: it.code
                  };
                })
              };
            });

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  queryDictValue: function queryDictValue(_ref15) {
    var state, commit, dictId, _state$pageInfo, current, size, columnParamList, _ref16, value;

    return regeneratorRuntime.async(function queryDictValue$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            state = _ref15.state, commit = _ref15.commit;
            dictId = state.currentVersion;
            _state$pageInfo = state.pageInfo, current = _state$pageInfo.curPage, size = _state$pageInfo.pageSize;
            columnParamList = [];
            [{
              name: 'code',
              condition: 'like'
            }, {
              name: 'value',
              condition: 'like'
            }, {
              name: 'parent_code',
              condition: 'equal'
            }, {
              name: 'level',
              condition: 'equal'
            }].forEach(function (item) {
              if (state.searchForm[item.name]) {
                columnParamList.push(Object.assign(item, {
                  value: state.searchForm[item.name]
                }));
              }
            });
            _context9.next = 7;
            return regeneratorRuntime.awrap((0, _value.getListApi)({
              dictId: dictId,
              current: current,
              size: size,
              columnParamList: columnParamList
            }));

          case 7:
            _ref16 = _context9.sent;
            value = _ref16.value;
            commit('setPageInfo', value.pageInfo);
            commit('setDictValueList', value.records.map(function (item, index) {
              return Object.assign({}, item, {
                index: index
              });
            }));
            commit('setCurrentDictValue');

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    });
  },
  submitDict: function submitDict(_ref17, IsNew) {
    var state, _state$dictForm, type, ctlgCode, dictCode, nameEn, nameCn, version, sourceTypeCode, sourceBasis, sourceBasisCode, id, _state$dictForm2, _nameCn, _nameEn;

    return regeneratorRuntime.async(function submitDict$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            state = _ref17.state;

            if (!IsNew) {
              _context10.next = 7;
              break;
            }

            _state$dictForm = state.dictForm, type = _state$dictForm.type, ctlgCode = _state$dictForm.ctlgCode, dictCode = _state$dictForm.dictCode, nameEn = _state$dictForm.nameEn, nameCn = _state$dictForm.nameCn, version = _state$dictForm.version, sourceTypeCode = _state$dictForm.sourceTypeCode, sourceBasis = _state$dictForm.sourceBasis, sourceBasisCode = _state$dictForm.sourceBasisCode;
            _context10.next = 5;
            return regeneratorRuntime.awrap((0, _value.addDictApi)({
              type: type,
              ctlgCode: ctlgCode,
              dictCode: dictCode,
              nameEn: nameEn,
              nameCn: nameCn,
              version: version,
              sourceTypeCode: sourceTypeCode,
              sourceBasis: sourceBasis,
              sourceBasisCode: sourceBasisCode,
              state: state.dictForm.state
            }));

          case 5:
            _context10.next = 11;
            break;

          case 7:
            id = state.currentVersion;
            _state$dictForm2 = state.dictForm, _nameCn = _state$dictForm2.nameCn, _nameEn = _state$dictForm2.nameEn;
            _context10.next = 11;
            return regeneratorRuntime.awrap((0, _value.editDictApi)({
              id: id,
              nameCn: _nameCn,
              nameEn: _nameEn
            }));

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    });
  },
  addDictVersion: function addDictVersion(_ref18) {
    var state, dispatch, data;
    return regeneratorRuntime.async(function addDictVersion$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            state = _ref18.state, dispatch = _ref18.dispatch;
            data = Object.assign({}, state.versionForm, {
              dictId: state.currentVersion
            });
            delete data['dictName'];
            _context11.next = 5;
            return regeneratorRuntime.awrap((0, _value.addVersionApi)(data));

          case 5:
            _context11.next = 7;
            return regeneratorRuntime.awrap(dispatch('queryVersion'));

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    });
  },
  editDictVersion: function editDictVersion(_ref19) {
    var commit, dispatch, state, _state$dictVersionFor, masterVersion, version, sourceTypeCode, sourceBasis, current;

    return regeneratorRuntime.async(function editDictVersion$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            commit = _ref19.commit, dispatch = _ref19.dispatch, state = _ref19.state;
            _state$dictVersionFor = state.dictVersionForm, masterVersion = _state$dictVersionFor.masterVersion, version = _state$dictVersionFor.version, sourceTypeCode = _state$dictVersionFor.sourceTypeCode, sourceBasis = _state$dictVersionFor.sourceBasis;
            _context12.next = 4;
            return regeneratorRuntime.awrap((0, _value.editVersionApi)({
              id: state.currentVersion,
              masterVersion: masterVersion,
              version: version,
              sourceTypeCode: sourceTypeCode,
              sourceBasis: sourceBasis,
              state: state.dictVersionForm.state
            }));

          case 4:
            current = state.versionList.find(function (item) {
              return item.label === version;
            });
            commit('setCurrentVersion', current.id);
            _context12.next = 8;
            return regeneratorRuntime.awrap(dispatch('queryVersion'));

          case 8:
            dispatch('queryVersionInfo');

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    });
  },
  addDictValue: function addDictValue(_ref20) {
    var state, dispatch, rootState, data, _rootState$value$task, curTask, taskList, curTaskItem, completeCurSuspect;

    return regeneratorRuntime.async(function addDictValue$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            state = _ref20.state, dispatch = _ref20.dispatch, rootState = _ref20.rootState;
            data = {
              id: state.currentVersion
            };
            _rootState$value$task = rootState.value.task, curTask = _rootState$value$task.curTask, taskList = _rootState$value$task.taskList;
            curTaskItem = null;
            completeCurSuspect = false;
            data['valueObject'] = state.dictValueForm;

            if (!curTask) {
              _context13.next = 11;
              break;
            }

            _context13.next = 9;
            return regeneratorRuntime.awrap((0, _pops.confirm)("\u7F16\u8F91\u503C\u57DF\u7684\u540C\u65F6\uFF0C\u662F\u5426\u5B8C\u6210\u5F53\u524D\u7591\u4F3C\u4EFB\u52A1: <br> &nbsp;<b>\u3010".concat(curTask, "\u3011</b>\n        <br/>\u8BF7\u786E\u8BA4\uFF1F"), {
              dangerouslyUseHTMLString: true,
              confirmButtonText: '是',
              cancelButtonText: '否'
            }));

          case 9:
            completeCurSuspect = _context13.sent;
            curTaskItem = taskList.find(function (item) {
              return "".concat(item.source, ":").concat(item.name) === curTask;
            });

          case 11:
            _context13.next = 13;
            return regeneratorRuntime.awrap((0, _value.addDictValueApi)(completeCurSuspect ? Object.assign(data, {
              suspectList: curTaskItem.suspectList.map(function (sus) {
                return sus.id;
              })
            }) : Object.assign(data, {
              suspectList: []
            })));

          case 13:
            _context13.next = 15;
            return regeneratorRuntime.awrap(dispatch('queryDictValue'));

          case 15:
            if (completeCurSuspect) dispatch('querySuspect');

          case 16:
          case "end":
            return _context13.stop();
        }
      }
    });
  },
  addBatchDictValue: function addBatchDictValue(_ref21, file) {
    var state, dispatch;
    return regeneratorRuntime.async(function addBatchDictValue$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            state = _ref21.state, dispatch = _ref21.dispatch;
            _context14.next = 3;
            return regeneratorRuntime.awrap((0, _value.addDictValueManyApi)({
              id: state.currentVersion,
              file: file
            }));

          case 3:
            dispatch('queryDictValue');

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    });
  },
  editDictValue: function editDictValue(_ref22) {
    var state, dispatch, rootState, id, _rootState$value$task2, curTask, taskList, curTaskItem, completeCurSuspect;

    return regeneratorRuntime.async(function editDictValue$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            state = _ref22.state, dispatch = _ref22.dispatch, rootState = _ref22.rootState;
            id = state.currentVersion;
            _rootState$value$task2 = rootState.value.task, curTask = _rootState$value$task2.curTask, taskList = _rootState$value$task2.taskList;
            curTaskItem = null;
            completeCurSuspect = false;

            if (!curTask) {
              _context15.next = 10;
              break;
            }

            _context15.next = 8;
            return regeneratorRuntime.awrap((0, _pops.confirm)("\u7F16\u8F91\u503C\u57DF\u7684\u540C\u65F6\uFF0C\u662F\u5426\u5B8C\u6210\u5F53\u524D\u7591\u4F3C\u4EFB\u52A1: <br> &nbsp;<b>\u3010".concat(curTask, "\u3011</b>\n        <br/>\u8BF7\u786E\u8BA4\uFF1F"), {
              dangerouslyUseHTMLString: true,
              confirmButtonText: '是',
              cancelButtonText: '否'
            }));

          case 8:
            completeCurSuspect = _context15.sent;
            curTaskItem = taskList.find(function (item) {
              return "".concat(item.source, ":").concat(item.name) === curTask;
            });

          case 10:
            _context15.next = 12;
            return regeneratorRuntime.awrap((0, _value.editDictValueApi)({
              id: id,
              colId: state.dictValueForm['term_code'],
              valueObject: state.dictValueForm,
              suspectList: completeCurSuspect ? curTaskItem.suspectList.map(function (sus) {
                return sus.id;
              }) : []
            }));

          case 12:
            dispatch('queryDictValue');
            if (completeCurSuspect) dispatch('querySuspect');

          case 14:
          case "end":
            return _context15.stop();
        }
      }
    });
  }
};
var _default = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    task: _task["default"]
  }
};
exports["default"] = _default;