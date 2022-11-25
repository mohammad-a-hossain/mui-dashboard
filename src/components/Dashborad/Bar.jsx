import React from 'react'
import { Box } from '@mui/material';
import { Header } from '../Header';
import  BarChart  from '../BarChart';

 const Bar = () => {
  return (
    <Box m='20px'>
    <Header title='BarChart' subtitle='a barchart showing '/>
    <Box height='75vh'>
    <BarChart/>
    </Box>
    
    </Box>
  )
}
export default Bar