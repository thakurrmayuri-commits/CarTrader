
import Applaout from './AppComponent/AppLayout'
import Footer from "@/Pages/Footer";
import AppHeader from './AppComponent/AppHeader'
import { ProductProvider } from "./AppComponent/CarContextProvider";


function App() {

  return (
    <ProductProvider>
      <AppHeader />
      <Applaout />
      <Footer />
    </ProductProvider>
  )
}

export default App
