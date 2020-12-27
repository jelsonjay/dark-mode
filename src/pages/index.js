import React from "react"
import styled, {ThemeProvider} from 'styled-components'
import {Toggle} from '../components/Toggle'
import Content from '../components/Content'
import {GlobalStyles, lightTheme, darkTheme} from '../styles/globalStyles'
import {useDarkMode} from '../styles/useDarkMode'

const Wrapper = styled.div`
max-width: 70%;
margin: 8rem auto 0;
`
// markup
const IndexPage = () => {

const [theme, toggleTheme] = useDarkMode()
const themeMode = theme === 'light' ? lightTheme : darkTheme 
  return (
    <ThemeProvider theme={themeMode}>
    <Wrapper> 
    <GlobalStyles />
    <Content /> 
    <Toggle  theme={theme} toggleTheme={toggleTheme}/>
    </ Wrapper> 
    </ThemeProvider>
  )
}

export default IndexPage
