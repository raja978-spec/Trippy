import './AboutUs.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Home/Hero'
import AboutUs from './AboutUs'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

export default function About() {

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" })
  }, [])



  return (
    <>
      <NavBar />
      <Hero Cname="hero-mid"
        hero_img="https://cdn.wallpapersafari.com/28/2/ElhKZp.jpg"
        title="About"
        text=""
        url="/"
        btnTxt=""
        btnClass=""
        sub_container="sub-about-container"
      />
      <AboutUs />
      <Footer />
    </>
  )
}