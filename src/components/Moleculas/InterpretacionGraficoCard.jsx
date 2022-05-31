

import ImagenInterpretacionGrafico from '../Atomos/ImagenInterpretacionGrafico'

const InterpretacionGraficoCard = ({imagen, titulo, descripcion, textlink, volverAtras}) => (
    <div className="card-interpretacion-grafico">
        <ImagenInterpretacionGrafico imagen={imagen} />
        <div className="interpretation-grafico-body">
            <div className="title">
                <h4>{ titulo }</h4>
            </div>
            <div className="description">
                <div className="texto">
                    <p>{ descripcion }</p>
                </div>
                <div className="enlace">
                    <button className="color-orange-one" onClick={ volverAtras } ><b><i className="fas fa-chevron-left"></i></b> { textlink }</button>
                </div>
            </div>
        </div>
    </div>
)

export default InterpretacionGraficoCard;