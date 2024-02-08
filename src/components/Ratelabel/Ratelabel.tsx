import { Box, Rating, SxProps, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import { fontFamily, lightGrayishMagenta, veryDarkMagenta } from '../../styles/variables';
import { motion } from "framer-motion";

export type RangeNumber = 1 | 2 | 3 | 4 | 5;

export interface Props {
    rate: RangeNumber;
    retedBy: string;
    endPositionEffect: number;
}

export interface styledRatelabel {
  containerLabel: SxProps;
  ratingBox: SxProps;
  subtitle: SxProps;
}

const RatelabelStyle: styledRatelabel = {
  containerLabel:{
      //border:'1px solid black',
      borderRadius:'10px',
      display:'flex',
      
      gap:'1rem',
      alignItems:'center',
      padding:'0.5rem',
      backgroundColor: lightGrayishMagenta,
      width:'100%',
      
      '@media screen and (max-width: 1000px)': {
        width:'80%',
      },
  },
  ratingBox :{
    //border:'1px solid black',
    width: '100%',
    minWidth:'100px',
    marginRight:'0.5rem',
    display: 'flex',
    alignItems: 'center',
    
    '@media screen and (max-width: 420px)': {
    },
  },
  subtitle:{
    //border:'1px solid black',
    fontFamily: fontFamily,
    color: veryDarkMagenta,
    fontWeight:'700',
    fontSize:'14px',
    minWidth:'200px',
  },
    
  }

const Ratelabel:React.FC<Props> = ({rate, retedBy, endPositionEffect }) => {
  return (
    <motion.div 
      initial={{ x: 200, opacity:0 }}
      animate={{ x: endPositionEffect, opacity:1 }}
      transition={{ duration: 2 }}
    >
      <Box sx={RatelabelStyle.containerLabel}>
          <Box sx={RatelabelStyle.ratingBox}>
            <Rating
              name="hover-feedback"
              value={rate}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>

        <Typography sx={RatelabelStyle.subtitle} variant='subtitle1'>Rated {rate} Stars in {retedBy}</Typography>
      </Box>  
    </motion.div>
    
  )
}

export default Ratelabel