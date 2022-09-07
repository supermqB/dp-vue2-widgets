"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _task = require("@/api/task");

var _request = require("@/utils/request");

var _elementUi = require("element-ui");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var state = {
  searchKey: '',
  taskList: [],
  curTask: '',
  checkedFilters: [],
  selectedTasks: [],
  currentSuspect: null
};
var getters = {
  filterTreeData: function filterTreeData(state) {
    return [{
      id: 'all',
      label: '全选',
      children: [{
        id: 'source_all',
        label: '来源',
        children: _toConsumableArray(new Set(state.taskList.map(function (item) {
          return item.source;
        }))).map(function (item) {
          return {
            id: 'source/' + item,
            label: item
          };
        })
      }, {
        id: 'name_all',
        label: '名称',
        children: _toConsumableArray(new Set(state.taskList.map(function (item) {
          return item.name;
        }))).map(function (item) {
          return {
            id: 'name/' + item,
            label: item
          };
        })
      }]
    }];
  },
  filteredTask: function filteredTask(state) {
    var checkedFilters = state.checkedFilters;
    if (checkedFilters.indexOf('all') != -1) return state.taskList;
    var filteredTask = state.taskList;
    /* filter source */

    if (checkedFilters.indexOf('source_all') == -1) {
      var sources = checkedFilters.filter(function (f) {
        return f.indexOf('source/') != -1;
      });

      if (sources.length) {
        filteredTask = filteredTask.filter(function (task) {
          return sources.indexOf('source/' + task.source) != -1;
        });
      }
    }
    /* filter name */


    if (checkedFilters.indexOf('name_all') == -1) {
      var names = checkedFilters.filter(function (f) {
        return f.indexOf('name/') != -1;
      });

      if (names.length) {
        filteredTask = filteredTask.filter(function (task) {
          return names.indexOf('name/' + task.name) != -1;
        });
      }
    }

    return filteredTask;
  }
};
var mutations = {
  setTaskList: function setTaskList(state, list) {
    state.taskList = !list ? [] : list;
  },
  setSuspectList: function setSuspectList(state) {
    state.taskList = [];
  },
  setSearchKey: function setSearchKey(state, value) {
    state.searchKey = value;
  },
  setCheckedFilters: function setCheckedFilters(state, value) {
    state.checkedFilters = value;
  },
  setSelectedTasks: function setSelectedTasks(state, value) {
    state.selectedTasks = value;
  },
  setCurrentSuspect: function setCurrentSuspect(state, value) {
    state.currentSuspect = value;
  },
  setCurrentTask: function setCurrentTask(state, value) {
    state.curTask = value;
  }
};
var actions = {
  querySuspect: function querySuspect(_ref) {
    var commit, state, rootState, version, res, _res$value$, source, name;

    return regeneratorRuntime.async(function querySuspect$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state, rootState = _ref.rootState;
            commit('setCurrentTask', '');
            version = rootState.value.currentVersion;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _task.getSuspectListApi)(version, state.searchKey));

          case 5:
            res = _context.sent;
            commit('setTaskList', res.value.map(function (item) {
              return Object.assign(item, {
                state: item.state === '0' ? '待完成' : '已完成'
              });
            }));

            if (res.value && res.value.length) {
              _res$value$ = res.value[0], source = _res$value$.source, name = _res$value$.name;
              commit('setCurrentTask', "".concat(source, ":").concat(name));
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  completeTasks: function completeTasks(_ref2) {
    var state, dispatch, selectedTasks, commitSuspectIds, result;
    return regeneratorRuntime.async(function completeTasks$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            state = _ref2.state, dispatch = _ref2.dispatch;
            selectedTasks = state.selectedTasks;
            commitSuspectIds = selectedTasks.reduce(function (accuSet, curTask) {
              curTask.suspectList.forEach(function (sus) {
                accuSet.add(sus.id);
              });
              return accuSet;
            }, new Set());
            _context2.next = 5;
            return regeneratorRuntime.awrap((0, _request.post)('suspected/commit', _toConsumableArray(commitSuspectIds)));

          case 5:
            result = _context2.sent;

            if (result.success) {
              _elementUi.Message.success('疑似任务已确认完成。'); // dispatch('listSuspectTasks')

            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;