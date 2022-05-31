
import { Container } from "react-bootstrap";

//Componentes
import Header from "../Organismos/Header";
import Body from "../Organismos/Body";
import Footer from "../Organismos/Footer";

const Layout = () => {
    return (
        <Container className="body-container" fluid>
            <Header />
            <Body />
            <Footer />
        </Container>
    )
};

export default Layout;