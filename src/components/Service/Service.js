import './Service.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Home/Hero'
import TourPackages from './tourpackages/tourpackages'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

export default function Service() {

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" })
    }, [])

    return (
        <>
            <NavBar />
            <Hero Cname="service-hero-mid"
                hero_img="https://wallpaperaccess.com/full/185289.jpg"
                title="Service"
                text=""
                url="/"
                btnTxt=""
                btnClass=""
                sub_container="sub-service-container"
            />
            <div className='tourpackage-comp'>
                <TourPackages />
            </div>
            <Footer />
        </>
    )
}