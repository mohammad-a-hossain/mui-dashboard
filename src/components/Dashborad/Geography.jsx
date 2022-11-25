import React from 'react'
import { Box } from '@mui/material';
import { Header } from '../Header';
import GeographyChart from './../Geography/index';



const Geography = () => {
  return (
   <Box m='20px'>
   <Header title='Geography' subtitle='a locrative geography' />
   <Box height='75vh'>
   <GeographyChart />
   </Box>
   
   </Box>
  )
}
export default Geography