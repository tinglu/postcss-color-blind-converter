let postcss = require('postcss')

module.exports = postcss.plugin('postcss-color-blind-converter', () => {
  return root => {
    root.walkRules(rule => {
      rule.walkDecls(/^color-?/, decl => {
        decl.value = 'red'
      })
    })
  }
})
