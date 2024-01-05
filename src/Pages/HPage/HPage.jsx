import React from "react";
import {ParallaxProvider} from "react-scroll-parallax"

import './HPage.css'

import { Header, About, Footer, Home } from '../../Elements/index'

const HPage = () => {
    return(
        <ParallaxProvider>
            <div className="Page">
                <div className='section_header'><Header/></div>
                <div><Home/></div>
                <div className='section_padding'><About/></div>
                <div className='section_padding'><Footer/></div>
            </div>
        </ParallaxProvider>  
    )
}

export default HPage