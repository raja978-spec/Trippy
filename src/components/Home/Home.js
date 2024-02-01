import Hero from './Hero'
import NavBar from '../NavBar/NavBar';
import Destination from './Destination/Destination';
import Trip from './Trip/Trip';
import { useRef,useEffect,useContext, useState } from 'react';
import Footer from '../Footer/Footer';

export default function Home(){
    
    useEffect(()=>{
    window.scroll({top:0,left:0,behavior:"instant"}) 
    },[])

    
    return(
        <>
        <NavBar/>
        <Hero Cname="hero"
        hero_img="https://th.bing.com/th/id/R.59f408de40f1ddcc2a643f63295585c7?rik=12mH317bRK0gbQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f1%2fb%2f1503586-free-desktop-wallpaper-travel-1920x1080-for-xiaomi.jpg&ehk=UVT%2bt39otPF%2bGkfglItVWxtv%2fVYHzOR4ZPYnXpv13fY%3d&risl=&pid=ImgRaw&r=0"
        title="Your Journey Your Story"
        text="Choose your Favorite Destination"
        url="/trip-package"
        btnTxt="Travel Plan"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>       
    )
}