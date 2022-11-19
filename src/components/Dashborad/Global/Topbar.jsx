import React from 'react'
import {Box,IconButton, useTheme} from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../../theam'; 
import InputBase from '@mui/material/InputBase'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




export const Topbar = () => {
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)
    const colorMode =useContext(ColorModeContext)
  return (
    <Box display= 'flex' justifyContent='space-between' p={2}>
    <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
    <InputBase sx={{ml:2,flex:1}} placeholder='search'/>
    <IconButton type='button' sx={{p:1}}>  
    <SearchOutlinedIcon />
    </IconButton>
  
   
    </Box>
    <Box display='flex'>
    <IconButton onClick={colorMode.toggleColorMode}>
    {
        theme.palette.mode === 'dark' ?(<DarkModeOutlinedIcon/>) :(<LightModeOutlinedIcon/>)
    }
    </IconButton>
    <IconButton>
    <NotificationImportantOutlinedIcon/>
    </IconButton>
    <IconButton>
    <SettingsOutlinedIcon/>
    </IconButton>
    <IconButton>
    <Person2OutlinedIcon/>
    </IconButton>
    </Box>
    
    </Box>
  )
}
