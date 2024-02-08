import { Avatar, Card, CardContent, CardHeader, SxProps, Typography } from '@mui/material'
import React from 'react'
import { verifiedBuyersType } from '../../interface/verified.interface';
import { fontFamily, softPink, veryDarkMagenta, white } from '../../styles/variables';
import { motion } from "framer-motion";

export interface Props {
    dataCard:verifiedBuyersType;
    endPositionEffect: number;
}

export interface styledCardVerified {
    cardStyle: SxProps;
    
  }
  
  const cardVerifiedStyle: styledCardVerified = {
    cardStyle:{
        borderRadius:'10px',
        maxWidth: '345px',
        minHeight: '200px',
        backgroundColor: veryDarkMagenta,
        color: white,
        '@media screen and (max-width: 420px)': {
        },
      }
    }


const CardVerified:React.FC<Props> = ({dataCard, endPositionEffect}) => {
  return (
    <motion.div 
      initial={{ y: 200, opacity:0 }}
      animate={{ y: endPositionEffect, opacity:1 }}
      transition={{ duration: 2 }}
      style={{margin:'0.2rem'}}
    >

    
    <Card sx={cardVerifiedStyle.cardStyle}>
        <CardHeader  
        avatar={<Avatar alt={dataCard.nameBuyer} src={dataCard.avatarIcon} />}
        title={dataCard.nameBuyer}
        subheader="Verified Buyer"
        titleTypographyProps={{ style: { color: 'white', fontFamily:fontFamily, fontWeight:700 } }}
        subheaderTypographyProps={{ style: { color: softPink, fontFamily:fontFamily, fontWeight:700 } }}
        
        />
            
            
        
      
        <CardContent>
          <Typography paragraph>
          {dataCard.review}
          </Typography>
        </CardContent>
      
    </Card>
    </motion.div>
  )
}

export default CardVerified