const locales = {
  '/en-us/': {
    selectText: 'Languages',
    label: 'English',
  },
  '/it-it/': {
    selectText: 'Lingua',
    label: 'Italiano',
  },
  '/zh-cn/': {
    selectText: '选择语言',
    label: '简体中文',
  },
  '/zh-tw/': {
    selectText: '選擇語言',
    label: '繁體中文',
  },
}
const sidebar = ['', 'tos', 'privacy', 'guide', 'node', 'opensource', 'sponsor']

for (const locale of Object.keys(locales)) {
  locales[locale].sidebar = { [locale]: sidebar }
}

module.exports = {
  title: 'FastGit',
  description: 'FastGit Document Center',
  locales: {
    '/en-us/': {
      lang: 'en-US',
    },
    '/it-it/': {
      lang: 'it-IT',
    },
    '/zh-cn/': {
      lang: 'zh-CN',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
    },
  },
  themeConfig: {
    locales,
    repo: 'fastgitorg/document',
    editLinks: true,
    lastUpdated: true,
  },
}
