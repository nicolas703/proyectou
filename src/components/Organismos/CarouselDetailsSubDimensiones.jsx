import React, { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'


//Componenetes
import SubDimensionesCard from '../Moleculas/SubDimensionesCard';
import CarouselResourcesInterpretacionGrafico from "./CarouselResourcesInterpretacionGrafico"
import CarouselPracticeInterpretacionGrafico from "./CarouselPracticeInterpretacionGrafico"
import CarouselCollaborationInterpretacionGrafico from "./CarouselCollaborationInterpretacionGrafico"


//Imagenes
import SubRecursos1 from "../../SVG/img/Sub-Recursos-01.svg";
import Grafico3 from "../../SVG/img/Grafico3.svg";
import talentoHumanoR from "../../SVG/img/talentoHumanoR.svg";
import marcoInstitucionalR from "../../SVG/img/marcoInstitucionalR.svg";
import recursosDigitalesR from "../../SVG/img/recursosDigitalesR.svg";
import estrategiaGobernanzaR from "../../SVG/img/estrategiaGobernanzaR.svg";
import actividadesPracticasR from "../../SVG/img/actividadesPracticasR.svg";
import procedimientosR from "../../SVG/img/procedimientosR.svg";
import procesosR from "../../SVG/img/procesosR.svg";
import participacionUsuariosR from "../../SVG/img/participacionUsuariosR.svg";
import coordinacionInterinstitucionalR from "../../SVG/img/coordinacionInterinstitucionalR.svg";
import gestionDelEntorno from "../../SVG/img/gestionDelEntorno.svg";
import SubPracticas1 from "../../SVG/img/Sub-Practicas-01.svg";






const CarouselDetailsSubDimensiones = (props) => {

    const { t } = useTranslation();

    const dimensions = props.dimensions

    const carouselResourcesCodes = [11, 12, 13, 14]
    const carouselPracticeCodes = [21, 22, 23,]
    const carouselCollaborationCodes = [31, 32, 33]

    const [detailView, setDetailView] = useState(dimensions)

    const goBack = (dimension) => {
        setDetailView(dimension)
    }

    return (
        <>
            {carouselResourcesCodes.includes(detailView) ? (
                <CarouselResourcesInterpretacionGrafico subDimensions={detailView} goBack={goBack} />
            ) : carouselPracticeCodes.includes(detailView) ? (
                <CarouselPracticeInterpretacionGrafico subDimensions={detailView} goBack={goBack} />
            ) : carouselCollaborationCodes.includes(detailView) ? (
                <CarouselCollaborationInterpretacionGrafico subDimensions={detailView} goBack={goBack} />
            ) : (
                <Carousel wrap={true} interval={null} defaultActiveIndex={detailView === 1 ? 0 : detailView === 2 ? 1 : detailView === 3 ? 2 : ""} >
                    {/* Recursos Institucionales */}
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
                            <Col md={10} className>
                                <div className="text-carrusel">
                                    <h3 className="titulo-carrusel">{t("tittleInstitutionals")}</h3>
                                    <p className="descripcion-carrusel">{t("dimensionsInstitutionalsText")}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="graphic-acc-3">
                                    <img width="80%" src={SubRecursos1} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="interpretation-card">
                            <SubDimensionesCard
                                imagen={talentoHumanoR}
                                titulo={t("title_Human_Talent")}
                                descripcion={t("description_Human_Talent")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Human_Talent")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(11) }}
                            />

                            <SubDimensionesCard
                                imagen={marcoInstitucionalR}
                                titulo={t("title_Institutional_Frame")}
                                descripcion={t("description_Institutional_Frame")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Institutional_Frame")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(12) }}
                            />

                            <SubDimensionesCard
                                imagen={recursosDigitalesR}
                                titulo={t("title_Digital_Resources")}
                                descripcion={t("description_Digital_Resources")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Digital_Resources")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(13) }}
                            />

                            <SubDimensionesCard
                                imagen={estrategiaGobernanzaR}
                                titulo={t("title_Strategy_and_Governability")}
                                descripcion={t("description_Strategy_and_Governability")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Strategy_and_Governability")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(14) }}
                            />
                        </Row>
                        <Row>
                            <Col md={12} className="text-center" >
                                {/* <Button onClick={() => props.goBack()} className="goBack-button" >
                                    <b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}
                                    </Button> */}
                                <a onClick={() => props.goBack()} className="goBack-button color-orange-one"><b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    {/* Procesos Y Practicas */}
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
                            <Col md={10} className>
                                <div className="text-carrusel">
                                    <h3 className="titulo-carrusel">{t("tittleProcess")}</h3>
                                    <p className="descripcion-carrusel">{t("dimensionsProcessText")}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="graphic-acc-3">
                                    <img width="80%" src={SubPracticas1} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="interpretation-card">
                            <SubDimensionesCard
                                imagen={actividadesPracticasR}
                                titulo={t("title_Activities_or_practices")}
                                descripcion={t("description_Activities_or_practices")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Activities_or_practices")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(21) }}
                            />

                            <SubDimensionesCard
                                imagen={procedimientosR}
                                titulo={t("title_Proceedings")}
                                descripcion={t("description_Proceedings")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Proceedings")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(22) }}
                            />

                            <SubDimensionesCard
                                imagen={procesosR}
                                titulo={t("title_Processes")}
                                descripcion={t("description_Processes")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_Processes")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(23) }}
                            />
                        </Row>
                        <Row>
                            <Col md={12} className="text-center" >
                                <a onClick={() => props.goBack()} className="goBack-button color-orange-one"><b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}</a>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
                            <Col md={10}>
                                <div className="text-carrusel">
                                    <h3 className="titulo-carrusel">{t("tittleCollaboration")}</h3>
                                    <p className="descripcion-carrusel">{t("dimensionsCollaborationText")} </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="graphic-acc-3">
                                    <img width="80%" src={Grafico3} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="interpretation-card">

                            <SubDimensionesCard
                                imagen={participacionUsuariosR}
                                titulo={t("collaborationUserTittle")}
                                descripcion={t("collaborationUserText")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_USER_PARTICIPATION")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(31) }}
                            />

                            <SubDimensionesCard
                                imagen={coordinacionInterinstitucionalR}
                                titulo={t("collaborationCoordinationTittle")}
                                descripcion={t("collaborationCoordinationText")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_INTERINSTITUTIONAL_COORDINATION")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(32) }}
                            />

                            <SubDimensionesCard
                                imagen={gestionDelEntorno}
                                titulo={t("collaborationManagmentTittle")}
                                descripcion={t("collaborationManagmentText")}
                                textolink={t("dimensionsAnalysisText")}
                                titulointerpretaciongrafico={t("interpretation_of_the_graph")}
                                descripcioninterpretaciongrafico={t("graphic_interpretation_ENVIRONMENT_MANAGEMENT")}
                                analisistexto={t("dimensionsAnalysisText")}
                                onclick={() => { setDetailView(33) }}
                            />
                        </Row>
                        <Row>
                            <Col md={12} className="text-center" >
                                <a onClick={() => props.goBack()} className="goBack-button color-orange-one"><b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>


            )
            }
        </>
    )
}
export default CarouselDetailsSubDimensiones;