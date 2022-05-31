

const ArrowCard = ({ titulo, icono }) => (
    <>
        <div className="texto-analisis-acordion">
            <span>
                {titulo}
            </span>
        </div>
        <div className="logo-acordion-analisis">
            {icono}
        </div>
    </>
)
export default ArrowCard;