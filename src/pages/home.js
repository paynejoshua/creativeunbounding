import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import NavItems from "../components/NavItems";
import SocialMedia from "../components/SocialMedia";


function Home(){
    return(
        <>
        
                
            <Jumbotron fluid className="d-flex justify-content-center customJumbotron">
                <h1 className="glassEffect" style={{fontSize: "5rem"}}>Unbounding Creative</h1>
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