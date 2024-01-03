import React from "react";


import './HPage.css'

import { Header, About, Footer, Home } from '../../Elements/index'

const HPage = () => {
    return(
        <div className="Page">
            <div className='section_header'><Header/></div>
            <div className="section_padding"><Home/></div>
            <div className='section_padding'><About/></div>
            <div className='section_padding'><Footer/></div>
        </div>
    )
}

export default HPage