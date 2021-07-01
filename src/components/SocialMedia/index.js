import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StockPhoto1 from "../../assets/stockPhoto1.jpeg";
import StockPhoto2 from "../../assets/stockPhoto2.jpeg";
import StockPhoto3 from "../../assets/stockPhoto3.jpeg";

function SocialMedia(){

    return (
        <>
            <Container>
                <h1 className="glassEffect">Social Media Feed</h1>

                <Row>
                    <Col>
                    
                        <Card style={{width: '18rem'}} className="glassEffect">
                            <Card.Img src={StockPhoto1}></Card.Img>
                        </Card>

                    </Col>

                    <Col>
                    
                        <Card style={{width: '18rem'}} className="glassEffect">
                            <Card.Img src={StockPhoto2}></Card.Img>
                        </Card>
                    
                    </Col>

                    <Col>
                    
                        <Card style={{width: '18rem'}} className="glassEffect">
                            <Card.Img src={StockPhoto3}></Card.Img>
                        </Card>
                    
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default SocialMedia

