import React from "react"
import GitHubImg from "../../assets/GitHub.png"
import LinkedInImg from "../../assets/LinkedIn.png"


import './Home.css'


const Home = () => {
    return(
        <div className="Home" id="home">
            <div className="Home_Text">
                <div className="Home_Main">Hi I'm *Name*</div>
                <div className="Home_Subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi ullam, tempore blanditiis veritatis eum odio! Asperiores vero odit
                    vitae officia accusantium. Doloremque porro exercitationem sunt est,
                    eligendi quisquam dolores aperiam!
                </div>
                <div className="Home_Links">
                    <a href="https://github.com/GrzegorzWszola" target="_blank"><img src={GitHubImg} alt="GitHub" className="Home_GitHubLogo"/></a>
                    <a href="https://www.linkedin.com/in/grzegorz-wszoła-7b520a267/" target="_blank"><img src={LinkedInImg} alt="LinkedIn" className="Home_LinkedLogo"/></a>
                </div>
            </div>
            <div className="Home_Background background1"></div>
            <div className="Home_Background background2"></div>
            <div className="Home_Background background3"></div>
        </div>
    )
        
}

export default Home