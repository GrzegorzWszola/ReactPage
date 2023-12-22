import React from "react"
import { Canvas } from '@react-three/fiber'


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
                    <a href="">Git</a>
                    <a href="">Fb</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
            <div className="Home_Model">
                <script type="module" src="./3DModel.jsx"></script>
            </div>
        </div>
    )
}

export default Home