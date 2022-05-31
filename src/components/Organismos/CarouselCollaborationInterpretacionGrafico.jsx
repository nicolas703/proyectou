import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'


//Componenets
import InterpretacionGraficoCard from '../Moleculas/InterpretacionGraficoCard';


//Imagenes
import participacionUsuarios from "../../SVG/img/Sub-Colab-02.svg";
import coordinacionInterinstitucional from "../../SVG/img/Grafico4.svg";
import gestionEntorno from "../../SVG/img/Sub-Colab-04.svg";

const CarouselCollaborationInterpretacionGrafico = (props) => {
    const { t } = useTranslation();
    const subDimensions = props.subDimensions

    return (
        <>
            <Carousel interval={null} defaultActiveIndex={subDimensions === 31 ? 0 : subDimensions === 32 ? 1 : subDimensions === 33 ? 2 : ""}>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_USER_PARTICIPATION_SUBDIMENSION")}</h3>
                                <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={participacionUsuarios}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_USER_PARTICIPATION")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(3) }}
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_COORDINATION_BETWEEN_INSTITUTIONS_SUBDIMENSION")}</h3>
                                <p className="descripcion-carrusel">{t("collaborationCoordinationText")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={coordinacionInterinstitucional}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_INTERINSTITUTIONAL_COORDINATION")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(3) }}
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="d-flex color-grey justify-content-center">
                        <Col md={10} className>
                            <div className="text-carrusel">
                                <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ENVIRONMENT_MANAGEMENT")}</h3>
                                <p className="descripcion-carrusel">{t("collaborationManagmentText")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <InterpretacionGraficoCard
                            imagen={gestionEntorno}
                            titulo={t("interpretation_of_the_graph")}
                            descripcion={t("graphic_interpretation_ENVIRONMENT_MANAGEMENT")}
                            textlink={t("return_to_main_graph")}
                            volverAtras={() => { props.goBack(3) }}
                        />
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default CarouselCollaborationInterpretacionGrafico;