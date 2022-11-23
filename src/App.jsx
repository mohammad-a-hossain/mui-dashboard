
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useState } from 'react';
import { 
  Routes,
  Route
} from "react-router-dom";
import  Sideber  from './components/Dashborad/Global/Sideber';
import  {Topbar } from './components/Dashborad/Global/Topbar';
import  {Dashboard } from "./components/Dashborad";
import{ Team }from './components/Dashborad/Team'

import Contacts from "./components/Dashborad/Contacts";

import Invoices from './components/Dashborad/Invoice';
/* 
import Form from './components/Dashborad/Form'
import Bar from './components/Dashborad/Bar'
import Line from './components/Dashborad/Line'
import  Faq  from "./components/Dashborad/Faq";
import Geography  from "./components/Dashborad/Geography";
import Calendar from "./components/Dashborad/Calendar";
import Pie from "./components/Dashborad/Pie"; */



const App =() => {
const [ theme, colorMode] = useMode()
const [isSidebar, setIsSidebar] =useState(true)
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <div className="app">
   <ProSidebarProvider> 
    <Sideber isSidebar={isSidebar} />
   </ProSidebarProvider>
    
      <main className='content'>
      <Topbar/>
       <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/team' element={<Team/>}/> 
    
      <Route path='/contacts' element={<Contacts/>}/> 
      
      <Route path='/invoices' element={<Invoices/>}/> 
      {/*
      <Route path='/form' element={<Form/>}/>
      <Route path='/pie' element={<Pie/>}/>
      <Route path='/bar' element={<Bar/>}/>
      <Route path='/line' element={<Line/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/geography' element={<Geography/>}/>
      <Route path='/calender' element={<Calendar/>}/> */}
      </Routes> 
      </main>
    </div>   
     </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
