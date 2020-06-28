import React from "react"
import { ThemeProvider as StyledProvider } from "styled-components"
import useEffectThemeMode from "./../hooks/useEffectThemeMode"
import { lightTheme, darkTheme } from "./styles/themes"

const defaultContextData = {
  theme: "dark",
  toggleTheme: () => {},
}

const ThemeContext = React.createContext(defaultContextData)

// To avoid ThemeContext.Consumer
const useTheme = React.useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [themeState, toggleTheme] = useEffectThemeMode()

  if (!themeState.hasComponentMounted) {
    /**
     * @reason To avoid rendering the default theme while loading
     * the theme from localStorage
     *
     * for example: A user leaves the app with the light theme (which is not the default theme),
     * when he revisits the app again, the app will render the default theme while getting
     * the theme from localStorage, after the theme is loaded the app will have to re-render again
     * to display the new theme.
     *
     * TODO: Convert this div to spinner maybe?
     */
    return <div />
  }

  const theme = themeState.theme === "dark" ? darkTheme : lightTheme

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={(themeState, toggleTheme)}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  )
}

export { useTheme }
export default ThemeProvider
