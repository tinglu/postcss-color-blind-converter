let fs = require('fs')
let postcss = require('postcss')
let colorblindPlugin = require('./') // test my own plugin

let css = fs.readFileSync('src/style.css', 'utf8')

postcss([colorblindPlugin({
    method: 'protanomaly'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-protanomaly.css', result.css)
  })

postcss([colorblindPlugin({
    method: 'protanopia'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-protanopia.css', result.css)
  })

postcss([colorblindPlugin({
    method: 'deuteranomaly'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-deuteranomaly.css', result.css)
  })

postcss([colorblindPlugin({
    method: 'deuteranopia'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-deuteranopia.css', result.css)
  })

postcss([colorblindPlugin({
    method: 'tritanomaly'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-tritanomaly.css', result.css)
  })


postcss([colorblindPlugin({
    method: 'tritanopia'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-tritanopia.css', result.css)
  })

postcss([colorblindPlugin({
    method: 'achromatomaly'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-achromatomaly.css', result.css)
  })

postcss([colorblindPlugin({
    method: 'achromatopsia'
  })])
  .process(css, {
    from: undefined
  })
  .then(result => {
    fs.writeFileSync('dest/style-achromatopsia.css', result.css)
  })
