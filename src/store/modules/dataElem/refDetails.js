const state = {
  details: [
    {
      module: '标准事件库',
      version: 'v1.0',
      refList: [
        { dataSetName: '卫生事件', columnName: 'col1' },
        { dataSetName: '卫生事件', columnName: 'col2' },
        { dataSetName: '卫生事件', columnName: 'col3' }
      ]
    },
    {
      module: '业务数据库',
      version: '版本1.0',
      refList: [
        { dataSetName: '卫生事件', columnName: 'col1' },
        { dataSetName: '卫生事件', columnName: 'col2' },
        { dataSetName: '卫生事件', columnName: 'col3' }
      ]
    }
  ],
  formData: {
    repo: '',
    version: ''
  }
}

const getters = {
  moduleList(state) {
    return state.details.map(item => item.module)
  },
  curVersionList(state) {
    let curModuleVersions = state.details.filter(
      item => item.module == state.formData.repo
    )
    return curModuleVersions.length
      ? curModuleVersions.map(item => item.version)
      : []
  },
  curRefList(state) {
    let ll = state.details.filter(
      item =>
        item.module == state.formData.repo &&
        item.version == state.formData.version
    )
    return ll.length ? ll[0].refList : []
  }
}

export default {
  namespaced: true,
  state,
  getters
}
