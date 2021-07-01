import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import NavItems from "../components/NavItems"


function Home(){
    return(
        <>
        
                
            <Jumbotron fluid className="d-flex justify-content-center customJumbotron">
                <h1 className="glassEffect" style={{fontSize: "5rem"}}>Unbounding Creative</h1>
            </Jumbotron>

            <NavItems index={0}/>
            
        </>
    )
}

export default Home