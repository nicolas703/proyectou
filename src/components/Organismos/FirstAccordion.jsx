import React, { useState } from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'


import LinkMasInformacion from "../Atomos/LinkMasInformacion"

//Imagenes
import Fijo1 from "../../SVG/img/Fijo1.svg";
import graficoAcordeonR from "../../SVG/img/graficoAcordeonR.svg";

export const FirstAccordion = () => {
    const [drop, setDrop] = useState(true)
    const { t } = useTranslation();
    return (
        <>
            <Accordion.Toggle className="borde-bottom" as={Card.Header} eventKey="2" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="accordionView">
                    {
                        drop ? (
                            <>
                                <Col md={10} sm={9} xs={9}>
                                    <h1 className="title-acordion">
                                        <b>{t("amount_of_utilities")}</b>
                                        <span className="sub-titulo">{t("according_to_total_score_range_of_the_index")} </span>
                                    </h1>
                                </Col>
                                <Col md={2} sm={3} xs={3} className="tittleText right size-svg">
                                    <FontAwesomeIcon icon={["fas", "chevron-down"]} size="4x" color="#dc712d" />
                                </Col>
                            </>
                        ) :
                            (
                                <>
                                    <Col md={10} sm={9} xs={9}>
                                        <h1 className="title-acordion">
                                            <b>{t("amount_of_utilities")}</b>
                                            <span className="sub-titulo">{t("according_to_total_score_range_of_the_index100pt")}</span>
                                        </h1>
                                    </Col>
                                    <Col md={2} sm={3} xs={3} className="tittleText right" >
                                        <FontAwesomeIcon icon={["fas", "chevron-up"]} size="4x" color="#dc712d" />
                                    </Col>
                                </>
                            )
                    }
                </Row>
                <Row className="accordionView" >
                    <Col md={12} >
                        <p className="descripcion-carrusel ">
                            {t("reference_year_acc_1")}
                        </p>
                    </Col>
                </Row>
            </Accordion.Toggle>
            {/* //TODO: mejorar estructura */}
            <Accordion.Collapse className="accordionViewbg-light" eventKey="2" >
                <Card.Body>
                    <div className="graficoAcc1">
                        <img width="80%" src={Fijo1} alt="gráfico" />
                    </div>
                    <div className="graficoAcc1R">
                        <img width="80%" src={graficoAcordeonR} alt="gráfico" />
                    </div>
                    <LinkMasInformacion link="http://indice.lab.gob.cl/#/site/categories" texto={t("more_info_acc_1")} />
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}
