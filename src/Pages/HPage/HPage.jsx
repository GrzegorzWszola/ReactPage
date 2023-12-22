import React from "react";

import './HPage.css'

import { Header, About, Footer, Home, Projects, Contacts } from '../../Elements/index'

const HPage = () => {
    return(
        <div>
            <div className='section_padding'><Header/></div>
            <div className='section_padding'><Home/></div>
            <div className='section_padding'><About/></div>
            <div className='section_padding'><Projects/></div>
            <div className='section_padding'><Contacts/></div>
            <div className='section_padding'><Footer/></div>
        </div>
    )
}

export default HPage