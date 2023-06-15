import './App.css'
import Atalhos from './Components/Atalhos/Atalhos'
import Carousel from './Components/Carousel/Carousel'
import CarouselBanners from './Components/CarouselBanners/CarouselBanners'
import CarouselOfertas from './Components/CarouselOfertas/CarouselOfertas'
import Footer from './Components/Footer/Footer'


function App() {


  return (

    <div>
      <Carousel/>
      <CarouselBanners />
      <Atalhos/>
      <CarouselOfertas />
      <Footer />
    </div>

  )
}

export default App
