import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

//Componentes
import InterpretacionGraficoCard from "../Moleculas/InterpretacionGraficoCard";

//Imagenes
import talentoHumano from '../../SVG/img/Sub-Recursos-02.svg'
import marcoInstitucional from '../../SVG/img/Sub-Recursos-03.svg'
import recursosDigitales from '../../SVG/img/Sub-Recursos-04.svg'
import estrategiaGobernanza from '../../SVG/img/Sub-Recursos-05.svg'


const CarouselResourcesInterpretacionGrafico = (props) => {

    const subDimensions = props.subDimensions
    const { t } = useTranslation();

    return (
        <>
            <Carousel interval={null} defaultActiveIndex={subDimensions === 11 ? 0 : subDimensions === 12 ? 1 : subDimensions === 13 ? 2 : 3}>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_HUMAN_TALENT")}</h3>
                                <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={talentoHumano}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_Human_Talent")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(1) }}
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_INSTITUTIONAL_FRAME_SUBDIMENSION")}</h3>
                                <p className="descripcion-carrusel">{t("description_Institutional_Frame")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={marcoInstitucional}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_Institutional_Frame")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(1) }}
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_DIGITAL_RESOURCES_SUBDIMENSION")}</h3>
                                <p className="descripcion-carrusel">{t("description_Digital_Resources")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={recursosDigitales}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_Digital_Resources")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(1) }}
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION")}</h3>
                                <p className="descripcion-carrusel">{t("description_Strategy_and_Governability")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={estrategiaGobernanza}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_Strategy_and_Governability")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(1) }}
                        />
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselResourcesInterpretacionGrafico;