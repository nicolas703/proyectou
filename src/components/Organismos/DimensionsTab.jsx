import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

//Componentes
import TabbedCard from '../Moleculas/TabbedCard';

//Imagenes
import Grafico2 from "../../SVG/img/Grafico2.svg";
import dimensiones1R from "../../SVG/img/dimensiones1R.svg";
import dimensiones2R from "../../SVG/img/dimensiones2R.svg";
import dimensiones3R from "../../SVG/img/dimensiones3R.svg";
import CarouselDetailsSubDimensiones from './CarouselDetailsSubDimensiones'

export const DimensionsTab = () => {

    const [view, setView] = useState(0)
    const { t } = useTranslation();

    const back = () => {
        setView(0)
    }

    return (
        <>
            {
                view !== 0 ? (
                    <CarouselDetailsSubDimensiones dimensions={view} goBack={back} />
                ) : (
                    <>
                        <div className="acc-width">
                            <Col md={12} className="compensarMargen">
                                <div className="p-4 comp-pad-general">
                                    <p className="text-descripcion">{t("tittleDimensions")}</p>
                                </div>
                            </Col>
                        </div>
                        <div className="acc-width">
                            <Col md={12} className="compensarMargen" >
                                <div className="graphic-acc-3">
                                    <img width="80%" src={Grafico2} alt="grafico2" />
                                </div>
                            </Col>
                        </div>
                        <Row className=" box-dimensions-text acc-width">
                            <TabbedCard
                                imagen={dimensiones2R}
                                titulo={t("tittleInstitutionals")}
                                descripcion={t("dimensionsInstitutionalsText")}
                                textlink={t("dimensionsdetailsTittle")}
                                onclick={() => setView(1)}
                            />

                            <TabbedCard
                                imagen={dimensiones1R}
                                titulo={t("tittleProcess")}
                                descripcion={t("dimensionsProcessText")}
                                textlink={t("dimensionsdetailsTittle")}
                                onclick={() => setView(2)}
                            />

                            <TabbedCard
                                imagen={dimensiones3R}
                                titulo={t("tittleCollaboration")}
                                descripcion={t("dimensionsCollaborationText")}
                                textlink={t("dimensionsdetailsTittle")}
                                onclick={() => setView(3)}
                            />
                        </Row>
                    </>
                )
            }

        </>
    )
}