import React from "react";
import NavBar from "../components/NavItems"

function About(){

    console.log("about")

    return(
        <>
            <h1>About Page</h1>

            <NavBar index={2} />
        </>
    )
}

export default About