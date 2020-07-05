/** Colors */

// body, card's body etc.
const denim = "#1a202c"
const denimLight = "#263146"

// texts, buttons hovers and SVGs
const light = "#ffffff"
const light1 = "#f7f7f7"
const light2 = "#ededed"
const light3 = "#dbdbdb"

const dark = "#000000"
const dark1 = "#121212"
const dark2 = "#1c1c1c"
const dark3 = "#292929"

// usually used for inline-codes
const blueLight = "#8ed3ff"
const redLight = "#EB5757"
const darkGrey = "rgba(135,131,120,0.15)"

// links, links hovers and
const yellow = "#FFC601"

export const lightTheme = {
  mainColor: yellow,

  body: light,
  bodySecondary: light1,

  header: dark,
  text: dark,

  link: dark,
  linkBorder: yellow,
  linkHover: yellow,

  codeColor: redLight,
  codeBackground: darkGrey,

  btnPrimary: {
    bg: dark,
    text: light,
    bgHover: dark1,
    textHover: light,
  },

  btnSecondary: {
    bg: light,
    text: dark,
    bgHover: dark,
    textHover: light,
  },

  btnMain: {
    bg: yellow,
    text: dark,
    bgHover: yellow,
    textHover: dark,
  },

  light,
  dark,
}

export const darkTheme = {
  mainColor: yellow,

  body: denim,
  bodySecondary: denimLight,

  header: light,
  text: light,

  link: light,
  linkBorder: yellow,
  linkHover: yellow,

  codeColor: blueLight,
  codeBackground: darkGrey,

  btnPrimary: {
    bg: light,
    text: denim,
    bgHover: light1,
    textHover: denim,
  },

  btnSecondary: {
    bg: denim,
    text: light,
    bgHover: light,
    textHover: denim,
  },

  btnMain: {
    bg: yellow,
    text: dark,
    bgHover: yellow,
    textHover: dark,
  },

  dark,
  light,
}
