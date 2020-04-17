let postcss = require('postcss')
let colorBlind = require('color-blind')

function transformColor(input, method) {
  return colorBlind[method](input)
}

module.exports = postcss.plugin('postcss-color-blind-converter', opts => {
  opts = opts || {}
  let method = opts.method ? opts.method.toLowerCase().trim() : 'achromatopsia'
  return root => {
    root.walkRules(rule => {
      rule.walkDecls(/^color-?/, decl => {
        decl.value = transformColor(decl.value, method)
      })
    })
  }
})
