let postcss = require('postcss')
let colorblindPlugin = require('color-blind')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

/* Write tests here */
describe('css converter test', () => {
  it('should return same css if no colors found', async () => {
    await run('h1 {color: beige;}', 'h1 {color: red;}', {})
  })

  it('should convert css if colors found', async () => {
    await run('h1 {color: beige;}', 'h1 {color: red;}', {})
  })
})

describe('color-blind plugin functions', () => {
  it('protanopia', () => {
    let result = colorblindPlugin.protanopia('#42dead')
    console.log(result)
    expect(result).toEqual('#d1c4a0')
  })
})
