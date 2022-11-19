
import { ColorModeContext, useMode } from "./theam";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from './components/Dashborad/Global/Topbar';

const App =() => {
const [ theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <div className="app">
      <main className='content'>
      <Topbar/>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      </Routes>
      </main>
    </div>   
     </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
