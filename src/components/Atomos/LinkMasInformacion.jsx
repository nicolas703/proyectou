

const LinkMasInformacion = ({link, texto}) => (
    <div  className="link-informacion">
        <a href={link} className="color-orange-one"><i className="fas fa-plus mr-1"></i>{ texto }</a>
    </div>
)

export default LinkMasInformacion;