import React from 'react';
import { Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const TextIndex = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Card >
                <div className="tittleTextPpal">
                    <Col md={6} sm={12} xs={12}>
                        <h1 className="tittleColor">
                            <b>{t("text_Resultados")} {t("text_Index")}</b>
                        </h1>
                    </Col>
                </div>
            </Card>
            <Card >
                <div className="tittleTextPpal mt-4 mb-5 ">
                    <Col md={8} sm={12} xs={12}>
                        <p className="textIndex">
                            {t("text_index_text")}
                        </p>
                    </Col>
                </div>
            </Card>
        </div>
    )
}
export default TextIndex;