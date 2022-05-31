import React, { useState } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Componentes
import ArrowCard from './ArrowCard';

const AnalisisAcordion = ({ titulo, descripcion, analisis }) => {
    
    const [drop, setDrop] = useState(true)

    const changeArrow = () => {
        drop ? setDrop(false) : setDrop(true)
    }

    return (
        <Accordion className="display-element" defaultActiveKey="1">
            <Card>
                <Card.Header className="card-arrow">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="block-analisis" onClick={changeArrow.bind(this)}>
                        {
                            drop 
                            ? <ArrowCard titulo={ analisis } icono={ <FontAwesomeIcon icon={["fas", "chevron-down"]} size="4x" color="#dc712d" /> } /> 
                            : <ArrowCard titulo={ analisis } icono={ <FontAwesomeIcon icon={["fas", "chevron-up"]} size="4x" color="#dc712d" /> } /> 
                        }                       
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Header className="card-description-analysis">
                        <div className="title">
                            <h4>{titulo}</h4>
                        </div>
                        <div className="descripcion">
                            <p>{descripcion}</p>
                        </div>
                    </Card.Header>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default AnalisisAcordion;