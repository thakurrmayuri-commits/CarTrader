
import Applaout from './AppComponent/AppLayout'
import Footer from "@/Pages/Footer";
import AppHeader from './AppComponent/AppHeader'
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <AppHeader />
      <Applaout />
      <Footer />
    </BrowserRouter>
  )
}

export default App
