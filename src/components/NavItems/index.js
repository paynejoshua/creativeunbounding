import React from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavItems(props){

    function getClassName(index) {
        return index === props.index ? "active" : ""
    }

    return(
        <>
        <NavBar className="justify-content-center">

<Nav variant="pills">
    <Nav.Item style={{ margin: ".5rem" }}>
        <Nav.Link href="/home" className={getClassName(0)}>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{ margin: ".5rem" }}>
        <Nav.Link href="/blog" className={getClassName(1)}>Blog</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{ margin: ".5rem" }}>
        <Nav.Link href="/about" className={getClassName(2)}>About Me</Nav.Link>
    </Nav.Item>
    
   

</Nav>

</NavBar>
        </>
    )
}

export default NavItems
