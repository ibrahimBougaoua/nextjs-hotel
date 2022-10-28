import HomeHeader from "../components/HomeHeader"
import Blog from "../components/Blog"
import Gallery from "../components/Gallery"
import News from "../components/News"
import Services from "../components/Services"
import Slider from "../components/Slider"
import TDest from "../components/TDest"
import Video from "../components/Video"
import Contact from "../components/Contact"

export default function Home() {
  return (
      <>
        <HomeHeader />
        <Services />
        <Slider />
        <TDest />
        <Video />
        <Gallery />
        <Blog />
        <News />
        <Contact />
      </>
  )
}
