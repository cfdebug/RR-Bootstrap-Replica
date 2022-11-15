import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{background: "darkgreen", display:"flex", flexDirection: 'row'}}>
                    <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder" }} >
                        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home"><img src="https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/logo-dark@3x-b2219c137c293415b560dbab7e9f7ba3037751b2cf65bfe097d1517c4105e706.png" alt="Instacart"/> </Navbar.Brand>
                        <Nav.Link style={{color: "#DEEED6", position: 'absolute', right: "135px"}} href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{fontSize: "18px", borderRadius: '15px', background: '#DEEED6', position: 'absolute', right: "5px"}}>Sign Up</Button>{' '}
                    </Nav>
            </Navbar>
        </div>
    )
}