import './Contact.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Home/Hero'
import ContactForm from './ContactForm'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

export default function Contact() {

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" })
    }, [])


    return (

        <>
            <NavBar />
            <Hero Cname="hero-mid"
                hero_img="https://wallpapercave.com/wp/wp4069436.jpg"
                title="Contact Us"
                text=""
                url="/"
                btnTxt=""
                btnClass=""
                sub_container="sub-about-container"
            />
            <ContactForm />
            <Footer />
        </>

    )
}