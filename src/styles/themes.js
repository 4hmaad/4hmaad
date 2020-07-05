/** Colors */
const denim = "#1a202c"
const denimLight = "#263146"

const light = "#ffffff"
const light1 = "#dbdbdb"

const dark = "#000000"
const dark1 = "#2e2e2e"

const yellow = "#FFC703"

export const lightTheme = {
  mainColor: yellow,

  body: light,
  bodySecondary: light1,

  header: dark,
  text: dark,

  link: dark,
  linkBorder: yellow,
  linkHover: yellow,

  codeColor: "#EB5757",
  codeBackground: "rgba(135,131,120,0.15)",

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

  denim,
  denimLight,
  yellow,
  light,
  light1,
  dark,
  dark1,
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

  codeColor: "#EB5757",
  codeBackground: "rgba(135,131,120,0.15)",

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

  denim,
  denimLight,
  yellow,
  light,
  light1,
  dark,
  dark1,
}
