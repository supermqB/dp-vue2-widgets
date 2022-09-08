"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bwd = require("@/api/bwd");

var _elementUi = require("element-ui");

var _lang = require("@/utils/lang");

var _initState = _interopRequireDefault(require("./initState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getCurrentFieldItem = function getCurrentFieldItem(list, id) {
  return list.find(function (item) {
    return item.id === id;
  });
};

var state = {
  // 左侧数据
  currentBwd: '',
  bwdList: [],
  treeSelectionData: [{
    id: '1',
    label: '全选',
    children: [{
      id: '2',
      label: '医疗类'
    }, {
      id: '3',
      label: '运营类'
    }, {
      id: '4',
      label: '医保类'
    }]
  }],
  // 中间数据
  currentField: '',
  currentMap: '',
  isAdvance: false,
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  totalNumber: 0,
  fieldsList: [],
  eventList: [],
  eventMapList: [],
  source: 'DWD',
  fileCatalogData: Object.assign({}, _initState["default"].fileCatalogData),
  searchData: Object.assign({}, _initState["default"].searchData),
  adSearchData: Object.assign({}, _initState["default"].adSearchData),
  fileFieldsData: Object.assign({}, _initState["default"].fileFieldsData),
  eventMapData: Object.assign({}, _initState["default"].eventMapData)
};
var getters = {
  currentBwdItem: function currentBwdItem(state) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = state.bwdList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var res = item.children.find(function (it) {
          return state.currentBwd.toString() === it.id.toString();
        });

        if (res) {
          return Object.assign({}, res, {
            theme: item.label
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
  currentFieldRow: function currentFieldRow(state) {
    return state.fieldsList.find(function (item) {
      return item.id === state.currentField;
    });
  },
  // 目录dialog下拉选项
  categoryOptions: function categoryOptions(state) {
    return state.bwdList.map(function (item) {
      return {
        label: item.label,
        value: item.id
      };
    });
  },
  eventOptions: function eventOptions(state) {
    return state.eventList.map(function (item) {
      return {
        label: item.nameCn,
        value: item.id
      };
    });
  },
  filterEventMapList: function filterEventMapList(state) {
    return state.eventMapList.filter(function (item) {
      return item.colNameCn.indexOf(state.eventMapData.field) > -1;
    });
  }
};
var mutations = {
  setCurrentBwd: function setCurrentBwd(state, value) {
    if (value) {
      state.currentBwd = value.toString();
    } else if (state.currentBwd) {
      state.currentBwd = state.currentBwd.toString();
    } else {
      if (state.bwdList[0].children.length) {
        state.currentBwd = state.bwdList[0].children[0].id.toString();
      } else {
        state.currentbwd = '';
      }
    }
  },
  setBwdList: function setBwdList(state, value) {
    state.bwdList = value;
  },
  setCatalogForm: function setCatalogForm(state, form) {
    if (form) {
      (0, _lang.keysClone)(state.fileCatalogData, form);
    } else {
      state.fileCatalogData = Object.assign({}, _initState["default"].fileCatalogData);
    }
  },
  setFieldsForm: function setFieldsForm(state, form) {
    if (form) {
      (0, _lang.keysClone)(state.fileFieldsData, form);
    } else {
      state.fileFieldsData = Object.assign({}, _initState["default"].fileFieldsData);
    }
  },
  setIsAdvance: function setIsAdvance(state, isAdvance) {
    if (state.isAdvance !== isAdvance) {
      state.isAdvance = isAdvance;
      state.pageInfo.curPage = 1;
    }
  },
  setCurrentField: function setCurrentField(state, field) {
    if (!field) {
      state.currentField = state.fieldsList && state.fieldsList.length ? state.fieldsList[0].id : '';
    } else {
      state.currentField = field;
    }
  },
  setEventMapList: function setEventMapList(state) {
    if (!state.currentField) return;
    var currentField = getCurrentFieldItem(state.fieldsList, state.currentField);
    if (!currentField) return;
    var dwdMappingColumnList = currentField.dwdMappingColumnList,
        sbrMappingColumnList = currentField.sbrMappingColumnList;
    state.eventMapList = (state.source === 'DWD' ? dwdMappingColumnList : sbrMappingColumnList).map(function (item, index) {
      return {
        id: item.id,
        index: index,
        colId: item.colId,
        colNameCn: item.colNameCn,
        colNameEn: item.colNameEn,
        tableId: item.tableId,
        tableNameCn: item.nameCn,
        tableNameEn: item.nameEn,
        definition: item.definition,
        match: true,
        matchLabel: '取消匹配'
      };
    });
  },
  setPageInfo: function setPageInfo(state, pageInfo) {
    (0, _lang.keysClone)(state.pageInfo, pageInfo);
  },
  setTotalNum: function setTotalNum(state, value) {
    state.totalNumber = value;
  },
  setTabMapList: function setTabMapList(state) {
    state.eventMapData = Object.assign({}, _initState["default"].eventMapData);
    state.eventMapList = [];
  },
  resetEventMapData: function resetEventMapData(state) {
    state.eventMapData = Object.assign({}, _initState["default"].eventMapData);
  },
  matchId: function matchId(state) {
    var currentField = getCurrentFieldItem(state.fieldsList, state.currentField);
    if (!currentField) return;
    var dwdMappingColumnList = currentField.dwdMappingColumnList,
        sbrMappingColumnList = currentField.sbrMappingColumnList;
    if (state.source !== 'DWD') dwdMappingColumnList = sbrMappingColumnList;
    dwdMappingColumnList.forEach(function (item) {
      state.eventMapList.forEach(function (event) {
        if (event.colId === item.colId) {
          event.id = item.id;
          event.match = true;
        }
      });
    });
  },
  cancelMatch: function cancelMatch(state, id) {
    state.eventMapList.forEach(function (item) {
      if (item.id === id) {
        delete item.id;
        item.match = false;
      }
    });
  }
};
var actions = {
  queryTotalNum: function queryTotalNum(_ref) {
    var commit, _ref2, value;

    return regeneratorRuntime.async(function queryTotalNum$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _bwd.getTotalNumApi)());

          case 3:
            _ref2 = _context.sent;
            value = _ref2.value;
            commit('setTotalNum', value);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  // 处理左侧bwd，调接口展示bwdlist(getCatalogApi)
  loadBwdModules: function loadBwdModules(_ref3) {
    var commit, result;
    return regeneratorRuntime.async(function loadBwdModules$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref3.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _bwd.getCatalogApi)());

          case 3:
            result = _context2.sent;

            if (result.success) {
              commit('setBwdList', result.value.map(function (item) {
                return {
                  id: item.theme,
                  label: item.theme,
                  children: item.bwdCatelogEntityList.map(function (it) {
                    return {
                      id: it.id,
                      label: it.nameCn,
                      nameCn: it.nameCn,
                      nameEn: it.nameEn,
                      state: it.state,
                      number: it.refNum
                    };
                  })
                };
              }));
              commit('setCurrentBwd');
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  // 给中间展示bwd(getBwdInfoApi)
  queryField: function queryField(_ref4) {
    var commit, _state$pageInfo, curPage, pageSize, query, res, _res$value, records, pageInfo;

    return regeneratorRuntime.async(function queryField$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref4.commit;
            _state$pageInfo = state.pageInfo, curPage = _state$pageInfo.curPage, pageSize = _state$pageInfo.pageSize;
            query = Object.assign({
              id: state.currentBwd
            }, state.isAdvance ? state.adSearchData : state.searchData);
            _context3.next = 5;
            return regeneratorRuntime.awrap((0, _bwd.getBwdInfoApi)(curPage, pageSize, query, state.isAdvance));

          case 5:
            res = _context3.sent;
            _res$value = res.value, records = _res$value.records, pageInfo = _res$value.pageInfo;
            state.fieldsList = records.map(function (item, index) {
              return _objectSpread({}, item, {
                index: pageInfo.pageSize * (pageInfo.curPage - 1) + index + 1,
                // index: item.id,
                dwdTable: item.dwdMappingColumnList.map(function (item) {
                  return item.tableNameCn;
                }).join(', '),
                dwdField: item.dwdMappingColumnList.map(function (item) {
                  return item.colNameCn;
                }).join(', '),
                sbrTable: item.sbrMappingColumnList.map(function (item) {
                  return item.tableNameCn;
                }).join(', '),
                sbrField: item.sbrMappingColumnList.map(function (item) {
                  return item.colNameCn;
                }).join(', ')
              });
            });
            commit('setPageInfo', pageInfo);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  queryMappingList: function queryMappingList(_ref5, source) {
    var _ref6, value;

    return regeneratorRuntime.async(function queryMappingList$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _objectDestructuringEmpty(_ref5);

            _context4.next = 3;
            return regeneratorRuntime.awrap((0, _bwd.getMapModelApi)(source));

          case 3:
            _ref6 = _context4.sent;
            value = _ref6.value;
            state.eventList = value;
            state.source = source;

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  queryMappingField: function queryMappingField(_ref7, id) {
    var commit, result, table;
    return regeneratorRuntime.async(function queryMappingField$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref7.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _bwd.getMapFieldsApi)(id));

          case 3:
            result = _context5.sent;
            table = state.eventList.find(function (item) {
              return item.id === id;
            });
            state.eventMapList = result.value.map(function (item, index) {
              return {
                index: index,
                tableId: id,
                tableNameCn: table.nameCn,
                tableNameEn: table.nameEn,
                colNameCn: item.nameCn,
                colNameEn: item.nameEn,
                colId: item.id,
                definition: item.definition,
                match: false
              };
            });
            commit('matchId');

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  // 左侧表单提交，更新目录接口addFileCatalogApi,updateFileCatalogApi
  submitFileCatalog: function submitFileCatalog(_ref8) {
    var dispatch, state, _state$fileCatalogDat, id, nameCn, nameEn, theme;

    return regeneratorRuntime.async(function submitFileCatalog$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dispatch = _ref8.dispatch, state = _ref8.state;
            _state$fileCatalogDat = state.fileCatalogData, id = _state$fileCatalogDat.id, nameCn = _state$fileCatalogDat.nameCn, nameEn = _state$fileCatalogDat.nameEn, theme = _state$fileCatalogDat.theme;

            if (id) {
              _context6.next = 8;
              break;
            }

            _context6.next = 5;
            return regeneratorRuntime.awrap((0, _bwd.addFileCatalogApi)(nameCn, nameEn, theme, state.fileCatalogData.state));

          case 5:
            this._vm.$message.success('新增文件目录成功');

            _context6.next = 11;
            break;

          case 8:
            _context6.next = 10;
            return regeneratorRuntime.awrap((0, _bwd.updateFileCatalogApi)(id, nameCn, nameEn, theme, state.fileCatalogData.state));

          case 10:
            this._vm.$message.success('编辑文件目录成功');

          case 11:
            dispatch('loadBwdModules');
            dispatch('queryTotalNum');

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this);
  },
  submitFields: function submitFields(_ref9) {
    var dispatch, state, _state$fileFieldsData, id, index, nameCn, nameEn, datasetId;

    return regeneratorRuntime.async(function submitFields$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            dispatch = _ref9.dispatch, state = _ref9.state;
            _state$fileFieldsData = state.fileFieldsData, id = _state$fileFieldsData.id, index = _state$fileFieldsData.index, nameCn = _state$fileFieldsData.nameCn, nameEn = _state$fileFieldsData.nameEn;
            datasetId = parseInt(state.currentBwd);

            if (id) {
              _context7.next = 9;
              break;
            }

            _context7.next = 6;
            return regeneratorRuntime.awrap((0, _bwd.addFileFieldsApi)({
              id: id,
              datasetId: datasetId,
              index: index,
              nameCn: nameCn,
              nameEn: nameEn
            }));

          case 6:
            this._vm.$message.success('新增字段成功！');

            _context7.next = 12;
            break;

          case 9:
            _context7.next = 11;
            return regeneratorRuntime.awrap((0, _bwd.updateFileFieldsApi)({
              id: id,
              datasetId: datasetId,
              index: index,
              nameCn: nameCn,
              nameEn: nameEn
            }));

          case 11:
            this._vm.$message.success('编辑字段成功！');

          case 12:
            _context7.next = 14;
            return regeneratorRuntime.awrap(dispatch('queryField'));

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, null, this);
  },
  submitMapping: function submitMapping(_ref10, col) {
    var commit, dispatch, state;
    return regeneratorRuntime.async(function submitMapping$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            commit = _ref10.commit, dispatch = _ref10.dispatch, state = _ref10.state;

            if (col.match) {
              _context8.next = 11;
              break;
            }

            _context8.next = 4;
            return regeneratorRuntime.awrap(dispatch('map', col));

          case 4:
            this._vm.$message.success('匹配成功！');

            col.match = true;
            _context8.next = 8;
            return regeneratorRuntime.awrap(dispatch('queryField'));

          case 8:
            commit('matchId');
            _context8.next = 18;
            break;

          case 11:
            _context8.next = 13;
            return regeneratorRuntime.awrap((0, _bwd.deleteMappingApi)(col.id));

          case 13:
            col.match = false;
            delete col['id'];

            this._vm.$message.success('取消匹配成功！');

            _context8.next = 18;
            return regeneratorRuntime.awrap(dispatch('queryField'));

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, null, this);
  },
  map: function map(_ref11, col) {
    var commit, state, currentField, dwdMappingColumnList, id;
    return regeneratorRuntime.async(function map$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            commit = _ref11.commit, state = _ref11.state;
            currentField = getCurrentFieldItem(state.fieldsList, state.currentField);
            dwdMappingColumnList = currentField.dwdMappingColumnList, id = currentField.id;

            if (!(state.source === 'DWD' && dwdMappingColumnList && dwdMappingColumnList.length === 1)) {
              _context9.next = 12;
              break;
            }

            _context9.next = 6;
            return regeneratorRuntime.awrap(_elementUi.MessageBox.confirm('该字段事件库映射已存在，是否替换？', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }));

          case 6:
            _context9.next = 8;
            return regeneratorRuntime.awrap((0, _bwd.deleteMappingApi)(dwdMappingColumnList[0].id));

          case 8:
            commit('cancelMatch', dwdMappingColumnList[0].id);
            _context9.next = 11;
            return regeneratorRuntime.awrap((0, _bwd.addMappingApi)({
              id: id,
              bwdMappingColumn: {
                tableId: col.tableId,
                tableNameCn: col.tableNameCn,
                tableNameEn: col.tableNameEn,
                colId: col.colId,
                colNameCn: col.colNameCn,
                colNameEn: col.colNameEn
              }
            }));

          case 11:
            return _context9.abrupt("return");

          case 12:
            _context9.next = 14;
            return regeneratorRuntime.awrap((0, _bwd.addMappingApi)({
              id: id,
              bwdMappingColumn: {
                tableId: col.tableId,
                tableNameCn: col.tableNameCn,
                tableNameEn: col.tableNameEn,
                colId: col.colId,
                colNameCn: col.colNameCn,
                colNameEn: col.colNameEn
              }
            }));

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    });
  },
  runCatalog: function runCatalog(_ref12) {
    var dispatch, state, id;
    return regeneratorRuntime.async(function runCatalog$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            dispatch = _ref12.dispatch, state = _ref12.state;
            id = state.currentBwd;
            _context10.next = 4;
            return regeneratorRuntime.awrap((0, _bwd.submitCatalogApi)(id));

          case 4:
            this._vm.$message.success('启动成功！');

            dispatch('loadBwdModules');

          case 6:
          case "end":
            return _context10.stop();
        }
      }
    }, null, this);
  }
};
var _default = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;