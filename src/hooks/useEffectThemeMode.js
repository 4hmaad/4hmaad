import React from "react"

/**
 * Custom hook to toggle between dark and light themes.
 */
const useEffectThemeMode = () => {
  const [themeState, setThemeState] = React.useState({
    theme: "dark",
    hasComponentMounted: false,
  })

  const toggleTheme = () => {
    const theme = themeState.theme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", theme)
    setThemeState({
      ...themeState,
      theme,
    })
  }

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const theme = savedTheme ? savedTheme : themeState.theme
    setThemeState({
      theme,
      hasComponentMounted: true,
    })
  }, [])

  return [themeState, toggleTheme]
}

export default useEffectThemeMode
