import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'


//Componenetes
import InterpretacionGraficoCard from '../Moleculas/InterpretacionGraficoCard';

//Imagenes
import actividadesPracticas from '../../SVG/img/Sub-Practicas-02.svg'
import procedimientos from '../../SVG/img/Sub-Practicas-03.svg'
import procesos from '../../SVG/img/Sub-Practicas-04.svg'


const CarouselPracticeInterpretacionGrafico = (props) => {
    
    const { t } = useTranslation();
    const subDimensions = props.subDimensions

    return (
        <>
                <Carousel interval={null} defaultActiveIndex={subDimensions === 21 ? 0 : subDimensions === 22 ? 1 : subDimensions === 23 ? 2 : ""}>
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
                            <Col md={10} className>
                                <div className="text-carrusel">
                                    <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ACTIVITIES_OR_PRACTICES")}</h3>
                                    <p className="descripcion-carrusel">{t("description_Activities_or_practices")}</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center">
                            <InterpretacionGraficoCard
                                imagen={actividadesPracticas}
                                titulo={t("interpretation_of_the_graph")}
                                descripcion={t("graphic_interpretation_Activities_or_practices")}
                                textlink={t("return_to_main_graph")}
                                volverAtras={() => { props.goBack(2) }}
                            />
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
                            <Col md={10} className>
                                <div className="text-carrusel">
                                    <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_PROCEEDINGS")}</h3>
                                    <p className="descripcion-carrusel">{t("description_Proceedings")}</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center">
                            <InterpretacionGraficoCard
                                imagen={procedimientos}
                                titulo={t("interpretation_of_the_graph")}
                                descripcion={t("graphic_interpretation_Proceedings")}
                                textlink={t("return_to_main_graph")}
                                volverAtras={() => { props.goBack(2) }}
                            />
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
                            <Col md={10} className>
                                <div className="text-carrusel">
                                    <h3 className="titulo-carrusel">{t("title_PROCESS_SUBDIMENSION")}</h3>
                                    <p className="descripcion-carrusel">{t("description_Processes")}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <InterpretacionGraficoCard
                                imagen={procesos}
                                titulo={t("interpretation_of_the_graph")}
                                descripcion={t("graphic_interpretation_Processes")}
                                textlink={t("return_to_main_graph")}
                                volverAtras={() => { props.goBack(2) }}
                            />
                        </Row>
                    </Carousel.Item>
                </Carousel>

            </>
    )
}

export default CarouselPracticeInterpretacionGrafico;