/** Colors */
const denim = "#222639"

const light = "#f5f7f9"
const light1 = "#ebeced"

const dark = "#171b1e"
const dark1 = "#24282b"

const yellow = "#FFC703"
const yellow1 = "#ebb805"

const otherStyles = {
  fontBold: "700",
  fontRegular: "400",
  fontXS: "1.4rem",
  fontSM: "1.7rem",
  fontMD: "2.3rem",
  fontLG: "3.6rem",
  fontXL: "5rem",

  lineHeight: "1.6",
  sectionPadding: "15rem 0rem",
  sectionHeaderMargin: "2rem 0rem 4rem 0rem",
  containerMaxWidth: "120rem",
}

export const lightTheme = {
  body: light,

  header: dark,
  text: dark1,

  link: dark,
  linkBorder: yellow1,
  linkHover: yellow1,

  btnPrimary: {
    bg: dark,
    text: light,
    bgHover: dark1,
    textHover: light,
  },

  btnSecondary: {
    bg: light,
    text: dark,
    bgHover: light,
    textHover: light,
  },

  ...otherStyles,
}

export const darkTheme = {
  body: denim,

  header: light,
  text: light1,

  link: light,
  linkBorder: yellow,
  linkHover: yellow,

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

  ...otherStyles,
}
