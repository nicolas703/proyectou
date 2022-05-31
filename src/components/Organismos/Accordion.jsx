import React from 'react';
import { Accordion } from 'react-bootstrap';

//Componentes
import { FirstAccordion } from './FirstAccordion';
import { SecondAccordion } from './SecondAccordion';
import { ThirdAccordion } from './ThirdAccordion';

const AccordionComponent = () => {
    return (
        <>
            <Accordion defaultActiveKey="0" >
                <FirstAccordion />
            </Accordion>
            <Accordion defaultActiveKey="0" >
                <SecondAccordion />
            </Accordion>
            <Accordion defaultActiveKey="0"  >
                <ThirdAccordion />
            </Accordion>
        </>
    );

}
export default AccordionComponent;