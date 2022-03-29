import '../styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'
import {
  AppBar,
  Button,
  Container,
  createTheme,
  Grid,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material'
import SEO from '../components/SEO'
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
const MyApp = ({
  Component,
  pageProps
}: {
 Component: any
 pageProps: any
}) => (
 <ThemeProvider theme={theme}>
  <SEO title="Bens" description="electrical-service" />
  <AppBar
   position="static"
   color="transparent"
   style={{
     height: '90px'
   }}
  >
   <Toolbar
    style={{
      height: '90px'
    }}
   >
    <img src="/logo.png" alt="logo" style={{ width: '200px' }} />

    <IconButton
     size="large"
     edge="start"
     color="inherit"
     aria-label="menu"
     sx={{ mr: 2 }}
    />
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
    <Button
     variant="contained"
     color="primary"
     style={{
       backgroundColor: '#3559AB'
     }}
     sx={{
       display: {
         xs: 'none',
         md: 'block'
       }
     }}
    >
     Donativos para Fundación BENS Electric
    </Button>
   </Toolbar>
  </AppBar>
  <Container
   maxWidth={false}
   style={{
     background: '#35ABA8',
     color: 'white',
     cursor: 'pointer',
     padding: '0px 5%',
     flexWrap: 'wrap'
   }}
   sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
  >
   <Typography
    sx={{ minWidth: 100 }}
    height="100%"
    style={{
      background: '#005FAB',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '70px'
    }}
   >
    Inicio
   </Typography>
   <Typography
    height="100%"
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '70px'
    }}
    sx={{ minWidth: 100 }}
   >
    Conoce
    <br />
    BENS
   </Typography>
   <Typography
    height="100%"
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '70px'
    }}
    sx={{ minWidth: 100 }}
   >
    Servicios
    <br />
    BENS
   </Typography>
   <Typography
    height="100%"
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '70px'
    }}
    sx={{ minWidth: 100 }}
   >
    Proyectos
    <br />
    BENS
   </Typography>
   <Typography
    height="100%"
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '70px'
    }}
    sx={{ minWidth: 100 }}
   >
    Contáctanos
   </Typography>
  </Container>

  <Component {...pageProps} />
  <footer>
   <Grid container>
    <Grid
     item
     xs={12}
     sm={6}
     md={8}
     style={{
       background: '#656565',
       padding: '35px'
     }}
    >
     <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
     >
      <div
       style={{
         display: 'flex',
         flexDirection: 'row',
         margin: '10px'
       }}
      >
       <img
        style={{
          width: '30px',
          height: '30px',
          margin: '5px'
        }}
        src="images/facebook-small.png"
        alt="facebook"
       />
       <img
        style={{
          width: '30px',
          height: '30px',
          margin: '5px'
        }}
        src="images/twitter-small.png"
        alt="twitter"
       />
      </div>
      <p
       style={{
         margin: '10px',
         fontSize: '16px',
         color: 'white',
         fontWeight: 'bold'
       }}
      >
       © 2022 Derechos Reservados. BENS Electric, SA de CV.
      </p>
      <div
       style={{
         display: 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap'
       }}
      >
       <a
        style={{
          color: '#E0E0E0',
          fontSize: '16px',
          margin: '10px',
          textDecoration: 'underline'
        }}
        href="/legal"
       >
        Aviso legal
       </a>
       <a
        style={{
          color: '#E0E0E0',
          fontSize: '16px',
          margin: '10px',
          textDecoration: 'underline'
        }}
        href="/privacidad"
       >
        Política de Privacidad
       </a>
       <a
        style={{
          color: '#E0E0E0',
          fontSize: '16px',
          margin: '10px',
          textDecoration: 'underline'
        }}
        href="/bens"
       >
        Fundación BENS Electric
       </a>
      </div>
     </div>
    </Grid>
    <Grid
     item
     xs={12}
     sm={6}
     md={4}
     style={{
       background: '#7C7C7C',
       padding: '35px',
       display: 'flex',
       flexDirection: 'column'
     }}
    >
     <Grid container>
      <Grid xs={12} sm={2}>
       <img src="images/phone.png" alt="phone" width={30} />
      </Grid>
      <Grid
       xs={12}
       sm={10}
       style={{
         color: 'white',
         fontSize: '16px'
       }}
      >
       <div>Teléfonos:</div>
       <a href="tel:5567195590">(55) 67195590</a>
       <br />
       <a href="tel:5567195591">(55) 67195591</a>
       <br />
       <a href="mailto:info@benselectric.com">info@benselectric.com</a>
      </Grid>
     </Grid>
    </Grid>
   </Grid>
  </footer>
 </ThemeProvider>
)

export default MyApp
