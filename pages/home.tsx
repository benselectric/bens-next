
import { getPosts } from '../utils/mdx-utils';
import Header from '../components/Header';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Index({ posts, globalData }) {
  return (
    <div>
      <AppBar position="static" color='transparent' style={{
        height: '90px',
      }}>
        <Toolbar style={{
          height: '90px',
        }} >
        <img src="/logo.png" alt="logo" style={{ width: '200px' }} />

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button variant='contained' color='primary' >Donativos para Fundación BENS Electric</Button>
        </Toolbar>
      </AppBar>

      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        </main>  
          
      </div>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
