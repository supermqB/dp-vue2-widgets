"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapFieldsApi = exports.getMapModelApi = exports.deleteMappingApi = exports.addMappingApi = exports.submitCatalogApi = exports.updateFileFieldsApi = exports.addFileFieldsApi = exports.addFileCatalogApi = exports.updateFileCatalogApi = exports.getTotalNumApi = exports.getBwdInfoApi = exports.getCatalogApi = void 0;

var _const = require("@/utils/const");

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getCatalogApi = function getCatalogApi() {
  return (0, _request["default"])({
    method: 'get',
    url: '/data-mapping/getCatalog'
  });
};

exports.getCatalogApi = getCatalogApi;

var getBwdInfoApi = function getBwdInfoApi(current, size) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isAdvance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/list',
    // url: isAdvance ? '/dataset/advanceSearch' : '/dataset/getInfo',
    params: {
      current: current,
      size: size
    },
    data: data
  });
};

exports.getBwdInfoApi = getBwdInfoApi;

var getTotalNumApi = function getTotalNumApi() {
  return (0, _request["default"])({
    method: 'get',
    url: '/data-mapping/getTotalNum'
  });
};

exports.getTotalNumApi = getTotalNumApi;

var updateFileCatalogApi = function updateFileCatalogApi(id, nameCn, nameEn, theme, state) {
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/file/edit',
    data: {
      id: id,
      nameCn: nameCn,
      nameEn: nameEn,
      theme: theme,
      state: state
    }
  });
};

exports.updateFileCatalogApi = updateFileCatalogApi;

var addFileCatalogApi = function addFileCatalogApi(nameCn, nameEn, theme) {
  var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _const.EDITINGSTATE;
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/file/add',
    data: {
      nameCn: nameCn,
      nameEn: nameEn,
      theme: theme,
      state: state
    }
  });
};

exports.addFileCatalogApi = addFileCatalogApi;

var addFileFieldsApi = function addFileFieldsApi(_ref) {
  var datasetId = _ref.datasetId,
      index = _ref.index,
      nameCn = _ref.nameCn,
      nameEn = _ref.nameEn;
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/column/add',
    data: {
      id: datasetId,
      seqNo: index,
      nameCn: nameCn,
      nameEn: nameEn
    }
  });
};

exports.addFileFieldsApi = addFileFieldsApi;

var updateFileFieldsApi = function updateFileFieldsApi(_ref2) {
  var id = _ref2.id,
      datasetId = _ref2.datasetId,
      index = _ref2.index,
      nameCn = _ref2.nameCn,
      nameEn = _ref2.nameEn;
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/column/edit',
    data: {
      id: id,
      datasetId: datasetId,
      seqNo: index,
      nameCn: nameCn,
      nameEn: nameEn
    }
  });
};

exports.updateFileFieldsApi = updateFileFieldsApi;

var submitCatalogApi = function submitCatalogApi(id) {
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/commit',
    params: {
      id: parseInt(id)
    }
  });
};

exports.submitCatalogApi = submitCatalogApi;

var addMappingApi = function addMappingApi(_ref3) {
  var id = _ref3.id,
      bwdMappingColumn = _ref3.bwdMappingColumn;
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/mapping/add',
    data: {
      id: id,
      bwdMappingColumn: bwdMappingColumn
    }
  });
};

exports.addMappingApi = addMappingApi;

var deleteMappingApi = function deleteMappingApi(id) {
  return (0, _request["default"])({
    method: 'post',
    url: '/data-mapping/mapping/delete',
    params: {
      id: parseInt(id)
    }
  });
};

exports.deleteMappingApi = deleteMappingApi;

var getMapModelApi = function getMapModelApi(source, version) {
  return (0, _request["default"])({
    method: 'get',
    url: '/data-mapping/getTableModel',
    params: {
      source: source,
      version: version
    }
  });
};

exports.getMapModelApi = getMapModelApi;

var getMapFieldsApi = function getMapFieldsApi(id) {
  return (0, _request["default"])({
    method: 'get',
    url: '/data-mapping/getColumnModel',
    params: {
      id: parseInt(id)
    }
  });
};

exports.getMapFieldsApi = getMapFieldsApi;