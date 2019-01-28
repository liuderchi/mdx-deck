/**
 * port of solarized theme in reveal.js
 *     https://github.com/hakimel/reveal.js/blob/master/css/theme/solarized.css
 */

import base from './base'

// https://github.com/hakimel/reveal.js/blob/master/css/theme/source/solarized.scss
const $base03 = '#002b36'
const $base02 = '#073642'
const $base01 = '#586e75'
const $base00 = '#657b83'
const $base0 = '#839496'
const $base1 = '#93a1a1'
const $base2 = '#eee8d5'
const $base3 = '#fdf6e3'
const $yellow = '#b58900'
const $orange = '#cb4b16'
const $red = '#dc322f'
const $magenta = '#d33682'
const $violet = '#6c71c4'
const $blue = '#268bd2'
const $cyan = '#2aa198'
const $green = '#859900'

const $trelloCode = '#eb5a46'
const FiraCode = 'Fira Code'

export default {
  ...base,
  colors: {
    ...base.colors,
    text: $base00,
    background: $base3,
    link: $blue,
    heading: $base01,
    code: $trelloCode,
    pre: $trelloCode,
    preBackground: $base2,

    // support fields: theming.md > Reference > components.js > color:, gb:
    // TODO handles color of Invert Layout
  },
  css: {
    ...base.css,
    code: {
      fontFamily: FiraCode,
      background: $base2,
    },
    pre: {
      fontFamily: FiraCode,
    },
    '*::selection': {
      color: $base2,
      background: $magenta,
    },
    '*::-moz-selection': {
      color: $base2,
      background: $magenta,
    },

    // NOTE: text overflow is possible
  },
  ol: {
    ...base.ol,
  },
  ul: {
    ...base.ul,
  },
  blockquote: {
    borderLeft: `2px solid ${$base2}`,
    paddingLeft: '10px',
  },
}
