# PostCSS Color Blind Converter

[PostCSS] plugin that converts CSS colors for different types of color-blindness.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
    color: beige;
    background-color: #FF6F61;
}
```

```css
.foo {
  /* Output example - for Tritanopia */
  color: #faf0ff;
  background-color: #ff6d74;
}
```

## Take-aways

The two main take-aways I get from working on this practice are:

1. How to build a PostCSS plugin. Documentations followed:
    - [Writing a PostCSS Plugin from PostCSS](https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md)
    - Especially these two tutorials: [Writing Your First PostCSS Plugin](https://dockyard.com/blog/2018/02/01/writing-your-first-postcss-plugin) & [PostCSS Deep Dive: Create Your Own Plugin](https://webdesign.tutsplus.com/tutorials/postcss-deep-dive-create-your-own-plugin--cms-24605)
2. How colors are transformed for different types of color-blindness:
    - A more matured PostCSS plugin [btholt/postcss-colorblind](https://github.com/btholt/postcss-colorblind)
    - Which depends on this library [skratchdot/color-blind](https://github.com/skratchdot/color-blind) which simulates color blindness by converting RGB hex codes. This is also one of the dependencies of this project.


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
