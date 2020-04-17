# PostCSS Color Blind Converter

[PostCSS] plugin that converts CSS for easier reading for color-blind people..

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```


## Color Blindness Table

The table is from [color-blind](https://github.com/skratchdot/color-blind#color-blindness-table) and it's one of the dependencies of this project.

| Group                                                           |                                       |                                      |                                   |
| --------------------------------------------------------------- | ------------------------------------- | ------------------------------------ | --------------------------------- |
| **Trichromat** (三色视者,正常色觉者) <br/>*3 good cones*        | Normal                                |                                      |                                   |
| **Anomalous Trichromat** (异常三色觉)<br/>*2 good cones, 1 bad* | Protanomaly 红色弱<br/>*low red*      | Deuteranomaly 绿色弱<br/>*low green* | Tritanomaly 蓝色弱<br/>*low blue* |
| **Dichromat** (二色视者)<br/>*2 good cones, 1 blind*            | Protanopia 红色盲<br/>*no red*        | Deuteranopia 绿色盲<br/>*no green*   | Tritanopia 蓝色盲<br/>*no blue*   |
| **Monochromat** (全色盲者) <br/>*1 good cone, 2 blind/bad*      | Achromatomaly <br />*almost no color* | Achromatopsia 全色盲<br/>*no color*  |                                   |


## Development

- Install: `$ npm install`
- Run: `$ npm run`
- Test:
  ```bash
  $ npm test # Jest test cases
  $ node index.test.js # to test module import
  ```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-color-blind-converter'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
