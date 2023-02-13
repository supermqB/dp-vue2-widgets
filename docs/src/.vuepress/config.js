const getPaths = (basePath, fileList) => {
  return fileList.map(filename => basePath + '/' + filename)
}

module.exports = {
  title: '数据平台部组件库',
  description:
    '此组件库是由UED团队设计实现的，旨在保证产品视觉风格的统一，提升设计和开发效率。',
  plugins: ['demo-container'], // 配置插件
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '设计', link: '/design/' },
      { text: '组件ElementUI', link: '/components-el/' },
      { text: '组件DpUI', link: '/components-dp/' }
    ],
    sidebar: {
      '/design/': [
        '',
        {
          title: '全局样式',
          collapsable: false,
          children: getPaths('global-style', ['color', 'font'])
        }
      ],
      '/components-el/': [
        '',
        {
          title: '通用',
          collapsable: false,
          children: getPaths('basic', ['button', 'icon', 'link'])
        },
        {
          title: '数据录入',
          collapsable: false,
          children: getPaths('form', [
            'radio',
            'checkbox',
            'input',
            // 'input-number',
            // 'select',
            // 'cascader',
            'switch',
            // 'slider',
            // 'time-picker',
            // 'date-picker',
            // 'date-time-picker',
            // 'upload',
            // 'rate',
            // 'color-picker',
            'transfer'
            // 'form',
          ])
        },
        {
          title: '数据展示',
          collapsable: false,
          children: getPaths('data', [
            'table',
            // 'tag',
            // 'progress',
            'tree',
            'pagination'
            // 'badge',
            // 'avatar',
            // 'skeleton',
            // 'empty',
            // 'descriptions',
            // 'result',
          ])
        },
        {
          title: 'Notice',
          collapsable: false,
          children: getPaths('notice', [
            // 'alert',
            // 'loading',
            'message',
            'message-box',
            'result-box'
            // 'notification',
          ])
        },
        {
          title: '导航',
          collapsable: false,
          children: getPaths('navigation', [
            'menu',
            'tabs'
            // 'breadcrumb',
            // 'page-header',
            // 'dropdown',
            // 'steps',
          ])
        }
        // {
        //   title: 'Others',
        //   collapsable: false,
        //   children: getPaths('others', ['dialog', 'tooltip', 'popover']),
        // },
      ],
      '/components-dp/': [
        '',
        {
          title: '通用 basic',
          collapsable: false,
          children: getPaths('basic', [
            'title', // 标题
            'icon-button', // 带图标按钮
            'status' // 状态标签
          ])
        },
        {
          title: '布局 layout',
          collapsable: false,
          children: getPaths('layout', [
            'layout-root', // 根节点布局
            'layout-container', // 页面布局容器
            'block' // 块
          ])
        },
        {
          title: '数据录入 data-input',
          collapsable: false,
          children: getPaths('data-input', [
            'form', // 表单
            'search-bar', // 检索栏
            'query-bar', // 表单查询
            'search-form' // 检索表单
          ])
        },
        {
          title: '数据展示 data-display',
          collapsable: false,
          children: getPaths('data-display', [
            'general-table', // 通用表格
            'statistics-table', // 统计表格
            'tree' // 树形控件
          ])

          // .concat({
          //   title: '',
          //   collapsable: false,
          //   children: getPaths('data-display/module', ['catalog'])
          // })
        },
        {
          title: '交互 interaction',
          collapsable: false,
          children: getPaths('interaction', ['dialog'])
        },
        {
          title: '导航 navigation',
          collapsable: false,
          children: getPaths('navigation', ['header-nav', 'pagination'])
        },
        {
          title: '模块组件 module',
          collapsable: false,
          children: getPaths('module', ['catalog'])
        }
      ],
      '/': ['']
    }
  }
}
