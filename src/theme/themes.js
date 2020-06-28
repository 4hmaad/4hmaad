/** Colors */
const denim = "#222639"

const light = "#ffffff"

const dark = "#000000"

const yellow = "#FFC703"

export const lightTheme = {
  body: light,

  header: dark,
  text: dark,

  link: dark,
  linkBorder: yellow,
  linkHover: yellow,

  btnPrimary: {
    bg: dark,
    text: light,
    bgHover: dark,
    textHover: light,
  },

  btnSecondary: {
    bg: light,
    text: dark,
    bgHover: dark,
    textHover: light,
  },

  yellow,
  light,
  dark,
}

export const darkTheme = {
  body: denim,

  header: light,
  text: light,

  link: light,
  linkBorder: yellow,
  linkHover: yellow,

  btnPrimary: {
    bg: light,
    text: denim,
    bgHover: light,
    textHover: denim,
  },

  btnSecondary: {
    bg: denim,
    text: light,
    bgHover: light,
    textHover: denim,
  },

  yellow,
  light,
  dark,
}
