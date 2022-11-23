import React from 'react'

import { Box } from '@mui/material';
import { Header } from '../Header';



export const Dashboard = () => {
  return (
    <Box m='15px'>
    <Box display='flex' justifyContent='space-between' alignItems='center'> 
    <Header title='Dashboard' subtitle='wellcome to dashboard' />
    </Box>
   
    </Box>
  )
}
