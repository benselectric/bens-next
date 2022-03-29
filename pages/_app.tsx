import '../styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3559AB'
    },
    secondary: {
      main: '#35ABA8'
    }
  },
  shape: {
    borderRadius: 40
  }
})
const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
   <span className="theme-bejamas" />
   <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
