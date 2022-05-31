import { Card, Row, Col } from 'react-bootstrap'

const TabbedCard = ({ imagen, titulo, descripcion, textlink, onclick, clase }) => (
    <Col md={4} className={`interpretation-card dimensions-cards ${clase}`}>
        <Row className="centerGraphicDimesions">
            <div className="tabResponsive">
                <img width="80%" src={ imagen } alt="gráfico" />
            </div>
        </Row>
        <Row className="row-a-dimensions-top">
            <Col>
                <Card.Title className="title-resultado">{ titulo }</Card.Title>
                <Card.Text className="descripcion-resultado">
                    { descripcion }
                </Card.Text>
            </Col>
        </Row>
        <Row className="row-a-dimensions-bottom">
            <Col className="col-a-dimensions">
                <div className="text-center">
                    <button onClick={ onclick } className="color-orange-one">{ textlink }</button>
                </div>
            </Col>
        </Row>
    </Col>
)

export default TabbedCard;