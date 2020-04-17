/* eslint-disable no-undef */
let postcss = require('postcss')
let colorBlind = require('color-blind')

let plugin = require('../')

// See color-blind project:
// https://github.com/skratchdot/color-blind/blob/master/lib/color-blind.js#L14
// let colorVisionData = [
//   'protanomaly',
//   'protanopia',
//   'deuteranomaly',
//   'deuteranopia',
//   'tritanomaly',
//   'tritanopia',
//   'achromatomaly',
//   'achromatopsia'
// ]

async function run(input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined
  })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

/* Write tests here */

describe('Dependency test: color-blind plugin functions', () => {
  it('should return corresponding converted color - beige', () => {
    expect(colorBlind.protanomaly('beige')).toEqual('#faf3db')
    expect(colorBlind.protanopia('beige')).toEqual('#fef2da')
    expect(colorBlind.deuteranomaly('beige')).toEqual('#fbf2e6')
    expect(colorBlind.deuteranopia('beige')).toEqual('#fff0ec')
    expect(colorBlind.tritanomaly('beige')).toEqual('#f8f2f2')
    expect(colorBlind.tritanopia('beige')).toEqual('#faf0ff')
    expect(colorBlind.achromatomaly('beige')).toEqual('#f4f4eb')
    expect(colorBlind.achromatopsia('beige')).toEqual('#f3f3f3')
  })

  it('should return corresponding converted color - #42dead', () => {
    expect(colorBlind.protanomaly('#42dead')).toEqual('#9dcea5')
    expect(colorBlind.protanopia('#42dead')).toEqual('#d1c4a0')
    expect(colorBlind.deuteranomaly('#42dead')).toEqual('#a5c9b3')
    expect(colorBlind.deuteranopia('#42dead')).toEqual('#debeb6')
    expect(colorBlind.tritanomaly('#42dead')).toEqual('#56d8d1')
    expect(colorBlind.tritanopia('#42dead')).toEqual('#62d5e6')
    expect(colorBlind.achromatomaly('#42dead')).toEqual('#8ec7b5')
    expect(colorBlind.achromatopsia('#42dead')).toEqual('#b9b9b9')
  })
})

describe('Test this plugin : postcss-color-blind-converter', () => {
  let css = `
      h1 {
        color: beige;
      }

      h2 {
        color: #42dead;
      }`

  it('should return same css if no colors found', async () => {
    await run('h1 {display: block;}', 'h1 {display: block;}', {})
  })

  it('should convert css if colors found - protanomaly', async () => {
    let result = `
      h1 {
        color: #faf3db;
      }

      h2 {
        color: #9dcea5;
      }`
    await run(css, result, {
      method: 'protanomaly'
    })
  })

  it('should convert css if colors found - protanopia', async () => {
    let result = `
      h1 {
        color: #fef2da;
      }

      h2 {
        color: #d1c4a0;
      }`
    await run(css, result, {
      method: 'protanopia'
    })
  })

  it('should convert css if colors found - deuteranomaly', async () => {
    let result = `
      h1 {
        color: #fbf2e6;
      }

      h2 {
        color: #a5c9b3;
      }`
    await run(css, result, {
      method: 'deuteranomaly'
    })
  })

  it('should convert css if colors found - deuteranopia', async () => {
    let result = `
      h1 {
        color: #fff0ec;
      }

      h2 {
        color: #debeb6;
      }`
    await run(css, result, {
      method: 'deuteranopia'
    })
  })

  it('should convert css if colors found - tritanopia', async () => {
    let result = `
      h1 {
        color: #faf0ff;
      }

      h2 {
        color: #62d5e6;
      }`
    await run(css, result, {
      method: 'tritanopia'
    })
  })

  it('should convert css if colors found - tritanomaly', async () => {
    let result = `
      h1 {
        color: #f8f2f2;
      }

      h2 {
        color: #56d8d1;
      }`
    await run(css, result, {
      method: 'tritanomaly'
    })
  })

  it('should convert css if colors found - achromatomaly', async () => {
    let result = `
      h1 {
        color: #f4f4eb;
      }

      h2 {
        color: #8ec7b5;
      }`
    await run(css, result, {
      method: 'achromatomaly'
    })
  })

  it('should convert css if colors found - achromatopsia', async () => {
    let result = `
      h1 {
        color: #f3f3f3;
      }

      h2 {
        color: #b9b9b9;
      }`
    await run(css, result, {
      method: 'achromatopsia'
    })
  })
})
