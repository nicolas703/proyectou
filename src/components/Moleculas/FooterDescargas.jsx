import React from 'react'
import { useTranslation } from 'react-i18next'
import cloud from '../../SVG/img/download.png'

export const FooterDescargas = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="contenedor-first-footer">
                <div className="contenedor">
                    <div className="descargas">
                        <div className="imagen">
                            <img src={cloud} alt={t("downloads")} />
                        </div>
                        <div className="titulo">
                            <h4>{t("downloads")}</h4>
                        </div>
                        <div className="descripcion">
                            {/* <p>({t("all_docs")})</p> */}
                        </div>
                    </div>
                    <div className="lista">
                        <ul>
                            <li><i className="fas fa-chevron-right color-orange-one"></i> <a href="/Nota_Tecnica_Indice_Innovacion_Publica.pdf" target="_blank" className="color-orange-one"> <span className="underline">{t("technical_note_of_results")}</span> <span>(.pdf)</span> </a></li>
                            <li><i className="fas fa-chevron-right color-orange-one"></i> <a href="/Base_de_datos_IIP.zip" target="_blank" className="color-orange-one"> <span className="underline">{t("database")}</span> <span>(.csv)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FooterDescargas
