import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import NavItems from "../components/NavItems";
import SocialMedia from "../components/SocialMedia";
import HeaderLogo from "../assets/HeaderLogo.png";


function Home(){
    return(
        <>
        
                
            <Jumbotron fluid className="customJumbotron">
                <div className="glassEffect d-flex justify-content-center">

                    <img alt="Header Logo" src={HeaderLogo} style={{maxWidth: "50%", height: "auto"}}/>

                </div>

            </Jumbotron>

            <NavItems index={0}/>

            <Jumbotron className="d-flex justify-content-center customJumbotron">
                <h1 className="glassEffect">Blog</h1>
            </Jumbotron>
            
            <Jumbotron className="d-flex justify-content-center customJumbotron">
                <h1 className="glassEffect">Other Content</h1>
            </Jumbotron>

            <Jumbotron className="d-flex justify-content-center customJumbotron">
                <SocialMedia />
            </Jumbotron>
            
        </>
    )
}

export default Home