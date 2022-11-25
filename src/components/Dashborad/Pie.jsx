import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../Header'
import  {PieChart}  from '../PieChart'

 const Pie = () => {
  return (
     <Box m='20px'>
     <Header title='Pie Chart' subtitle='modt interactive pie chart'/>
     <Box height='75vh'>
     <PieChart/>
     </Box>
     
     </Box>
  )
}
export default Pie