import { Container, Grid, Typography } from '@mui/material'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

const Presentacion = () => (
 <div
  style={{
    backgroundColor: '#F4F6FD',
    padding: '60px'
  }}
 >
  <Container
   maxWidth={false}
   style={{
     background: 'white',
     cursor: 'pointer',
     padding: '50px 5%',
     flexWrap: 'wrap'
   }}
   sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
  >
   <div
    style={{
      padding: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexWrap: 'wrap',
      margin: '20px auto'
    }}
   >
    {[
      'Presentacion',
      'Historia',
      'Misión y visión',
      'Valores',
      'Reseña Histórica'
    ].map((item, index) => (
     <div
      style={{
        color: index === 0 ? '#005FAB' : '#35ABA8',
        margin: '0px 30px',
        cursor: 'pointer'
      }}
      key="teim"
     >
      {item}
     </div>
    ))}
   </div>
   <Grid container>
    <Grid item xs={12} sm={6} textAlign="left">
     <Typography variant="h4" padding="20px 0px">
      <b>Presentación</b>
     </Typography>

     <p
      style={{
        color: '#999999',
        lineHeight: '2.5'
      }}
     >
      Somos una empresa del ramo de la construcción especializada en la
      proyección, gestión, ejecución y supervisión de instalaciones eléctricas.
      Desarrollamos proyectos eléctricos Comerciales, Industriales,
      Habitacionales, Turísticos, y de Urbanización e Infraestructura a lo largo
      de todo el país, para clientes del sector público y privado. Coadyuvamos
      con empresas nacionales y extranjeras para contribuir de forma moderna y
      responsable en el crecimiento de la red eléctrica nacional. Ejecutamos
      obras en alta, media y baja tensión, cubriendo así la generación,
      transmisión y distribución de energía.
     </p>
    </Grid>
   </Grid>
  </Container>
 </div>
)

export default Presentacion
