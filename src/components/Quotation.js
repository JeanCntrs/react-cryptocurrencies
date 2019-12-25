import React from 'react';

const Quotation = ({ quotation }) => {

    if (Object.keys(quotation).length === 0) return null;

    return (
        <div className="resultado">
            <h2 className="padt-13">Cotización</h2>
            <span>El precio es: {quotation.PRICE}</span><br/>
            <span>Precio más alto del día: {quotation.HIGHDAY}</span><br/>
            <span>Precio más bajo del día: {quotation.LOWDAY}</span><br/>
            <span>Variación últimas 24 horas: {quotation.CHANGEPCT24HOUR}%</span><br/>
            <span>Última actualización: {quotation.LASTUPDATE}</span>
        </div>
    );
}

export default Quotation;