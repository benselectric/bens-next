import { getPosts } from '../utils/mdx-utils'
import Header from '../components/Header'
import { getGlobalData } from '../utils/global-data'
import SEO from '../components/SEO'
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'

export default function Index ({ posts, globalData }) {
  return (
  <div>
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
     <Button variant="contained" color="primary">
      Donativos para Fundación BENS Electric
     </Button>
    </Toolbar>
   </AppBar>
   <Container
    style={{
      background: '#35ABA8',
      height: '70px',
      color: 'white'
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
       justifyContent: 'center'
     }}
    >
     Inicio
    </Typography>
    <Typography
     height="100%"
     style={{
       alignItems: 'center',
       display: 'flex',
       justifyContent: 'center'
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
       justifyContent: 'center'
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
       justifyContent: 'center'
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
       justifyContent: 'center'
     }}
     sx={{ minWidth: 100 }}
    >
     Contáctanos
    </Typography>
   </Container>

   <Box>
    <img src="/images/electrical.png" alt="banner" style={{ width: '100%' }} />
   </Box>
   <Box
    justifyContent="center"
    display="flex"
    style={{
      marginTop: '-50px'
    }}
   >
    <Button
     variant="contained"
     style={{
       borderRadius: '0px',
       backgroundColor: '#FF0045',
       width: '351px',
       height: '86px',
       fontWeight: 'bold',
       fontSize: '26px'
     }}
    >
     CONOCE MÁS
    </Button>
   </Box>
   <Grid
    container
    style={{
      marginTop: '50px'
    }}
   >
    <Grid
     item
     xs={12}
     sm={6}
     md={2}
     style={{
       background: '#3378E8',
       color: 'white',
       minHeight: '160px',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column'
     }}
    >
     <Typography
      style={{
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
      }}
     >
      SÍGUENOS POR
     </Typography>
     <Typography
      style={{
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold'
      }}
     >
      FACEBOOK
     </Typography>
     <Box
      style={{
        backgroundColor: '#0F55C4',
        height: '43px',
        width: '43px',
        padding: '0px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        margin: '10px auto'
      }}
     >
      <img src="/images/fb-logo.png" alt="facebook" />
     </Box>
    </Grid>
    <Grid
     item
     xs={12}
     sm={6}
     md={2}
     style={{
       background: '#3378E8',
       color: 'white',
       minHeight: '160px',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column',
       backgroundImage: 'url(/images/home-1.png)',
       backgroundSize: 'cover',
       backgroundPosition: 'center'
     }}
    />
    <Grid
     item
     xs={12}
     sm={6}
     md={2}
     style={{
       background: '#FF773B',
       color: 'white',
       minHeight: '160px',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column'
     }}
    >
     <Typography
      style={{
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
      }}
     >
      EQUIPO DE
     </Typography>
     <Typography
      style={{
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold'
      }}
     >
      ESPECIALISTAS
     </Typography>
     <Button
      style={{
        backgroundColor: '#FFCE00',
        color: '#FF0045',
        margin: '10px auto',
        fontWeight: 'bold'
      }}
     >
      CONTACTANOS
     </Button>
    </Grid>
    <Grid
     item
     xs={12}
     sm={6}
     md={2}
     style={{
       background: '#3378E8',
       color: 'white',
       minHeight: '160px',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column',
       backgroundImage: 'url(/images/home-2.png)',
       backgroundSize: 'cover',
       backgroundPosition: 'center'
     }}
    />
    <Grid
     item
     xs={12}
     sm={6}
     md={2}
     style={{
       background: '#2FD8D3',
       color: 'white',
       minHeight: '160px',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column'
     }}
    >
     <Typography
      style={{
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
      }}
     >
      ACCIONES
     </Typography>
     <Typography
      style={{
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold'
      }}
     >
      POR EL BENEFICIO DE OTROS
     </Typography>
     <Button
      style={{
        backgroundColor: '#005FAB',
        color: 'white',
        margin: '10px auto',
        fontWeight: 'bold'
      }}
     >
      ACCIÓN SOCIAL
     </Button>
    </Grid>
    <Grid
     item
     xs={12}
     sm={6}
     md={2}
     style={{
       background: '#3378E8',
       color: 'white',
       minHeight: '160px',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column',
       backgroundImage: 'url(/images/home-3.png)',
       backgroundSize: 'cover',
       backgroundPosition: 'center'
     }}
    />
   </Grid>
   <Box
    style={{
      background: '#F4F6FD',
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
   >
    <Typography
     style={{
       color: '#959595',
       fontSize: '26px',
       fontWeight: 'bold'
     }}
    >
     BENS Electric en números
    </Typography>
   </Box>

   <Container>
    <Grid container>
     <Grid
      item
      xs={12}
      sm={6}
      md={3}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="45px"
     >
      <Typography
       variant="h4"
       style={{
         color: '#FF0062',
         fontSize: '60px',
         fontWeight: 'bold'
       }}
      >
       +55
      </Typography>
      <Typography
       variant="h4"
       style={{
         color: 'black',
         fontSize: '26px',
         fontWeight: 'bold'
       }}
      >
       mil
      </Typography>
      <Typography
       variant="h4"
       style={{
         color: '#525252',
         fontSize: '24px',
         textAlign: 'center'
       }}
      >
       proyectos de iluminación
      </Typography>
     </Grid>

     <Grid
      item
      xs={12}
      sm={6}
      md={3}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="45px"
     >
      <Typography
       variant="h4"
       style={{
         color: '#FF0062',
         fontSize: '60px',
         fontWeight: 'bold'
       }}
      >
       +2,000
      </Typography>
      <Typography
       variant="h4"
       style={{
         color: 'black',
         fontSize: '26px',
         fontWeight: 'bold'
       }}
      >
       mil
      </Typography>
      <Typography
       variant="h4"
       style={{
         color: '#525252',
         fontSize: '24px',
         textAlign: 'center'
       }}
      >
       proyectos de energía renovable
      </Typography>
     </Grid>
     <Grid
      item
      xs={12}
      sm={6}
      md={3}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="45px"
     >
      <Typography
       variant="h4"
       style={{
         color: '#FF0062',
         fontSize: '60px',
         fontWeight: 'bold'
       }}
      >
       +100
      </Typography>

      <Typography
       variant="h4"
       style={{
         color: 'black',
         fontSize: '24px',
         textAlign: 'center'
       }}
      >
       clientes
      </Typography>
     </Grid>
     <Grid
      item
      xs={12}
      sm={6}
      md={3}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="45px"
     >
      <Typography
       variant="h4"
       style={{
         color: '#FF0062',
         fontSize: '60px',
         fontWeight: 'bold'
       }}
      >
       +30
      </Typography>
      <Typography
       variant="h4"
       style={{
         color: 'black',
         fontSize: '26px',
         fontWeight: 'bold'
       }}
      >
       millones
      </Typography>
      <Typography
       variant="h4"
       style={{
         color: 'black',
         fontSize: '24px',
         textAlign: 'center'
       }}
      >
       de beneficiarios
      </Typography>
     </Grid>
    </Grid>
   </Container>
   <Box
    style={{
      width: '100%',
      height: '615px',
      backgroundImage: 'url(/images/servicio.png)',
      filter: 'brightness(0.7)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
   />
   <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    style={{
      marginTop: '-615px',
      height: '615px'
    }}
   >
    <Typography
     variant="h4"
     style={{
       color: 'white',
       fontSize: '45px',
       fontWeight: 'bold',
       zIndex: '1'
     }}
    >
     BENS ELECTRIC
    </Typography>
    <Typography
     variant="h4"
     style={{
       color: 'white',
       fontSize: '30px',
       textAlign: 'center',
       zIndex: '1',
       margin: '20px'
     }}
    >
     Te brindamos los mejores servicios con
     <br /> la mejor calidad y un equipo de especialistas
    </Typography>

    <Box flexDirection="row">
     <Button
      variant="contained"
      style={{
        borderRadius: '0px',
        backgroundColor: '#FF0045',
        width: '351px',
        height: '86px',
        fontWeight: 'bold',
        fontSize: '26px',
        margin: '43px',
        textTransform: 'capitalize'
      }}
     >
      Servicios
     </Button>
     <Button
      variant="contained"
      style={{
        borderRadius: '0px',
        backgroundColor: '#FF0045',
        width: '351px',
        height: '86px',
        fontWeight: 'bold',
        fontSize: '26px',
        margin: '43px',
        textTransform: 'capitalize'
      }}
     >
      Productos
     </Button>
    </Box>
   </Box>
   <Box
    style={{
      background: '#F4F6FD',
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
   >
    <Typography
     style={{
       color: '#959595',
       fontSize: '26px',
       fontWeight: 'bold'
     }}
    >
     Algunos de nuestros clientes
    </Typography>
   </Box>

   <SEO title={globalData.name} description={globalData.blogTitle} />
   <Header name={globalData.name} />
   <main className="w-full">
    <h1 className="text-3xl lg:text-5xl text-center mb-12">
     {globalData.blogTitle}
    </h1>
   </main>
  </div>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()
  const globalData = getGlobalData()

  return { props: { posts, globalData } }
}
