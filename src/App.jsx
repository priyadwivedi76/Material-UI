import { Container } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react"
import Header from "./components/Header"


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header/>
      </Container>
    </ThemeProvider>
  )
}

export default App
