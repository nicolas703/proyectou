import React, { useState } from 'react';
import { Accordion, Card, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next';

//Componentes
import { GeneralTab } from './GeneralTab';
import { DimensionsTab } from './DimensionsTab';
import LinkMasInformacion from '../Atomos/LinkMasInformacion';

export const ThirdAccordion = () => {
    const [drop, setDrop] = useState(false)
    const [tabActive, setTabActive] = useState("general")
    const { t } = useTranslation();

    return (
        <>
            <Accordion.Toggle className="bg-white header-card" as={Card.Header} eventKey="0" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="accordionView borde-top">
                    {drop ? (
                        <>
                            <Col md={10} sm={9} xs={9}>
                                <h1 className="title-acordion">
                                    <b>{t("results_acc_3")}</b>
                                    <span className="sub-titulo">{t("by_categories_of_institutions")}</span>
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
                                        <b>{t("results_acc_3")}</b>
                                        <span className="sub-titulo">{t("by_categories_of_institutions")}</span>
                                    </h1>
                                    <div className="box-h4">
                                        <h6 className="descripcion-carrusel pt-4 pb-4">{t("acc_3_tittle_1")}</h6>
                                    </div>
                                </Col>
                                <Col md={2} sm={3} xs={3} className="tittleText right" >
                                    <FontAwesomeIcon icon={["fas", "chevron-up"]} size="4x" color="#dc712d" />
                                </Col>
                            </>
                        )
                    }
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse className="" eventKey="0">
                <Tab.Container defaultActiveKey="general">
                    <Card className="acc-width" >
                        <Nav variant="tabs" className="tabGeneralDimensions">
                            <Nav.Item className="tabHead" onClick={() => { setTabActive("general") }}>
                                <Nav.Link eventKey="general" className={tabActive === "general" ? "bg-orange-one tabHeadGeneralsActive" : "tabHeadGeneral"}>{t("tab1")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabHead" onClick={() => { setTabActive("dimensions") }}>
                                <Nav.Link eventKey="dimensions" className={tabActive === "dimensions" ? "bg-orange-one tabHeadDimensionsActive" : "tabHeadDimensions"}>{t('tab2')}</Nav.Link>
                            </Nav.Item>

                        </Nav>
                        <Card.Body className="body-padding">
                            <Tab.Content className="tab-container">
                                <Tab.Pane eventKey="general">
                                    <GeneralTab />
                                    <LinkMasInformacion link="http://indice.lab.gob.cl/#/site/categories" texto={t("more_category")} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="dimensions">
                                    <DimensionsTab />
                                    <LinkMasInformacion link="http://indice.lab.gob.cl/#/site/methodology" texto={t("dimensionsInformationPlus")} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>
                    </Card>
                </Tab.Container>
            </Accordion.Collapse>
        </>
    )
}
