function CardProfissional ({nome, cargo, empresa, cidade, foto, habilidades}) {
    return (
        <div className="card-profissional">
            <img className="card-foto" src="{foto}" alt= {`Foto de ${nome}`} />

            <h2>{nome}</h2>
            <p className="card-cargo" >{cargo}</p>
            <p className="card-info" >{empresa}</p>
            <p className="card-info" >{cidade}</p>
            <div className="card-habilidades" >
                {habilidades.map((habilidade) => (
                    <span key={habilidade}>{habilidade}</span>
                ) )}
            </div>
        </div>
    )
}

export default CardProfissional