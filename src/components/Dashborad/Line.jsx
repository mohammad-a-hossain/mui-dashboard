import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../Header'
import  LineChart  from '../LineChart'

 const Line = () => {
  return (
    <Box m='20px'>
    <Header title='line Chart' subtitle='an interactive line chart'/>
    <Box height='75vh'>
    <LineChart/>
    </Box>
    
    </Box>
  )
}
export default Line