import React from 'react'
import { Box, Toolbar, useTheme} from '@mui/material';
import  {tokens}  from '../../theme';
import { DataGrid,GridToolbar} from '@mui/x-data-grid';
import {mockDataContacts } from '../../data/mockData'
import { Header } from '../Header';


const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)


  const columns=[
    {field:'id', headerName:'ID'},
    {field:'name',
     headerName:'Full Name',
    flex:1,
    cellClassName:'name-column--cell'},
    {field:'registrarId',
      headerName:'Register id',
    flex:1  },
    {
      field:'age',
      headerName:'Age',
      type:'number',
      headerAlign:'left',
      align:'left'
    },
    {
      field:'phone',
      headerAlign:'Phone Number',
      flex:1

    },
    {
      field:'email',
      headerName:'Email',
      flex:1
    },
    { 
      field:'address',
      headerName:'Address',
      flex:1
    },
    {
      field:'city',
      headerName:'City',
      flex:1
    },
    {
      field:'zipCode',
      headerName:'Zip code',
      flex:1
    }

  ]
  return (
    <Box m='20px'>
    <Header title="Contacts" subtitle='well come to contact page'/>
    <Box
    m="40px 0 0 0"
    height="80vh"
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
      },
      "& .name-column--cell": {
        color: colors.greenAccent[300],
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400],
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700],
      },
      "& .MuiDataGrid-toolbarContainer  .MuiButton-text": {
        color: `${colors.grey[100]} !important`,
      },
    }}
    >
    <DataGrid  rows={mockDataContacts} columns={columns} components={{Toolbar: GridToolbar}}/>
    </Box>
    
    </Box>
  )
}

export default Contacts