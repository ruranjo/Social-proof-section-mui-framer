import { Box, SxProps, Typography } from '@mui/material';
import './App.css'
import { Container } from '@mui/system';
import { darkGrayishMagenta, fontFamily, veryDarkMagenta } from './styles/variables';
import { motion } from "framer-motion";
import { CardVerified, Ratelabel } from './components';
import { rateData, verifiedBuyersData } from './utils/data';
import { RangeNumber } from './components/Ratelabel/Ratelabel';
import { useEffect, useState } from 'react';

export interface styledApp {
  containerStyle: SxProps;
  landingContentMain: SxProps;
  landingContentTop: SxProps;
  mainInformationText: SxProps;
  landingContentBottom: SxProps;
  title: SxProps;
  subtitle: SxProps;
  rateContainer: SxProps;
}

const appStyle: styledApp = {
  containerStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100vh',
      '@media screen and (max-width: 1000px)': {
        height:'auto',
      },
    },
    landingContentMain:{
     // border:'1px solid red',
      width:'80%',
      height:'90%',
      '@media screen and (max-width: 1000px)': {
        width:'100%',
        height:'100%',
      },
    },
    landingContentTop:{
     // border:'1px solid black',
      display:'flex',
      width:'100%',
      height:'50%',
      '@media screen and (max-width: 1000px)': {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
        marginBottom:'2rem',
        height:'auto',
      },
    },
    mainInformationText:{
     // border:'1px solid tomato',
      width:'50%',
      height:'100%',
      '@media screen and (max-width: 1000px)': {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
      },
    },
    title:{
     // border:'1px solid tomato',
      fontFamily: fontFamily,
      fontWeight:'700',
      maxWidth:'450px',
      color: veryDarkMagenta,
      '@media screen and (max-width: 1000px)': {
        fontSize:'3rem',
      },
    },
    subtitle:{
     // border:'1px solid black',
      fontFamily: fontFamily,
      maxWidth:'450px',
      color: darkGrayishMagenta,
      '@media screen and (max-width: 1000px)': {
        marginTop:'2rem',
        marginBottom:'2rem',
      },
      
    },
    rateContainer:{
      //border:'1px solid green',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      gap:'1rem',
      width:'50%',
      height:'100%',
      '@media screen and (max-width: 1000px)': {
        
      },
    },
    landingContentBottom:{
      //border:'1px solid blue',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      height:'50%',
      '@media screen and (max-width: 1000px)': {
        flexDirection:'column'
      },
    },
    
  }
 
const App: React.FC<{}> = () => {
  const [separateX, _setSeparateX] = useState<number>(-40);
  const [separateY, _setSeparateY] = useState<number>(-20);
  
  const [anchoPantalla, setAnchoPantalla] = useState<number>(window.innerWidth);

  // Función para actualizar el ancho de la pantalla
  const actualizarAnchoPantalla = () => {
    setAnchoPantalla(window.innerWidth);
  };

  // Efecto para añadir el evento de cambio de tamaño al montar el componente
  useEffect(() => {
    window.addEventListener('resize', actualizarAnchoPantalla);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', actualizarAnchoPantalla);
    };
  }, []); 

  return (
    <Container maxWidth={false}  sx={appStyle.containerStyle}>
      <Box sx={appStyle.landingContentMain}>
        <Box sx={appStyle.landingContentTop}>
            
            <Box sx={appStyle.mainInformationText}>
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
              >
                
                    <Typography sx={appStyle.title} variant='h2'>10,000+ of our users love our products.</Typography>
                  
                    <Typography sx={appStyle.subtitle} variant='subtitle1'>
                      We only provide great products combined with excellent customer service.
                      See what our satisfied customers are saying about our services.
                    </Typography>
                
              </motion.div>
            </Box>

            <Box sx={appStyle.rateContainer}>
              {
                rateData.map((rateAux, index) => {
                  return (
                    <Ratelabel rate={rateAux.rate as RangeNumber} retedBy={rateAux.orientedBy} endPositionEffect={anchoPantalla > 1000 ? separateX*(1-index) : 0} key={index}/>
                  )
                })
              }
              
            </Box>

        </Box>
        <Box sx={appStyle.landingContentBottom}>
          {
                verifiedBuyersData.map((verified, index) => {
                  return (
                    <CardVerified dataCard={verified} endPositionEffect={anchoPantalla > 1000 ? separateY*(1-index) : 0}  key={index}/>
                  )
                })
              }
        </Box>
      </Box>
    </Container>
  )
}

export default App
