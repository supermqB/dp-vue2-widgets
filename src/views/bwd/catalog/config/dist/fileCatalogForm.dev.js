"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileCatalogRule = exports.fileCatalogCfg = void 0;

var _const = require("@/utils/const");

var _validator = require("@/utils/validator");

var fileCatalogCfg = function fileCatalogCfg() {
  var categoryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return [{
    type: 'el-input',
    label: 'BWD文件名称',
    id: 'nameCn',
    elOptions: {
      placeholder: '请输入'
    }
  }, {
    type: 'el-input',
    label: 'BWD文件英文名称',
    id: 'nameEn',
    elOptions: {
      placeholder: '请输入'
    }
  }, {
    type: 'el-select',
    label: '文件分类',
    options: categoryList,
    id: 'theme',
    elOptions: {
      disabled: disabled,
      placeholder: '请选择'
    }
  }, {
    type: 'el-select',
    label: '启用状态',
    id: 'state',
    options: _const.STATEOPTIONS,
    elOptions: {
      placeholder: '请选择'
    }
  }].map(function (item) {
    var elOptions = Object.assign({}, item.elOptions, {
      style: {
        width: '260px'
      }
    });
    item.elOptions = elOptions;
    return item;
  });
};

exports.fileCatalogCfg = fileCatalogCfg;
var fileCatalogRule = {
  nameCn: {
    required: true
  },
  nameEn: [{
    required: true
  }, {
    validator: _validator.validateEnglish,
    trigger: 'blur'
  }],
  theme: {
    required: true
  }
};
exports.fileCatalogRule = fileCatalogRule;