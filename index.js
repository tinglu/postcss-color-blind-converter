let postcss = require('postcss')

module.exports = postcss.plugin('postcss-color-blind-converter', () => {
  return root => {
    root.walkRules(rule => {
      rule.walkDecls(/^overflow-?/, decl => {
        if (decl.value === 'scroll') {
          let hasTouch = rule.some(i => {
            return i.prop === '-webkit-overflow-scrolling'
          })
          if (!hasTouch) {
            rule.append({
              prop: '-webkit-overflow-scrolling',
              value: 'touch'
            })
          }
        }
      })
    })
  }
})

let plugin = require('./')
let result = postcss([plugin({})]).process(
  '.w3-text-theme {color:#2196f3 !important}',
  { from: undefined })
console.log(result)
