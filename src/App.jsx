
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

import Form from './components/Dashborad/Form'
import Calendar from "./components/Dashborad/Calendar";
import  Faq  from "./components/Dashborad/Faq";

import Bar from './components/Dashborad/Bar'
import Pie from "./components/Dashborad/Pie";

import Line from './components/Dashborad/Line'
 
import Geography  from "./components/Dashborad/Geography"
 



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
  
      <Route path='/form' element={<Form/>}/> 
      <Route path='/calender' element={<Calendar/>}/> 
      <Route path='/faq' element={<Faq/>}/>  
        <Route path='/bar' element={<Bar/>}/>
        
      <Route path='/pie' element={<Pie/>}/>
   
      <Route path='/line' element={<Line/>}/>
      
      <Route path='/geography' element={<Geography/>}/>
    
      </Routes> 
      </main>
    </div>   
     </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
