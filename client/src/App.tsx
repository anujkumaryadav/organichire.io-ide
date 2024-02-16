import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import Compiler from "./Pages/Compiler"
import NotFound from "./Pages/NotFound"
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/compiler" element={<Compiler/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </ThemeProvider>
      
    </>
  )
}

export default App
